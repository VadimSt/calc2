<template>
  <div class="calcWrapper" @keyup="onPressKeyGlobal($event)">
    <key-press
      key-event="keyup"
      :multiple-keys="multipleKeys"
      @success="onSuccess"
    ></key-press>
    <calc-screen
      :expression="expression"
      :expressionLog="expressionLog"
    ></calc-screen>
    <calc-keypad
      ref="keypad"
      class="calcKeypad"
      @pressDigit="onPressDigit($event)"
      @pressOp="onPressOp($event)"
      @pressCE="onPressCE()"
      @pressSign="onPressSign()"
      @pressCalc="onPressCalc()"
      @pressRND="onPressRound()"
      @pressOBR="onPressOBR()"
      @pressSQR="onPressSQR()"
      @keypress="onPressKey($event)"
      @keyup.delete="onPressBackSpace()"
      @keyup.esc="onPressEsc()"
    >
    </calc-keypad>
  </div>
</template>

<script setup>
import { onMounted, ref, defineAsyncComponent } from 'vue'

import CalcScreen from './components/Screen.vue'
import CalcKeypad from './components/KeyPad.vue'
import { multipleKeys } from './keyPress'

const KeyPress = defineAsyncComponent(() => import('vue3-keypress'))
const expression = ref('0')
const expressionLog = ref('')



function onPressKeyGlobal(e) {
  console.log(e)
}

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

function clearExpression(){
  setExpression('0')
}

function onPressCE() {
  clearExpression()
}

function onPressEscape() {
  clearExpression()
}

function onPressOBR() {
  let exp = expression.value
  exp = '1/' + exp
  setExpression(exp)
}

const sqr = (x) => x * x

const round = (x) => Math.round(x)
const trunc = (x) => Math.trunc(x)

function onPressSQR() {
  let exp = expression.value
  exp = exp + '**2'
  setExpression(exp)
}

function onPressRound() {
  let exp = expression.value
  exp = 'round(' + exp + ')'
  setExpression(exp)
}

function onPressTrunc() {
  let exp = expression.value
  exp = 'trunc(' + exp + ')'
  setExpression(exp)
}

const expIsNegative = (exp) => exp[0] == '-'

function deletePrevSymbol(exp) {
  let len = exp.length
  if (len >= 3) return exp.substr(0, len - 1)
  if (len < 2) return '0'
  if (expIsNegative(exp)) return '0'
  return exp.substr(0, len - 1)
}

function onPressBackSpace() {
  setExpression(deletePrevSymbol(expression.value))
}

function onPressDelete() {
  clearExpression()
}

function evalExpression(exp) {
  try {
    return eval(exp) + ''
  } catch (e) {
    return 'ERROR'
  }
}

function onPressCalc() {
  const exp = expression.value
  setExpression(evalExpression(exp))
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

function isKeyRegistered(someKey) {
  return Object.keys(callEventMap).some((key) => key == someKey)
}

function onSuccess(res) {
  let key = res.event.key

  if (!isKeyRegistered(key)) {
    return console.log('Клавиша не зарегистрирована')
  }
  callEventMap[key]()
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
  'Enter': () => onPressCalc(),
  'Delete': () => onPressDelete(),
  'Escape': () => onPressEscape(),
  'Backspace': () => onPressBackSpace(),

}

function onPressKey(e) {
  console.log(e)
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
