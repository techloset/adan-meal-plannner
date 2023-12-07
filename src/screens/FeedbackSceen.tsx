import {
  View,
  Image,
  Text,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  TextInput,
} from 'react-native';

import ratio from '../style/ratio';
import {Colors, FontFamily} from '../style/Gobalstyle';

interface OnboardingScreenProps {
  navigation: any;
}

const FeedbackScreen: React.FC<OnboardingScreenProps> = ({navigation}) => {
  return (
    <View style={styles.ScreenContainer}>
      <StatusBar backgroundColor={Colors.ExcatWhite} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.ScrollViewFlex}>
        <View style={styles.SkipContainer}>
          <Image
            source={require('../assets/images/leftarrow.png')}
            style={styles.ArrowImage}
          />
           <TouchableOpacity
          onPress={() => {
            navigation.navigate('Tab');
          }}>
          <Text style={styles.Skip}>Skip</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.HeaderContainer}>
          <Text style={styles.Header}>How was your overall experience?</Text>
          <Text style={styles.HeaderText}>
            It will help us to serve you better.
          </Text>
          <Image
            source={require('../assets/images/emojis.png')}
            style={styles.EmojiImage}
          />
          <Text style={styles.HeaderOptions}>What is wrong?</Text>
        </View>
        <View style={styles.OptionsContainer}>
          <View style={styles.Application}>
            <Text style={styles.Optiontext}>Application bugs</Text>
          </View>
          <View style={styles.Customer}>
            <Text style={styles.Optiontext}>Customer service</Text>
          </View>
        </View>
        <View style={styles.OptionsContainer}>
          <View style={styles.Slow}>
            <Text style={styles.Optiontext}>Slow loading</Text>
          </View>
          <View style={styles.Bad}>
            <Text style={styles.Optiontext}>Bad navigation</Text>
          </View>
        </View>
        <View style={styles.OptionsContainer}>
          <View style={styles.Weak}>
            <Text style={styles.Optiontext}>Weak functionality</Text>
          </View>
          <View style={styles.Other}>
            <Text style={styles.ActiveText}>Other problems</Text>
          </View>
        </View>
        <View style={styles.MessageContainer}>
          <Text style={styles.MessageHeader}>Notes</Text>
          <SafeAreaView>
            <TextInput
              style={styles.InputField}
              placeholder="How we can do better?"
              placeholderTextColor="#C9C9C9"
              editable
              multiline
            />
          </SafeAreaView>
        </View>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Tab');
          }}>
          <View style={styles.ButtonContainer}>
            <Text style={styles.ButtonText}>Submit Feedback</Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default FeedbackScreen;

const styles = StyleSheet.create({
  ScreenContainer: {
    flex: 1,
    backgroundColor: Colors.ExcatWhite,
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
    fontSize: ratio.fontPixel(9.573),
    lineHeight: ratio.fontPixel(11.918),
    fontFamily: FontFamily.Bold,
    letterSpacing: ratio.fontPixel(0.239),
    color: Colors.ExcatLightBlue,
  },
  ArrowImage: {
    width: ratio.widthPixel(19.911),
    height: ratio.heightPixel(19.911),
  },
  HeaderContainer: {
    marginTop: ratio.heightPixel(5.09),
    width: ratio.widthPixel(141.959),
    marginLeft: ratio.widthPixel(16.63),
  },
  Header: {
    color: Colors.ExcatBlack,
    fontFamily: FontFamily.SemiBold,
    lineHeight: ratio.fontPixel(18.51),
    fontSize: ratio.fontPixel(14.867),
  },
  HeaderText: {
    color: Colors.ExcatBlack,
    fontFamily: FontFamily.Regular,
    lineHeight: ratio.fontPixel(10.748),
    fontSize: ratio.fontPixel(8.633),
    letterSpacing: ratio.fontPixel(0.24),
    marginTop: ratio.heightPixel(11.03),
  },
  EmojiImage: {
    marginTop: ratio.heightPixel(13.01),
    width: ratio.widthPixel(132),
    height: ratio.heightPixel(30),
  },
  HeaderOptions: {
    color: Colors.ExcatBlack,
    fontFamily: FontFamily.Medium,
    lineHeight: ratio.fontPixel(12.539),
    fontSize: ratio.fontPixel(10.071),
    marginTop: ratio.heightPixel(11.03),
  },
  OptionsContainer: {
    flexDirection: 'row',
    marginTop: ratio.heightPixel(11.99),
    marginLeft: ratio.widthPixel(16.63),
  },
  Optiontext: {
    color: Colors.ExcatBlack,
    textAlign: 'center',
    fontFamily: FontFamily.Regular,
    fontSize: ratio.fontPixel(8.633),
    lineHeight: ratio.fontPixel(10.748),
    letterSpacing: ratio.fontPixel(0.24),
  },
  Application: {
    width: ratio.widthPixel(82.49),
    height: ratio.heightPixel(14.867),
    borderRadius: ratio.widthPixel(7.194),
    borderWidth: 0.48,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: ratio.widthPixel(7.67),
  },
  Customer: {
    width: ratio.widthPixel(86.8),
    height: ratio.heightPixel(14.867),
    borderRadius: ratio.widthPixel(7.194),
    borderWidth: 0.48,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: ratio.widthPixel(7.67),
  },
  Slow: {
    width: ratio.widthPixel(72.898),
    height: ratio.heightPixel(14.867),
    borderRadius: ratio.widthPixel(7.194),
    borderWidth: 0.48,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: ratio.widthPixel(7.67),
  },
  Bad: {
    width: ratio.widthPixel(75.775),
    height: ratio.heightPixel(14.867),
    borderRadius: ratio.widthPixel(7.194),
    borderWidth: 0.48,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: ratio.widthPixel(7.67),
  },
  Weak: {
    width: ratio.widthPixel(91.122),
    height: ratio.heightPixel(14.867),
    borderRadius: ratio.widthPixel(7.194),
    borderWidth: 0.48,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: ratio.widthPixel(7.67),
  },
  Other: {
    width: ratio.widthPixel(75.775),
    height: ratio.heightPixel(14.867),
    borderRadius: ratio.widthPixel(7.194),
    backgroundColor: Colors.ExcatPurple,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: ratio.widthPixel(7.67),
  },
  ActiveText: {
    color: Colors.ExcatWhite,
    textAlign: 'center',
    fontFamily: FontFamily.Regular,
    fontSize: ratio.fontPixel(8.633),
    lineHeight: ratio.fontPixel(10.748),
    letterSpacing: ratio.fontPixel(0.24),
  },
  MessageContainer: {
    marginLeft: ratio.widthPixel(16.63),
  },
  MessageHeader: {
    marginTop: ratio.heightPixel(13.91),
    color: Colors.ExcatBlack,
    fontFamily: FontFamily.Medium,
    fontSize: ratio.fontPixel(10.071),
    lineHeight: ratio.fontPixel(12.539),
  },
  InputField: {
    marginTop: ratio.heightPixel(6.99),
    width: ratio.widthPixel(182),
    height: ratio.heightPixel(94),
    borderRadius: ratio.widthPixel(7),
    backgroundColor: Colors.ExcatWhite,
    borderWidth: 0.48,
    paddingLeft: ratio.widthPixel(6.83),
    paddingTop: 7.4,
    color: Colors.ExcatBlack,
    fontSize: ratio.fontPixel(8.633),
    lineHeight: ratio.fontPixel(10.748),
    letterSpacing: ratio.fontPixel(0.24),
  },
  ButtonContainer: {
    marginTop: ratio.heightPixel(41),
    width: ratio.widthPixel(193),
    height: ratio.heightPixel(32),
    backgroundColor: Colors.ExcatPurple,
    borderRadius: 2.503,
    alignSelf: 'center',
    marginHorizontal: 'auto',
    justifyContent: 'center',
    alignItems: 'center',
  },
  ButtonText: {
    color: Colors.ExcatWhite,
    fontFamily: FontFamily.Bold,
    lineHeight: ratio.fontPixel(13.089),
    letterSpacing: ratio.fontPixel(0.25),
    fontSize: ratio.fontPixel(10.513),
  },
});
