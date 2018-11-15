import React from "react";
import { Image, View, StyleSheet } from "react-native";
import { w } from "../../dms";

const FullImage = ({ data }) => {
  const { container, sub, cover } = styles;

  return (
    <View style={container}>
      <View style={sub}>
        <Image style={cover} source={{ uri: data }} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20
  },
  sub: {
    shadowColor: "#000",
    borderRadius: 10,
    backgroundColor: "#BDBDBD",
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.7
  },
  cover: {
    borderRadius: 10,
    width: w / 1.67,
    height: w * 0.9
  }
});

export default FullImage;
