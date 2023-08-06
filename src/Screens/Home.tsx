import React from 'react';
import {Button, View} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../screens-config.interface';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

export function HomeScreen({navigation}: Props): JSX.Element {
  return (
    <View>
      <Button title="Log out" onPress={() => navigation.navigate('Login')} />
    </View>
  );
}
