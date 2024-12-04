import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, Image } from 'react-native';

import { useStyles } from './LibraryStyles';

import PrimaryButton from '@/components/Buttons/PrimaryButton';

function Library() {
  const styles = useStyles();
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <View style={styles.topContainer}>
          <Image source={require('@/assets/images/musictable.png')} style={styles.topImage} />
          <Text style={styles.title}>There's nothing here yet</Text>
          <Text style={styles.discretion}>Create your first song</Text>
        </View>
      </View>
      <View style={styles.bottom}>
        <View style={styles.bottomContainer}>
          <PrimaryButton
            buttonText="Create New Song"
            onPress={() => {
              navigation.navigate('Create');
            }}
          />
        </View>
      </View>
    </View>
  );
}

export default Library;
