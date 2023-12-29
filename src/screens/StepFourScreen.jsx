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

const StepFourScreen = ({navigation}) => {
  return (
    <View style={styles.ScreenContainer}>
      <StatusBar backgroundColor={Colors.ExactWhite} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.ScrollViewFlex}>
        <View style={styles.StepsContainer}>
          <View style={styles.Steps}>
            <View style={styles.Step}>
              <Text style={styles.StepText}>1</Text>
            </View>
            <View style={styles.Step}>
              <Text style={styles.StepText}>2</Text>
            </View>
            <View style={styles.Step}>
              <Text style={styles.StepText}>3</Text>
            </View>
            <View style={styles.OnActiveStep}>
              <Text style={styles.OnActiveText}>4</Text>
            </View>
          </View>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Tab');
            }}>
            <Text style={styles.Skip}>Skip</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.HeaderContainer}>
          <Text style={styles.Header}>Do you follow any of these diets?</Text>
        </View>
        <View style={styles.TextContainer}>
          <Text style={styles.Text}>
            To offer you the best tailored diet experience we need to know more
            information about you.
          </Text>
        </View>

        <View style={styles.IngredientsContainer}>
          <View style={styles.NoneContainer}>
            <Text style={styles.Gluten}>None</Text>
          </View>

          <View style={styles.VeganContainer}>
            <Text style={styles.Gluten}>Vegan</Text>
          </View>

          <View style={styles.PaleoContainer}>
            <Text style={styles.ActiveText}>Paleo</Text>
          </View>
        </View>

        <View style={styles.SecondIngredientsContainer}>
          <View style={styles.DukanContainer}>
            <Text style={styles.Gluten}>Dukan</Text>
          </View>

          <View style={styles.VegetarianContainer}>
            <Text style={styles.Gluten}>Vegetarian</Text>
          </View>
        </View>

        <View style={styles.SecondIngredientsContainer}>
          <View style={styles.AtkinsContainer}>
            <Text style={styles.Gluten}>Atkins</Text>
          </View>

          <View style={styles.IntermittentContainer}>
            <Text style={styles.Gluten}>Intermittent Fasting</Text>
          </View>
        </View>
        <View style={styles.ButtonsContainer}>
          <TouchableOpacity
            style={styles.Previous}
            onPress={() => navigation.goBack()}>
            <Text style={styles.PreviousText}>Previous</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.Next}
            onPress={() => {
              navigation.navigate('Notification');
            }}>
            <Text style={styles.NextText}>Next</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default StepFourScreen;

const styles = StyleSheet.create({
  ScreenContainer: {
    flex: 1,
    backgroundColor: Colors.ExactWhite,
  },
  ScrollViewFlex: {
    flexGrow: 1,
  },
  StepsContainer: {
    marginTop: ratio.heightPixel(21),
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginLeft: ratio.widthPixel(15),
    marginRight: ratio.widthPixel(9.98),
  },
  Steps: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  Step: {
    width: ratio.widthPixel(13.041),
    height: ratio.heightPixel(13.041),
    borderWidth: ratio.widthPixel(1),
    marginRight: ratio.widthPixel(5.52),
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    textAlign: 'center',
    borderRadius: 9999,
  },
  StepText: {
    fontSize: ratio.fontPixel(7.416),
    lineHeight: ratio.fontPixel(9.233),
    fontFamily: FontFamily.SF_Regular,
    letterSpacing: ratio.fontPixel(0.265),
    color: Colors.ExactBlack,
  },
  OnActiveStep: {
    width: ratio.widthPixel(13.041),
    height: ratio.heightPixel(13.041),
    marginRight: ratio.widthPixel(5.52),
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    textAlign: 'center',
    borderRadius: 9999,
    backgroundColor: Colors.ExactPurple,
  },
  OnActiveText: {
    fontSize: ratio.fontPixel(7.416),
    lineHeight: ratio.fontPixel(9.233),
    fontFamily: FontFamily.SF_Regular,
    letterSpacing: ratio.fontPixel(0.265),
    color: Colors.ExactWhite,
  },
  RestStep: {
    width: ratio.widthPixel(13.041),
    height: ratio.heightPixel(13.041),
    marginRight: ratio.widthPixel(5.52),
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    textAlign: 'center',
    borderRadius: 9999,
    backgroundColor: Colors.PrimaryGray,
  },
  Skip: {
    fontSize: ratio.fontPixel(9.573),
    lineHeight: ratio.fontPixel(11.918),
    fontFamily: FontFamily.SF_Bold,
    letterSpacing: ratio.fontPixel(0.239),
    color: Colors.ExactLightBlue,
  },
  HeaderContainer: {
    marginTop: ratio.heightPixel(21.01),
    width: ratio.widthPixel(148.467),
    height: ratio.heightPixel(39.123),
  },
  Header: {
    fontSize: ratio.fontPixel(15.549),
    lineHeight: ratio.fontPixel(19.358),
    fontFamily: FontFamily.SF_SemiBold,
    color: Colors.ExactBlack,
    marginLeft: ratio.widthPixel(15),
  },
  TextContainer: {
    marginTop: ratio.heightPixel(21.01),
    width: ratio.widthPixel(138.435),
    height: ratio.heightPixel(33.104),
  },
  Text: {
    fontSize: ratio.fontPixel(9.028),
    lineHeight: ratio.fontPixel(11.24),
    letterSpacing: ratio.fontPixel(0.251),
    fontFamily: FontFamily.SF_Regular,
    color: Colors.ExactBlack,
    marginLeft: ratio.widthPixel(15),
  },
  IngredientsContainer: {
    marginTop: ratio.heightPixel(22.57),
    flexDirection: 'row',
    marginLeft: ratio.widthPixel(15.5),
  },
  NoneContainer: {
    width: ratio.widthPixel(60.917),
    height: ratio.heightPixel(16.421),
    borderRadius: ratio.widthPixel(7.524),
    borderWidth: 0.502,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: ratio.widthPixel(5.02),
  },
  Gluten: {
    color: Colors.ExactBlack,
    textAlign: 'center',
    fontFamily: FontFamily.SF_Regular,
    fontSize: ratio.fontPixel(9.028),
    lineHeight: ratio.fontPixel(11.24),
    letterSpacing: ratio.fontPixel(0.251),
  },
  VeganContainer: {
    width: ratio.widthPixel(52.972),
    height: ratio.heightPixel(16.421),
    borderRadius: ratio.widthPixel(7.524),
    borderWidth: 0.502,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: ratio.widthPixel(5.02),
  },
  IntermittentContainer: {
    width: ratio.widthPixel(105.943),
    height: ratio.heightPixel(16.421),
    borderRadius: ratio.widthPixel(7.524),
    borderWidth: 0.502,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: ratio.widthPixel(5.02),
  },
  SecondIngredientsContainer: {
    marginTop: ratio.heightPixel(8.53),
    flexDirection: 'row',
    marginLeft: ratio.widthPixel(15.5),
  },
  DukanContainer: {
    width: ratio.widthPixel(48.734),
    height: ratio.heightPixel(16.421),
    borderRadius: ratio.widthPixel(7.524),
    borderWidth: 0.502,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: ratio.widthPixel(5.02),
  },
  VegetarianContainer: {
    width: ratio.widthPixel(73.101),
    height: ratio.heightPixel(16.421),
    borderRadius: ratio.widthPixel(7.524),
    borderWidth: 0.502,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: ratio.widthPixel(5.02),
  },
  AtkinsContainer: {
    width: ratio.widthPixel(60.917),
    height: ratio.heightPixel(16.421),
    borderRadius: ratio.widthPixel(7.524),
    borderWidth: 0.502,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: ratio.widthPixel(5.02),
  },
  PaleoContainer: {
    backgroundColor: Colors.ExactPurple,
    width: ratio.widthPixel(41.848),
    height: ratio.heightPixel(16.421),
    borderRadius: ratio.widthPixel(7.524),
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: ratio.widthPixel(5.02),
  },
  ActiveText: {
    color: Colors.ExactWhite,
    textAlign: 'center',
    fontFamily: FontFamily.SF_Regular,
    fontSize: ratio.fontPixel(9.028),
    lineHeight: ratio.fontPixel(11.24),
    letterSpacing: ratio.fontPixel(0.251),
  },
  ButtonsContainer: {
    marginTop: ratio.heightPixel(152.82),
    flexDirection: 'row',
    marginLeft: ratio.widthPixel(15.5),
    marginRight: ratio.widthPixel(16.86),
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  Previous: {
    width: ratio.widthPixel(75.144),
    height: ratio.heightPixel(26.803),
    borderRadius: 2.393,
    backgroundColor: '#F2F2F2',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Next: {
    width: ratio.widthPixel(75.144),
    height: ratio.heightPixel(26.803),
    borderRadius: 2.393,
    backgroundColor: Colors.ExactPurple,
    alignItems: 'center',
    justifyContent: 'center',
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
});
