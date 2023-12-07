import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AuthScreen from '../screens/AuthScreen';
import OnboardingScreen from '../screens/OnboardingScreen';
import StepOneScreen from '../screens/StepOneScreen';
import StepFourScreen from '../screens/StepFourScreen';
import Notification from '../screens/Notifications';
import FeedbackScreen from '../screens/FeedbackSceen';
import UpgradeScreen from '../screens/UpgradeScreen';
import Tabnavigator from './tabNavigation';
import RecipeScreen from '../screens/RecipeScreen';
const Stack = createNativeStackNavigator();

const StackNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Auth" component={AuthScreen} />
        <Stack.Screen name="Onboarding" component={OnboardingScreen} />
        <Stack.Screen name="StepOne" component={StepOneScreen} />
        <Stack.Screen name="StepFour" component={StepFourScreen} />
        <Stack.Screen name="Notification" component={Notification} />
        <Stack.Screen name="Feedback" component={FeedbackScreen} />
        <Stack.Screen name="Upgrade" component={UpgradeScreen} />
        <Stack.Screen name="RecipeScreen" component={RecipeScreen} />
        <Stack.Screen name="Tab" component={Tabnavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigation;
