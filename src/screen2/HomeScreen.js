import React, { Component } from "react";
import {
  View,
  ScrollView,
  ActivityIndicator,
  YellowBox,
  RefreshControl
} from "react-native";

YellowBox.ignoreWarnings(["Remote debugger"]);
console.ignoredYellowBox = ["Remote debugger"];

import Header from "../components/Header";
import Card from "../components/Card";
import Layout from "../components/Layout";
import SearchBar from "../components/SearchBar";
import { DETAILS } from "../routes";

const url = "http://dev.learning.wpg-online.academy/site/react-native-test";

export default class HomeScreen2 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "TITLE",
      data: [],
      visibleSB: false,
      search: "",
      loading: false,
      refreshing: false
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        }
      });
      const data = await response.json();
      this.setState({ loading: true, data });
    } catch (e) {
      return e;
    }
  };

  onRefresh() {
    this.setState({ refreshing: true });
    this.fetchData().then(() => {
      this.setState({ refreshing: false });
    });
  }

  updateSearch = e => {
    this.setState({ search: e.substr(0, 20) });
  };

  render() {
    const { title, visibleSB } = this.state;
    const { navigation } = this.props;
    const filteredData = this.state.data.filter(item => {
      return (
        item.title.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1
      );
    });

    return (
      <View>
        {visibleSB ? (
          <SearchBar
            rightColor={"#fff"}
            rightIcon="magnify"
            placeholder="Search"
            onChangeText={this.updateSearch.bind(this)}
            value={this.state.search}
            onPressRight={() => this.setState({ visibleSB: false })}
            onBlur={() => this.setState({ visibleSB: true })}
          />
        ) : (
          <Header
            title={title}
            leftIcon="ios-menu"
            leftColor="#fff"
            rightColor={"#fff"}
            rightIcon="magnify"
            onPress={() => navigation.openDrawer()}
            onPressRight={() => this.setState({ visibleSB: true })}
          />
        )}

        <ScrollView
          refreshControl={
            <RefreshControl
              refreshing={this.state.refreshing}
              onRefresh={this.onRefresh.bind(this)}
            />
          }
        >
          <Layout>
            {!this.state.loading ? (
              <ActivityIndicator size="large" />
            ) : (
              filteredData.map(item => (
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
