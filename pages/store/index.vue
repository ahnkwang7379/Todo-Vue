<template>
  <article class="store">
    <!-- 투두 인풋 -->
    <store-todo-input />

    <!-- 투두 리스트 -->
    <store-todo-list />
  </article>
</template>

<script>
/**
 * @description
 * 스토어로 만드는 TODO페이지
 */

import { mapActions } from 'vuex';

import StoreTodoInput from '@/components/todo/store/StoreTodoInput.vue';
import StoreTodoList from '@/components/todo/store/StoreTodoList.vue';

export default {
  name: 'StorePage',
  components: { StoreTodoInput, StoreTodoList },
  fetchOnServer: false,
  async fetch() {
    try {
      const res = await this.getTodoList();

      console.log(res);
    } catch (e) {
      console.error(e);
    }
  },
  head() {
    return {
      title: 'Store',
    };
  },
  methods: {
    ...mapActions('todo', ['getTodoList']),
  },
};
</script>

<style lang="scss" scoped>
.store {
  display: flex;
  flex-direction: column;
}
</style>
