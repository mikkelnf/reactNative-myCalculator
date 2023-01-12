import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [finalOutput, setFinalOutput] = useState(0)
  const [tempDisplayer, setTempDisplayer] = useState('')
  const [tempValue1, setTempValue1] = useState('')
  const [tempValue2, setTempValue2] = useState('')
  const [operator, setOperator] = useState('')

  const onPressHandler = (value) => {
    switch (value) {
      case 'ac':
        setFinalOutput(0)
        reset()
        break
      case '-':
        setOperator('-')
        setTempDisplayer('')
        break
      case '+':
        setOperator('+')
        setTempDisplayer('')
        break
      case '*':
        setOperator('*')
        setTempDisplayer('')
        break
      case '/':
        setOperator('/')
        setTempDisplayer('')
        break
      case '=':
        execute(operator)
        break
      default:
        if (operator === '') {
          setTempValue1(tempValue1 + value)
          setTempDisplayer(tempDisplayer + value)
        } else {
          setTempValue2(tempValue2 + value)
          setTempDisplayer(tempDisplayer + value)
        }
        break
    }
  }

  const reset = () => {
    setTempValue1('')
    setTempValue2('')
    setOperator('')
    setTempDisplayer('')
  }

  const execute = (operator) => {
    let output
    switch (operator) {
      case '+':
        output = parseInt(tempValue1) + parseInt(tempValue2)
        setFinalOutput(output)
        reset()
        break
      case '-':
        output = parseInt(tempValue1) - parseInt(tempValue2)
        setFinalOutput(output)
        reset()
        break
      case '*':
        output = parseInt(tempValue1) * parseInt(tempValue2)
        setFinalOutput(output)
        reset()
        break
      case '/':
        output = parseInt(tempValue1) / parseInt(tempValue2)
        setFinalOutput(output)
        reset()
        break
    }
  }

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.titleArea}>
        <Text style={styles.titleText}>myCalculator</Text>
        <StatusBar style="auto" />
      </View>
      <View
        style={{
          borderBottomColor: 'black',
          borderBottomWidth: StyleSheet.hairlineWidth,
        }}
      />
      <View style={styles.outputArea}>
        <View style={styles.result}>
          <Text style={styles.resultText}>= {finalOutput}</Text>
        </View>
        <View style={styles.result}>
          <Text style={styles.resultTextTemp}>{tempDisplayer === '' && !operator ? 0 : tempDisplayer}</Text>
        </View>
      </View>
      <View style={styles.inputArea}>
        <View style={styles.inputRow}>
          <View style={styles.button}>
            <Pressable>
              <Text style={styles.buttonText}></Text>
            </Pressable>
          </View>
          <View style={styles.button}>
            <Pressable>
              <Text style={styles.buttonText}></Text>
            </Pressable>
          </View>
          <View style={styles.button}>
            <Pressable>
              <Text onPress={() => onPressHandler('ac')} style={[styles.buttonText, styles.buttonOperator]}>AC</Text>
            </Pressable>
          </View>
          <View style={styles.button}>
            <Pressable>
              <Text onPress={() => onPressHandler('/')} style={[styles.buttonText, styles.buttonOperator]}>/</Text>
            </Pressable>
          </View>
        </View>

        <View style={styles.inputRow}>
          <View style={styles.button}>
            <Pressable>
              <Text onPress={() => onPressHandler('7')} style={styles.buttonText}>7</Text>
            </Pressable>
          </View>
          <View style={styles.button}>
            <Pressable>
              <Text onPress={() => onPressHandler('8')} style={styles.buttonText}>8</Text>
            </Pressable>
          </View>
          <View style={styles.button}>
            <Pressable>
              <Text onPress={() => onPressHandler('9')} style={styles.buttonText}>9</Text>
            </Pressable>
          </View>
          <View style={styles.button}>
            <Pressable>
              <Text onPress={() => onPressHandler('*')} style={[styles.buttonText, styles.buttonOperator]}>x</Text>
            </Pressable>
          </View>
        </View>

        <View style={styles.inputRow}>
          <View style={styles.button}>
            <Pressable>
              <Text onPress={() => onPressHandler('4')} style={styles.buttonText}>4</Text>
            </Pressable>
          </View>
          <View style={styles.button}>
            <Pressable>
              <Text onPress={() => onPressHandler('5')} style={styles.buttonText}>5</Text>
            </Pressable>
          </View>
          <View style={styles.button}>
            <Pressable>
              <Text onPress={() => onPressHandler('6')} style={styles.buttonText}>6</Text>
            </Pressable>
          </View>
          <View style={styles.button}>
            <Pressable>
              <Text onPress={() => onPressHandler('-')} style={[styles.buttonText, styles.buttonOperator]}>-</Text>
            </Pressable>
          </View>
        </View>

        <View style={styles.inputRow}>
          <View style={styles.button}>
            <Pressable>
              <Text onPress={() => onPressHandler('1')} style={styles.buttonText}>1</Text>
            </Pressable>
          </View>
          <View style={styles.button}>
            <Pressable>
              <Text onPress={() => onPressHandler('2')} style={styles.buttonText}>2</Text>
            </Pressable>
          </View>
          <View style={styles.button}>
            <Pressable>
              <Text onPress={() => onPressHandler('3')} style={styles.buttonText}>3</Text>
            </Pressable>
          </View>
          <View style={styles.button}>
            <Pressable>
              <Text onPress={() => onPressHandler('+')} style={[styles.buttonText, styles.buttonOperator]}>+</Text>
            </Pressable>
          </View>
        </View>

        <View style={styles.inputRow}>
          <View style={styles.button}>
            <Pressable>
              <Text style={styles.buttonText}></Text>
            </Pressable>
          </View>
          <View style={styles.button}>
            <Pressable>
              <Text onPress={() => onPressHandler('0')} style={styles.buttonText}>0</Text>
            </Pressable>
          </View>
          <View style={styles.button}>
            <Pressable>
              <Text style={styles.buttonText}></Text>
            </Pressable>
          </View>
          <View style={styles.button}>
            <Pressable>
              <Text onPress={() => onPressHandler("=")} style={[styles.buttonText, styles.buttonOperator]}>=</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </View>

  );
}

const styles = StyleSheet.create({
  titleArea: {
    height: '9%',
    backgroundColor: '#4D4D4D',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 30
  },
  titleText: {
    fontSize: 15,
    fontWeight: '300',
    color: '#fff',
  },
  outputArea: {
    flex: 2,
    flexDirection: 'column-reverse',
    alignItems: 'flex-end',
    backgroundColor: '#4D4D4D',
  },
  inputArea: {
    flex: 3,
    backgroundColor: '#2A2A2A',
  },
  inputRow: {
    flex: 1,
    flexDirection: 'row',
  },
  button: {
    flex: 1,
    // height: 50
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: '100',
    fontSize: 25,
    height: 100,
    textAlignVertical: 'center'
  },
  buttonOperator: {
    color: '#559FFF',
    fontSize: 35,
    height: 100,
  },
  result: {
    padding: 20
  },
  resultText: {
    fontSize: 40,
    color: '#559FFF',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  resultTextTemp: {
    fontSize: 50,
    color: '#fff',
    fontWeight: '300',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  }
});