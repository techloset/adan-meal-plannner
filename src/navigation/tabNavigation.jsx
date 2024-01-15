import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {View, Image, Text, StyleSheet} from 'react-native';
import ratio from '../libs/ratio';
import {Colors, FontFamily} from '../style/GlobalStyle';

import {TabScreens} from './Screens';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarHideOnKeyboard: true,
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: styles.tabContainer,
      }}>
      {TabScreens.map(tab => (
        <Tab.Screen
          key={tab.name}
          name={tab.name}
          component={tab.component}
          options={{
            tabBarIcon: () => (
              <View style={styles.tabOption}>
                <Image source={tab.icon} style={styles.TabImage} />
                <Text style={styles.Text}>{tab.label}</Text>
              </View>
            ),
          }}
        />
      ))}
    </Tab.Navigator>
  );
};

export default TabNavigator;

const styles = StyleSheet.create({
  tabContainer: {
    flexDirection: 'row',
    paddingLeft: ratio.widthPixel(10.72),
    paddingRight: ratio.widthPixel(7.77),
    paddingTop: ratio.heightPixel(7.99),
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: ratio.widthPixel(30),
    backgroundColor: Colors.ExactWhite,
    color: Colors.ExactWhite,
    height: ratio.heightPixel(71.99),
    borderWidth: 0,
  },
  tabOption: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.ExactWhite,
    height: ratio.heightPixel(40.019),
  },
  TabImage: {
    width: ratio.widthPixel(16.019),
    height: ratio.heightPixel(16.019),
    marginBottom: ratio.widthPixel(4.89),
  },
  Text: {
    color: Colors.ExactBlack,
    fontFamily: FontFamily.SF_Medium,
    lineHeight: ratio.fontPixel(11.218),
    fontSize: ratio.fontPixel(9.011),
  },
});
