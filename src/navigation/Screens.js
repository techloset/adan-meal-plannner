import HomeScreen from '../screens/HomeScreen';
import ChatScreen from '../screens/ChatScreen';
import ListScreen from '../screens/ListScreen';
import MealScreen from '../screens/MealScreen';

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

export const TabScreens = [{
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