import React, { PureComponent } from "react";
import { View, ScrollView, Text, StyleSheet, Button } from "react-native";
import Header from "../components/Header";
import FullImage from "../components/FullImage";

import { w } from "../../dms";

export default class DetailsScreen extends PureComponent {
  render() {
    const { item } = this.props.navigation.state.params;
    const { navigation } = this.props;
    const { container, sub, h1, h2 } = styles;

    return (
      <View style={container}>
        <Header
          title={item.title}
          onPress={() => navigation.goBack()}
          leftIcon="ios-arrow-back"
          leftColor="#fff"
        />
        <ScrollView>
          <View style={sub}>
            <FullImage data={item.img} />
            <Button
              onPress={() => navigation.goBack()}
              title="HOME"
              color="#009688"
            />
            <Text style={h1}>{item.title.toUpperCase()}</Text>
            <Text style={h2}>{item.description.replace(/<[^>]+>/g, "")}</Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff"
  },
  sub: {
    flex: 1,
    alignItems: "center",
    marginBottom: 150,
    backgroundColor: "#fff"
  },
  cover: {
    width: w,
    height: w * 1.5,
    borderRadius: 10
  },
  h1: {
    fontFamily: "AvenirNext-DemiBold",
    fontSize: 30,
    padding: 15,
    textAlign: "center"
  },
  h2: {
    fontFamily: "AvenirNext-DemiBold",
    fontSize: 15,
    textAlign: "center",
    color: "grey",
    paddingHorizontal: 15
  }
});
