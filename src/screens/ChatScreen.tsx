import {
  View,
  Image,
  Text,
  StyleSheet,
  StatusBar,
  ScrollView,
  SafeAreaView,
  TextInput,
} from 'react-native';

import ratio from '../style/ratio';
import {Colors, FontFamily} from '../style/Gobalstyle';

interface ChatScreenProps {
  navigation: any;
}

const ChatScreen: React.FC<ChatScreenProps> = ({navigation}) => {
  return (
    <View style={styles.ScreenContainer}>
      <StatusBar backgroundColor={Colors.ExcatPurple} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.ScrollViewFlex}>
        <View style={styles.ProfileContainer}>
          <Image
            source={require('../assets/images/profile.png')}
            style={styles.ProfileImage}
          />
          <Image
            source={require('../assets/images/settings.png')}
            style={styles.SettingImage}
          />
        </View>
        <View>
          <Text style={styles.EnterText}>Your personal nutriotinist</Text>
          <Text style={styles.DateText}>Monday 12:38 PM</Text>
        </View>
        <View style={styles.left}>
          <View style={styles.UserOne}>
            <Image
              source={require('../assets/images/profile2.png')}
              style={styles.UserOneImage}
            />
            <Image
              source={require('../assets/images/chatone.png')}
              style={styles.chatOneImage}
            />
          </View>
          <Image
            source={require('../assets/images/chattwo.png')}
            style={styles.chattwoImage}
          />
        </View>
        <View style={styles.InputContainer}>
          <Image
            source={require('../assets/images/Camera.png')}
            style={styles.CameraImage}
          />
          <Image
            source={require('../assets/images/App-Store.png')}
            style={styles.AppImage}
          />
          <Image
            source={require('../assets/images/Dictation.png')}
            style={styles.DictationImage}
          />
          <SafeAreaView>
            <TextInput
              style={styles.InputField}
              placeholder="Message..."
              placeholderTextColor="#C9C9C9"
              editable
              multiline
            />
          </SafeAreaView>
        </View>
      </ScrollView>
    </View>
  );
};

export default ChatScreen;

const styles = StyleSheet.create({
  ScreenContainer: {
    flex: 1,
    backgroundColor: Colors.ExcatWhite,
  },
  ScrollViewFlex: {
    flexGrow: 1,
  },
  ProfileContainer: {
    marginLeft: ratio.widthPixel(9),
    marginRight: ratio.widthPixel(8.1),
    marginTop: ratio.widthPixel(7),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  ProfileImage: {
    width: ratio.widthPixel(21.719),
    height: ratio.heightPixel(21.719),
    borderRadius: 9999999,
  },
  SettingImage: {
    width: ratio.widthPixel(13.9),
    height: ratio.heightPixel(13.9),
    borderRadius: 9999999,
  },
  EnterText: {
    marginTop: ratio.heightPixel(14.28),
    color: '#848484',
    fontFamily: FontFamily.Medium,
    lineHeight: ratio.fontPixel(11.205),
    letterSpacing: ratio.fontPixel(0.25),
    fontSize: ratio.fontPixel(9),
    alignSelf: 'center',
    marginHorizontal: 'auto',
  },
  DateText: {
    marginTop: ratio.heightPixel(189),
    color: '#848484',
    fontFamily: FontFamily.Medium,
    lineHeight: ratio.fontPixel(11),
    letterSpacing: ratio.fontPixel(-0.204),
    fontSize: ratio.fontPixel(7),
    alignSelf: 'center',
    marginHorizontal: 'auto',
  },
  UserOne: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginTop: ratio.heightPixel(6.5),
  },
  UserOneImage: {
    width: ratio.widthPixel(19.341),
    height: ratio.heightPixel(19.341),
    borderRadius: 9999999,
    marginRight: ratio.widthPixel(6.25),
  },
  chatOneImage: {
    width: ratio.widthPixel(124.409),
    height: ratio.heightPixel(30.318),
  },
  left: {
    marginStart: ratio.widthPixel(17.25),
  },
  chattwoImage: {
    marginStart: 'auto',
    marginTop: ratio.heightPixel(8.36),
    width: ratio.widthPixel(124.409),
    height: ratio.heightPixel(30.318),
    marginRight: ratio.widthPixel(13),
  },
  InputContainer: {
    marginTop: ratio.heightPixel(40.33),
    marginStart: ratio.widthPixel(8.36),
    marginRight: ratio.widthPixel(9.68),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'relative',
  },
  CameraImage: {
    width: ratio.widthPixel(18.089),
    height: ratio.heightPixel(14.203),
  },
  AppImage: {
    width: ratio.widthPixel(20.497),
    height: ratio.heightPixel(17.862),
  },
  InputField: {
    width: ratio.widthPixel(137.867),
    height: ratio.heightPixel(24.947),
    borderRadius: ratio.widthPixel(99999999),
    backgroundColor: Colors.Transparmenthalf,
    borderWidth: ratio.widthPixel(1.587),
    paddingLeft: ratio.widthPixel(6.83),
    color: Colors.Transparmenthalf,
    fontSize: ratio.fontPixel(8.633),
    lineHeight: ratio.fontPixel(10.748),
    letterSpacing: ratio.fontPixel(0.24),
    borderColor: Colors.DarkGray,
  },
  DictationImage: {
    width: ratio.widthPixel(15.84),
    height: ratio.heightPixel(15.84),
    position: 'absolute',
    right: ratio.widthPixel(7.73),
  },
});
