import { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Alert } from 'react-native';

import Title from '../components/ui/Title';
import NumberContainer from '../components/game/NumberContainer';

import Colors from '../constants/colors';
import PrimaryButton from '../components/ui/PrimaryButton';

const generateRandomBetween = (min, max, exclude) => {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
}

let minBound = 1;
let maxBound = 100;

function GameScreen(props) {
  const initialGuess = generateRandomBetween(minBound, maxBound, props.userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);

  const nextGuessHandler = (direction) => {
    if ((direction === 'lower' && currentGuess < props.userNumber) 
      || (direction === 'greater' && currentGuess > props.userNumber)) {
        Alert.alert('Don\'t lie', 'You know that this is wrong...', 
        [{ text: 'Sorry!', style: 'cancel' }]);
        return;
    }

    if (direction === 'lower') {
      maxBound = currentGuess;
      newRandNumber = generateRandomBetween(minBound, maxBound, currentGuess);
    } else {
      minBound = currentGuess + 1;
    }
    const newRandNumber = generateRandomBetween(minBound, maxBound, currentGuess);
    setCurrentGuess(newRandNumber);
  }

  return (
    <View style={styles.screen}>
      <Title>Oponent's Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <View>
        <Text>Higher or Lower?</Text>
        <View>
          <PrimaryButton onPress={nextGuessHandler.bind(this, 'greater')}>+</PrimaryButton>
          <PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')}>-</PrimaryButton>
        </View>
      </View>
      <View></View>
    </View>
  );
}

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24
  }
});