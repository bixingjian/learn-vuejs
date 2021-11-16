<template>
  <h1>这是首页</h1>
  <TodoList id="todolist" />
  <span>x:{{ x }}, y:{{ y }}</span>
</template>

<script setup>
import TodoList from "../components/TodoList.vue";
import { useMouse } from "../utils/mouse";

let { x, y } = useMouse();
</script>
