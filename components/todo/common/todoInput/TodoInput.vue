<template>
  <form class="todo-input" @submit.prevent="handleOnSubmit">
    <!-- 인풋박스 -->
    <simple-input id="todo" :value="todoInput" @update-value="updateValue" />

    <!-- Submit 호출하는 추가 버튼 -->
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
  data() {
    return {
      todoInput: '',
    };
  },
  methods: {
    updateValue(v) {
      this.todoInput = v;
    },
    handleOnSubmit() {
      this.$emit('submit', { title: this.todoInput });
      this.todoInput = '';
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
