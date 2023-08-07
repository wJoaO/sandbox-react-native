/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../screens-config.interface';
import {useFlashCardGroup} from '../entities/flashcard';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {FlashCard} from '../Components/Flashcard';

type Props = NativeStackScreenProps<RootStackParamList, 'FlashCardGroup'>;

export function FlashCardGroupScreen({route, navigation}: Props): JSX.Element {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const {flashCardGroupId} = route.params;
  const {isLoading, data, isError} = useFlashCardGroup(flashCardGroupId);
  if (isLoading) {
    return (
      <View style={[styles.container, styles.horizontal, styles.page]}>
        <ActivityIndicator size="large" />
      </View>
    );
  }
  if (isError || !data) {
    return (
      <View style={[styles.container, styles.horizontal, styles.page]}>
        <Text>Something went wrong</Text>
      </View>
    );
  }
  const currentCard = data.cards[currentIndex];

  const nextCard = () => {
    if (currentIndex + 1 >= data.cards.length) {
      navigation.goBack();
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <View>
      <FlashCard.Card flashcard={currentCard} />
      <View style={styles.actions}>
        <TouchableOpacity
          style={{...styles.actionButton, backgroundColor: '#EF5350'}}
          onPress={nextCard}>
          <Icon name="clear" size={30} color="white" />
        </TouchableOpacity>
        <TouchableOpacity
          style={{...styles.actionButton, backgroundColor: '#9CCC65'}}
          onPress={nextCard}>
          <Icon name="check" size={30} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
  page: {
    backgroundColor: '#ECEFF1',
    paddingTop: 8,
  },
  actions: {
    margin: 16,
    paddingHorizontal: 32,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  actionButton: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 70,
    height: 70,
    borderRadius: 50,
  },
});
