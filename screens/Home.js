import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ImageBackground,
} from 'react-native';
import React from 'react';
import Title from '../Components/Title';

const Home = ({navigation}) => {
  return (
    <View style={styles.homeContainer}>
      <Title title="quiz ninja" />
      <View style={styles.homeHero}>
        <Image
          source={{
            uri: 'https://cdni.iconscout.com/illustration/premium/preview/tv-quiz-show-5330045-4459343.png?w=0&h=1400',
          }}
          style={styles.hero}
          resizeMode="contain"
        />
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate('Quiz')}
        style={styles.homeBtn}>
        <Text style={styles.homebtn__text}>BEGIN QUIZ</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  hero: {
    height: 300,
    width: 300,
  },
  homeHero: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  homeContainer: {
    paddingTop: 40,
    paddingHorizontal: 20,
    height: '100%',
  },
  homeBtn: {
    width: '100%',
    backgroundColor: '#BDE0FE',
    padding: 20,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '20%',
  },
  homebtn__text: {
    fontWeight: 'bold',
    fontSize: 30,
    color: '#1d3557',
  },
});
