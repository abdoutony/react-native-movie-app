import { View, StyleSheet, Image } from "react-native";
import { TouchableHighlight } from "react-native";
export const MovieItem = ({ item, navigation }) => {
  return (
    <TouchableHighlight style={styles.item}  onPress={() => {
          //console.log("mmmm");
          navigation.navigate("movieDetails");
        }}>
      <Image
        source={{ uri: item.imgUrl }}
        style={{ width: 80, height: 100, borderRadius: 10 }}
      />
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  item: {
    padding: 5,
    marginVertical: 8,
    marginHorizontal: 8,
  },
});
