<template>
  <div class="test">asdf</div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'TestComponents',
  mounted() {
    this.getTodoList();
  },
  methods: {
    ...mapActions('todo', ['getTodoList']),
  },
};
</script>

<style lang="scss" scoped>
.test {
  display: flex;
}
</style>
