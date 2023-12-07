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
import {useState} from 'react';
import Progress from '../components/Progress';

interface HomeScreenProps {
  navigation: any;
}
const HomeScreen: React.FC<HomeScreenProps> = ({navigation}) => {
  const [prize, setPrize] = useState(false);

  return (
    <View style={styles.ScreenContainer}>
      <StatusBar backgroundColor={Colors.ExcatWhite} />
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
        <Progress />
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('RecipeScreen');
          }}>
          <Image
            source={require('../assets/images/mealone.jpg')}
            style={styles.mealOneImage}
          />
        </TouchableOpacity>

        <ImageBackground
          source={require('../assets/images/mealtwo.jpg')}
          style={styles.mealOneImage}
        />
        <Image
          source={require('../assets/images/mealthree.jpg')}
          style={styles.mealOneImage}
        />
        <View style={styles.bottomContainer}>
          <LinearGradient
            colors={[Colors.ExcatWhite, Colors.Transparment]}
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
  ProgressContainer: {
    marginLeft: ratio.widthPixel(9),
    marginTop: ratio.widthPixel(11.28),
    width: ratio.widthPixel(203),
    height: ratio.heightPixel(115),
    borderRadius: ratio.widthPixel(4.996),
    borderWidth: ratio.widthPixel(0.5),
  },
  ProgressTitle: {
    marginLeft: ratio.widthPixel(9.98),
    marginRight: ratio.widthPixel(10.17),
    marginTop: ratio.widthPixel(10.96),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  Title: {
    color: Colors.ExcatBlack,
    fontFamily: FontFamily.Bold,
    lineHeight: ratio.fontPixel(12.439),
    fontSize: ratio.fontPixel(9.991),
  },
  View: {
    color: '#1F73F1',
    fontFamily: FontFamily.SemiBold,
    lineHeight: ratio.fontPixel(9.952),
    fontSize: ratio.fontPixel(7.993),
  },
  CalContainer: {
    marginLeft: ratio.widthPixel(11.58),
    marginRight: ratio.widthPixel(9.22),
    marginTop: ratio.widthPixel(10.76),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  Calories: {
    color: Colors.lightGray,
    fontFamily: FontFamily.Regular,
    lineHeight: ratio.fontPixel(9.952),
    fontSize: ratio.fontPixel(7.993),
  },
  FireContainer: {
    marginTop: ratio.widthPixel(1),
    flexDirection: 'row',
    alignItems: 'center',
  },
  FireImage: {
    width: ratio.widthPixel(8.992),
    height: ratio.heightPixel(8.992),
    marginRight: ratio.widthPixel(1.5),
  },
  FireText: {
    color: Colors.ExcatBlack,
    fontFamily: FontFamily.SemiBold,
    lineHeight: ratio.fontPixel(13.386),
    fontSize: ratio.fontPixel(10.991),
  },
  CircleContainer: {
    flexDirection: 'row',
    gap: ratio.widthPixel(5.4),
    alignItems: 'center',
    paddingBottom: 6,
  },
  FirstCircleContainer: {
    width: ratio.widthPixel(38.852),
    height: ratio.heightPixel(38.852),
    borderRadius: ratio.widthPixel(99999999999),
    borderWidth: ratio.widthPixel(4.918),
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#F3F3F3',
  },
  precent: {
    color: Colors.ExcatBlack,
    fontFamily: FontFamily.SemiBold,
    lineHeight: ratio.fontPixel(10.49),
    fontSize: ratio.fontPixel(8.426),
  },
  type: {
    color: Colors.lightGray,
    fontFamily: FontFamily.Regular,
    lineHeight: ratio.fontPixel(8.159),
    fontSize: ratio.fontPixel(6.553),
  },
  yellowImage: {
    width: ratio.widthPixel(24.532),
    height: ratio.heightPixel(19.426),
    borderWidth: ratio.widthPixel(4.918),
    position: 'absolute',
    bottom: ratio.heightPixel(-5),
    right: ratio.widthPixel(-5),
  },
  purlpeImage: {
    width: ratio.widthPixel(38.852),
    height: ratio.heightPixel(38.852),
    borderWidth: ratio.widthPixel(4.918),
    position: 'absolute',
    bottom: ratio.heightPixel(-5),
    right: ratio.widthPixel(-5),
  },
  blueImage: {
    width: ratio.widthPixel(38.852),
    height: ratio.heightPixel(38.852),
    borderWidth: ratio.widthPixel(4.918),
    position: 'absolute',
    bottom: ratio.heightPixel(-7),
    right: ratio.widthPixel(-5),
  },
  supriseContainer: {
    marginLeft: ratio.widthPixel(10.98),
    marginTop: ratio.widthPixel(8.26),
    alignItems: 'center',
    gap: ratio.widthPixel(7.99),
    flexDirection: 'row',
  },
  DpImage: {
    width: ratio.widthPixel(17.691),
    height: ratio.heightPixel(17.691),
    borderRadius: ratio.widthPixel(99999999999),
  },
  partyContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F3F3F3',
    width: ratio.widthPixel(157.464),
    height: ratio.heightPixel(18.985),
    borderRadius: ratio.widthPixel(11.168),
  },
  party: {
    color: Colors.ExcatBlack,
    fontFamily: FontFamily.Regular,
    lineHeight: ratio.fontPixel(11.195),
    fontSize: ratio.fontPixel(8.992),
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
    backgroundColor: Colors.ExcatWhite,
  },
  BgLinearContainer: {
    position: 'absolute',
    bottom: 0,
    width: ratio.widthPixel(219.313),
    height: ratio.heightPixel(36.968),
  },
});
