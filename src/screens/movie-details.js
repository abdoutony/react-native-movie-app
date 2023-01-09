import { View, Text ,StyleSheet,Image} from "react-native";
import { MAppBar } from "../components/mApp-bar";
import {AppBar, HStack, IconButton, Avatar} from '@react-native-material/core';
import {Gstyles} from "../../GStyles"
import { MAppBarDetails } from "../components/mApp-bar-details";
const MovieDetailsScreen = ({ navigation }) => {
  return (
    <View style={(styles.container, { ...Gstyles.bgBlue })}>
        <MAppBarDetails />
        <Text style={{color:"red"}}>Movie details</Text>
    </View>
  );
};

export default MovieDetailsScreen;
const styles = StyleSheet.create({
  container:{
     padding:30
  },
  header:{}
})