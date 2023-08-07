import React, {useCallback, useEffect, useMemo, useRef, useState} from 'react';
import {Animated, Pressable, StyleSheet, Text, ViewStyle} from 'react-native';
import {IFlashCard} from '../../entities/flashcard';

interface Props {
  flashcard: IFlashCard;
}

function Card({flashcard}: Props): JSX.Element {
  const flipAnimation = useRef(new Animated.Value(0)).current;
  const [showFront, setShowFront] = useState<boolean>(true);

  const [flipAnimationStyle, flipAnimationTo] = useMemo(
    () => animations.flip(flipAnimation),
    [flipAnimation],
  );

  const flipToFront = useCallback(() => {
    setTimeout(() => setShowFront(true), 100);
    flipAnimationTo(0);
  }, [flipAnimationTo]);

  const flipToBack = () => {
    setTimeout(() => setShowFront(false), 100);
    flipAnimationTo(180);
  };

  useEffect(() => {
    setShowFront(true);
    flipToFront();
  }, [flashcard, flipToFront]);

  return (
    <Pressable onPress={() => (showFront ? flipToBack() : flipToFront())}>
      <Animated.View
        style={[styles.card, styles.cardShadow, flipAnimationStyle]}>
        <Text style={[styles.cardContent, showFront ? {} : styles.cardBack]}>
          {showFront ? flashcard.front : flashcard.back}
        </Text>
      </Animated.View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    height: 500,
    borderRadius: 32,
    padding: 48,
    margin: 16,
    backgroundColor: 'white',
  },
  cardShadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 15,
      height: 15,
    },
    shadowOpacity: 0.27,
    elevation: 3,
  },
  cardBack: {
    transform: [
      {
        rotateY: '180deg',
      },
    ],
  },
  cardContent: {
    fontSize: 32,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const animations = {
  flip: (
    animation: Animated.Value,
  ): [Animated.AnimatedProps<ViewStyle>, (value: number) => void] => [
    {
      transform: [
        {
          rotateY: animation.interpolate({
            inputRange: [0, 180],
            outputRange: ['0deg', '180deg'],
          }),
        },
      ],
      elevation: animation.interpolate({
        inputRange: [0, 1, 120, 180],
        outputRange: [3, 0, 0, 3],
      }),
    },
    (value: number) => {
      Animated.timing(animation, {
        toValue: value,
        duration: 300,
        delay: 10,
        useNativeDriver: true,
      }).start();
    },
  ],
};

export default Card;
