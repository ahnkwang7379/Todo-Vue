<template>
  <article id="app" class="app">
    <default-header />

    <main class="main">
      <nuxt />
    </main>

    <default-footer />
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
  width: 100%;
}

.main {
  width: 100%;
}
</style>
