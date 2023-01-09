import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { MovieItem } from "./movie-item";
import { HFlatList } from "../hFlatList";
import { newlyAddedData } from "../../data";
import { Gstyles } from "../../../GStyles";
export const HomeChosenMovies = () => {
  const renderItem = ({ item }) => {
    return <MovieItem item={item} />;
  };
  return (
    <View style={styles.container}>
      <View style={styles.heading}>
        <View style={{ width: "70%" }}>
          <Text style={styles.headingTitle}>Trending</Text>
        </View>
        <View style={{ width: "30%", paddingLeft: 40 }}>
          <TouchableOpacity>
            <Text style={{ ...styles.seeAll, ...Gstyles.cGreen }}>See All</Text>
          </TouchableOpacity>
        </View>
      </View>
      <HFlatList
        DATA={newlyAddedData}
        renderItem={renderItem}
        hstyles={{ marginTop: 20 }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingLeft: 30,
    paddingRight: 30,
  },
  heading: {
    flexDirection: "row",
  },
  headingTitle: {
    color: "#fff",
    fontWeight: "bold",
  },
  seeAll: {
    color: "#fff",
  },
});
