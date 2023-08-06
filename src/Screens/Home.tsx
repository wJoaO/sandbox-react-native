import React from 'react';
import {Button, Text, View} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../screens-config.interface';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

export function HomeScreen({navigation, route}: Props): JSX.Element {
  const {name} = route.params ?? {};
  return (
    <View>
      <Text>{name}</Text>
      <Button
        title="Flash Cards"
        onPress={() => navigation.navigate('FlashCardList')}
      />
      <Button title="Log out" onPress={() => navigation.navigate('Login')} />
    </View>
  );
}
