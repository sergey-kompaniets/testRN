import { createStackNavigator } from "react-navigation";
import HomeScreen2 from "./HomeScreen";
import DetailsScreen2 from "./DetailsScreen";
import ScreenHome from "../screen/HomeScreen";
import { HOME_SECOND, DETAILS_SECOND, HOME } from "../routes";

export default createStackNavigator(
  {
    [HOME_SECOND]: HomeScreen2,
    [DETAILS_SECOND]: DetailsScreen2,
    [HOME]: ScreenHome
  },
  {
    // initialRouteName: HOME_SECOND,
    headerMode: "none"
  }
);
