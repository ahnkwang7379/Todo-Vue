<template>
  <label>
    <!--  -->
    <input v-model="value" type="text" placeholder="오늘의 TODO는?" />
  </label>
</template>

<script>
/**
 * @description
 * TODO input 컴포넌트
 */
export default {
  name: 'SimpleInput',
  data() {
    return {
      value: null,
    };
  },
};
</script>

<style lang="scss" scoped>
.input {
  display: flex;
}
</style>
