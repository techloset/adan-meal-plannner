import {
  View,
  Image,
  Text,
  StyleSheet,
  StatusBar,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import ratio from '../libs/ratio';
import {Colors, FontFamily} from '../style/GlobalStyle';
import {ScreenNames} from '../navigation/Screens';

const RecipeScreen = ({navigation}) => {
  return (
    <View style={styles.ScreenContainer}>
      <StatusBar backgroundColor={Colors.ExactWhite} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.ScrollViewFlex}>
        <ImageBackground
          source={require('../assets/images/dish.jpg')}
          style={styles.BackgroundImage}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image
              source={require('../assets/images/leftarrow.png')}
              style={styles.ArrowImage}
            />
          </TouchableOpacity>
          <Image
            source={require('../assets/images/dots.png')}
            style={styles.dotsImage}
          />
        </ImageBackground>
        <View style={styles.whiteContainer}>
          <View style={styles.headerContainer}>
            <Image
              source={require('../assets/images/replay.png')}
              style={styles.replayImage}
            />
            <Text style={styles.Ramen}>Ramen</Text>
          </View>
          <Text style={styles.Time}>Lunch / 15 mins</Text>
          <View style={styles.ingredients}>
            <View style={styles.ingredientsContainer}>
              <View style={styles.View}>
                <Text style={styles.price}>100 k</Text>
                <Text style={styles.title}>Energy</Text>
              </View>
              <View style={styles.View}>
                <Text style={styles.price}>15 g</Text>
                <Text style={styles.title}>Protein</Text>
              </View>
              <View style={styles.View}>
                <Text style={styles.price}>58 g</Text>
                <Text style={styles.title}>Carbs</Text>
              </View>
              <View style={styles.View}>
                <Text style={styles.price}>20 g</Text>
                <Text style={styles.title}>Fat</Text>
              </View>
            </View>
          </View>
          <View style={styles.Recipe}>
            <View style={styles.RecipeContainer}>
              <Text style={styles.RecipeTitle}>
                Ingredients
                <Text style={styles.RecipeText}>{'    '}2 serves</Text>
              </Text>
              <Image
                source={require('../assets/images/plusminus.png')}
                style={styles.plusminusImage}
              />
            </View>
            <View style={styles.RecipeContainer}>
              <Text style={styles.RecipeTitleTwo}>Chicken breasts</Text>
              <Text style={styles.RecipesTitleTwo}>250 g</Text>
            </View>
            <View style={styles.RecipeContainer}>
              <Text style={styles.RecipeTitleTwo}>Unsalted butter</Text>
              <Text style={styles.RecipesTitleTwo}>1 tbsp</Text>
            </View>
            <View style={styles.RecipeContainer}>
              <Text style={styles.RecipeTitleTwo}>
                Sesame or vegetable oils
              </Text>
              <Text style={styles.RecipesTitleTwo}>2 tsp</Text>
            </View>
            <View style={styles.RecipeContainer}>
              <Text style={styles.RecipeTitleTwo}>Fresh ginger</Text>
              <Text style={styles.RecipesTitleTwo}>2 tsp</Text>
            </View>
            <View style={styles.RecipeContainer}>
              <Text style={styles.RecipeTitleTwo}>Large eggs</Text>
              <Text style={styles.RecipesTitleTwo}>2 tsp</Text>
            </View>
            <View style={styles.bottomContainer}>
              <LinearGradient
                colors={[Colors.ExactWhite, Colors.Transparent]}
                start={{x: 1, y: 1}}
                end={{x: 1, y: 0}}
                style={styles.BgLinearContainer}
              />
            </View>
          </View>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate(`${ScreenNames.PREPARATION}`);
            }}>
            <View style={styles.ButtonContainer}>
              <Text style={styles.ButtonText}>Start cooking</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default RecipeScreen;

const styles = StyleSheet.create({
  ScreenContainer: {
    flex: 1,
    backgroundColor: Colors.ExactWhite,
  },
  ScrollViewFlex: {
    flexGrow: 1,
  },
  BackgroundImage: {
    width: ratio.widthPixel(220),
    height: ratio.heightPixel(215),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  ArrowImage: {
    marginTop: ratio.heightPixel(4.5),
    width: ratio.widthPixel(19.911),
    height: ratio.heightPixel(19.911),
    marginLeft: ratio.widthPixel(11),
  },
  dotsImage: {
    marginTop: ratio.heightPixel(4.5),
    width: ratio.widthPixel(13.016),
    height: ratio.heightPixel(13.016),
    marginRight: ratio.widthPixel(11),
  },
  whiteContainer: {
    position: 'absolute',
    backgroundColor: Colors.ExactWhite,
    top: ratio.heightPixel(135.5),
    width: ratio.widthPixel(220.278),
    borderTopRightRadius: ratio.widthPixel(15),
    borderTopLeftRadius: ratio.widthPixel(15),
  },
  headerContainer: {
    flexDirection: 'row',
    marginTop: ratio.heightPixel(11.01),
    marginLeft: ratio.widthPixel(16.02),
    alignItems: 'center',
  },
  replayImage: {
    width: ratio.widthPixel(10.513),
    height: ratio.heightPixel(10.513),
  },
  Ramen: {
    marginLeft: ratio.widthPixel(64.07),
    fontSize: ratio.fontPixel(14.018),
    lineHeight: ratio.fontPixel(17.452),
    fontFamily: FontFamily.SF_SemiBold,
    color: Colors.ExactBlack,
  },
  Time: {
    marginTop: ratio.heightPixel(2.5),
    marginBottom: ratio.heightPixel(10.5),
    fontSize: ratio.fontPixel(7.009),
    lineHeight: ratio.fontPixel(8.726),
    fontFamily: FontFamily.SF_SemiBold,
    color: '#676767',
    textAlign: 'center',
  },
  ingredients: {
    backgroundColor: '#F4F4F4',
    alignItems: 'center',
    justifyContent: 'center',
  },
  ingredientsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: ratio.heightPixel(34.043),
    backgroundColor: '#F4F4F4',
    width: ratio.widthPixel(170),
  },
  View: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  price: {
    fontSize: ratio.fontPixel(7.009),
    lineHeight: ratio.fontPixel(8.726),
    fontFamily: FontFamily.SF_Regular,
    color: Colors.ExactBlack,
  },
  title: {
    marginTop: ratio.heightPixel(1.5),
    fontSize: ratio.fontPixel(9.011),
    lineHeight: ratio.fontPixel(11.219),
    fontFamily: FontFamily.SF_Medium,
    color: Colors.ExactBlack,
  },
  RecipeContainer: {
    paddingLeft: ratio.widthPixel(28.54),
    paddingRight: ratio.widthPixel(10.03),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: ratio.heightPixel(11.5),
  },
  plusminusImage: {
    width: ratio.widthPixel(37.979),
    height: ratio.heightPixel(13.516),
  },
  RecipeTitle: {
    fontSize: ratio.fontPixel(9.011),
    lineHeight: ratio.fontPixel(11.219),
    fontFamily: FontFamily.SF_Medium,
    color: Colors.ExactBlack,
  },
  RecipeText: {
    fontSize: ratio.fontPixel(7.009),
    lineHeight: ratio.fontPixel(8.726),
    fontFamily: FontFamily.SF_Medium,
    color: '#A6A6A6',
    paddingLeft: ratio.widthPixel(5.5),
  },
  RecipeTitleTwo: {
    fontSize: ratio.fontPixel(9.011),
    lineHeight: ratio.fontPixel(11.219),
    fontFamily: FontFamily.SF_Regular,
    color: Colors.ExactBlack,
  },
  RecipesTitleTwo: {
    fontSize: ratio.fontPixel(8.01),
    lineHeight: ratio.fontPixel(9.973),
    fontFamily: FontFamily.SF_Regular,
    color: '#B5B5B5',
    paddingRight: ratio.widthPixel(5.5),
  },
  Recipe: {
    position: 'relative',
  },
  bottomContainer: {
    position: 'absolute',
    bottom: 0,
    backgroundColor: Colors.ExactWhite,
  },
  BgLinearContainer: {
    position: 'absolute',
    bottom: -10,
    width: ratio.widthPixel(219.313),
    height: ratio.heightPixel(36.968),
  },
  ButtonContainer: {
    marginTop: ratio.heightPixel(19.4),
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
