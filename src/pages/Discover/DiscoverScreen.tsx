import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  Image,
  ScrollView,
  ImageSourcePropType,
} from 'react-native';

import { useStyles } from './DiscoverStyles';

import ButtonGroup from '@/components/Buttons/ButtonGrups';
import PrimaryButton from '@/components/Buttons/PrimaryButton';
import ParallaxScrollView from '@/components/ParallaxScrollView';

type Song = {
  id: number;
  title: string;
  description: string;
  time: number;
  imageUrl: ImageSourcePropType;
  count: string;
};

const nowData: Song[] = [
  {
    id: 1,
    title: 'Song 1',
    description: 'Jazzz 1',
    count: '2803099',
    time: 300,
    imageUrl: require('@/assets/images/Jazz.png'),
  },
  {
    id: 2,
    title: 'Song 2',
    description: 'Jazz 2',
    count: '2803099',
    time: 200,
    imageUrl: require('@/assets/images/album.png'),
  },
  {
    id: 3,
    title: 'Song 3',
    description: 'Jazz 3',
    count: '2803099',
    time: 400,
    imageUrl: require('@/assets/images/album.png'),
  },
  {
    id: 4,
    title: 'Song 4',
    description: 'Jazz 4',
    count: '2803099',
    time: 30,
    imageUrl: require('@/assets/images/album.png'),
  },
  {
    id: 5,
    title: 'Song 5',
    description: 'Jazz 5',
    count: '2803099',
    time: 30,
    imageUrl: require('@/assets/images/album.png'),
  },
];

const weaklyData: Song[] = [
  {
    id: 1,
    title: 'Latest Song 1',
    description: 'Rock 1',
    count: '2803099',
    imageUrl: require('@/assets/images/album.png'),
    time: 300,
  },
  {
    id: 2,
    title: 'Latest Song 2',
    description: 'Rock 2',
    count: '2803099',
    imageUrl: require('@/assets/images/album.png'),
    time: 200,
  },
  {
    id: 3,
    title: 'Latest Song 3',
    description: 'Rock 3',
    count: '2803099',
    imageUrl: require('@/assets/images/album.png'),
    time: 300,
  },
  {
    id: 4,
    title: 'Latest Song 3',
    description: 'Rock 3',
    count: '2803099',
    imageUrl: require('@/assets/images/album.png'),
    time: 30,
  },
  {
    id: 5,
    title: 'Latest Song 3',
    description: 'Rock 3',
    count: '2803099',
    imageUrl: require('@/assets/images/album.png'),
    time: 30,
  },
  {
    id: 6,
    title: 'Latest Song 3',
    description: 'Rock 3',
    count: '2803099',
    imageUrl: require('@/assets/images/album.png'),
    time: 30,
  },
];

const monthlyData: Song[] = [
  {
    id: 1,
    title: 'Latest Song 1',
    description: 'Rock 1',
    count: '2803299',
    imageUrl: require('@/assets/images/album.png'),
    time: 300,
  },
  {
    id: 2,
    title: 'Latest Song 2',
    description: 'Rock 2',
    count: '2803099',
    imageUrl: require('@/assets/images/album.png'),
    time: 200,
  },
  {
    id: 3,
    title: 'Latest Song 3',
    description: 'Rock 3',
    count: '2803099',
    imageUrl: require('@/assets/images/album.png'),
    time: 300,
  },
  {
    id: 4,
    title: 'Latest Song 3',
    description: 'Rock 3',
    count: '2803099',
    imageUrl: require('@/assets/images/album.png'),
    time: 30,
  },
  {
    id: 5,
    title: 'Latest Song 3',
    description: 'Rock 3',
    count: '2803099',
    imageUrl: require('@/assets/images/album.png'),
    time: 30,
  },
  {
    id: 6,
    title: 'Latest Song 3',
    description: 'Rock 3',
    count: '2803099',
    imageUrl: require('@/assets/images/album.png'),
    time: 30,
  },
];

function Discover() {
  const styles = useStyles();
  const [selectedTab, setSelectedTab] = useState('now');
  const navigation = useNavigation();

  const handlePress = (category: string) => {
    navigation.navigate('CategoriesScreen', { category });
  };

  const handlePress1 = (song: any) => {
    console.log('gidenler:', song.title, song.description, song.imageUrl, song.time);
    navigation.navigate('SongScreen', {
      title: song.title,
      description: song.description,
      time: song.time,
      imageUrl: song.imageUrl,
    });
  };

  const renderItem = (item: Song) => (
    <TouchableOpacity
      key={item.id}
      onPress={() => {
        handlePress1(item);
      }}>
      <View style={styles.listItem}>
        <ImageBackground source={item.imageUrl} style={styles.listItemImage}>
          <Image source={require('@/assets/images/songPlay.png')} style={styles.icon} />
          <View style={styles.timeContainer}>
            <Text style={styles.time}>{item.time}</Text>
          </View>
        </ImageBackground>
        <View style={styles.textContainer}>
          <Text style={styles.listItemText}>{item.title}</Text>
          <Text style={styles.descriptionText}>{item.description}</Text>
        </View>
        <View style={styles.countTextContainer}>
          {selectedTab === 'now' && item.id <= 3 && (
            <Text style={styles.repeatText}>#{item.id}</Text>
          )}
          <View style={styles.playCountContainer}>
            <Image source={require('@/assets/images/songPlay.png')} style={styles.playIcon} />
            <Text style={styles.repeatText}>{item.count}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <View style={styles.top}>
          <TouchableOpacity style={styles.button}>
            <Image source={require('@/assets/images/plus.png')} style={styles.buttonImage} />
            <Text style={styles.title}>Create a new AI song</Text>
          </TouchableOpacity>
        </View>
      }>
      <View style={styles.scroll}>
        <View style={styles.flatListTitle}>
          <Text style={styles.title}>Trending</Text>
          <ButtonGroup
            selectedTab={selectedTab}
            buttonTextLeft="Now"
            buttonTextMid="Weakly"
            buttonTextRight="Monthly"
            onPressLeft={() => setSelectedTab('now')}
            onPressMid={() => setSelectedTab('weakly')}
            onPressRight={() => setSelectedTab('monthly')}
          />
        </View>
        {(() => {
          if (selectedTab === 'now') {
            return nowData.map(renderItem);
          } else if (selectedTab === 'weakly') {
            return weaklyData.map(renderItem);
          } else {
            return monthlyData.map(renderItem);
          }
        })()}

        {selectedTab === 'now' && (
          <>
            <PrimaryButton
              buttonText="View Full Craft"
              onPress={() => {
                navigation.navigate('TopCraftScreen');
              }}
            />
            <View style={styles.catagoriesBox}>
              <Text style={styles.title}>Top Catagories</Text>
            </View>
            <ScrollView
              style={styles.boxContainer}
              horizontal
              showsHorizontalScrollIndicator={false}>
              <TouchableOpacity style={styles.box} onPress={() => handlePress('Jazz')}>
                <ImageBackground
                  source={require('@/assets/images/Jazz.png')}
                  style={styles.categoriesImage}>
                  <Text style={styles.boxText}>Jazz</Text>
                </ImageBackground>
              </TouchableOpacity>
              <TouchableOpacity style={styles.box} onPress={() => handlePress('Pop')}>
                <ImageBackground
                  source={require('@/assets/images/Jazz.png')}
                  style={styles.categoriesImage}>
                  <Text style={styles.boxText}>Pop</Text>
                </ImageBackground>
              </TouchableOpacity>
              <TouchableOpacity style={styles.box} onPress={() => handlePress('Rock')}>
                <ImageBackground
                  source={require('@/assets/images/Jazz.png')}
                  style={styles.categoriesImage}>
                  <Text style={styles.boxText}>Rock</Text>
                </ImageBackground>
              </TouchableOpacity>
              <TouchableOpacity style={styles.box} onPress={() => handlePress('Rap')}>
                <ImageBackground
                  source={require('@/assets/images/Jazz.png')}
                  style={styles.categoriesImage}>
                  <Text style={styles.boxText}>Rap</Text>
                </ImageBackground>
              </TouchableOpacity>
            </ScrollView>
          </>
        )}
      </View>
    </ParallaxScrollView>
  );
}

export default Discover;
