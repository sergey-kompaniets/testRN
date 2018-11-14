import React from "react";
import { Image, View, Text, StyleSheet, TouchableOpacity } from "react-native";

import { w } from "../../dms";

const ImageCard = ({ data, onPress }) => {
  const { container, sub, h1, cover } = styles;
  const { image, title } = data;

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={container}>
        <View style={sub}>
          <Image style={cover} source={{ uri: image }} />
        </View>
        <Text style={h1}>{title.toUpperCase()}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: w / 2.4,
    paddingVertical: 10
  },
  sub: {
    shadowColor: "#000",
    borderRadius: 10,
    backgroundColor: "#ccc",
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.4
  },
  h1: {
    paddingTop: 10,
    fontFamily: "AvenirNext-DemiBold",
    fontSize: 18,
    alignSelf: "center",
    textAlign: "center"
  },
  cover: {
    width: w / 2.4,
    height: w * 0.63,
    borderRadius: 10
  }
});
export default ImageCard;
