import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  Image,
  FlatList,
  ScrollView,
  ImageSourcePropType,
} from 'react-native';

import { useStyles } from './TopCraftStyles';

import BackButton from '@/components/Buttons/BackButton';
import ButtonGroup from '@/components/Buttons/ButtonGrups';
import { useMusicPlayer } from '@/contexts/MusicPlayerContext';

type Item = {
  id: string;
  title: string;
  description: string;
  count: string;
  time?: string;
  imageUrl: ImageSourcePropType;
};

const nowData: Item[] = [
  {
    id: '1',
    title: 'Song 1',
    description: 'Jazz 1',
    count: '2803099',
    time: 30,
    imageUrl: require('@/assets/images/Jazz.png'),
  },
  {
    id: '2',
    title: 'Song 2',
    description: 'Jazz 2',
    count: '2803099',
    time: '30',
    imageUrl: require('@/assets/images/album.png'),
  },
  {
    id: '3',
    title: 'Song 3',
    description: 'Jazz 3',
    count: '2803099',
    time: '30',
    imageUrl: require('@/assets/images/album.png'),
  },
  {
    id: '4',
    title: 'Song 4',
    description: 'Jazz 4',
    count: '2803099',
    time: '30',
    imageUrl: require('@/assets/images/album.png'),
  },
  {
    id: '5',
    title: 'Song 5',
    description: 'Jazz 5',
    count: '2803099',
    time: '30',
    imageUrl: require('@/assets/images/album.png'),
  },
];

const weaklyData = [
  {
    id: '1',
    title: 'Latest Song 1',
    description: 'Rock 1',
    count: '2803099',
    imageUrl: require('@/assets/images/album.png'),
  },
  {
    id: '2',
    title: 'Latest Song 2',
    description: 'Rock 2',
    count: '2803099',
    imageUrl: require('@/assets/images/album.png'),
  },
  {
    id: '3',
    title: 'Latest Song 3',
    description: 'Rock 3',
    count: '2803099',
    imageUrl: require('@/assets/images/album.png'),
  },
  {
    id: '4',
    title: 'Latest Song 4',
    description: 'Rock 4',
    count: '2803099',
    imageUrl: require('@/assets/images/album.png'),
  },
  {
    id: '5',
    title: 'Latest Song 5',
    description: 'Rock 5',
    count: '2803099',
    imageUrl: require('@/assets/images/album.png'),
  },
  {
    id: '6',
    title: 'Latest Song 6',
    description: 'Rock 6',
    count: '2803099',
    imageUrl: require('@/assets/images/album.png'),
  },
];

const monthlyData = [
  {
    id: '1',
    title: 'Latest Song 3',
    description: 'Rock 1',
    count: '2803099',
    imageUrl: require('@/assets/images/album.png'),
  },
  {
    id: '2',
    title: 'Latest Song 2',
    description: 'Rock 2',
    count: '2803099',
    imageUrl: require('@/assets/images/album.png'),
  },
  {
    id: '3',
    title: 'Latest Song 3',
    description: 'Rock 3',
    count: '2803099',
    imageUrl: require('@/assets/images/album.png'),
  },
  {
    id: '4',
    title: 'Latest Song 4',
    description: 'Rock 4',
    count: '2803099',
    imageUrl: require('@/assets/images/album.png'),
  },
  {
    id: '5',
    title: 'Latest Song 5',
    description: 'Rock 5',
    count: '2803099',
    imageUrl: require('@/assets/images/album.png'),
  },
  {
    id: '6',
    title: 'Latest Song 6',
    description: 'Rock 6',
    count: '2803099',
    imageUrl: require('@/assets/images/album.png'),
  },
];

function TopCraft() {
  const styles = useStyles();
  const [selectedTab, setSelectedTab] = useState('now');
  const navigation = useNavigation();

  const renderItem = ({ item }: { item: Item }) => (
    <TouchableOpacity
      onPress={() => navigation.navigate('SongScreen', { song: item })}
      key={item.id}>
      <View style={styles.listItem}>
        <ImageBackground
          source={item.imageUrl}
          style={[styles.listItemImage, { overflow: 'hidden' }]}>
          <Image source={require('@/assets/images/songPlay.png')} style={styles.icon} />
          {item.time && (
            <View style={styles.timeContainer}>
              <Text style={styles.time}>{item.time}</Text>
            </View>
          )}
        </ImageBackground>
        <View style={styles.textContainer}>
          <Text style={styles.listItemText}>{item.title}</Text>
          <Text style={styles.descriptionText}>{item.description}</Text>
        </View>
        <View style={styles.playCountContainer}>
          <Image source={require('@/assets/images/songPlay.png')} style={styles.playIcon} />
          <Text style={styles.repeatText}>{item.count}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  const dataToRender =
    selectedTab === 'now' ? nowData : selectedTab === 'weakly' ? weaklyData : monthlyData;

  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <View style={styles.topBox}>
          <BackButton
            onPress={() => {
              navigation.goBack();
            }}
          />
          <Text style={styles.title}>Top Craft</Text>

          <View style={styles.buttonContainer}>
            <ScrollView style={styles.scroll} horizontal showsHorizontalScrollIndicator={false}>
              <ButtonGroup
                selectedTab={selectedTab}
                buttonTextLeft="Now"
                buttonTextMid="Weakly"
                buttonTextRight="Monthly"
                onPressLeft={() => setSelectedTab('now')}
                onPressMid={() => setSelectedTab('weakly')}
                onPressRight={() => setSelectedTab('monthly')}
              />
            </ScrollView>
          </View>
        </View>
      </View>
      <View style={styles.bottom}>
        <FlatList
          data={dataToRender}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
}

export default TopCraft;
