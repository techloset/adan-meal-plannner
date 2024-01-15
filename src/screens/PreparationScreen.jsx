import {
  View,
  Image,
  Text,
  StyleSheet,
  StatusBar,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import ratio from '../libs/ratio';
import {Colors, FontFamily} from '../style/GlobalStyle';
import {ScreenNames} from '../navigation/Screens';

const PreparationScreen = ({navigation}) => {
  return (
    <View style={styles.ScreenContainer}>
      <StatusBar backgroundColor={Colors.ExactWhite} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.ScrollViewFlex}>
        <ImageBackground
          source={require('../assets/images/noodle.png')}
          style={styles.BackgroundImage}>
          <Image
            source={require('../assets/images/expand.png')}
            style={styles.ExpandImage}
          />
        </ImageBackground>
        <View style={styles.whiteContainer}>
          <Text style={styles.Step}>Step 4</Text>
          <View style={styles.StepsContainer}>
            <View style={styles.StepContainer}>
              <Text style={styles.Steps}>1</Text>
            </View>
            <View style={styles.StepContainer}>
              <Text style={styles.Steps}>2</Text>
            </View>
            <View style={styles.StepContainer}>
              <Text style={styles.Steps}>3</Text>
            </View>
            <View style={styles.ActiveStepContainer}>
              <Image
                source={require('../assets/images/flag.png')}
                style={styles.FlagImage}
              />
            </View>
          </View>
          <View>
            <View style={styles.productsContainer}>
              <Text style={styles.productTitle}>Bacon</Text>
              <Text style={styles.productValue}>50 gr</Text>
            </View>
            <View style={styles.line} />
            <View style={styles.productsContainer}>
              <Text style={styles.productTitle}>Soy Sauce</Text>
              <Text style={styles.productValue}>200 ml</Text>
            </View>
            <View style={styles.line} />
          </View>
          <Text style={styles.para}>
            We tie the bacon with twine so that the skin is on the outside and
            one end and the other practically meet. Heat a little oil in a
            pressure cooker and mark the bacon all over until golden brown. We
            remove and discard the oil.
          </Text>
          <View style={styles.ButtonsContainer}>
            <TouchableOpacity
              style={styles.Previous}
              onPress={() => {
                navigation.navigate(`${ScreenNames.ONBOARDING}`);
              }}>
              <Text style={styles.PreviousText}>Previous</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.Next}
              onPress={() => {
                navigation.navigate(`${ScreenNames.TAB}`);
              }}>
              <Text style={styles.NextText}>Finish cook</Text>
              <Image
                source={require('../assets/images/white-tick.png')}
                style={styles.tickImage}
              />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default PreparationScreen;

const styles = StyleSheet.create({
  ScreenContainer: {
    flex: 1,
    backgroundColor: Colors.ExactWhite,
  },
  ScrollViewFlex: {
    flexGrow: 1,
  },
  BackgroundImage: {
    marginTop: ratio.heightPixel(4.5),
    width: ratio.widthPixel(220),
    height: ratio.heightPixel(201),
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  ExpandImage: {
    marginTop: ratio.heightPixel(7),
    width: ratio.widthPixel(19.911),
    height: ratio.heightPixel(19.911),
    marginRight: ratio.widthPixel(10),
  },
  whiteContainer: {
    position: 'absolute',
    backgroundColor: Colors.ExactWhite,
    top: ratio.heightPixel(163),
    width: ratio.widthPixel(220),
    borderTopRightRadius: ratio.widthPixel(15),
    borderTopLeftRadius: ratio.widthPixel(15),
  },
  Step: {
    marginTop: ratio.heightPixel(12.5),
    fontSize: ratio.fontPixel(14),
    textAlign: 'center',
    lineHeight: ratio.fontPixel(17.43),
    fontFamily: FontFamily.SF_SemiBold,
    color: Colors.ExactBlack,
    alignSelf: 'center',
    marginHorizontal: 'auto',
  },
  StepsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: ratio.widthPixel(5.5),
    marginTop: ratio.heightPixel(7),
    marginBottom: ratio.heightPixel(11.5),
  },
  StepContainer: {
    width: ratio.widthPixel(13),
    height: ratio.heightPixel(13),
    borderRadius: 99999999999999,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: ratio.widthPixel(0.5),
  },
  Steps: {
    fontSize: ratio.fontPixel(7),
    textAlign: 'center',
    fontFamily: FontFamily.SF_Regular,
    color: Colors.ExactBlack,
  },
  ActiveStepContainer: {
    width: ratio.widthPixel(13),
    height: ratio.heightPixel(13),
    borderRadius: 99999999999999,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.ExactPurple,
  },
  ActiveSteps: {
    fontSize: ratio.fontPixel(7),
    textAlign: 'center',
    fontFamily: FontFamily.SF_Regular,
    color: Colors.ExactWhite,
  },
  FlagImage: {
    width: ratio.widthPixel(4.033),
    height: ratio.heightPixel(5.5),
  },
  productsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: ratio.widthPixel(25.5),
    marginRight: ratio.widthPixel(24),
    justifyContent: 'space-between',
  },
  productTitle: {
    fontSize: ratio.fontPixel(9.5),
    textAlign: 'center',
    fontFamily: FontFamily.SF_Medium,
    color: Colors.ExactBlack,
  },
  productValue: {
    fontSize: ratio.fontPixel(8),
    textAlign: 'center',
    fontFamily: FontFamily.SF_Regular,
    color: Colors.ExactBlack,
  },
  line: {
    width: ratio.widthPixel(191),
    height: ratio.heightPixel(0.5),
    backgroundColor: '#EBEBEB',
    alignSelf: 'center',
    marginHorizontal: 'auto',
    marginTop: ratio.heightPixel(8),
    marginBottom: ratio.heightPixel(9),
  },
  para: {
    width: ratio.widthPixel(174),
    marginTop: ratio.heightPixel(5),
    marginBottom: ratio.heightPixel(43.5),
    fontSize: ratio.fontPixel(9),
    lineHeight: ratio.fontPixel(12.6),
    fontFamily: FontFamily.SF_Regular,
    color: '#0E0E0E',
    alignSelf: 'center',
  },
  ButtonsContainer: {
    flexDirection: 'row',
    marginLeft: ratio.widthPixel(12),
    marginRight: ratio.widthPixel(14.04),
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  Previous: {
    width: ratio.widthPixel(85.042),
    height: ratio.heightPixel(26.803),
    borderRadius: 2.393,
    backgroundColor: '#F2F2F2',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Next: {
    width: ratio.widthPixel(96.958),
    height: ratio.heightPixel(26.803),
    borderRadius: 2.393,
    backgroundColor: Colors.ExactPurple,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  NextText: {
    color: Colors.ExactWhite,
    fontSize: ratio.fontPixel(10.051),
    lineHeight: ratio.fontPixel(12.514),
    fontFamily: FontFamily.SF_Bold,
    letterSpacing: ratio.fontPixel(0.239),
  },
  PreviousText: {
    color: Colors.ExactBlack,
    fontSize: ratio.fontPixel(10.051),
    lineHeight: ratio.fontPixel(12.514),
    fontFamily: FontFamily.SF_Bold,
    letterSpacing: ratio.fontPixel(0.239),
  },
  tickImage: {
    width: ratio.widthPixel(11.5),
    height: ratio.heightPixel(8),
    marginLeft: ratio.widthPixel(8.29),
  },
});
