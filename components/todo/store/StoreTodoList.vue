<template>
  <todo-list :todo-list="todoList" />
</template>

<script>
/**
 * @description
 * store페이지에서 쓰이는 TodoList를 래핑
 */

import { mapGetters } from 'vuex';

import TodoList from '@/components/todo/common/todoList/TodoList.vue';

export default {
  name: 'StoreTodoList',
  components: { TodoList },
  computed: {
    ...mapGetters('todo', ['todoList']),
  },
};
</script>
