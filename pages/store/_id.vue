<template>
  <article class="todo">
    <div>TODO 아이템의 상세 페이지</div>
  </article>
</template>

<script>
/**
 * @description
 * 스토어로 만드는 TODO페이지
 * TODO 상세
 */
export default {
  name: 'TodoId',
  // TODO: 상세페이지에서 어떤 작업이 가능할지 고민해볼것.
  head() {
    return {
      title: '상세 정보',
    };
  },
};
</script>

<style lang="scss" scoped>
.todo {
  display: flex;
  flex-direction: column;
}
</style>
