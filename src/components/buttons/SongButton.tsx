import React from 'react';
import {StyleSheet, TouchableOpacity, Text, View, Image} from 'react-native';

type SongButtonProps = {
  onPressPause: () => void;
  onPressNext: () => void;
  onPressBack: () => void;
};

const SongButton = ({
  onPressPause,
  onPressBack,
  onPressNext,
}: SongButtonProps): React.JSX.Element => {
  return (
    <View style={styles.buttonContainer}>
      <TouchableOpacity style={styles.buttonBack} onPress={onPressBack}>
        <Image source={require('../../images/back.png')} style={styles.image} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonPause} onPress={onPressPause}>
        <Image
          source={require('../../images/pause.png')}
          style={styles.image}
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonNext} onPress={onPressNext}>
        <Image source={require('../../images/next.png')} style={styles.image} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row', // Butonları yan yana diz
    justifyContent: 'center', // Butonları ortala
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonPause: {
    paddingVertical: '6.5%',
    borderWidth: 1,
    borderRadius: 70,
    borderColor: '#000000',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    width: '20%',
    marginHorizontal: 7, // Butonlar arasındaki boşluk
  },
  buttonBack: {
    paddingVertical: '4%',
    borderWidth: 1,
    borderRadius: 70,
    borderColor: '#000000',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    width: '15%',
    marginHorizontal: 7, // Butonlar arasındaki boşluk
  },
  buttonNext: {
    paddingVertical: '4%',
    borderWidth: 1,
    borderRadius: 60,
    borderColor: '#000000',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    width: '15%',
    marginHorizontal: 7, // Butonlar arasındaki boşluk
  },
  buttonText: {
    color: 'black', // Buton metninin rengi
    fontSize: 19,
  },
  image: {
    width: 20, // Resmin genişliği
    height: 20, // Resmin yüksekliği
  },
});

export default SongButton;
