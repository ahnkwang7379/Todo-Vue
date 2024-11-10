<template>
  <todo-input />
</template>

<script>
/**
 * @description
 * TodoInput을 store페이지에서 쓸 수 있게 래핑해주는 부분.
 */

import TodoInput from '@/components/todo/common/todoInput/TodoInput.vue';

export default {
  name: 'StoreTodoInput',
  components: { TodoInput },
};
</script>
