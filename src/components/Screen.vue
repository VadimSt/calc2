<template>
  <label class="labelLog"></label>
  <label class="labelScreen">{{ expression }}</label>
</template>
<style scoped>
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

const props = defineProps({ expression: String })
</script>
