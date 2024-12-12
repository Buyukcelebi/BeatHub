import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, FlatList, ScrollView, TextInput } from 'react-native';

import { useStyles } from './LyricsStyles';

import PrimaryButton from '@/components/Buttons/PrimaryButton';

function Lyrics() {
  const styles = useStyles();
  const [text, setText] = useState('');
  const [selectedMoods, setSelectedMoods] = useState<string[]>([]);
  const [selectedGenres, setSelectedGenres] = useState<string[]>([]);

  const moods = [
    {
      id: '1',
      name: 'aa',
      imageUrl: require('@/assets/images/Jazz.png'),
      genre: 'Jazz',
    },
    {
      id: '2',
      name: 'Motivational',
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
      name: 'Relaxed',
      imageUrl: require('@/assets/images/Jazz.png'),
      genre: 'Jazz',
    },
  ];

  const handleMoodSelection = (moodId: string) => {
    if (selectedMoods.includes(moodId)) {
      setSelectedMoods(selectedMoods.filter((id) => id !== moodId));
    } else {
      setSelectedMoods([...selectedMoods, moodId]);
    }
  };

  const handleGenreSelection = (genreId: string) => {
    if (selectedGenres.includes(genreId)) {
      setSelectedGenres(selectedGenres.filter((id) => id !== genreId));
    } else {
      setSelectedGenres([...selectedGenres, genreId]);
    }
  };

  const selectedText = [
    ...selectedMoods.map((id) => moods.find((mood) => mood.id === id)?.name),
    ...selectedGenres.map((id) => moods.find((mood) => mood.id === id)?.genre),
  ]
    .filter(Boolean)
    .join(', ');

  return (
    <ScrollView style={styles.container} showsHorizontalScrollIndicator={false}>
      <View style={styles.top}>
        <View style={styles.inputContainer}>
          <View style={styles.inputWrapper}>
            {text === '' && <Text style={styles.customPlaceholder}>Enter Lyrics</Text>}
            <TextInput
              style={styles.inputLyric}
              onChangeText={(value) => setText(value)}
              value={text}
              multiline
              textAlignVertical="top"
            />
          </View>
        </View>
      </View>

      <View style={styles.bottom}>
        <Text style={styles.title}>Enter Style of Music</Text>
        <TextInput
          style={styles.musicInput}
          value={selectedText}
          multiline
          textAlignVertical="top"
        />
        <Text style={styles.title}>Select Mood (optional)</Text>
        <FlatList
          horizontal
          data={moods}
          keyExtractor={(item) => item.id}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={[styles.borderButtons, selectedMoods.includes(item.id) && styles.activeButton]}
              onPress={() => handleMoodSelection(item.id)}>
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
            <TouchableOpacity onPress={() => handleGenreSelection(item.id)}>
              <Image
                source={item.imageUrl}
                style={[
                  styles.imageGenre,
                  {
                    borderColor: selectedGenres.includes(item.id) ? '#2cbece' : 'transparent',
                    borderWidth: 2,
                  },
                ]}
              />
              <View style={styles.genre}>
                <Text
                  style={[
                    styles.genreText,
                    {
                      color: selectedGenres.includes(item.id) ? '#2cbece' : 'white',
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

export default Lyrics;
