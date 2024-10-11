import { router } from "expo-router";
import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  Image,
  FlatList,
} from "react-native";

const weekData = [
  {
    id: "1",
    title: "Song 1",
    description: "Jazz 1",
    count: "2803099",
    time: "30",
    imageUrl: require("@/assets/images/Jazz.png"),
  },
  {
    id: "2",
    title: "Song 2",
    description: "Jazz 2",
    count: "2803099",
    time: "30",
    imageUrl: require("@/assets/images/album.png"),
  },
  {
    id: "3",
    title: "Song 3",
    description: "Jazz 3",
    count: "2803099",
    time: "30",
    imageUrl: require("@/assets/images/album.png"),
  },
  {
    id: "4",
    title: "Song 4",
    description: "Jazz 4",
    count: "2803099",
    time: "30",
    imageUrl: require("@/assets/images/album.png"),
  },
  {
    id: "5",
    title: "Song 5",
    description: "Jazz 5",
    count: "2803099",
    time: "30",
    imageUrl: require("@/assets/images/album.png"),
  },
];

const allTimeData = [
  {
    id: "1",
    title: "Latest Song 1",
    description: "Rock 1",
    count: "2803099",
    imageUrl: require("@/assets/images/album.png"),
  },
  {
    id: "2",
    title: "Latest Song 2",
    description: "Rock 2",
    count: "2803099",
    imageUrl: require("@/assets/images/album.png"),
  },
  {
    id: "3",
    title: "Latest Song 3",
    description: "Rock 3",
    count: "2803099",
    imageUrl: require("@/assets/images/album.png"),
  },
  {
    id: "4",
    title: "Latest Song 4",
    description: "Rock 4",
    count: "2803099",
    imageUrl: require("@/assets/images/album.png"),
  },
  {
    id: "5",
    title: "Latest Song 5",
    description: "Rock 5",
    count: "2803099",
    imageUrl: require("@/assets/images/album.png"),
  },
  {
    id: "6",
    title: "Latest Song 6",
    description: "Rock 6",
    count: "2803099",
    imageUrl: require("@/assets/images/album.png"),
  },
];

function TopCraft() {
  const [selectedTab, setSelectedTab] = useState("week");

  const renderItem = ({ item }) => (
    <TouchableOpacity key={item.id}>
      <View style={styles.listItem}>
        <ImageBackground
          source={item.imageUrl}
          style={[styles.listItemImage, { overflow: "hidden" }]}
        >
          <Image
            source={require("@/assets/images/songPlay.png")}
            style={styles.icon}
          />
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
          <Image
            source={require("@/assets/images/songPlay.png")}
            style={styles.playIcon}
          />
          <Text style={styles.repeatText}>{item.count}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  const dataToRender = selectedTab === "week" ? weekData : allTimeData;

  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <View style={styles.aa}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => {
              router.replace("/(tabs)/Discover");
            }}
          >
            <Image
              source={require("@/assets/images/arrow.png")}
              style={styles.arrowIcon}
            ></Image>
          </TouchableOpacity>
        </View>

        <View style={styles.topBox}>
          <Text style={styles.title}>Top Craft</Text>

          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={[
                styles.button,
                {
                  backgroundColor: selectedTab === "week" ? "green" : "#1f287d",
                },
              ]}
              onPress={() => setSelectedTab("week")}
            >
              <Text style={styles.buttonText}>Week</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.button1,
                {
                  backgroundColor:
                    selectedTab === "allTime" ? "green" : "#1f287d",
                },
              ]}
              onPress={() => setSelectedTab("allTime")}
            >
              <Text style={styles.buttonText}>All Time</Text>
            </TouchableOpacity>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  top: {
    flex: 1,
    backgroundColor: "#071e4a",
    paddingTop: 30,
  },
  topBox: {
    marginTop: 10,
    flex: 1,
    flexDirection: "row",
  },
  aa: {
    marginTop: 20,
    alignItems: "flex-start",
    justifyContent: "center",
    flex: 1,
  },
  bottom: {
    flex: 8,
    backgroundColor: "#071e4a",
  },
  backButton: {
    alignItems: "center",
    justifyContent: "center",
    height: 40,
    width: 40,
    borderRadius: 5,
    marginLeft: 20,
    backgroundColor: "#1f287d",
  },
  title: {
    alignItems: "flex-start",
    justifyContent: "flex-start",
    color: "white",
    fontSize: 23,
    fontWeight: "bold",
    paddingLeft: 20,
  },
  button: {
    borderRadius: 20,

    width: 60,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  button1: {
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 20,
    width: 60,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  buttonText: {
    color: "#FFF",
  },
  listItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 20,
    paddingBottom: 15,
    borderRadius: 20,
  },
  listItemImage: {
    width: 100,
    height: 100,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    width: 20,
    height: 20,
  },
  listItemText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
  },
  descriptionText: {
    color: "lightgray",
    fontSize: 14,
    marginTop: 5,
  },
  repeatText: {
    color: "lightgray",
    fontSize: 14,
  },
  textContainer: {
    marginLeft: 15,
    flex: 1,
  },
  countTextContainer: {
    marginLeft: 15,
    alignItems: "center",
  },
  timeContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    alignItems: "center",
    backgroundColor: "rgba(46, 71, 59, 0.5)",
  },
  time: {
    color: "#FFF",
  },
  arrowIcon: {
    tintColor: "#FFF",
    width: 20,
    height: 20,
  },
  playIcon: {
    width: 10,
    height: 10,
    marginRight: 5,
  },
  playCountContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
});

export default TopCraft;
