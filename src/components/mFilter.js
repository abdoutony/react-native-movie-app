import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Searchbar } from "react-native-paper";
import { IconButton, Button } from "@react-native-material/core";
import { Icon } from "@rneui/themed";
import { Gstyles } from "../../GStyles";
export const MFilter = () => {
  return (
    <View style={styles.filterArea}>
      <View style={styles.searchBarContainer}>
        <Searchbar style={styles.searchBar} placeholder="search ...." />
      </View>
      <View style={styles.filterButtonContainer}>
        {/* <IconButton
          style={{ ...Gstyles.bgGreen }}
          icon={() => <Icon name="filter" />}
        /> */}
        <TouchableOpacity style={{ ...styles.filterIcon, ...Gstyles.bgGreen }}>
          <Icon name="filter" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  filterArea: {
    flexDirection: "row",
    padding: 30,
  },
  searchBarContainer: {
    width: "70%",
  },
  searchBar: {
    borderRadius: 20,
  },
  filterButtonContainer: {
    width: "30%",
    justifyContent: "center",
    alignItems: "center",
  },
  filterIcon: {
    width: "70%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 40,
    marginLeft: 40,
  },
});
