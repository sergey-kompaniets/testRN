import React from "react";
import { TouchableOpacity, TextInput, View, StyleSheet } from "react-native";
import { ifIphoneX } from "react-native-iphone-x-helper";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import { w } from "../../dms";

const SearchBar = ({
  rightIcon,
  onPressRight,
  onChangeText,
  placeholder,
  value,
  onBlur,
  rightColor
}) => {
  const { container, sub, inputStyle, rightButtonStyle, searchStyle } = styles;
  return (
    <View style={container}>
      <View style={sub}>
        <TextInput
          style={inputStyle}
          onChangeText={onChangeText}
          placeholder={placeholder}
          value={value}
          onBlur={onBlur}
        />
        <TouchableOpacity onPress={onPressRight}>
          <View style={searchStyle}>
            <MaterialCommunityIcons
              name={rightIcon}
              style={[rightButtonStyle, { color: rightColor }]}
            />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
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
  sub: {
    justifyContent: "space-between",
    marginTop: 40,
    alignItems: "center",
    flexDirection: "row",
    width: w - 35,
    backgroundColor: "#fff",
    height: 45,
    borderRadius: 20
  },
  inputStyle: {
    fontSize: 18,
    height: 40,
    width: w - 90,
    marginLeft: 15,
    backgroundColor: "#fff"
  },
  searchStyle: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#009688",
    height: 40,
    width: 40,
    borderRadius: 20
  },
  rightButtonStyle: {
    marginTop: 2,
    fontSize: 30
  }
});

export default SearchBar;
