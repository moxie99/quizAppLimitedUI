import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import Title from '../Components/Title';

const Result = ({route, navigation}) => {
  const {score} = route.params;

  const resultBanner =
    score >= 200
      ? 'https://cdni.iconscout.com/illustration/free/preview/successful-leader-1862207-1580201.png?w=0&h=1400'
      : 'https://cdni.iconscout.com/illustration/premium/preview/startup-failure-2357832-2016259.png?w=0&h=1400';
  return (
    <View style={styles.resultsContainer}>
      <View>
        <Title title="Result" />
      </View>
      <View style={styles.heroContainer}>
        <Image
          source={{
            uri: resultBanner,
          }}
          style={styles.hero}
          resizeMode="contain"
        />
      </View>
      <View style={{alignItems: 'center', justifyContent: 'center'}}>
        <TouchableOpacity onPress={() => null} style={styles.resultBtn}>
          <Text style={styles.resultBtn__text}>Your Score is: {score}</Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity
          onPress={() => navigation.navigate('Home')}
          style={styles.homeBtn}>
          <Text style={styles.homeBtn__text}>Home</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Result;

const styles = StyleSheet.create({
  hero: {
    height: 300,
    width: 300,
  },
  heroContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  resultsContainer: {
    paddingTop: 40,
    paddingHorizontal: 20,
    height: '100%',
  },
  resultBtn: {
    width: '80%',
    backgroundColor: '#BDE0FE',
    padding: 20,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '50%',
  },
  resultBtn__text: {
    fontWeight: 'bold',
    fontSize: 30,
    color: '#5a77d8',
  },
  homeBtn: {
    width: '100%',
    backgroundColor: 'green',
    padding: 20,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '20%',
  },
  homeBtn__text: {
    fontWeight: 'bold',
    fontSize: 30,
    color: '#fff',
  },
});
