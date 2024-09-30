import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';

function Create() {
  return (
    <View style={styles.container}>
      <View style={styles.top}></View>
      <View style={styles.bottom}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
});

export default Create;