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

interface AuthScreenProps {
  navigation: any;
}

const AuthScreen: React.FC<AuthScreenProps> = ({navigation}) => {
  return (
    <View style={styles.ScreenContainer}>
      <StatusBar backgroundColor={Colors.ExcatPurple} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.ScrollViewFlex}>
        <ImageBackground
          source={require('../assets/images/authbg.png')}
          style={styles.Bg}>
          <LinearGradient
            colors={[Colors.ExcatPurple, Colors.Transparment]}
            start={{x: 1, y: 1}}
            end={{x: 1, y: 0}}
            style={styles.BgLinearContainer}
          />
        </ImageBackground>
        <View style={styles.AuthContainer}>
          <TouchableOpacity style={styles.EmailContainer}>
            <Text style={styles.Email}>Sign up with email</Text>
          </TouchableOpacity>
          <View style={styles.OrelseContainer}>
            <View style={styles.Line} />
            <Text style={styles.SocailSignup}>or use social sign up</Text>
            <View style={styles.Line} />
          </View>
          <TouchableOpacity style={styles.Container}>
            <Image
              source={require('../assets/images/google.png')}
              style={styles.GoogleImage}
            />
            <Text style={styles.Text}>Continue with Google</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.Container}>
            <Image
              source={require('../assets/images/facebook.png')}
              style={styles.facebookImage}
            />
            <Text style={styles.Text}>Continue with Facebook</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.Container}>
            <Image
              source={require('../assets/images/apple.png')}
              style={styles.AppleImage}
            />
            <Text style={styles.Text}>Continue with Apple</Text>
          </TouchableOpacity>
          <View style={styles.LoginContainer}>
            <Text style={styles.Already}>Already have account? </Text>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Onboarding');
              }}>
              <Text style={styles.Login}> Log In</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default AuthScreen;

const styles = StyleSheet.create({
  ScreenContainer: {
    flex: 1,
    backgroundColor: Colors.ExcatPurple,
  },
  ScrollViewFlex: {
    flexGrow: 1,
  },
  BgLinearContainer: {
    width: ratio.widthPixel(230),
    height: ratio.heightPixel(230),
  },
  Bg: {
    width: ratio.widthPixel(220),
    height: ratio.heightPixel(230),
    borderTopRightRadius: 14,
    borderTopLeftRadius: 14,
  },
  AuthContainer: {
    flex: 1,
    backgroundColor: Colors.ExcatPurple,
    alignItems: 'center',
  },
  EmailContainer: {
    marginTop: ratio.heightPixel(12),
    width: ratio.widthPixel(180),
    height: ratio.heightPixel(33),
    backgroundColor: Colors.PrimaryBlack,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 2.878,
  },
  Email: {
    color: Colors.ExcatWhite,
    fontSize: ratio.fontPixel(10.361),
    letterSpacing: ratio.fontPixel(0.288),
    lineHeight: ratio.fontPixel(12.899),
    fontFamily: FontFamily.Bold,
  },
  OrelseContainer: {
    marginTop: ratio.heightPixel(6.92),
    width: ratio.widthPixel(180),
    height: ratio.heightPixel(11.512),
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  Line: {
    width: ratio.widthPixel(42.02),
    height: ratio.heightPixel(0.576),
    backgroundColor: Colors.PrimaryWhite,
  },
  SocailSignup: {
    color: Colors.PrimaryWhite,
    fontSize: ratio.fontPixel(9.21),
    lineHeight: ratio.fontPixel(11.466),
    fontFamily: FontFamily.Medium,
  },
  Container: {
    marginTop: ratio.heightPixel(9.63),
    width: ratio.widthPixel(180.166),
    height: ratio.heightPixel(27.629),
    backgroundColor: Colors.ExcatWhite,
    alignItems: 'center',
    textAlign: 'center',
    flexDirection: 'row',
    borderRadius: 2.878,
  },
  GoogleImage: {
    width: ratio.widthPixel(15.081),
    height: ratio.heightPixel(15.081),
    marginRight: ratio.widthPixel(8.06),
    marginLeft: ratio.widthPixel(21.3),
  },
  Text: {
    color: Colors.ExcatBlack,
    fontSize: ratio.fontPixel(10.361),
    letterSpacing: ratio.fontPixel(0.288),
    lineHeight: ratio.fontPixel(12.899),
    fontFamily: FontFamily.Bold,
  },
  facebookImage: {
    width: ratio.widthPixel(13.239),
    height: ratio.heightPixel(13.239),
    marginRight: ratio.widthPixel(8.06),
    marginLeft: ratio.widthPixel(20.15),
  },
  AppleImage: {
    width: ratio.widthPixel(12.088),
    height: ratio.heightPixel(12.088),
    marginRight: ratio.widthPixel(8.06),
    marginLeft: ratio.widthPixel(21.3),
  },
  LoginContainer: {
    marginTop: ratio.heightPixel(24.75),
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  Already: {
    color: Colors.ExcatWhite,
    fontSize: ratio.fontPixel(10.361),
    lineHeight: ratio.fontPixel(12.899),
    fontFamily: FontFamily.Medium,
  },
  Login: {
    color: Colors.ExcatWhite,
    fontSize: ratio.fontPixel(10.361),
    lineHeight: ratio.fontPixel(12.899),
    fontFamily: FontFamily.SemiBold,
    textDecorationLine: 'underline',
  },
});
