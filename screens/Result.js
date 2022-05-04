import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import Title from '../Components/Title';

const Result = ({navigation}) => {
  return (
    <View style={styles.resultsContainer}>
      <View>
        <Title title="Result" />
      </View>
      <View style={styles.heroContainer}>
        <Image
          source={{
            uri: 'https://cdni.iconscout.com/illustration/premium/preview/intellectual-show-3824642-3181282.png?w=0&h=1400',
          }}
          style={styles.hero}
          resizeMode="contain"
        />
      </View>
      <View>
        <TouchableOpacity
          onPress={() => navigation.navigate('Home')}
          style={styles.resultBtn}>
          <Text style={styles.resultBtn__text}>Home</Text>
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
    width: '100%',
    backgroundColor: '#BDE0FE',
    padding: 20,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  resultBtn__text: {
    fontWeight: 'bold',
    fontSize: 30,
    color: '#5a77d8',
  },
});
