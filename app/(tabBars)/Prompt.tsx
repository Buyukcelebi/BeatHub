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
import PrimaryButton from "@/components/buttons/PrimaryButton";

function Prompt() {
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
    <ScrollView style={styles.container} showsHorizontalScrollIndicator={false}>
      <View style={styles.top}>
        <View style={styles.inputContainer}>
          <View style={styles.inputWrapper}>
            {text === "" && (
              <Text style={styles.customPlaceholder}>Prompt</Text>
            )}
            <TextInput
              style={styles.inputPrompt}
              onChangeText={(value) => setText(value)}
              value={text}
              multiline={true}
              textAlignVertical="top"
            />
          </View>
        </View>
      </View>

      <View style={styles.bottom}>
        <Text style={styles.title}>Select Mood (optional)</Text>
        <FlatList
          horizontal
          data={moods}
          keyExtractor={(item) => item.id}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={[
                styles.borderButtons,
                {
                  backgroundColor:
                    selectedMood === item.id ? "#2cbece" : "#1f287d",
                },
              ]}
              onPress={() => setSelectedMood(item.id)}
            >
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
            <TouchableOpacity onPress={() => setSelectedGenre(item.id)}>
              <Image
                source={item.imageUrl}
                style={[
                  styles.imageGenre,
                  {
                    borderColor:
                      selectedGenre === item.id ? "#2cbece" : "transparent",
                    borderWidth: 2,
                  },
                ]}
              ></Image>
              <View style={styles.genre}>
                <Text
                  style={[
                    styles.genreText,
                    {
                      color: selectedGenre === item.id ? "#2cbece" : "white",
                    },
                  ]}
                >
                  {item.genre}
                </Text>
              </View>
            </TouchableOpacity>
          )}
        />

        <PrimaryButton buttonText="Create" />
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
    flex: 1,
  },
  switchContainer: {
    marginTop: 50,
  },
  bottom: {
    backgroundColor: "#071e4a",
    marginLeft: 20,
    marginRight: 20,
    flex: 1,
    marginBottom: 50,
  },
  borderButtons: {
    backgroundColor: "#1f287d",
    marginTop: 20,
    marginBottom: 10,
    marginRight: 15,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
  },
  genre: {
    justifyContent: "center",
    alignItems: "center",
  },
  inputContainer: {
    marginTop: 10,
    marginHorizontal: 20,
    backgroundColor: "#1f287d",
    borderColor: "#2cbece",
    borderWidth: 1,
    borderRadius: 20,
    paddingBottom: 20,
  },
  imageGenre: {
    height: 80,
    width: 80,
    borderRadius: 10,
    marginTop: 20,
    marginRight: 15,
  },
  genreText: {
    marginTop: 10,
    marginBottom: 20,
    fontSize: 17,
    marginRight: 15,
    color: "#FFF",
  },
  input: {
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 20,
    backgroundColor: "#1f287d",
    color: "white",
    fontSize: 16,
    paddingTop: 20,
    height: 100,
  },
  title: {
    color: "#FFF",
    fontSize: 17,
    fontWeight: "bold",
    paddingTop: 10,
  },
  inputTitle: {
    color: "#FFF",
    fontSize: 17,
    fontWeight: "bold",
    paddingTop: 10,
    marginLeft: 10,
  },
  description: {
    marginVertical: 7,
    marginHorizontal: 10,
    color: "#FFF",
    fontSize: 17,
  },
  inputWrapper: {
    position: "relative",
    backgroundColor: "#1f287d",
    borderRadius: 20,
  },
  customPlaceholder: {
    position: "absolute",
    top: 20,
    left: 20,
    color: "#FFF",
    fontSize: 17,
    fontWeight: "bold",
  },
  inputPrompt: {
    paddingTop: 20,
    paddingLeft: 20,
    paddingRight: 20,
    color: "white",
    fontSize: 16,
    height: 150,
  },
});

export default Prompt;
