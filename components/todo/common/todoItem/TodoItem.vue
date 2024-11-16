<template>
  <nuxt-link :to="toLink" class="todo-item">
    <div>{{ title }} {{ createdAt }} {{ updatedAt }}</div>
  </nuxt-link>
</template>

<script>
/**
 * @description
 * TodoItem 각각의 컴포넌트
 */
export default {
  name: 'TodoItem',
  components: {},
  props: {
    id: { type: Number, required: true, default: -1 },
    title: { type: String, default: null },
    createdAt: { type: String, required: true },
    updatedAt: { type: String, required: true },
  },
  data: ({ $route, id }) => {
    return {
      // todoItem 링크
      toLink: { name: `${$route.name}-id`, params: { id } },
    };
  },
  computed: {
    //
  },
};
</script>

<style lang="scss" scoped>
.todo-item {
  display: flex;
  flex-direction: column;
}
</style>
