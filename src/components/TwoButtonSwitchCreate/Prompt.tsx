import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
  ScrollView,
  TextInput,
  Alert,
  Modal,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Octicons as Icon } from '@expo/vector-icons';

import { useStyles } from './PromptStyles';

import { generateMusic } from '@/providers/internalApi';
import AsyncStorage from '@react-native-async-storage/async-storage';
import STORAGE_KEYS from '../../constants/StorageKeys';
import { t } from 'i18next';
import Button from '../Buttons/Button';

function Prompt() {
  const styles = useStyles();
  const navigation = useNavigation();
  const [text, setText] = useState('');
  const [selectedMood, setSelectedMood] = useState('');
  const [selectedGenre, setSelectedGenre] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccessModalVisible, setIsSuccessModalVisible] = useState(false);
  const [songText, setSongText] = useState('');

  const moods = [
    {
      id: '1',
      name: 'aa',
      imageUrl: require('@/assets/images/Jazz.png'),
      genre: 'Rock',
    },
    {
      id: '2',
      name: 'motivational',
      imageUrl: require('@/assets/images/Jazz.png'),
      genre: 'Jazz',
    },
    {
      id: '3',
      name: 'aa',
      imageUrl: require('@/assets/images/Jazz.png'),
      genre: 'Jazzaaaa',
    },
    {
      id: '4',
      name: 'aa',
      imageUrl: require('@/assets/images/Jazz.png'),
      genre: 'Jazz',
    },
  ];

  const handleGenerateMusic = async () => {
    setIsLoading(true);

    let prompt = `${selectedMood}: ${text}, Genre: ${selectedGenre}, Vibe: ${selectedMood}, Song Name: ${songText}`;
    let duration = 200;
    let genre = selectedGenre?.toLowerCase() || 'rock';

    console.log(genre, prompt, duration);

    const response = await generateMusic(prompt, duration, genre);
    try {
      console.log(response);

      if (response.id && response.status !== 'failed') {
        try {
          const existingData = await AsyncStorage.getItem(STORAGE_KEYS.MUSICS);
          const generations = existingData ? JSON.parse(existingData) : [];

          const isDuplicate = generations.some((item) => item.id === response.id);

          if (!isDuplicate) {
            generations.unshift({
              ...response,
              songName: songText,
              createdAt: new Date().toISOString(),
            });

            await AsyncStorage.setItem(STORAGE_KEYS.MUSICS, JSON.stringify(generations));
          }
        } catch (storageError) {
          console.error('Storage error:', storageError);
        }

        setIsLoading(false);
        setIsSuccessModalVisible(true);
      } else {
        setIsLoading(false);
        Alert.alert('Error', 'Failed to start music generation. Please try again.');
        console.error('Error generating music:', response.message || 'Unknown error');
      }
    } catch (error) {
      setIsLoading(false);
      Alert.alert('Error', 'Something went wrong. Please try again.');
      console.error('Error:', error);
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <ScrollView style={styles.container} showsHorizontalScrollIndicator={false}>
        <View style={styles.top}>
          <View style={styles.inputContainer}>
            <View style={styles.inputWrapper}>
              {songText === '' && <Text style={styles.customPlaceholder}>Song Name</Text>}
              <TextInput
                style={styles.inputNamePrompt}
                onChangeText={(value) => setSongText(value)}
                value={songText}
                multiline
                textAlignVertical="top"
              />
            </View>
          </View>
          <View style={styles.inputContainer}>
            <View style={styles.inputWrapper}>
              {text === '' && <Text style={styles.customPlaceholder}>Prompt</Text>}
              <TextInput
                style={styles.inputPrompt}
                onChangeText={(value) => setText(value)}
                value={text}
                multiline
                textAlignVertical="top"
              />
            </View>
          </View>
        </View>

        <View style={styles.bottom}>
          <Text style={styles.title}>Select Mood (optional)</Text>
          <FlatList
            horizontal
            data={moods}
            keyExtractor={(item) => item.id}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={[styles.borderButtons, selectedMood === item.name && styles.activeButton]}
                onPress={() => setSelectedMood(item.name)}>
                <Text style={styles.description}>{item.name}</Text>
              </TouchableOpacity>
            )}
          />

          <Text style={styles.title}>Select Genre (optional)</Text>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={moods}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => setSelectedGenre(item.genre)}>
                <Image
                  source={item.imageUrl}
                  style={[
                    styles.imageGenre,
                    {
                      borderColor: selectedGenre === item.genre ? '#5A31F4' : 'transparent',
                      borderWidth: 2,
                    },
                  ]}
                />
                <View style={styles.genre}>
                  <Text
                    style={[
                      styles.genreText,
                      {
                        color: selectedGenre === item.genre ? '#5A31F4' : 'white',
                      },
                    ]}>
                    {item.genre}
                  </Text>
                </View>
              </TouchableOpacity>
            )}
          />
        </View>
        <Modal
          visible={isSuccessModalVisible}
          transparent={true}
          animationType="fade"
          onRequestClose={() => setIsSuccessModalVisible(false)}>
          <View style={styles.modalOverlay}>
            <View style={styles.modalContent}>
              <View style={styles.modalIconContainer}>
                <Icon name="check-circle" size={50} />
              </View>
              <Text style={styles.modalTitle}>{t('Success!')}</Text>
              <Text style={styles.modalText}>{t('Your music creation has started!')}</Text>
              <TouchableOpacity
                style={styles.goToLibraryButton}
                onPress={() => {
                  setIsSuccessModalVisible(false);
                  navigation.navigate('Library');
                }}>
                <Text style={styles.goToLibraryText}>{t('Go to My Library')}</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </ScrollView>
      <View style={styles.fixedButtonContainer}>
        <Button text={isLoading ? 'Creating...' : 'Create'} onPress={handleGenerateMusic} />
      </View>
    </View>
  );
}

export default Prompt;
