import {LoginScreen, HomeScreen, FlashCardListScreen} from './Screens';
import {RootStackParamList} from './screens-config.interface';

export interface Screen {
  name: keyof RootStackParamList;
  title: string;
  component: React.FC<any>;
}

export const SCREENS: {[key: string]: Screen} = {
  Login: {
    name: 'Login',
    title: 'Login',
    component: LoginScreen,
  },
  Home: {
    name: 'Home',
    title: 'Home',
    component: HomeScreen,
  },
  FlashCardList: {
    name: 'FlashCardList',
    title: 'FlashCards',
    component: FlashCardListScreen,
  },
};
