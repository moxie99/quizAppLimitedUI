import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Title from '../Components/Title';

const shuffleArray = array => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
};

const Quiz = ({navigation}) => {
  const [questions, setQuestions] = useState();
  const [questionNo, setQuestionNo] = useState(0);
  const [options, setOptions] = useState([]);
  const [score, setScore] = useState(0);

  const numberOfQuestions = 30;
  //get  questions
  const getQuiz = async () => {
    const url = `https://opentdb.com/api.php?amount=${numberOfQuestions}&type=multiple&encode=url3986`;
    const response = await fetch(url);
    const data = await response.json();
    setQuestions(data.results);
    setOptions(generateOptionsAndShuffle(data.results[0]));
  };

  //handle next button
  const handleNext = () => {
    setQuestionNo(questionNo + 1);
    setOptions(generateOptionsAndShuffle(questions[questionNo + 1]));
    if (questionNo === questions.size) {
      return;
    }
  };
  //handles the options
  const generateOptionsAndShuffle = _question => {
    const options = [..._question.incorrect_answers];
    options.push(_question.correct_answer);
    shuffleArray(options);
    return options;
  };

  const handleSelectedOption = _option => {
    if (_option === questions[questionNo].correct_answers) {
      setScore(score + 10);
    }
    if (questionNo !== numberOfQuestions - 1) {
      setQuestionNo(questionNo + 1);
      setOptions(generateOptionsAndShuffle(questions[questionNo + 1]));
    }
    console.log(score);
  };

  //handles previous button
  const handlePrev = () => {
    setQuestionNo(questionNo - 1);
    setOptions(generateOptionsAndShuffle(questions[questionNo - 1]));
    if (questionNo === 0) {
      return;
    }
  };
  // const shuffleOptions = array => {
  //   for (let i = array.length - 1; i >= 0; i--) {
  //     const j = Math.floor(Math.random() * (i + 1));
  //     [array[i], array[j]] = [array[j], array[j]];
  //   }
  // };

  useEffect(() => {
    getQuiz();
  }, []);
  return (
    <SafeAreaView>
      <View style={styles.quizcontainer}>
        {questions && (
          <View style={styles.parent}>
            <View style={styles.quizquestion}>
              <Title
                title={decodeURIComponent(
                  `Q${questionNo + 1}. ${questions[questionNo].question}`,
                )}
              />
            </View>
            <View style={styles.quizoption}>
              <TouchableOpacity
                onPress={() => handleSelectedOption(options[0])}
                style={styles.quizOptionBtn}>
                <Text style={styles.quizOption__text}>
                  {decodeURIComponent(options[0])}
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => handleSelectedOption(options[1])}
                style={styles.quizOptionBtn}>
                <Text style={styles.quizOption__text}>
                  {decodeURIComponent(options[1])}
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => handleSelectedOption(options[2])}
                style={styles.quizOptionBtn}>
                <Text style={styles.quizOption__text}>
                  {decodeURIComponent(options[2])}
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => handleSelectedOption(options[3])}
                style={styles.quizOptionBtn}>
                <Text style={styles.quizOption__text}>
                  {decodeURIComponent(options[3])}
                </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.quizbtn}>
              {questionNo > 0 && (
                <TouchableOpacity style={styles.quizBtn} onPress={handlePrev}>
                  <Text style={styles.quizBtn__text}>Previous</Text>
                </TouchableOpacity>
              )}

              <TouchableOpacity
                style={styles.quizBtn}
                onPress={() => navigation.navigate('Result')}>
                <Text style={styles.quizBtn__text}>END</Text>
              </TouchableOpacity>
              {questionNo < numberOfQuestions - 1 && (
                <TouchableOpacity style={styles.quizBtn} onPress={handleNext}>
                  <Text style={styles.quizBtn__text}>Next</Text>
                </TouchableOpacity>
              )}
              {questionNo === numberOfQuestions - 1 && (
                <TouchableOpacity style={styles.quizBtn} onPress={() => null}>
                  <Text style={styles.quizBtn__text}>Submit</Text>
                </TouchableOpacity>
              )}
            </View>
          </View>
        )}
      </View>
    </SafeAreaView>
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
    fontSize: 10,
    color: '#480ca8',
    textTransform: 'uppercase',
  },
  parent: {
    height: '100%',
  },
  question: {
    fontSize: 12,
  },
});
