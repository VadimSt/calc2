<template>
  <calc-screen :expression="expression"></calc-screen>
  <calc-keypad
    class="calcKeypad"
    @pressDigit="onPressDigit($event)"
    @pressOp="onPressOp($event)"
    @pressCE="onPressCE()"
    @pressSign="onPressSign()"
    @pressCalc="onPressCalc()"
  >
  </calc-keypad>
</template>

<script setup>
import { ref } from 'vue'

import CalcScreen from './components/Screen.vue'
import CalcKeypad from './components/KeyPad.vue'

const expression = ref('0')

function onPressDigit(e) {
  let exp = this.expression
  if (exp == '0') {
    this.expression = e
    return
  }
  if (exp == '-0') {
    this.expression = '-' + e
    return
  }
  this.expression += e
}
function onPressOp(e) {
  this.expression += e
}
function onPressCE() {
  this.expression = '0'
}

function onPressCalc() {
  try {
    const exp = this.expression
    if (exp[0] == '0') {
    }
    this.expression = eval(this.expression) + ''
  } catch (e) {
    this.expression = 'error'
    console.error(e)
  }
}

function toggleSign(exp) {
  if (exp[0] == '-') {
    return exp.substr(1)
  }
  return '-' + exp
}

function onPressSign() {
  this.expression = toggleSign(this.expression)
}
// This starter template is using Vue 3 experimental <script setup> SFCs
// Check out https://github.com/vuejs/rfcs/blob/script-setup-2/active-rfcs/0000-script-setup.md
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
