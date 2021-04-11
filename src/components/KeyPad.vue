<template>
  <div class="keypadWrapper">
    <button type="button" class="keypadItem" @click="$emit('pressSQR')">
      x**2
    </button>
    <button type="button" class="keypadItem" @click="$emit('pressOBR')">
      1/x
    </button>
    <button type="button" class="keypadItem" @click="$emit('pressRND')">
      RND
    </button>
    <button type="button" class="keypadItem" @click="$emit('pressCE')">
      CE
    </button>
    <button type="button" class="keypadItem" @click="$emit('pressDigit', '9')">
      9
    </button>
    <button type="button" class="keypadItem" @click="$emit('pressDigit', '8')">
      8
    </button>
    <button type="button" class="keypadItem" @click="$emit('pressDigit', '7')">
      7
    </button>
    <button type="button" class="keypadItem" @click="$emit('pressOp', '/')">
      /
    </button>
    <button type="button" class="keypadItem" @click="$emit('pressDigit', '6')">
      6
    </button>
    <button type="button" class="keypadItem" @click="$emit('pressDigit', '5')">
      5
    </button>
    <button type="button" class="keypadItem" @click="$emit('pressDigit', '4')">
      4
    </button>
    <button type="button" class="keypadItem" @click="$emit('pressOp', '*')">
      *
    </button>
    <button type="button" class="keypadItem" @click="$emit('pressDigit', '3')">
      3
    </button>
    <button type="button" class="keypadItem" @click="$emit('pressDigit', '2')">
      2
    </button>
    <button type="button" class="keypadItem" @click="$emit('pressDigit', '1')">
      1
    </button>
    <button type="button" class="keypadItem" @click="$emit('pressOp', '-')">
      -
    </button>
    <button type="button" class="keypadItem" @click="$emit('pressSign')">
      +/-
    </button>
    <button type="button" class="keypadItem" @click="$emit('pressDigit', '0')">
      0
    </button>
    <button type="button" class="keypadItem" @click="$emit('pressCalc')">
      =
    </button>
    <button type="button" class="keypadItem" @click="$emit('pressOp', '+')">
      +
    </button>
  </div>
</template>

<style scoped>
.keypadItem {
  width: 100px;
  border-radius: 5px;
  font-size: 40px;
  height: 75px;
}
.blankItem {
  display: inline-block;
  width: 100px;
  height: 75px;
}
</style>

<script setup>
import { defineEmit } from 'vue'

const emits = defineEmit([
  'pressDigit',
  'pressOp',
  'pressCE',
  'pressSign',
  'pressCalc',
  'pressRND',
  'pressTRUNC',
  'pressOBR',
  'pressSQR',
])

function onEnter() {
  console.log('Press Enter')
}
</script>
