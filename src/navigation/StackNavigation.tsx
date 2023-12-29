import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AuthScreen from '../screens/AuthScreen';
import OnboardingScreen from '../screens/OnboardingScreen';
import StepOneScreen from '../screens/StepOneScreen';
import StepFourScreen from '../screens/StepFourScreen';
import Notification from '../screens/Notifications';
import FeedbackScreen from '../screens/FeedbackSceen';
import UpgradeScreen from '../screens/UpgradeScreen';
import TabNavigator from './tabNavigation';
import RecipeScreen from '../screens/RecipeScreen';
import Preparation from '../screens/Preparation';
import {ScreenNames} from './Screens';
import SettingsScreen from '../screens/SettingsScreen';

const Stack = createNativeStackNavigator();

const StackNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name={ScreenNames.AUTH} component={AuthScreen} />
        <Stack.Screen
          name={ScreenNames.ONBOARDING}
          component={OnboardingScreen}
        />
        <Stack.Screen name={ScreenNames.STEP_ONE} component={StepOneScreen} />
        <Stack.Screen name={ScreenNames.STEP_FOUR} component={StepFourScreen} />
        <Stack.Screen
          name={ScreenNames.NOTIFICATION}
          component={Notification}
        />
        <Stack.Screen name={ScreenNames.FEEDBACK} component={FeedbackScreen} />
        <Stack.Screen name={ScreenNames.UPGRADE} component={UpgradeScreen} />
        <Stack.Screen name={ScreenNames.RECIPE} component={RecipeScreen} />
        <Stack.Screen name={ScreenNames.PREPARATION} component={Preparation} />
        <Stack.Screen name={ScreenNames.SETTINGS} component={SettingsScreen} />
        <Stack.Screen name={ScreenNames.TAB} component={TabNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigation;
