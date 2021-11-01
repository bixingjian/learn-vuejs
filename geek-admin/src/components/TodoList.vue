<template>
  <div>
    <h1>{{ count }}</h1>
    <button @click="subtract">-</button>
    <button @click="add">+</button>
  </div>
</template>

<script setup>
import { ref } from "vue";
let count = ref(1);
function add() {
  count.value++;
}
function subtract() {
  count.value--;
}
</script>

<style>
h1 {
  color: red;
}
</style>
