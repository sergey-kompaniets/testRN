import React, { Component } from "react";
import { View, ScrollView, ActivityIndicator, YellowBox } from "react-native";

YellowBox.ignoreWarnings(["Remote debugger"]);
console.ignoredYellowBox = ["Remote debugger"];

import Header from "../components/Header";
import Card from "../components/Card";
import Layout from "../components/Layout";
import { DETAILS } from "../routes";

const url = "http://dev.learning.wpg-online.academy/site/react-native-test";

export default class HomeScreen2 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "TITLE",
      data: [],
      loading: false
    };
  }

  componentDidMount = async () => {
    try {
      const response = await fetch(url, {
        method: "POST"
      });
      const data = await response.json();
      this.setState({ loading: true, data });
    } catch (e) {
      return e;
    }
  };

  render() {
    const { title, data } = this.state;
    const { navigation } = this.props;

    return (
      <View>
        <Header
          title={title}
          leftIcon="ios-menu"
          leftColor="#fff"
          onPress={() => navigation.openDrawer()}
        />
        <ScrollView>
          <Layout>
            {!this.state.loading ? (
              <ActivityIndicator size="large" />
            ) : (
              data.map(item => (
                <Card
                  data={item}
                  key={item.title}
                  onPress={() =>
                    navigation.navigate(DETAILS, {
                      item,
                      onGoBack: this.onGoBack,
                      title
                    })
                  }
                />
              ))
            )}
          </Layout>
        </ScrollView>
      </View>
    );
  }
}
