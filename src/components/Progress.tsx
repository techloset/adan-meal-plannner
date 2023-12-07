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

const Progress = () => {
  const [prize, setPrize] = useState(false);

  return (
    <View>
    {!prize ? (
      <View style={styles.ProgressContainer}>
        <View style={styles.ProgressTitle}>
          <Text style={styles.Title}>Today’s Progress</Text>
          <TouchableOpacity onPress={() => setPrize(true)}>
            <Text style={styles.View}>View more</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.CalContainer}>
          <View>
            <Text style={styles.Calories}>Calories</Text>
            <View style={styles.FireContainer}>
              <Image
                source={require('../assets/images/fire.png')}
                style={styles.FireImage}
              />
              <Text style={styles.FireText}>1,284</Text>
            </View>
          </View>
          <View style={styles.CircleContainer}>
            <View style={styles.FirstCircleContainer}>
              <Image
                source={require('../assets/images/yellow.png')}
                style={styles.yellowImage}
              />
              <Text style={styles.precent}>29%</Text>
              <Text style={styles.type}>Fat</Text>
            </View>
            <View style={styles.FirstCircleContainer}>
              <Image
                source={require('../assets/images/blue.png')}
                style={styles.blueImage}
              />
              <Text style={styles.precent}>65%</Text>
              <Text style={styles.type}>Pro</Text>
            </View>
            <View style={styles.FirstCircleContainer}>
              <Image
                source={require('../assets/images/purple.png')}
                style={styles.purlpeImage}
              />
              <Text style={styles.precent}>85%</Text>
              <Text style={styles.type}>Carb</Text>
            </View>
          </View>
        </View>
        <View style={styles.supriseContainer}>
          <Image
            source={require('../assets/images/profile2.png')}
            style={styles.DpImage}
          />
          <View style={styles.partyContainer}>
            <Text style={styles.party}>
              🎉 Keep the pace! You’re doing great.
            </Text>
          </View>
        </View>
      </View>
    ) : (
      <View style={styles.PrizeContianer}>
        <Image
          source={require('../assets/images/cup.png')}
          style={styles.ChampImage}
        />
        <View>
          <Text style={styles.Wowtext}>Wow! You made it</Text>
          <Text style={styles.prizetext}>
            You have won{' '}
            <Text
              style={{
                color: Colors.ExcatWhite,
                fontFamily: FontFamily.SemiBold,
              }}>
              5 days free trial
            </Text>{' '}
            of the daily diet plan. Enjoy!
          </Text>
        </View>
        <TouchableOpacity
          style={styles.CrossContainer}
          onPress={() => setPrize(false)}>
          <Image
            source={require('../assets/images/cross.png')}
            style={styles.crossImage}
          />
        </TouchableOpacity>
        <Image
          source={require('../assets/images/party.png')}
          style={styles.partyImage}
        />
      </View>
    )}
  </View>
  );
};

export default Progress;

const styles = StyleSheet.create({
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
  PrizeContianer: {
    marginLeft: ratio.widthPixel(9),
    marginTop: ratio.heightPixel(11.28),
    width: ratio.widthPixel(203),
    height: ratio.heightPixel(67.667),
    borderRadius: ratio.widthPixel(4.73),
    backgroundColor: '#6D14FF',
    borderColor: '#BCBCBC',
    borderWidth: ratio.widthPixel(0.237),
    flexDirection: 'row',
    position: 'relative',
  },
  ChampImage: {
    marginLeft: ratio.widthPixel(8.02),
    marginRight: ratio.widthPixel(7.21),
    marginTop: ratio.heightPixel(16.17),
    width: ratio.widthPixel(33.427),
    height: ratio.heightPixel(33.427),
  },
  Wowtext: {
    color: '#FFFDFB',
    fontFamily: FontFamily.Bold,
    fontSize: ratio.fontPixel(13.317),
    marginTop: ratio.heightPixel(12.03),
    marginBottom: ratio.heightPixel(5.54),
  },
  prizetext: {
    width: ratio.widthPixel(117.025),
    color: '#D8C0FF',
    fontFamily: FontFamily.Regular,
    lineHeight: ratio.fontPixel(11.653),
    fontSize: ratio.fontPixel(9.36),
  },
  crossImage: {
    width: ratio.widthPixel(8.94),
    height: ratio.heightPixel(8.94),
  },
  partyImage: {
    position: 'absolute',
    width: ratio.widthPixel(27.41),
    height: ratio.heightPixel(27.41),
    bottom: ratio.heightPixel(0),
    right: ratio.widthPixel(7.74),
  },
  CrossContainer: {
    top: ratio.heightPixel(4.49),
    right: ratio.widthPixel(4.93),
    position: 'absolute',
  },
});
