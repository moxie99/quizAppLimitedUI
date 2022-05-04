import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Title = props => {
  const title = props.title;
  return (
    <View style={styles.titleContainer}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default Title;

const styles = StyleSheet.create({
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#370617',
    textTransform: 'uppercase',
  },
  titleContainer: {
    paddingVertical: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
