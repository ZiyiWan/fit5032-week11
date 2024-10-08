<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'; // 引入 useRoute 钩子
import JSONLab from './components/JSONLab.vue';
import BHeader from './components/BHeader.vue';
import LibraryRegistrationForm from './components/LibraryRegistrationForm.vue';

// 获取当前路由
const route = useRoute();

// 通过路由路径决定是否显示 header
const showHeader = computed(() => {
  return !route.path.includes('api'); // 如果当前路径是 /api/bookcount 则不显示 header
});
</script>

<template>
  <header v-if="showHeader">
    <BHeader />
  </header>

  <main>
    <!-- <LibraryRegistrationForm /> -->
    <!-- <JSONLab /> -->
    <router-view></router-view>
  </main>
</template>

<style scoped>
/* header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
} */
</style>