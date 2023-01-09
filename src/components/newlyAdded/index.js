import {
  View,
  StyleSheet,
  Text,
  SafeAreaView,
  FlatList,
  Dimensions,
} from "react-native";
import { HFlatList } from "../hFlatList";
import { newlyAddedData } from "../../data";
import { MovieItem } from "./movie-item";
export const NewlyAdded = ({ navigation }) => {
  return (
    <View stlye={styles.container}>
      <Text style={styles.title} onPress={() => console.log("hhhh")}>
        Newly Amdded
      </Text>
      <HFlatList
        DATA={newlyAddedData}
        renderItem={({ item }) => (
          <MovieItem item={item} navigation={navigation}  />
        )}
        hstyles={{ marginLeft: 20, marginTop: 20 }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 30,
  },
  title: {
    color: "#fff",
    fontWeight: "bold",
    marginLeft: 30,
  },
  flatListContainer: {
    padding: 30,
  },
});
