<template>
  <label :for="id">
    <!--  TODO 디자인 입히기 -->
    <input
      id="id"
      :value="value"
      type="text"
      placeholder="오늘의 TODO는?"
      @input="updateValue($event.target.value)"
      @keydown.enter="handleKeyDownEnter"
    />
  </label>
</template>

<script>
/**
 * @description
 * TODO input 컴포넌트
 */
export default {
  name: 'SimpleInput',
  props: {
    id: { type: String, required: true },
    value: { type: String, required: true, default: '' },
  },
  methods: {
    updateValue(v) {
      this.$emit('update-value', v);
      this.$forceUpdate();
    },
    handleKeyDownEnter(e) {
      if (e.isComposing) return;
      this.$emit('submit');
    },
  },
};
</script>

<style lang="scss" scoped>
.input {
  display: flex;
}
</style>
