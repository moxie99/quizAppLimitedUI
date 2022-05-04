import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Title from '../Components/Title';

const Quiz = ({navigation}) => {
  const [questions, setQuestions] = useState();
  const [questionNo, setQuestionNo] = useState(0);
  const getQuiz = async () => {
    const url = 'https://opentdb.com/api.php?amount=10&type=multiple';
    const response = await fetch(url);
    const data = await response.json();
    setQuestions(data.results);
  };
  useEffect(() => {
    getQuiz();
  }, []);
  return (
    <View style={styles.quizcontainer}>
      {questions && (
        <View style={styles.parent}>
          <View style={styles.quizquestion}>
            <Title title="Q. Question One" />
          </View>
          <View style={styles.quizoption}>
            <TouchableOpacity style={styles.quizOptionBtn}>
              <Text style={styles.quizOption__text}>Option A</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.quizOptionBtn}>
              <Text style={styles.quizOption__text}>Option B</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.quizOptionBtn}>
              <Text style={styles.quizOption__text}>Option C</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.quizOptionBtn}>
              <Text style={styles.quizOption__text}>Option D</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.quizbtn}>
            <TouchableOpacity style={styles.quizBtn}>
              <Text style={styles.quizBtn__text}>Previous</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.quizBtn}
              onPress={() => navigation.navigate('Result')}>
              <Text style={styles.quizBtn__text}>END</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.quizBtn}>
              <Text style={styles.quizBtn__text}>Next</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </View>
  );
};

export default Quiz;

const styles = StyleSheet.create({
  quizcontainer: {
    height: '100%',
    paddingTop: 40,
    paddingHorizontal: 20,
  },
  quizquestion: {
    marginVertical: 16,
    paddingHorizontal: 12,
  },
  quizoption: {
    flex: 1,
    marginVertical: 16,
    padding: 12,
  },
  quizbtn: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  quizBtn: {
    width: '30%',
    backgroundColor: '#BDE0FE',
    padding: 5,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  quizBtn__text: {
    fontWeight: 'bold',
    fontSize: 12,
    color: '#5a77d8',
    textTransform: 'uppercase',
  },
  quizOptionBtn: {
    width: '100%',
    backgroundColor: '#ffc6ff',
    paddingVertical: 12,
    marginVertical: 16,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  quizOption__text: {
    fontWeight: 'bold',
    fontSize: 30,
    color: '#480ca8',
    textTransform: 'uppercase',
  },
  parent: {
    height: '100%',
  },
});
