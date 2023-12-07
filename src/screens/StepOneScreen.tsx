import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

import ratio from '../style/ratio';
import {Colors, FontFamily} from '../style/Gobalstyle';

interface StepOneScreenProps {
  navigation: any;
}
const StepOneScreen: React.FC<StepOneScreenProps> = ({navigation}) => {
  return (
    <View style={styles.ScreenContainer}>
      <StatusBar backgroundColor={Colors.ExcatWhite} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.ScrollViewFlex}>
        <View style={styles.StepsContainer}>
          <View style={styles.Steps}>
            <View style={styles.Step}>
              <Text style={styles.StepText}>1</Text>
            </View>
            <View style={styles.OnActiveStep}>
              <Text style={styles.OnActiveText}>2</Text>
            </View>
            <View style={styles.RestStep}>
              <Text style={styles.StepText}>3</Text>
            </View>
            <View style={styles.RestStep}>
              <Text style={styles.StepText}>4</Text>
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
          <Text style={styles.Header}>Any ingredient allergies?</Text>
        </View>
        <View style={styles.TextContainer}>
          <Text style={styles.Text}>
            To offer you the best tailored diet experience we need to know more
            information about you.
          </Text>
        </View>

        <View style={styles.IngredientsContainer}>
          <View style={styles.GlutenContainer}>
            <Text style={styles.Gluten}>Gluten</Text>
          </View>

          <View style={styles.DariyContainer}>
            <Text style={styles.Gluten}>Dariy</Text>
          </View>

          <View style={styles.EggContainer}>
            <Text style={styles.Gluten}>Egg</Text>
          </View>
        </View>

        <View style={styles.SecondIngredientsContainer}>
          <View style={styles.SoyContainer}>
            <Text style={styles.Gluten}>Soy</Text>
          </View>

          <View style={styles.PeanutContainer}>
            <Text style={styles.Gluten}>Peanut</Text>
          </View>

          <View style={styles.WheatContainer}>
            <Text style={styles.Gluten}>Wheat</Text>
          </View>
        </View>

        <View style={styles.SecondIngredientsContainer}>
          <View style={styles.MilkContainer}>
            <Text style={styles.Gluten}>Milk</Text>
          </View>

          <View style={styles.FishContainer}>
            <Text style={styles.ActiveText}>Fish</Text>
          </View>
        </View>
        <View style={styles.ButtonsContainer}>
          <TouchableOpacity style={styles.Previous} onPress={() => {
                            navigation.navigate('Onboarding');
                        }}>
            <Text style={styles.PreviousText}>Previous</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.Next} onPress={() => {
                            navigation.navigate('StepFour');
                        }}>
            <Text style={styles.NextText}>Next</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default StepOneScreen;

const styles = StyleSheet.create({
  ScreenContainer: {
    flex: 1,
    backgroundColor: Colors.ExcatWhite,
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
    fontFamily: FontFamily.Regular,
    letterSpacing: ratio.fontPixel(0.265),
    color: Colors.ExcatBlack,
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
    backgroundColor: Colors.ExcatPurple,
  },
  OnActiveText: {
    fontSize: ratio.fontPixel(7.416),
    lineHeight: ratio.fontPixel(9.233),
    fontFamily: FontFamily.Regular,
    letterSpacing: ratio.fontPixel(0.265),
    color: Colors.ExcatWhite,
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
    fontFamily: FontFamily.Bold,
    letterSpacing: ratio.fontPixel(0.239),
    color: Colors.ExcatLightBlue,
  },
  HeaderContainer: {
    marginTop: ratio.heightPixel(21.01),
    width: ratio.widthPixel(148.467),
    height: ratio.heightPixel(39.123),
  },
  Header: {
    fontSize: ratio.fontPixel(15.549),
    lineHeight: ratio.fontPixel(19.358),
    fontFamily: FontFamily.SemiBold,
    color: Colors.ExcatBlack,
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
    fontFamily: FontFamily.Regular,
    color: Colors.ExcatBlack,
    marginLeft: ratio.widthPixel(15),
  },
  IngredientsContainer: {
    marginTop: ratio.heightPixel(22.57),
    flexDirection: 'row',
    marginLeft: ratio.widthPixel(15.5),
  },
  GlutenContainer: {
    width: ratio.widthPixel(57.681),
    height: ratio.heightPixel(15.549),
    borderRadius: ratio.widthPixel(7.524),
    borderWidth: 0.502,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: ratio.widthPixel(5.02),
  },
  Gluten: {
    color: Colors.ExcatBlack,
    textAlign: 'center',
    fontFamily: FontFamily.Regular,
    fontSize: ratio.fontPixel(9.028),
    lineHeight: ratio.fontPixel(11.24),
    letterSpacing: ratio.fontPixel(0.251),
  },
  DariyContainer: {
    width: ratio.widthPixel(50.158),
    height: ratio.heightPixel(15.549),
    borderRadius: ratio.widthPixel(7.524),
    borderWidth: 0.502,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: ratio.widthPixel(5.02),
  },
  EggContainer: {
    width: ratio.widthPixel(39.625),
    height: ratio.heightPixel(15.549),
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
  WheatContainer: {
    width: ratio.widthPixel(48.653),
    height: ratio.heightPixel(15.549),
    borderRadius: ratio.widthPixel(7.524),
    borderWidth: 0.502,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: ratio.widthPixel(5.02),
  },
  SoyContainer: {
    width: ratio.widthPixel(38.621),
    height: ratio.heightPixel(15.549),
    borderRadius: ratio.widthPixel(7.524),
    borderWidth: 0.502,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: ratio.widthPixel(5.02),
  },
  PeanutContainer: {
    width: ratio.widthPixel(57.681),
    height: ratio.heightPixel(15.549),
    borderRadius: ratio.widthPixel(7.524),
    borderWidth: 0.502,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: ratio.widthPixel(5.02),
  },
  MilkContainer: {
    width: ratio.widthPixel(57.681),
    height: ratio.heightPixel(15.549),
    borderRadius: ratio.widthPixel(7.524),
    borderWidth: 0.502,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: ratio.widthPixel(5.02),
  },
  FishContainer: {
    backgroundColor: Colors.ExcatPurple,
    width: ratio.widthPixel(57.681),
    height: ratio.heightPixel(15.549),
    borderRadius: ratio.widthPixel(7.524),
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: ratio.widthPixel(5.02),
  },
  ActiveText: {
    color: Colors.ExcatWhite,
    textAlign: 'center',
    fontFamily: FontFamily.Regular,
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
    backgroundColor: Colors.ExcatPurple,
    alignItems: 'center',
    justifyContent: 'center',
  },
  NextText: {
    color: Colors.ExcatWhite,
    fontSize: ratio.fontPixel(10.051),
    lineHeight: ratio.fontPixel(12.514),
    fontFamily: FontFamily.Bold,
    letterSpacing: ratio.fontPixel(0.239),
  },
  PreviousText: {
    color: Colors.ExcatBlack,
    fontSize: ratio.fontPixel(10.051),
    lineHeight: ratio.fontPixel(12.514),
    fontFamily: FontFamily.Bold,
    letterSpacing: ratio.fontPixel(0.239),
  },
});
