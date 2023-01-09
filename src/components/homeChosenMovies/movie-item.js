import { View, ImageBackground, Text, StyleSheet } from "react-native";
import { Gstyles } from "../../../GStyles";
const image = { uri: "https://i.ibb.co/dcj07Ss/spnh.jpg" };

export const MovieItem = ({ item }) => {
  return (
    <View style={styles.item}>
      <ImageBackground source={image} style={styles.image}>
        <View style={styles.contentWrapper}>
          <Text style={styles.text}>Spider Man NoH</Text>
          <Text style={{ ...Gstyles.cGreen, ...styles.subText }}>
            Category . Published 2022
          </Text>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    padding: 5,
    marginVertical: 8,
    marginHorizontal: 8,
  },
  image: {
    width: 180,
    height: 220,
    flex: 1,
    justifyContent: "flex-end",
    borderRadius: 20,
  },
  contentWrapper: {
    backgroundColor: "#000000c0",
    padding: 10,
  },
  text: {
    color: "white",
    fontSize: 15,
    fontWeight: "bold",
  },
  subText: {
    fontSize: 10,
  },
});
