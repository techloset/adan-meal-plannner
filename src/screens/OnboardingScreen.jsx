import {
  View,
  Image,
  Text,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

import ratio from '../libs/ratio';
import {Colors, FontFamily} from '../style/GlobalStyle';
import {ScreenNames} from '../navigation/Screens';

const OnboardingScreen = ({navigation}) => {
  return (
    <View style={styles.ScreenContainer}>
      <StatusBar backgroundColor={Colors.ExactWhite} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.ScrollViewFlex}>
        <View style={styles.ImageSlider}>
          <Image
            source={require('../assets/images/onboard-bg-main.png')}
            style={styles.BgMain}
          />
          <Image
            source={require('../assets/images/onboard-bg-side.png')}
            style={styles.BgSide}
          />
        </View>
        <View style={styles.CenterContainer}>
          <Text style={styles.Header}>Enjoy your lunch time</Text>
          <Text style={styles.Text}>
            Just relax and not overthink what to eat. This is in our side with
            our personalized meal plans just prepared and adapted to your needs.
          </Text>
        </View>
        <View style={styles.PaginationContainer}>
          <View style={styles.Pagination}>
            <View style={styles.Purple} />
            <View style={styles.Circle} />
            <View style={styles.Circle} />
            <View style={styles.Circle} />
          </View>
          <TouchableOpacity
            style={styles.NextContainer}
            onPress={() => {
              navigation.navigate(`${ScreenNames.STEP_ONE}`);
            }}>
            <Text style={styles.Next}>Next</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
  ScreenContainer: {
    flex: 1,
    backgroundColor: Colors.ExactWhite,
  },
  ScrollViewFlex: {
    flexGrow: 1,
  },
  ImageSlider: {
    marginTop: ratio.heightPixel(42.14),
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  BgMain: {
    width: ratio.widthPixel(159.861),
    height: ratio.heightPixel(126.836),
    borderTopRightRadius: 9.573,
    borderBottomRightRadius: 9.573,
  },
  BgSide: {
    width: ratio.widthPixel(49),
    height: ratio.heightPixel(127),
    borderTopLeftRadius: 9.573,
    borderBottomLeftRadius: 9.573,
  },
  CenterContainer: {
    alignItems: 'center',
    marginTop: ratio.heightPixel(36.25),
  },
  Header: {
    color: Colors.ExactBlack,
    fontSize: ratio.fontPixel(14.837),
    lineHeight: ratio.fontPixel(18.473),
    fontFamily: FontFamily.SF_SemiBold,
  },
  Text: {
    marginTop: ratio.heightPixel(17.11),
    width: ratio.widthPixel(124),
    color: Colors.ExactBlack,
    fontSize: ratio.fontPixel(10),
    lineHeight: ratio.fontPixel(14),
    fontFamily: FontFamily.SF_Regular,
    textAlign: 'center',
  },
  PaginationContainer: {
    marginTop: ratio.heightPixel(80),
    marginLeft: ratio.widthPixel(33.03),
    marginRight: ratio.widthPixel(27.59),
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  Pagination: {
    textAlign: 'center',
    flexDirection: 'row',
  },
  Purple: {
    width: ratio.widthPixel(19.624),
    height: ratio.heightPixel(3.35),
    borderRadius: 20.102,
    marginRight: ratio.widthPixel(3.25),
    backgroundColor: Colors.ExactPurple,
  },
  Circle: {
    width: ratio.widthPixel(3.35),
    height: ratio.heightPixel(3.35),
    borderRadius: 999999,
    marginRight: ratio.widthPixel(3.25),
    backgroundColor: Colors.ExactGray,
  },
  NextContainer: {
    width: ratio.widthPixel(75.144),
    height: ratio.heightPixel(26.803),
    borderRadius: 2.393,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.ExactPurple,
  },
  Next: {
    color: Colors.ExactWhite,
    fontSize: ratio.fontPixel(10.051),
    lineHeight: ratio.fontPixel(12.514),
    fontFamily: FontFamily.SF_Bold,
    letterSpacing: ratio.fontPixel(0.239),
  },
});
