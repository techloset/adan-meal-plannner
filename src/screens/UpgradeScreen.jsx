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

import ratio from '../libs/ratio';
import {Colors, FontFamily} from '../style/GlobalStyle';
import {ScreenNames} from '../navigation/Screens';

const UpgradeScreen = ({navigation}) => {
  return (
    <View style={styles.ScreenContainer}>
      <StatusBar backgroundColor={Colors.ExactWhite} translucent={true} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.ScrollViewFlex}>
        <ImageBackground
          source={require('../assets/images/girl-cooking.png')}
          style={styles.BackgroundImage}>
          <Image
            source={require('../assets/images/leftarrow.png')}
            style={styles.ArrowImage}
          />
        </ImageBackground>
        <View style={styles.whiteContainer}>
          <Text style={styles.Header}>Your personal plan is ready</Text>
          <Text style={styles.Text}>
            Upgrade your account and get full access to JumpStart your practice.
          </Text>
          <View style={styles.InActiveContainer}>
            <View style={styles.Circle} />
            <View style={styles.TextContainer}>
              <Text style={styles.Month}>1 Month Plan</Text>
              <Text style={styles.Billed}>Billed monthly. Cancel anytime.</Text>
            </View>
            <Text style={styles.price}>
              for only <Text style={{fontSize: ratio.fontPixel(9)}}>$</Text>
              <Text style={{fontSize: ratio.fontPixel(18)}}>12</Text>/ month
            </Text>
          </View>
          <View style={styles.ActiveContainer}>
            <View style={styles.Circle}>
              <View style={styles.PurpleCircle} />
            </View>
            <View style={styles.TextContainer}>
              <Text style={styles.Month}>1 Year Plan</Text>
              <Text style={styles.Billed}>Billed yearly. Cancel anytime.</Text>
            </View>
            <Text style={styles.price}>
              for only <Text style={{fontSize: ratio.fontPixel(9)}}>$</Text>
              <Text style={{fontSize: ratio.fontPixel(18)}}>8</Text>/ month
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate(`${ScreenNames.HOME}`);
            }}>
            <View style={styles.ButtonContainer}>
              <Text style={styles.ButtonText}>Submit Feedback</Text>
            </View>
          </TouchableOpacity>
          <Text style={styles.Agreement}>
            By continuing you agree to the{' '}
            <Text style={{fontFamily: FontFamily.SF_Bold}}>
              Terms & Conditions
            </Text>
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default UpgradeScreen;

const styles = StyleSheet.create({
  ScreenContainer: {
    flex: 1,
    backgroundColor: Colors.ExactWhite,
  },
  ScrollViewFlex: {
    flexGrow: 1,
  },
  BackgroundImage: {
    width: ratio.widthPixel(220),
    height: ratio.heightPixel(186),
  },
  ArrowImage: {
    marginTop: ratio.heightPixel(4.5),
    width: ratio.widthPixel(19.911),
    height: ratio.heightPixel(19.911),
    marginLeft: ratio.widthPixel(11),
  },
  whiteContainer: {
    position: 'absolute',
    backgroundColor: Colors.ExactWhite,
    top: ratio.heightPixel(135.5),
    width: ratio.widthPixel(220),
    borderTopRightRadius: ratio.widthPixel(15),
    alignItems: 'center',
    justifyContent: 'center',
    borderTopLeftRadius: ratio.widthPixel(15),
  },
  Header: {
    alignSelf: 'center',
    justifyContent: 'center',
    marginHorizontal: 'auto',
    textAlign: 'center',
    width: ratio.widthPixel(102),
    color: Colors.ExactBlack,
    fontFamily: FontFamily.SF_SemiBold,
    fontSize: ratio.fontPixel(14),
    lineHeight: ratio.fontPixel(17.01),
    marginTop: ratio.heightPixel(18.5),
  },
  Text: {
    alignSelf: 'center',
    justifyContent: 'center',
    marginHorizontal: 'auto',
    textAlign: 'center',
    width: ratio.widthPixel(150),
    color: Colors.ExactBlack,
    fontFamily: FontFamily.SF_Medium,
    fontSize: ratio.fontPixel(9.5),
    lineHeight: ratio.fontPixel(13.03),
    marginTop: ratio.heightPixel(12.5),
  },
  InActiveContainer: {
    width: ratio.widthPixel(204.5),
    height: ratio.heightPixel(41.5),
    borderRadius: ratio.widthPixel(30),
    backgroundColor: Colors.DarkGray,
    marginTop: ratio.heightPixel(26.5),
    flexDirection: 'row',
  },
  Circle: {
    width: ratio.widthPixel(10),
    height: ratio.heightPixel(10),
    borderRadius: 9999999,
    borderWidth: 0.5,
    marginLeft: ratio.widthPixel(9.5),
    marginTop: ratio.heightPixel(15.5),
    alignItems: 'center',
    justifyContent: 'center',
  },
  TextContainer: {
    marginLeft: ratio.widthPixel(8),
    marginTop: ratio.heightPixel(8.5),
    marginBottom: ratio.widthPixel(8),
  },
  Month: {
    color: Colors.ExactBlack,
    fontFamily: FontFamily.SF_SemiBold,
    fontSize: ratio.fontPixel(12),
    lineHeight: ratio.fontPixel(14.94),
  },
  Billed: {
    marginTop: ratio.heightPixel(1.5),
    color: '#3F3B3B',
    fontFamily: FontFamily.SF_Regular,
    fontSize: ratio.fontPixel(6),
    lineHeight: ratio.fontPixel(7.47),
  },
  price: {
    color: Colors.ExactBlack,
    fontFamily: FontFamily.SF_SemiBold,
    marginBottom: ratio.heightPixel(6),
    fontSize: ratio.fontPixel(7),
    marginLeft: ratio.widthPixel(18.5),
    alignSelf: 'flex-end',
  },
  ActiveContainer: {
    width: ratio.widthPixel(204.5),
    height: ratio.heightPixel(41.5),
    borderRadius: ratio.widthPixel(30),
    marginTop: ratio.heightPixel(14.5),
    borderWidth: ratio.widthPixel(1),
    flexDirection: 'row',
    borderColor: Colors.DarkPink,
  },
  PurpleCircle: {
    width: ratio.widthPixel(7),
    height: ratio.heightPixel(7),
    borderRadius: 99999999,
    backgroundColor: Colors.DarkPink,
  },
  ButtonContainer: {
    marginTop: ratio.heightPixel(34.01),
    width: ratio.widthPixel(193),
    height: ratio.heightPixel(32),
    backgroundColor: Colors.ExactPurple,
    borderRadius: 2.503,
    alignSelf: 'center',
    marginHorizontal: 'auto',
    justifyContent: 'center',
    alignItems: 'center',
  },
  ButtonText: {
    color: Colors.ExactWhite,
    fontFamily: FontFamily.SF_Medium,
    lineHeight: ratio.fontPixel(13.089),
    letterSpacing: ratio.fontPixel(0.25),
    fontSize: ratio.fontPixel(10.513),
  },
  Agreement: {
    marginTop: ratio.heightPixel(8.5),
    fontFamily: FontFamily.SF_Medium,
    lineHeight: ratio.fontPixel(13.089),
    letterSpacing: ratio.fontPixel(0.25),
    fontSize: ratio.fontPixel(8),
    color: Colors.ExactBlack,
    width: ratio.widthPixel(100),
    textAlign: 'center',
  },
});
