<template>
  <label class="labelLog">{{ expressionLog }}</label>
  <label class="labelScreen">{{ expression }}</label>
</template>
<style scoped>
.labelLog {
  display: block;
  text-align: right;
  padding: 5px;
}
.labelScreen {
  display: block;
  border-radius: 5px;
  border: 1px black solid;
  font-size: 30px;
  text-align: right;
  padding: 5px;
}
</style>
<script setup>
import { defineProps } from 'vue'

const props = defineProps({ expression: String, expressionLog: String })
</script>
