<script>
  import Todo from './todos/todo.vue'
  import Clock from './clock/clock.vue'

  export default {
    name: '',
    components: {
      Todo,
      Clock
    },
    methods: {
    }
  }
</script>

<template>
  <div id="wrapper">
    <Todo></Todo>
    <Clock></Clock>
  </div>
</template>

<style>
</style>
