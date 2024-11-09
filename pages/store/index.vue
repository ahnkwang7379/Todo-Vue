<template>
  <article class="store"></article>
</template>

<script>
/**
 * @description
 * 스토어로 만드는 TODO페이지
 */

import { mapActions } from 'vuex';

export default {
  name: 'StorePage',
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
