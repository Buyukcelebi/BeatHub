import { useNavigation } from '@react-navigation/native';
import type { StaticScreenProps } from '@react-navigation/native';
import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  Image,
  FlatList,
  ImageSourcePropType,
} from 'react-native';

import { useStyles } from './CategoriesStyles';

import BackButton from '@/components/Buttons/BackButton';

type Props = StaticScreenProps<{
  category: string;
}>;

type CategoryItem = {
  id: string;
  title: string;
  description: string;
  count: string;
  time?: string;
  imageUrl: ImageSourcePropType;
};

const jazzData: CategoryItem[] = [
  {
    id: '1',
    title: 'Song 1',
    description: 'Jazz 5',
    count: '2803099',
    time: '30',
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

const popData = [
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
    imageUrl: require('@/assets/images/Jazz.png'),
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

const rockData = [
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
    imageUrl: require('@/assets/images/Jazz.png'),
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
const rapData = [
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
    imageUrl: require('@/assets/images/Jazz.png'),
  },
  {
    id: '6',
    title: 'Latest Song 6',
    description: 'Rock 6',
    count: '2803099',
    imageUrl: require('@/assets/images/album.png'),
  },
];

function CategoriesScreen({ route }: Props) {
  const styles = useStyles();
  const [selectedTab, setSelectedTab] = useState();
  const navigation = useNavigation();
  const { category } = route.params || {};

  useEffect(() => {
    console.log('Selected Category:', category);
  }, [category]);

  const renderItem = ({ item }: { item: CategoryItem }) => (
    <TouchableOpacity key={item.id}>
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

  let dataToRender = [];

  if (category === 'Jazz') {
    dataToRender = jazzData;
  } else if (category === 'Pop') {
    dataToRender = popData;
  } else if (category === 'Rock') {
    dataToRender = rockData;
  } else {
    dataToRender = rapData;
  }

  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <View style={styles.topBox}>
          <BackButton
            onPress={() => {
              navigation.goBack();
            }}
          />
          <Text style={styles.title}> {category}</Text>
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

export default CategoriesScreen;
