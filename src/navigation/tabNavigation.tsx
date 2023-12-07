import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  View,
  Image,
  Text,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import ratio from '../style/ratio';
import {Colors, FontFamily} from '../style/Gobalstyle';
import HomeScreen from '../screens/HomeScreen';
import ChatScreen from '../screens/ChatScreen';
import ListScreen from '../screens/ListScreen';
import MealScreen from '../screens/MealScreen';
const Tab = createBottomTabNavigator();

const Tabnavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarHideOnKeyboard: true,
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: styles.tabcontainer,
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: () => (
            <View style={styles.taboption}>
              <Image
                source={require('../assets/images/sun.png')}
                style={styles.SunImage}
              />
              <Text style={styles.Suntext}>Today</Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Meal"
        component={MealScreen}
        options={{
          tabBarIcon: () => (
            <View style={styles.taboption}>
              <Image
                source={require('../assets/images/plate.png')}
                style={styles.PlateImage}
              />
              <Text style={styles.Suntext}>Meal Plan</Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="List"
        component={ListScreen}
        options={{
          tabBarIcon: () => (
            <View style={styles.taboption}>
              <Image
                source={require('../assets/images/list.png')}
                style={styles.listImage}
              />
              <Text style={styles.Suntext}>Grocery List</Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Chat"
        component={ChatScreen}
        options={{
          tabBarIcon: () => (
            <View style={styles.taboption}>
              <Image
                source={require('../assets/images/chat.png')}
                style={styles.chatImage}
              />
              <Text style={styles.Suntext}>Chat</Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabnavigator;

const styles = StyleSheet.create({
  tabcontainer: {
    flexDirection: 'row',
    paddingLeft: ratio.widthPixel(10.72),
    paddingRight: ratio.widthPixel(7.77),
    paddingTop: ratio.heightPixel(7.99),
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: ratio.widthPixel(30),
    backgroundColor: Colors.ExcatWhite,
    color: Colors.ExcatWhite,
    height:ratio.heightPixel(71.99),
    borderWidth:0,
  },
  taboption: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.ExcatWhite,
    height: ratio.heightPixel(40.019),
  },
  SunImage: {
    width: ratio.widthPixel(16.019),
    height: ratio.heightPixel(16.019),
    marginBottom: ratio.widthPixel(4.89),
  },
  Suntext: {
    color: Colors.ExcatBlack,
    fontFamily: FontFamily.Medium,
    lineHeight: ratio.fontPixel(11.218),
    fontSize: ratio.fontPixel(9.011),
  },
  PlateImage: {
    width: ratio.widthPixel(14.517),
    height: ratio.heightPixel(14.517),
    marginBottom: ratio.widthPixel(4.89),
  },
  listImage: {
    width: ratio.widthPixel(12.014),
    height: ratio.heightPixel(14.014),
    marginBottom: ratio.widthPixel(5.79),
  },
  chatImage: {
    width: ratio.widthPixel(12.765),
    height: ratio.heightPixel(12.765),
    marginBottom: ratio.widthPixel(4.89),
  },
});
