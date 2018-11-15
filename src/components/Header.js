import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { ifIphoneX } from "react-native-iphone-x-helper";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import { w } from "../../dms";

const Header = ({
  leftIcon,
  rightIcon,
  leftColor,
  rightColor,
  title,
  onPress,
  onPressRight
}) => {
  const { container, textStyle, iconLeftStyle, rightIconStyle } = styles;
  return (
    <View style={container}>
      {leftIcon && (
        <TouchableOpacity onPress={onPress}>
          <Ionicons name={leftIcon} style={iconLeftStyle} color={leftColor} />
        </TouchableOpacity>
      )}
      <Text
        numberOfLines={1}
        ellipsizeMode="tail"
        style={[textStyle, { paddingLeft: leftIcon ? 10 : 0 }]}
      >
        {title}
      </Text>
      {rightIcon && (
        <TouchableOpacity onPress={onPressRight}>
          <MaterialCommunityIcons
            name={rightIcon}
            style={[rightIconStyle, { color: rightColor }]}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    paddingHorizontal: 20,
    backgroundColor: "#FF5722",
    position: "relative",
    ...ifIphoneX(
      {
        height: 122
      },
      {
        height: 90
      }
    )
  },
  textStyle: {
    color: "#fff",
    fontSize: 28,
    width: w - 100,
    fontFamily: "AvenirNext-DemiBold",
    ...ifIphoneX(
      {
        paddingTop: 75
      },
      {
        paddingTop: 40
      }
    )
  },
  iconLeftStyle: {
    ...ifIphoneX(
      {
        paddingTop: 75
      },
      {
        paddingTop: 40
      }
    ),
    fontSize: 35
  },
  rightIconStyle: {
    ...ifIphoneX(
      {
        paddingTop: 75
      },
      {
        paddingTop: 44
      }
    ),
    fontSize: 30,
    paddingRight: 20
  }
});

export default Header;
