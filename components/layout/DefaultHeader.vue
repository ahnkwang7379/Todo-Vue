<template>
  <header class="header__wrapper">
    <section class="header">
      <!-- 로고 -->
      <nuxt-link to="/">
        <figure class="header__logo">
          <img :src="jellyImage" alt="logo" />
        </figure>
      </nuxt-link>

      <!-- 메뉴 -->
      <div class="header__links">
        <nuxt-link
          v-for="{ text, to } of navList"
          :key="`link-${text}`"
          :to="to"
          class="header__link"
        >
          <h3>{{ text }}</h3>
        </nuxt-link>
      </div>
    </section>
  </header>
</template>

<script>
/**
 * @description
 * 전역 레이아웃에 쓰일 헤더 컴포넌트
 */

import { navigationList } from '@/utils/navigation.js';

export default {
  name: 'DefaultHeader',
  data() {
    return {
      logoImage: require('@/static/favicon.png'),
      jellyImage: require('@/static/jellyppi.gif'),
      navList: navigationList,
    };
  },
};
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  align-items: center;
  gap: 32px;
  width: 100%;
  max-width: $max-contents-width;

  &__wrapper {
    position: fixed;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    background-color: $white;
    height: $header-height;

    box-shadow: 0px 8px 16px 0px rgba(75, 76, 87, 0.08),
      0px 0px 4px 0px rgba(75, 76, 87, 0.04);
  }

  &__logo {
    width: 36px;
    height: 36px;
  }

  &__links {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &__link {
    height: 100%;
    padding: 16px 32px;
    &:hover {
      background-color: $grey-50;
    }
  }
}
</style>
