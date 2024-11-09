<template>
  <article>
    <test-component />
  </article>
</template>

<script>
/**
 * @description
 * 홈 화면
 */

import TestComponent from '@/components/TestComponent.vue';

export default {
  name: 'Index',
  components: { TestComponent },
};
</script>
