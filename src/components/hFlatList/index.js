import {
  View,
  StyleSheet,
  Text,
  SafeAreaView,
  FlatList,
  Dimensions,
} from "react-native";
const SCREEN_WIDTH = Dimensions.get("window").width;
export const HFlatList = ({ DATA, renderItem, hstyles }) => {
  return (
    <View stlye={styles.container}>
      <SafeAreaView>
        <FlatList
          horizontal
          pagingEnabled={true}
          showsHorizontalScrollIndicator={false}
          legacyImplementation={false}
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          style={({ width: SCREEN_WIDTH + 5 }, { ...hstyles })}
        />
      </SafeAreaView>
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
    marginLeft: 40,
  },
  flatListContainer: {
    padding: 30,
  },
});
