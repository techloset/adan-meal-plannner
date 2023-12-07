import {
  View,
  Image,
  Text,
  StyleSheet,
  StatusBar,
  ScrollView,
  SafeAreaView,
  TextInput,
  ImageBackground,
} from 'react-native';

import ratio from '../style/ratio';
import {Colors, FontFamily} from '../style/Gobalstyle';

interface RecipeScreenProps {
  navigation: any;
}
const RecipeScreen: React.FC<RecipeScreenProps> = ({navigation}) => {
  return (
    <View style={styles.ScreenContainer}>
      <StatusBar backgroundColor={Colors.ExcatWhite} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.ScrollViewFlex}>
        <ImageBackground
          source={require('../assets/images/noodle.png')}
          style={styles.BackgroundImage}>
          <Image
            source={require('../assets/images/leftarrow.png')}
            style={styles.ArrowImage}
          />
          <Image
            source={require('../assets/images/dots.png')}
            style={styles.dotsImage}
          />
        </ImageBackground>
        <View style={styles.whiteContainer}>
          <View style={styles.headerContainer}>
            <Image
              source={require('../assets/images/replay.png')}
              style={styles.RelpayImage}
            />
            <Text style={styles.Ramen}>Ramen</Text>
          </View>
          <Text style={styles.Time}>Lunch / 15 mins</Text>
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
            
            <View>

            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default RecipeScreen;

const styles = StyleSheet.create({
  ScreenContainer: {
    flex: 1,
    backgroundColor: Colors.ExcatWhite,
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
    backgroundColor: Colors.ExcatWhite,
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
  RelpayImage: {
    width: ratio.widthPixel(10.513),
    height: ratio.heightPixel(10.513),
  },
  Ramen: {
    marginLeft: ratio.widthPixel(64.07),
    fontSize: ratio.fontPixel(14.018),
    lineHeight: ratio.fontPixel(17.452),
    fontFamily: FontFamily.SemiBold,
    color: Colors.ExcatBlack,
  },
  Time: {
    marginTop: ratio.heightPixel(2.5),
    marginBottom: ratio.heightPixel(10.5),
    fontSize: ratio.fontPixel(7.009),
    lineHeight: ratio.fontPixel(8.726),
    fontFamily: FontFamily.SemiBold,
    color: '#676767',
    textAlign: 'center',
  },
  ingredientsContainer: {
    paddingLeft: ratio.widthPixel(28.54),
    paddingRight: ratio.widthPixel(10.03),
    flexDirection: 'row',
    justifyContent: "space-between",
    alignItems: 'center',
    width: ratio.widthPixel(220.278),
    height: ratio.heightPixel(34.043),
    backgroundColor:"#F4F4F4"
  },
  View: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  price: {
    fontSize: ratio.fontPixel(7.009),
    lineHeight: ratio.fontPixel(8.726),
    fontFamily: FontFamily.Regular,
    color: Colors.ExcatBlack,
  },
  title: {
    marginTop: ratio.heightPixel(1.5),
    fontSize: ratio.fontPixel(9.011),
    lineHeight: ratio.fontPixel(11.219),
    fontFamily: FontFamily.Medium,
    color: Colors.ExcatBlack,
  },
});
