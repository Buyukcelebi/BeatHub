import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, FlatList, ScrollView, TextInput } from 'react-native';

import { useStyles } from './PromptStyles';

import PrimaryButton from '@/components/Buttons/PrimaryButton';

function Prompt() {
  const styles = useStyles();
  const [text, setText] = useState('');
  const [selectedMood, setSelectedMood] = useState('');
  const [selectedGenre, setSelectedGenre] = useState('');

  const moods = [
    {
      id: '1',
      name: 'aa',
      imageUrl: require('@/assets/images/Jazz.png'),
      genre: 'Jazz',
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
      genre: 'Jazz',
    },
    {
      id: '4',
      name: 'aa',
      imageUrl: require('@/assets/images/Jazz.png'),
      genre: 'Jazz',
    },
  ];

  return (
    <ScrollView style={styles.container} showsHorizontalScrollIndicator={false}>
      <View style={styles.top}>
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
              style={[
                styles.borderButtons,
                {
                  backgroundColor: selectedMood === item.id ? '#2cbece' : '#1f287d',
                },
              ]}
              onPress={() => setSelectedMood(item.id)}>
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
            <TouchableOpacity onPress={() => setSelectedGenre(item.id)}>
              <Image
                source={item.imageUrl}
                style={[
                  styles.imageGenre,
                  {
                    borderColor: selectedGenre === item.id ? '#2cbece' : 'transparent',
                    borderWidth: 2,
                  },
                ]}
              />
              <View style={styles.genre}>
                <Text
                  style={[
                    styles.genreText,
                    {
                      color: selectedGenre === item.id ? '#2cbece' : 'white',
                    },
                  ]}>
                  {item.genre}
                </Text>
              </View>
            </TouchableOpacity>
          )}
        />

        <PrimaryButton
          buttonText="Create"
          onPress={() => {
            // handle press event
          }}
        />
      </View>
    </ScrollView>
  );
}

export default Prompt;
