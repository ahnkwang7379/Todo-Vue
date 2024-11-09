<template>
  <article class="provide">
    TODO: provide버전으로 page에서 api호출 후 하위 컴포넌트에서 inject로 꺼내
    쓰는 방식으로 구현할 곳
  </article>
</template>

<script>
/**
 * @description
 * Provide & Inject로 만드는 TODO페이지
 */

import { mapActions } from 'vuex';

export default {
  name: 'ProvidePage',
  // provide 너무 커질 것 같으면 mixin으로 뺄것
  provide() {
    return {
      todoList: () => this.todoList,
    };
  },
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
      title: 'Provide',
    };
  },
  methods: {
    ...mapActions(['getTodoList']),
  },
};
</script>

<style lang="scss" scoped>
.provide {
  display: flex;
}
</style>
