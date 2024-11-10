<template>
  <ul class="todo-list">
    <li v-for="todo of todoList" :key="`todo-${todo.id}`">
      <todo-item v-bind="todo" />
    </li>
  </ul>
</template>

<script>
/**
 * @description
 * TodoList 컴포넌트 UI부분
 */

import TodoItem from '../todoItem/TodoItem.vue';

export default {
  name: 'TodoList',
  components: { TodoItem },
  props: {
    todoList: { type: Array, required: true, default: () => [] },
  },
};
</script>

<style lang="scss" scoped>
.todo-list {
  display: flex;
  flex-direction: column;
}
</style>
