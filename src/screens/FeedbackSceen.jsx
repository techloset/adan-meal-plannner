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

import ratio from '../libs/ratio';
import {Colors, FontFamily} from '../style/GlobalStyle';

const FeedbackScreen = ({navigation}) => {
  return (
    <View style={styles.ScreenContainer}>
      <StatusBar backgroundColor={Colors.ExactWhite} />
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
            <Text style={styles.OptionText}>Application bugs</Text>
          </View>
          <View style={styles.Customer}>
            <Text style={styles.OptionText}>Customer service</Text>
          </View>
        </View>
        <View style={styles.OptionsContainer}>
          <View style={styles.Slow}>
            <Text style={styles.OptionText}>Slow loading</Text>
          </View>
          <View style={styles.Bad}>
            <Text style={styles.OptionText}>Bad navigation</Text>
          </View>
        </View>
        <View style={styles.OptionsContainer}>
          <View style={styles.Weak}>
            <Text style={styles.OptionText}>Weak functionality</Text>
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
    backgroundColor: Colors.ExactWhite,
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
    fontFamily: FontFamily.SF_Bold,
    letterSpacing: ratio.fontPixel(0.239),
    color: Colors.ExactLightBlue,
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
    color: Colors.ExactBlack,
    fontFamily: FontFamily.SF_SemiBold,
    lineHeight: ratio.fontPixel(18.51),
    fontSize: ratio.fontPixel(14.867),
  },
  HeaderText: {
    color: Colors.ExactBlack,
    fontFamily: FontFamily.SF_Regular,
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
    color: Colors.ExactBlack,
    fontFamily: FontFamily.SF_Medium,
    lineHeight: ratio.fontPixel(12.539),
    fontSize: ratio.fontPixel(10.071),
    marginTop: ratio.heightPixel(11.03),
  },
  OptionsContainer: {
    flexDirection: 'row',
    marginTop: ratio.heightPixel(11.99),
    marginLeft: ratio.widthPixel(16.63),
  },
  OptionText: {
    color: Colors.ExactBlack,
    textAlign: 'center',
    fontFamily: FontFamily.SF_Regular,
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
    backgroundColor: Colors.ExactPurple,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: ratio.widthPixel(7.67),
  },
  ActiveText: {
    color: Colors.ExactWhite,
    textAlign: 'center',
    fontFamily: FontFamily.SF_Regular,
    fontSize: ratio.fontPixel(8.633),
    lineHeight: ratio.fontPixel(10.748),
    letterSpacing: ratio.fontPixel(0.24),
  },
  MessageContainer: {
    marginLeft: ratio.widthPixel(16.63),
  },
  MessageHeader: {
    marginTop: ratio.heightPixel(13.91),
    color: Colors.ExactBlack,
    fontFamily: FontFamily.SF_Medium,
    fontSize: ratio.fontPixel(10.071),
    lineHeight: ratio.fontPixel(12.539),
  },
  InputField: {
    marginTop: ratio.heightPixel(6.99),
    width: ratio.widthPixel(182),
    height: ratio.heightPixel(94),
    borderRadius: ratio.widthPixel(7),
    backgroundColor: Colors.ExactWhite,
    borderWidth: 0.48,
    paddingLeft: ratio.widthPixel(6.83),
    paddingTop: 7.4,
    color: Colors.ExactBlack,
    fontSize: ratio.fontPixel(8.633),
    lineHeight: ratio.fontPixel(10.748),
    letterSpacing: ratio.fontPixel(0.24),
  },
  ButtonContainer: {
    marginTop: ratio.heightPixel(41),
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
