import { createStackNavigator } from "react-navigation";
import HomeScreen from "./HomeScreen";
import DetailsScreen from "./DetailsScreen";
import { HOME, DETAILS } from "../routes";

export default createStackNavigator(
  {
    [HOME]: HomeScreen,
    [DETAILS]: DetailsScreen
  },
  {
    // initialRouteName: HOME,
    headerMode: "none"
  }
);
