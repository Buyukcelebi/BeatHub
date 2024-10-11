import PrimaryButton from "@/components/buttons/PrimaryButton";
import React, { useState } from "react";
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  Image,
  FlatList,
  ScrollView,
} from "react-native";

const { height, width } = Dimensions.get("window");

function Create() {
  const [text, setText] = useState("");
  const [selectedMood, setSelectedMood] = useState(null);
  const [selectedGenre, setSelectedGenre] = useState(null);

  const moods = [
    {
      id: "1",
      name: "aa",
      imageUrl: require("@/assets/images/Jazz.png"),
      genre: "Jazz",
    },
    {
      id: "2",
      name: "motivational",
      imageUrl: require("@/assets/images/Jazz.png"),
      genre: "Jazz",
    },
    {
      id: "3",
      name: "aa",
      imageUrl: require("@/assets/images/Jazz.png"),
      genre: "Jazz",
    },
    {
      id: "4",
      name: "aa",
      imageUrl: require("@/assets/images/Jazz.png"),
      genre: "Jazz",
    },
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.top}>
        <View style={styles.inputContainer}>
          <Text style={styles.title}>Enter Lyrics</Text>
          <TextInput
            style={styles.input}
            onChangeText={(value) => setText(value)}
            value={text}
            multiline={true}
            textAlignVertical="top"
          />
        </View>
      </View>
      <View style={styles.bottom}>
        <Text style={styles.title}>Select Mood (optional)</Text>
        <FlatList
          horizontal
          data={moods}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={[
                styles.borderButtons,
                {
                  backgroundColor:
                    selectedMood === item.id ? "#00e504" : "#1f287d",
                },
              ]}
              onPress={() => setSelectedMood(item.id)}
            >
              <Text style={styles.description}>{item.name}</Text>
            </TouchableOpacity>
          )}
          showsHorizontalScrollIndicator={false}
        />

        <Text style={styles.title}>Select Genre (optional)</Text>
        <FlatList
          horizontal
          data={moods}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => setSelectedGenre(item.id)}>
              <Image
                source={item.imageUrl}
                style={[
                  styles.imageGenre,
                  {
                    borderColor:
                      selectedGenre === item.id ? "#00e504" : "transparent",
                    borderWidth: 2,
                  },
                ]}
              />
              <Text style={styles.genreText}>{item.genre}</Text>
            </TouchableOpacity>
          )}
          showsHorizontalScrollIndicator={false}
        />
        <View style={styles.createButton}>
          <PrimaryButton buttonText="Create" />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#071e4a",
  },
  top: {
    backgroundColor: "#071e4a",
    paddingBottom: 20,
  },
  bottom: {
    backgroundColor: "#071e4a",
    padding: 10,
  },
  borderButtons: {
    backgroundColor: "#1f287d",
    height: 30,
    width: 120,
    marginLeft: 20,
    marginTop: 20,
    marginBottom: 10,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
  },
  inputContainer: {
    marginTop: 70,
    marginHorizontal: 20,
    backgroundColor: "#1f287d",
    borderColor: "#00e504",
    borderWidth: 1,
    borderRadius: 20,
    paddingBottom: 20,
  },
  imageGenre: {
    height: 80,
    width: 80,
    borderRadius: 10,
    marginTop: 20,
    marginStart: 20,
  },
  genreText: {
    marginTop: 10,
    marginStart: 40,
    marginBottom: 20,
    fontSize: 17,
    color: "#FFF",
  },
  createButton: {
    marginTop: 20,
  },
  input: {
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 20,
    backgroundColor: "#1f287d",
    color: "white",
    fontSize: 16,
    paddingTop: 20,
    height: 200,
  },
  title: {
    color: "lightgray",
    fontSize: 17,
    fontWeight: "bold",
    paddingLeft: 20,
    paddingTop: 10,
  },
  description: {
    color: "lightgray",
    fontSize: 17,
  },
});

export default Create;
