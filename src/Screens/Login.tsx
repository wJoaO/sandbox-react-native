import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {Button, TextInput, View} from 'react-native';
import {RootStackParamList} from '../screens-config.interface';

type Props = NativeStackScreenProps<RootStackParamList, 'Login'>;

export function LoginScreen({navigation}: Props): JSX.Element {
  return (
    <View>
      <TextInput placeholder="Username" />
      <TextInput placeholder="Password" secureTextEntry />
      <Button
        title="Sign in"
        onPress={() => navigation.navigate('Home', {name: 'Hello world'})}
      />
      <Button title="Give up" />
    </View>
  );
}
