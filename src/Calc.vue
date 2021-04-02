<template>
  <calc-screen
    :expression="expression"
    :expressionLog="expressionLog"
  ></calc-screen>
  <calc-keypad
    class="calcKeypad"
    @pressDigit="onPressDigit($event)"
    @pressOp="onPressOp($event)"
    @pressCE="onPressCE()"
    @pressSign="onPressSign()"
    @pressCalc="onPressCalc()"
    @keypress="onPressKey($event)"
  >
  </calc-keypad>
</template>

<script setup>
import { ref } from 'vue'

import CalcScreen from './components/Screen.vue'
import CalcKeypad from './components/KeyPad.vue'

const expression = ref('0')
const expressionLog = ref('')

const addSymbolToExpression = (symbol) => {
  expression.value += symbol
}

const setExpression = (symbol) => {
  expression.value = symbol
}

const setExpressionLog = (exp) => {
  expressionLog.value = exp
}

function onPressDigit(e) {
  let exp = expression.value
  if (exp == '0') {
    setExpression(e)
    return
  }
  if (exp == '-0') {
    setExpression('-' + e)
    return
  }
  addSymbolToExpression(e)
}
function onPressOp(e) {
  addSymbolToExpression(e)
}
function onPressCE() {
  setExpression('0')
}

function onPressCalc() {
  const exp = expression.value
  try {
    setExpression(eval(exp) + '')
  } catch (e) {
    setExpression('ERROR')
  }
}

function toggleSign(exp) {
  if (exp[0] == '-') {
    return exp.substr(1)
  }
  return '-' + exp
}

function onPressSign() {
  setExpression(toggleSign(expression.value))
}

const keysMap = [
  '0',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '+',
  '-',
  '/',
  '*',
  'Enter',
]

const keyInMap = (key) => {
  return keysMap.some((element) => element == key)
}

const callEventMap = {
  0: () => onPressDigit('0'),
  1: () => onPressDigit('1'),
  2: () => onPressDigit('2'),
  3: () => onPressDigit('3'),
  4: () => onPressDigit('4'),
  5: () => onPressDigit('5'),
  6: () => onPressDigit('6'),
  7: () => onPressDigit('7'),
  8: () => onPressDigit('8'),
  9: () => onPressDigit('9'),
  '+': () => onPressOp('+'),
  '-': () => onPressOp('-'),
  '/': () => onPressOp('/'),
  '*': () => onPressOp('*'),
  Enter: () => onPressCalc(),
}

function onPressKey(e) {
  let keyIsInMap = keyInMap(e.key)
  if (!keyIsInMap) {
    return
  }
  if (e.target.className == 'keypadItem' && e.key == 'Enter') {
    e.preventDefault()
  }
  callEventMap[e.key]()
}
</script>

<style>
#calc {
  padding: 10px;
  width: 425px;
  border: 1px black solid;
  border-radius: 5px;
  margin: 10px auto;
}
.calcKeypad {
  padding: 10px;
  border: 1px black solid;
  border-radius: 5px;
  margin: 10px auto;
}
</style>
