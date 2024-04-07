<template>
  <div class="navbar">
    <ul>
      <li v-for="route in router.options.routes" :key="route.name">
        <router-link :to="{ name: route.name }">{{
          route.meta.title
        }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
const router = useRouter();
</script>
<style lang="scss" scoped>
ul {
  display: flex;
  list-style: none;
  margin: 0;
  justify-content: center;
  gap: 45px;
  padding: 10px 0;
  background: rgb(0, 120, 212);
  li {
    margin-bottom: 10px;
  }
  a {
    text-decoration: none;
    font-size: 25px;
    font-weight: bold;
    color: #ddd;
    &.router-link-active {
      color: #fff;
    }
  }
}
</style>
