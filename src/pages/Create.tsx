import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import PrimaryButton from '../components/buttons/PrimaryButton';

function Create() {
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <View style={styles.topContainer}>
          <Image
            source={require('../images/musictable.png')}
            style={styles.topImage}></Image>
          <Text style={styles.title}>There's nothing here yet</Text>
          <Text style={styles.discretion}>Create your first song</Text>
        </View>
      </View>
      <View style={styles.bottom}>
        <View style={styles.bottomContainer}>
          <PrimaryButton buttonText="Create New Song"></PrimaryButton>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  top: {
    flex: 1.2,
    backgroundColor: '#071e4a',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  bottom: {
    flex: 1,
    backgroundColor: '#071e4a',
    padding: 10,
  },
  topImage: {
    height: 140,
    width: 140,
    marginBottom: 20,
  },
  topContainer: {
    alignItems: 'center',
  },
  bottomContainer: {
    marginTop: 40,
    paddingLeft: 20,
    paddingRight: 20,
  },
  discretion: {
    color: 'white',
    fontSize: 16,
  },
  title: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
    width: 200,
    textAlign: 'center',
    paddingBottom: 10,
  },
});

export default Create;
