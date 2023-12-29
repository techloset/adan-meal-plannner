import {
  View,
  Image,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import ratio from '../libs/ratio';
import {Colors} from '../style/GlobalStyle';
import Progress from '../components/Progress';

const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.ScreenContainer}>
      <StatusBar backgroundColor={Colors.ExactWhite} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.ScrollViewFlex}>
        <View style={styles.ProfileContainer}>
          <Image
            source={require('../assets/images/profile.png')}
            style={styles.ProfileImage}
          />
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Setting');
            }}>
            <Image
              source={require('../assets/images/settings.png')}
              style={styles.SettingImage}
            />
          </TouchableOpacity>
        </View>
        <Progress />
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Recipe');
          }}>
          <Image
            source={require('../assets/images/meal-one.jpg')}
            style={styles.mealOneImage}
          />
        </TouchableOpacity>

        <ImageBackground
          source={require('../assets/images/meal-two.jpg')}
          style={styles.mealOneImage}
        />
        <Image
          source={require('../assets/images/meal-three.jpg')}
          style={styles.mealOneImage}
        />
        <View style={styles.bottomContainer}>
          <LinearGradient
            colors={[Colors.ExactWhite, Colors.Transparent]}
            start={{x: 1, y: 1}}
            end={{x: 1, y: 0}}
            style={styles.BgLinearContainer}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  ScreenContainer: {
    flex: 1,
    backgroundColor: Colors.ExactWhite,
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
  mealOneImage: {
    marginTop: ratio.widthPixel(13),
    width: ratio.widthPixel(204.825),
    height: ratio.heightPixel(103.911),
    borderRadius: ratio.widthPixel(4.996),
    alignSelf: 'center',
    marginHorizontal: 'auto',
  },
  bottomContainer: {
    position: 'absolute',
    bottom: 0,
    backgroundColor: Colors.ExactWhite,
  },
  BgLinearContainer: {
    position: 'absolute',
    bottom: 0,
    width: ratio.widthPixel(219.313),
    height: ratio.heightPixel(36.968),
  },
});
