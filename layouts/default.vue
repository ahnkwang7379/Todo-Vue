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
  width: 100%;
  height: 100vh;
  background-color: #f1f3f5;
}

.main {
  width: 100%;

  // 컨텐츠 중앙으로 정렬
  &__contents {
    max-width: $max-contents-width;
    width: 100vw;
    margin: 0 auto;
  }
}
</style>
