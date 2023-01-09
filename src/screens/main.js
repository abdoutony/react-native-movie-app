import { Text, ScrollView, StyleSheet, View } from "react-native";
import { MAppBar } from "../components/mApp-bar";
import { MFilter } from "../components/mFilter";
import { NewlyAdded } from "../components/newlyAdded";
import { Category } from "../components/category";
import { HomeChosenMovies } from "../components/homeChosenMovies";
import { Gstyles } from "../../GStyles";
const MainScreen = ({ navigation }) => {
  return (
    <>
      <MAppBar />
      <ScrollView style={(styles.container, { ...Gstyles.bgBlue })}>
        <MFilter />
        <NewlyAdded navigation={navigation} />
        <Category />
        <HomeChosenMovies />
      </ScrollView>
    </>
  );
};
export default MainScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 30,
  },
});
