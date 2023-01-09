import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { HFlatList } from "../hFlatList";
import { CategoryItem } from "./category-item";
import { categoryItemsData } from "../../data";
import { Gstyles } from "../../../GStyles";
import { useState } from "react";
export const Category = () => {
  const [itemPressed, setItemPressed] = useState(1);
  const renderItem = ({ item, index }) => {
    return (
      <View style={{ padding: 20 }}>
        <Text
          style={{
            color: itemPressed === item.id ? "#42F5D7" : "#fff",
          }}
          onPress={() => setItemPressed(item.id)}
        >
          {item.text}
        </Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.heading}>
        <View style={{ width: "70%" }}>
          <Text style={styles.headingTitle}>Category</Text>
        </View>
        <View style={{ width: "30%", paddingLeft: 40 }}>
          <TouchableOpacity>
            <Text style={{ ...styles.seeAll, ...Gstyles.cGreen }}>See All</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View>
        <HFlatList
          DATA={categoryItemsData}
          renderItem={renderItem}
          hstyles={{ marginTop: 20 }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 30,
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
