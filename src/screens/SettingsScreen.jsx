import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';

import {Colors, FontFamily} from '../style/GlobalStyle';
import ratio from '../libs/ratio';

const SettingsScreen = ({navigation}) => {
  return (
    <View style={styles.ScreenContainer}>
      <StatusBar backgroundColor={Colors.ExactWhite} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.ScrollViewFlex}>
        <View style={styles.HeaderContainer}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image
              source={require('../assets/images/leftarrow.png')}
              style={styles.ArrowImage}
            />
          </TouchableOpacity>
          <Text style={styles.Setting}>Settings</Text>
        </View>
        <View style={styles.ProfileContainer}>
          <Image
            source={require('../assets/images/profile.png')}
            style={styles.ProfileImage}
          />
          <Text style={styles.ProfileName}>Hi, Rebecca</Text>
        </View>
        <View style={styles.TabContainer}>
          <View style={styles.TabContainerOne}>
            <Text style={styles.TabText}>Journal</Text>
          </View>
          <View style={styles.TabContainerTwo}>
            <Text style={styles.TabText}>Favorites</Text>
          </View>
        </View>
        <View style={styles.ProgressContainer}>
          <View style={styles.ProgressTitle}>
            <Text style={styles.Title}>Today’s Progress</Text>

            <Text style={styles.Time}>9:38 AM {'>'}</Text>
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
                <Text style={styles.Percentage}>29%</Text>
                <Text style={styles.type}>Fat</Text>
              </View>
              <View style={styles.FirstCircleContainer}>
                <Image
                  source={require('../assets/images/blue.png')}
                  style={styles.blueImage}
                />
                <Text style={styles.Percentage}>65%</Text>
                <Text style={styles.type}>Pro</Text>
              </View>
              <View style={styles.FirstCircleContainer}>
                <Image
                  source={require('../assets/images/purple.png')}
                  style={styles.purpleImage}
                />
                <Text style={styles.Percentage}>85%</Text>
                <Text style={styles.type}>{'Carb'}</Text>
              </View>
            </View>
          </View>
        </View>
        <Text style={styles.measure}>Latest Measurements</Text>
        <View style={styles.WeightContainer}>
          <View style={styles.WeightTitle}>
            <Text style={styles.Title}>Weight</Text>
            <Text style={styles.Time}>9:38 AM {'>'}</Text>
          </View>
          <View style={styles.WeightGraphContainer}>
            <View>
              <Text
                style={{
                  ...styles.Weight,
                  fontFamily: FontFamily.SF_SemiBold,
                  fontSize: ratio.fontPixel(15.49),
                }}>
                {' '}
                72.4<Text style={styles.Kg}>Kg</Text>
              </Text>
              <Text style={styles.Mass}>21% Fat Mass</Text>
            </View>
            <Image
              source={require('../assets/images/weight.png')}
              style={styles.WeightImage}
            />
          </View>
          <View style={styles.Line} />
          <View style={styles.ButtonContainer}>
            <Text style={styles.ButtonText}>Start cooking</Text>
          </View>
        </View>
        <View style={styles.WeightContainer}>
          <View style={styles.WeightTitle}>
            <Text style={styles.Title}>Calories</Text>
            <Text style={styles.Time}>9:38 AM {'>'}</Text>
          </View>
          <View style={styles.WeightGraphContainer}>
            <View>
              <Text
                style={{
                  ...styles.Weight,
                  fontFamily: FontFamily.SF_SemiBold,
                  fontSize: ratio.fontPixel(15.49),
                }}>
                {' '}
                1,548<Text style={styles.Kg}>Cal</Text>
              </Text>
              <View>
                <Text style={styles.Mass}>89% Goal</Text>
              </View>
            </View>
            <Image
              source={require('../assets/images/calories.png')}
              style={styles.CaloriesImage}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default SettingsScreen;
const styles = StyleSheet.create({
  ScreenContainer: {
    flex: 1,
    backgroundColor: Colors.ExactWhite,
  },
  ScrollViewFlex: {
    flexGrow: 1,
  },
  ArrowImage: {
    width: ratio.widthPixel(19.911),
    height: ratio.heightPixel(19.911),
  },
  HeaderContainer: {
    marginLeft: ratio.widthPixel(17),
    marginRight: ratio.widthPixel(12.89),
    marginTop: ratio.widthPixel(7),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  Setting: {
    fontSize: ratio.fontPixel(9.637),
    lineHeight: ratio.fontPixel(11.998),
    fontFamily: FontFamily.SF_Bold,
    color: '#1F73F1',
  },
  ProfileContainer: {
    marginLeft: ratio.widthPixel(17.75),
    marginRight: ratio.widthPixel(8.1),
    marginTop: ratio.widthPixel(10.71),
    flexDirection: 'row',
    gap: ratio.widthPixel(10),
    alignItems: 'center',
  },
  ProfileImage: {
    width: ratio.widthPixel(21.719),
    height: ratio.heightPixel(21.719),
    borderRadius: 9999999,
  },
  ProfileName: {
    fontSize: ratio.fontPixel(9.637),
    lineHeight: ratio.fontPixel(11.998),
    fontFamily: FontFamily.SF_Medium,
    color: Colors.ExactBlack,
  },
  TabContainer: {
    width: ratio.widthPixel(196.259),
    height: ratio.heightPixel(22),
    borderRadius: ratio.widthPixel(5),
    paddingHorizontal: ratio.widthPixel(2),
    paddingVertical: ratio.heightPixel(2),
    marginTop: ratio.heightPixel(14.23),
    marginHorizontal: 'auto',
    alignSelf: 'center',
    backgroundColor: '#7676801F',
    alignItems: 'center',
    flexDirection: 'row',
  },
  TabContainerOne: {
    width: ratio.widthPixel(99.56),
    height: ratio.heightPixel(16.023),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: ratio.widthPixel(5),
    backgroundColor: Colors.ExactWhite,
  },

  TabContainerTwo: {
    width: ratio.widthPixel(99.56),
    height: ratio.heightPixel(16.023),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: ratio.widthPixel(5),
  },
  TabText: {
    fontSize: ratio.fontPixel(8.583),
    lineHeight: ratio.fontPixel(11.444),
    fontFamily: FontFamily.SF_SemiBold,
    color: Colors.ExactBlack,
  },
  ProgressContainer: {
    marginLeft: ratio.widthPixel(9),
    marginTop: ratio.widthPixel(11.28),
    width: ratio.widthPixel(199),
    height: ratio.heightPixel(89.622),
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
    color: Colors.ExactBlack,
    fontFamily: FontFamily.SF_Bold,
    lineHeight: ratio.fontPixel(12.439),
    fontSize: ratio.fontPixel(9.991),
  },
  Time: {
    color: Colors.ExactBlack,
    fontFamily: FontFamily.SF_Regular,
    lineHeight: ratio.fontPixel(7.799),
    fontSize: ratio.fontPixel(6.264),
  },
  CalContainer: {
    marginRight: ratio.widthPixel(9.22),
    marginLeft: ratio.widthPixel(11.58),
    marginTop: ratio.widthPixel(10.76),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  Calories: {
    color: Colors.lightGray,
    fontFamily: FontFamily.SF_Regular,
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
    color: Colors.ExactBlack,
    fontFamily: FontFamily.SF_SemiBold,
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
  Percentage: {
    color: Colors.ExactBlack,
    fontFamily: FontFamily.SF_SemiBold,
    lineHeight: ratio.fontPixel(10.49),
    fontSize: ratio.fontPixel(8.426),
  },
  type: {
    color: Colors.lightGray,
    fontFamily: FontFamily.SF_Regular,
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
  purpleImage: {
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
  measure: {
    color: Colors.ExactBlack,
    fontFamily: FontFamily.SF_SemiBold,
    lineHeight: ratio.fontPixel(11.398),
    fontSize: ratio.fontPixel(9.155),
    marginLeft: ratio.widthPixel(20.15),
    marginTop: ratio.widthPixel(8.19),
  },
  WeightContainer: {
    marginLeft: ratio.widthPixel(9),
    marginTop: ratio.widthPixel(11.28),
    width: ratio.widthPixel(199),
    height: ratio.heightPixel(100.704),
    borderRadius: ratio.widthPixel(4.996),
    borderWidth: ratio.widthPixel(0.5),
  },
  WeightTitle: {
    marginLeft: ratio.widthPixel(11),
    marginRight: ratio.widthPixel(7),
    marginTop: ratio.widthPixel(8),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  WeightGraphContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  WeightImage: {
    width: ratio.widthPixel(110),
    height: ratio.heightPixel(40),
    marginRight: ratio.widthPixel(19.79),
  },
  Weight: {
    color: Colors.ExactBlack,
    lineHeight: ratio.fontPixel(19.285),
    marginLeft: ratio.widthPixel(12.53),
    marginTop: ratio.widthPixel(7.17),
  },
  Kg: {
    fontSize: ratio.fontPixel(7.745),
    fontFamily: FontFamily.SF_Regular,
  },
  Mass: {
    color: '#3F3B3B',
    fontFamily: FontFamily.SF_Regular,
    lineHeight: ratio.fontPixel(8.265),
    fontSize: ratio.fontPixel(6.639),
    marginLeft: ratio.widthPixel(12.53),
    marginTop: ratio.widthPixel(3.2),
  },
  Line: {
    width: ratio.widthPixel(180.69),
    height: ratio.heightPixel(1),
    marginHorizontal: 'auto',
    alignSelf: 'center',
    color: '#3F3B3B',
    marginTop: ratio.widthPixel(4),
    marginBottom: ratio.widthPixel(2),
  },
  ButtonContainer: {
    width: ratio.widthPixel(186),
    height: ratio.heightPixel(25),
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
  CaloriesImage: {
    width: ratio.widthPixel(70.991),
    height: ratio.heightPixel(32.765),
    marginRight: ratio.widthPixel(28.63),
    marginTop: ratio.heightPixel(21.71),
  },
});
