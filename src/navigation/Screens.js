import HomeScreen from '../screens/HomeScreen';
import ChatScreen from '../screens/ChatScreen';
import ListScreen from '../screens/ListScreen';
import MealScreen from '../screens/MealScreen';
import AuthScreen from '../screens/AuthScreen';
import OnboardingScreen from '../screens/OnboardingScreen';
import StepOneScreen from '../screens/StepOneScreen';
import StepFourScreen from '../screens/StepFourScreen';
import NotificationScreen from '../screens/NotificationScreen';
import FeedbackScreen from '../screens/FeedbackScreen';
import UpgradeScreen from '../screens/UpgradeScreen';
import TabNavigator from './tabNavigation';
import RecipeScreen from '../screens/RecipeScreen';
import PreparationScreen from '../screens/PreparationScreen';
import SettingsScreen from '../screens/SettingsScreen';

export const ScreenNames = {
  AUTH: 'Auth',
  ONBOARDING: 'Onboarding',
  STEP_ONE: 'StepOne',
  STEP_FOUR: 'StepFour',
  NOTIFICATION: 'Notification',
  FEEDBACK: 'Feedback',
  UPGRADE: 'Upgrade',
  RECIPE: 'Recipe',
  PREPARATION: 'Preparation',
  SETTINGS: 'Setting',
  TAB: 'Tab',
  HOME: 'Home',
  MEAL: 'Meal',
  LIST: 'List',
  CHAT: 'Chat',
};

export const StackScreens = [
  {
    name: ScreenNames.AUTH,
    component: AuthScreen,
  },
  {
    name: ScreenNames.ONBOARDING,
    component: OnboardingScreen,
  },
  {
    name: ScreenNames.STEP_ONE,
    component: StepOneScreen,
  },
  {
    name: ScreenNames.STEP_FOUR,
    component: StepFourScreen,
  },
  {
    name: ScreenNames.NOTIFICATION,
    component: NotificationScreen,
  },
  {
    name: ScreenNames.FEEDBACK,
    component: FeedbackScreen,
  },
  {
    name: ScreenNames.UPGRADE,
    component: UpgradeScreen,
  },

  {
    name: ScreenNames.TAB,
    component: TabNavigator,
  },
  {
    name: ScreenNames.RECIPE,
    component: RecipeScreen,
  },
  {
    name: ScreenNames.PREPARATION,
    component: PreparationScreen,
  },
  {
    name: ScreenNames.SETTINGS,
    component: SettingsScreen,
  },
];

export const TabScreens = [
  {
    name: ScreenNames.HOME,
    component: HomeScreen,
    icon: require('../assets/images/sun.png'),
    label: 'Today',
  },
  {
    name: ScreenNames.MEAL,
    component: MealScreen,
    icon: require('../assets/images/plate.png'),
    label: 'Meal Plan',
  },
  {
    name: ScreenNames.LIST,
    component: ListScreen,
    icon: require('../assets/images/list.png'),
    label: 'Grocery List',
  },
  {
    name: ScreenNames.CHAT,
    component: ChatScreen,
    icon: require('../assets/images/chat.png'),
    label: 'Chat',
  },
];
