import React from 'react';
import {
  ActivityIndicator,
  ScrollView,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../screens-config.interface';
import {useFlashCardGroupList, FlashCardGroup} from '../entities/flashcard';
import Icon from 'react-native-vector-icons/MaterialIcons';

type Props = NativeStackScreenProps<RootStackParamList, 'FlashCardList'>;

export function FlashCardListScreen({}: Props): JSX.Element {
  const {isLoading, data, isError} = useFlashCardGroupList();
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

  const renderFlashCardGroup = (group: FlashCardGroup) => (
    <View key={group.name} style={styles.card}>
      <TouchableHighlight
        style={styles.cardContentWrapper}
        activeOpacity={0.6}
        underlayColor="#DDDDDD"
        onPress={() => {
          console.log('Hello world pressed');
        }}>
        <View style={styles.cardContent}>
          <Text>{group.name}</Text>
          <Icon name="view-carousel" style={styles.cardIcon} />
        </View>
      </TouchableHighlight>
    </View>
  );

  return (
    <ScrollView style={styles.page}>
      <View style={styles.container}>{data.map(renderFlashCardGroup)}</View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  card: {
    marginVertical: 8,
    marginHorizontal: 16,
  },
  cardContentWrapper: {
    borderRadius: 8,
    backgroundColor: 'white',
    padding: 16,
  },
  cardContent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  cardIcon: {
    fontSize: 24,
  },
  page: {
    backgroundColor: '#ECEFF1',
    paddingTop: 8,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
});
