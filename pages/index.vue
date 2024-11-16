<template>
  <article class="home">
    <h1>Vue2 & Nuxt2로 만드는 간단한 Todo입니다</h1>

    <section class="home__nav">
      <nuxt-link
        v-for="{ text, to } of navList"
        :key="`link-${text}`"
        :to="to"
        class="home__nav-item"
      >
        <p>{{ text }}</p>
      </nuxt-link>
      <p>총 3가지 방법으로 각각 구현했습니다.</p>
    </section>
  </article>
</template>

<script>
/**
 * @description
 * 홈 화면
 */

import { navigationList } from '@/utils/navigation.js';

export default {
  name: 'Index',
  data() {
    return {
      navList: navigationList,
    };
  },
};
</script>

<style lang="scss" scoped>
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;

  width: 600px;
  height: 600px;
  background-color: $white;
  border-radius: 16px;

  box-shadow: 0px 8px 16px 0px rgba(75, 76, 87, 0.08),
    0px 0px 4px 0px rgba(75, 76, 87, 0.04);

  &__nav {
    display: flex;
    gap: 8px;

    &-item {
      //
    }
  }
}
</style>
