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
          <span>{{ text }}</span>
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
export default {
  name: 'DefaultHeader',
  data() {
    return {
      logoImage: require('@/static/favicon.png'),
      jellyImage: require('@/static/jellyppi.gif'),
      navList: [
        { text: 'Store', to: '/store' },
        { text: 'Prop', to: '/prop' },
        { text: 'Provide', to: '/provide' },
      ],
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
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    background-color: white;
    height: $header-height;
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
      background-color: #f8f9fa;
    }
  }
}
</style>
