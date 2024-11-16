<template>
  <article id="app" class="app">
    <default-header />

    <main role="main" class="main">
      <nuxt class="main__contents" />
    </main>
  </article>
</template>

<script>
/**
 * @description
 * 기본 레이아웃 정의
 */

import DefaultHeader from '@/components/layout/DefaultHeader.vue';

export default {
  components: { DefaultHeader },
  // 기본 레이아웃에 적용해야하는 로직이 있다면 이곳에 정의
};
</script>

<style lang="scss" scoped>
.app {
  min-width: 360px;
  background-color: $grey-100;
}

.main {
  width: 100vw;
  height: 100vh;
  display: flex;

  // 컨텐츠 중앙으로 정렬
  &__contents {
    max-width: $max-contents-width;
    width: 100vw;
    margin: auto;
  }
}
</style>
