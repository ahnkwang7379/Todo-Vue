<template>
  <form class="todo-input" @submit="handleOnSubmit">
    <!-- 인풋박스 -->
    <simple-input />

    <!-- 추가 버튼 -->
    <add-todo-button />
  </form>
</template>

<script>
/**
 * @description
 * todo input 래핑 컴포넌트
 */

import AddTodoButton from './AddTodoButton.vue';
import SimpleInput from './SimpleInput.vue';

export default {
  name: 'TodoInput',
  components: { SimpleInput, AddTodoButton },
  methods: {
    handleOnSubmit() {
      console.log('submit');
    },
  },
};
</script>

<style lang="scss" scoped>
.todo-input {
  display: flex;
  gap: 8px;
}
</style>
