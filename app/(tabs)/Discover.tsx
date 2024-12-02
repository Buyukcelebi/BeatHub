import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  Image,
  ScrollView,
  Animated,
} from "react-native";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import ButtonGroup from "@/components/Buttons/ButtonGrups";
import PrimaryButton from "@/components/Buttons/PrimaryButton";
import { useRouter } from "expo-router";

const nowData = [
  {
    id: "1",
    title: "Song 1",
    description: "Jazzz 1",
    count: "2803099",
    time: 300,
    imageUrl: "@/assets/images/Jazz.png",
  },
  {
    id: "2",
    title: "Song 2",
    description: "Jazz 2",
    count: "2803099",
    time: 200,
    imageUrl: require("@/assets/images/album.png"),
  },
  {
    id: "3",
    title: "Song 3",
    description: "Jazz 3",
    count: "2803099",
    time: "400",
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

const weaklyData = [
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
    title: "Latest Song 3",
    description: "Rock 3",
    count: "2803099",
    imageUrl: require("@/assets/images/album.png"),
  },
  {
    id: "5",
    title: "Latest Song 3",
    description: "Rock 3",
    count: "2803099",
    imageUrl: require("@/assets/images/album.png"),
  },
  {
    id: "6",
    title: "Latest Song 3",
    description: "Rock 3",
    count: "2803099",
    imageUrl: require("@/assets/images/album.png"),
  },
];

const monthlyData = [
  {
    id: "1",
    title: "Latest Song 1",
    description: "Rock 1",
    count: "2803299",
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
    title: "Latest Song 3",
    description: "Rock 3",
    count: "2803099",
    imageUrl: require("@/assets/images/album.png"),
  },
  {
    id: "5",
    title: "Latest Song 3",
    description: "Rock 3",
    count: "2803099",
    imageUrl: require("@/assets/images/album.png"),
  },
  {
    id: "6",
    title: "Latest Song 3",
    description: "Rock 3",
    count: "2803099",
    imageUrl: require("@/assets/images/album.png"),
  },
];

function Discover() {
  const [selectedTab, setSelectedTab] = useState("now");

  const router = useRouter();

  const handlePress = (category) => {
    router.replace(
      `/pages/Catagories?category=${encodeURIComponent(category)}`
    );
  };

  const handlePress1 = (song) => {
    console.log(
      "gidenler:",
      song.title,
      song.description,
      song.imageUrl,
      song.time
    );
    router.replace(
      `/(song)/Song?title=${encodeURIComponent(
        song.title
      )}&description=${encodeURIComponent(
        song.description
      )}&time=${encodeURIComponent(song.time)}&imageUrl=${encodeURIComponent(
        song.time
      )}&count=${encodeURIComponent(song.count)}&imageUrl=${encodeURIComponent(
        song.imageUrl
      )}`
    );
  };

  const renderItem = (item) => (
    <TouchableOpacity
      key={item.id}
      onPress={() => {
        handlePress1(item);
      }}
    >
      <View style={styles.listItem}>
        <ImageBackground source={item.imageUrl} style={styles.listItemImage}>
          <Image
            source={require("@/assets/images/songPlay.png")}
            style={styles.icon}
          />
          <View style={styles.timeContainer}>
            <Text style={styles.time}>{item.time}</Text>
          </View>
        </ImageBackground>
        <View style={styles.textContainer}>
          <Text style={styles.listItemText}>{item.title}</Text>
          <Text style={styles.descriptionText}>{item.description}</Text>
        </View>
        <View style={styles.countTextContainer}>
          {selectedTab === "now" && item.id <= 3 && (
            <Text style={styles.repeatText}>#{item.id}</Text>
          )}
          <View style={styles.playCountContainer}>
            <Image
              source={require("@/assets/images/songPlay.png")}
              style={styles.playIcon}
            />
            <Text style={styles.repeatText}>{item.count}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
      headerImage={
        <View style={styles.top}>
          <TouchableOpacity style={styles.button}>
            <Image
              source={require("@/assets/images/plus.png")}
              style={styles.buttonImage}
            />

            <Text style={styles.title}>Create a new AI song</Text>
          </TouchableOpacity>
        </View>
      }
    >
      <View style={styles.scroll}>
        <View style={styles.flatListTitle}>
          <Text style={styles.title}>Trending</Text>
          <ButtonGroup
            selectedTab={selectedTab}
            buttonTextLeft={"Now"}
            buttonTextMid={"Weakly"}
            buttonTextRight={"Monthly"}
            onPressLeft={() => setSelectedTab("now")}
            onPressMid={() => setSelectedTab("weakly")}
            onPressRight={() => setSelectedTab("monthly")}
          />
        </View>
        {(() => {
          if (selectedTab === "now") {
            return nowData.map(renderItem);
          } else if (selectedTab === "weakly") {
            return weaklyData.map(renderItem);
          } else {
            return monthlyData.map(renderItem);
          }
        })()}

        {selectedTab === "now" && (
          <>
            <PrimaryButton
              buttonText="View Full Craft"
              onPress={() => {
                router.replace("/pages/TopCraft");
              }}
            />
            <View style={styles.catagoriesBox}>
              <Text style={styles.title}>Top Catagories</Text>
            </View>
            <ScrollView
              style={styles.boxContainer}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              <TouchableOpacity
                style={styles.box}
                onPress={() => handlePress("Jazz")}
              >
                <ImageBackground
                  source={require("@/assets/images/Jazz.png")}
                  style={styles.categoriesImage}
                >
                  <Text style={styles.boxText}>Jazz</Text>
                </ImageBackground>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.box}
                onPress={() => handlePress("Pop")}
              >
                <ImageBackground
                  source={require("@/assets/images/Jazz.png")}
                  style={styles.categoriesImage}
                >
                  <Text style={styles.boxText}>Pop</Text>
                </ImageBackground>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.box}
                onPress={() => handlePress("Rock")}
              >
                <ImageBackground
                  source={require("@/assets/images/Jazz.png")}
                  style={styles.categoriesImage}
                >
                  <Text style={styles.boxText}>Rock</Text>
                </ImageBackground>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.box}
                onPress={() => handlePress("Rap")}
              >
                <ImageBackground
                  source={require("@/assets/images/Jazz.png")}
                  style={styles.categoriesImage}
                >
                  <Text style={styles.boxText}>Rap</Text>
                </ImageBackground>
              </TouchableOpacity>
            </ScrollView>
          </>
        )}
      </View>
    </ParallaxScrollView>
    // <View style={styles.container}>

    //   <Animated.View style={[styles.bottom, {flex: animatedFlex}]}>
    //     <ScrollView
    //       style={{flex: 1}}
    //       onScroll={handleScroll}
    //       scrollEventThrottle={16}>

    //     </ScrollView>
    //   </Animated.View>
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  top: {
    flex: 1,
    backgroundColor: "#071e4a",
  },
  bottom: {
    backgroundColor: "#071e4a",
    padding: 10,
  },
  boxContainer: {
    flexDirection: "row",
  },
  timeContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    alignItems: "center",
    color: "#0022e0",
    backgroundColor: "rgba(46, 71, 59, 0.5)",
  },
  time: {
    color: "#FFF",
  },
  box: {
    marginRight: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  boxText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },

  scroll: {
    paddingBottom: 80,
    marginRight: 20,
    marginLeft: 20,
  },
  flatListTitle: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingBottom: 15,
    paddingTop: 8,
    alignItems: "center",
  },
  catagoriesBox: {
    paddingBottom: 20,
  },
  button: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#5e2e9c5f",
    borderRadius: 20,
    marginHorizontal: 20,
    marginBottom: 20,
    marginTop: 10,
    overflow: "hidden",
  },
  buttonImage: {
    width: 45,
    height: 45,
    marginBottom: 10,
    backgroundColor: "#1c0c0c96",
    borderRadius: 30,
  },
  listItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingBottom: 15,
  },
  categoriesImage: {
    width: 150,
    height: 150,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  listItemImage: {
    width: 90,
    height: 90,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
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
    justifyContent: "flex-end",
  },
  textContainer: {
    marginLeft: 15,
    flex: 1,
  },
  countTextContainer: {
    marginLeft: 15,
    alignItems: "center",
  },

  tabTitle: {
    color: "white",
    fontSize: 30,
    fontWeight: "700",
  },
  title: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
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

export default Discover;
