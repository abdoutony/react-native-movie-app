import { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";
export const CategoryItem = ({ item, index, itemPressed, setItemPressed }) => {
  return (
    <View style={{ padding: 20 }}>
      <Text
        style={{
          color: itemPressed === item.id ? "green" : "#fff",
        }}
        onPress={() => setItemPressed(item.id)}
      >
        {item.text}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({});
