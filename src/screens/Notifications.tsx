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

interface StepOneScreenProps {
  navigation: any;
}
const Notification: React.FC<StepOneScreenProps> = ({navigation}) => {
  return (
    <View style={styles.ScreenContainer}>
      <StatusBar backgroundColor={Colors.ExactPink} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.ScrollViewFlex}>
        <View style={styles.SkipContainer}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image
              source={require('../assets/images/leftarrow.png')}
              style={styles.ArrowImage}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Tab');
            }}>
            <Text style={styles.Skip}>Skip</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.HeaderContainer}>
          <Text style={styles.Header}>
            Do you want to turn on notifications?
          </Text>
        </View>
        <View style={styles.WhiteContainer}>
          <View style={styles.BoxContainer}>
            <View style={styles.BlackContainer}>
              <View style={styles.Purple} />
            </View>
            <Text style={styles.Now}>Now</Text>
          </View>
          <Text style={styles.WhiteTitle}>Notification Title</Text>
          <Text style={styles.WhiteText}>
            {' '}
            Notification text would be placed right here. This is where
            notification text would be placed.
          </Text>
        </View>
        <View style={styles.OptionsContainer}>
          <View style={styles.Options}>
            <Image
              source={require('../assets/images/tick.png')}
              style={styles.TickImage}
            />
            <Text style={styles.OptionText}>New daily meal reminders</Text>
          </View>
          <View style={styles.line} />

          <View style={styles.Options}>
            <Image
              source={require('../assets/images/tick.png')}
              style={styles.TickImage}
            />
            <Text style={styles.OptionText}>Motivational messages</Text>
          </View>
          <View style={styles.line} />

          <View style={styles.Options}>
            <Image
              source={require('../assets/images/tick.png')}
              style={styles.TickImage}
            />
            <Text style={styles.OptionText}>Personalized guideline</Text>
          </View>
          <View style={styles.line} />
        </View>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Feedback');
          }}>
          <View style={styles.ButtonContainer}>
            <Text style={styles.ButtonText}>Enable</Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default Notification;

const styles = StyleSheet.create({
  ScreenContainer: {
    flex: 1,
    backgroundColor: Colors.ExactPink,
  },
  ScrollViewFlex: {
    flexGrow: 1,
  },
  SkipContainer: {
    alignContent: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginTop: ratio.heightPixel(6),
    marginLeft: ratio.widthPixel(15),
    marginRight: ratio.widthPixel(15.84),
  },
  Skip: {
    alignItems: 'center',
    alignSelf: 'center',
    fontSize: ratio.fontPixel(9.573),
    lineHeight: ratio.fontPixel(11.918),
    fontFamily: FontFamily.SF_Bold,
    letterSpacing: ratio.fontPixel(0.239),
    color: Colors.ExactLightBlue,
  },
  ArrowImage: {
    width: ratio.widthPixel(19.911),
    height: ratio.heightPixel(19.911),
  },
  HeaderContainer: {
    marginTop: ratio.heightPixel(7.11),
    width: ratio.widthPixel(140.326),
    height: ratio.heightPixel(36.978),
    marginLeft: ratio.widthPixel(15),
  },
  Header: {
    color: Colors.DarkPink,
    fontFamily: FontFamily.SF_SemiBold,
    lineHeight: ratio.fontPixel(18.297),
    fontSize: ratio.fontPixel(14.696),
  },
  WhiteContainer: {
    width: ratio.widthPixel(185),
    height: ratio.heightPixel(60.436),
    backgroundColor: Colors.ExactWhite,
    borderRadius: 6.699,
    marginLeft: ratio.widthPixel(15),
    marginTop: ratio.heightPixel(28),
  },
  BoxContainer: {
    alignContent: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginTop: ratio.heightPixel(5.15),
    marginLeft: ratio.widthPixel(5.15),
    marginRight: ratio.widthPixel(8.25),
  },
  BlackContainer: {
    width: ratio.widthPixel(10.306),
    height: ratio.heightPixel(10.306),
    backgroundColor: Colors.ExactBlack,
    borderRadius: 2.2333,
    alignItems: 'center',
    justifyContent: 'center',
  },
  Purple: {
    borderRadius: 999999999,
    width: ratio.widthPixel(7.567),
    height: ratio.heightPixel(7.567),
    backgroundColor: Colors.DarkPink,
  },
  Now: {
    color: 'rgba(0, 0, 0, 0.5)',
    fontFamily: FontFamily.SF_Regular,
    fontSize: ratio.fontPixel(6.699),
    lineHeight: ratio.fontPixel(9.276),
    letterSpacing: ratio.fontPixel(-0.041),
  },
  WhiteTitle: {
    marginTop: ratio.heightPixel(4.12),
    color: Colors.ExactBlack,
    fontFamily: FontFamily.SF_SemiBold,
    lineHeight: ratio.fontPixel(10.306),
    letterSpacing: ratio.fontPixel(-0.124),
    fontSize: ratio.fontPixel(7.73),
    marginLeft: ratio.widthPixel(5.15),
  },
  WhiteText: {
    marginTop: ratio.heightPixel(2.11),
    color: Colors.ExactBlack,
    fontFamily: FontFamily.SF_Regular,
    lineHeight: ratio.fontPixel(10.306),
    letterSpacing: ratio.fontPixel(-0.124),
    fontSize: ratio.fontPixel(7.73),
    marginLeft: ratio.widthPixel(5.15),
  },
  OptionsContainer: {
    marginTop: ratio.heightPixel(50.47),
    marginLeft: ratio.widthPixel(20),
  },
  Options: {
    flexDirection: 'row',
    marginLeft: ratio.widthPixel(5),
  },
  TickImage: {
    width: ratio.widthPixel(12.343),
    height: ratio.heightPixel(11.378),
    marginRight: ratio.widthPixel(10.89),
  },
  OptionText: {
    color: Colors.DarkPink,
    fontFamily: FontFamily.SF_Medium,
    lineHeight: ratio.fontPixel(11.804),
    letterSpacing: ratio.fontPixel(0.237),
    fontSize: ratio.fontPixel(9.481),
  },
  line: {
    width: ratio.widthPixel(181.096),
    height: ratio.heightPixel(0.474),
    backgroundColor: Colors.DarkPink,
    marginTop: ratio.heightPixel(9.89),
    marginBottom: ratio.heightPixel(9.89),
  },
  ButtonContainer: {
    marginTop: ratio.heightPixel(92.5),
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
    fontFamily: FontFamily.SF_Bold,
    lineHeight: ratio.fontPixel(13.089),
    letterSpacing: ratio.fontPixel(0.25),
    fontSize: ratio.fontPixel(10.513),
  },
});
