import React, {createRef, useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  FlatList,
  useWindowDimensions,
  TouchableOpacity,
} from 'react-native';
import PrimaryButton from '../components/buttons/PrimaryButton';

const DATA = [
  {
    id: '1',
    title: 'Motivational',
    imageUrl: require('../images/motivation.png'),
  },
  {
    id: '2',
    title: 'Happy',
    imageUrl: require('../images/talent.png'),
  },
  {
    id: '3',
    title: 'Romantic',
    imageUrl: require('../images/raise-hand.png'),
  },
  {
    id: '4',
    title: 'Chill',
    imageUrl: require('../images/portfolio.png'),
  },
];
const DATA2 = [
  {
    id: '1',
    title: 'Jazz',
    imageUrl: require('../images/motivation.png'),
  },
  {
    id: '2',
    title: 'Pop',
    imageUrl: require('../images/talent.png'),
  },
  {
    id: '3',
    title: 'Rock',
    imageUrl: require('../images/raise-hand.png'),
  },
  {
    id: '4',
    title: 'Electronic',
    imageUrl: require('../images/portfolio.png'),
  },
  {
    id: '5',
    title: 'Afro Beats',
    imageUrl: require('../images/portfolio.png'),
  },
  {
    id: '6',
    title: 'Country',
  },
];
const DATA3 = [
  {
    id: '1',
    title: 'My Love',
    imageUrl: require('../images/motivation.png'),
  },
  {
    id: '2',
    title: 'My Child',
    imageUrl: require('../images/talent.png'),
  },
  {
    id: '3',
    title: 'My Pet',
    imageUrl: require('../images/raise-hand.png'),
  },
  {
    id: '4',
    title: 'My Future Self',
    imageUrl: require('../images/portfolio.png'),
  },
];
const Data = [
  {
    step: '1',
    selected: 'mood',
  },
  {
    step: '2',
    selected: 'genre',
  },
  {
    step: '3',
  },
];

const OnboardingItem = ({
  title,
  mainButtonOnPress,
  selectedId,
  handlePress,
  data,
  selectedTitle,
  selectedTitleStep2,
  stepNumber,
  selectedStep,
  page1,
  page3,
}) => (
  <View style={styles.container}>
    <View style={styles.top}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Your Prompt:</Text>
        <Text style={styles.description}>
          Make a{' '}
          <Text style={styles.selectedTitle}>
            {selectedTitle} {selectedTitleStep2}
          </Text>
          {page3 && ' song about'}
        </Text>
      </View>
      <Text style={styles.stepTitle}>Step {stepNumber}</Text>
      <Text style={styles.stepDescription}>
        <Text style={styles.stepDescription}>
          {page3 ? (
            'Who will the song be made for?'
          ) : (
            <>
              What <Text style={styles.selectedStep}>{selectedStep}</Text> do
              you want for your song?
            </>
          )}
        </Text>
      </Text>
    </View>
    <View style={styles.bottom}>
      <FlatList
        numColumns={2}
        scrollEnabled={true}
        data={data}
        renderItem={({item}) => (
          <TouchableOpacity
            style={[
              styles.item,
              item.id === selectedId
                ? styles.selectedBorder
                : styles.defaultBorder,
            ]}
            onPress={() => handlePress(item.id, item.title)}>
            <View style={styles.imageContainer}>
              <Image source={item.imageUrl} style={styles.image} />
            </View>
            <View style={styles.itemContent}>
              <Text style={styles.itemText}>{item.title}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
      <PrimaryButton buttonText="Continue" onPress={mainButtonOnPress} />
    </View>
  </View>
);

function Onboarding1() {
  const DATA_LIST = [DATA, DATA2, DATA3];
  const [selectedId, setSelectedId] = useState(DATA[0].id);
  const [selectedTitle, setSelectedTitle] = useState(DATA[0].title);
  const [selectedTitleStep2, setSelectedTitleStep2] = useState('');

  const handlePress = (id, title, index) => {
    setSelectedId(id);
    if (index === 0) {
      setSelectedTitle(title);
    } else if (index === 1) {
      setSelectedTitleStep2(title);
    }
  };

  const flatRef = createRef();
  const windowsWidth = useWindowDimensions().width;

  return (
    <FlatList
      data={Data}
      horizontal={true}
      pagingEnabled={true}
      showsHorizontalScrollIndicator={false}
      scrollEnabled={false}
      ref={flatRef}
      getItemLayout={(_, index) => ({
        length: windowsWidth,
        offset: windowsWidth * index,
        index,
      })}
      renderItem={({item, index}) => (
        <View style={{width: windowsWidth}}>
          <OnboardingItem
            selectedStep={item.selected}
            stepNumber={item.step}
            selectedId={selectedId}
            selectedTitle={selectedTitle}
            selectedTitleStep2={selectedTitleStep2}
            handlePress={(id, title) => handlePress(id, title, index)}
            data={DATA_LIST[index]}
            mainButtonOnPress={() => {
              if (index + 1 < Data.length) {
                flatRef.current.scrollToIndex({index: index + 1});

                if (index + 1 === 1) {
                  setSelectedId(DATA2[0].id);
                } else if (index + 1 === 2) {
                  setSelectedId(DATA3[0].id);
                }
              }
              if (DATA_LIST[0]) {
                setSelectedTitleStep2(DATA2[0].title);
              }
            }}
          />
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  selectedTitle: {
    color: '#2cbece',
  },
  selectedStep: {
    color: '#2cbece',
    fontWeight: 'bold',
  },
  image: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 35,
    width: 40,
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 7,
  },
  titleContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  top: {
    flex: 1,
    backgroundColor: '#071e4a',
  },
  bottom: {
    flex: 1.5,
    backgroundColor: '#071e4a',
    padding: 10,
  },
  title: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    alignItems: 'flex-start',
    paddingLeft: 23,
  },
  stepTitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    paddingLeft: 23,
  },
  stepDescription: {
    color: 'white',
    fontSize: 15,
    alignItems: 'flex-start',
    marginBottom: 10,
    paddingTop: 10,
    paddingLeft: 23,
  },
  description: {
    color: 'white',
    fontSize: 18,
    alignItems: 'flex-start',
    marginBottom: 10,
    paddingTop: 10,
    paddingLeft: 23,
  },
  item: {
    flex: 1,
    marginVertical: 8,
    marginStart: 12,
    marginEnd: 12,
    backgroundColor: '#1f287d',
    borderRadius: 10,
    justifyContent: 'center',
    height: 95,
    paddingHorizontal: 10,
  },
  itemContent: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  itemText: {
    color: 'white',
    fontSize: 20,
    paddingBottom: 8,
  },
  selectedBorder: {
    borderWidth: 2,
    borderColor: '#2cbece',
  },
  defaultBorder: {
    borderWidth: 0,
  },
});

export default Onboarding1;
