import React from 'react';
import {Image} from 'react-native';
import {AppBar, HStack, IconButton, Avatar} from '@react-native-material/core';
import {Icon} from '@rneui/themed';
import {Gstyles} from '../../GStyles';
export const MAppBar = () => {
  return (
    <AppBar
      style={{addingTop: 30, ...Gstyles.bgBlue}}
      title=""
      titleStyle={{ ...Gstyles.cGreen }}
      leading={props => (
        <HStack>
          <Image
            style={{ width: 80, height: 70, marginLeft: 20 }}
            source={{ uri: "https://i.ibb.co/rkzxC0f/logo.png" }}
          />
        </HStack>
      )}
      trailing={(props) => (
        <HStack>
          <Avatar
            size={40}
            style={{marginLeft: 20,marginRight:20}}
            icon={(props) => <Icon name="notifications" {...props} />}
          />
          <Avatar
            size={40}
            style={{ marginLeft: 20,marginRight:20 }}
            image={{ uri: "https://mui.com/static/images/avatar/1.jpg" }}
          />
        </HStack>
      )}
    />
  );
};
