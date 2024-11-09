<template>
  <article class="prop">
    TODO: Page에서 api 호출한 후 아래로 내리는 버전
  </article>
</template>

<script>
/**
 * @description
 * prop 드릴링으로 만드는 TODO페이지
 */

import { mapActions } from 'vuex';

export default {
  name: 'PropPage',
  data() {
    return {
      todoList: [],
    };
  },
  fetchOnServer: false,
  async fetch() {
    // TODO: fetch state값과 pagination 넣기
    try {
      const res = await this.getTodoList();
      this.todoList = res;
    } catch (e) {
      console.error(e);
    }
  },
  head() {
    return {
      title: 'Prop',
    };
  },
  methods: {
    ...mapActions(['getTodoList']),
  },
};
</script>

<style lang="scss" scoped>
.prop {
  display: flex;
}
</style>
