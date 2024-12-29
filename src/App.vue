<template>
  <a-config-provider>
    <Header></Header>
    <a-breadcrumb>
      <a-breadcrumb-item>Home</a-breadcrumb-item>
      <a-breadcrumb-item><a href="">Application Center</a></a-breadcrumb-item>
      <a-breadcrumb-item><a href="">Application List</a></a-breadcrumb-item>
      <a-breadcrumb-item>An Application</a-breadcrumb-item>
    </a-breadcrumb>
    {{ num }}
    <a-button @click="add">+1</a-button>
    <!-- algorithm: theme.darkAlgorithm,夜间主题 -->
    <!-- <router-view /> -->
    <router-link :to="{ name: 'home' }">home</router-link>
    <router-link :to="{ name: 'about' }">about</router-link>
    <hr />
    <router-view />
  </a-config-provider>
</template>
<script lang="ts" setup name="App">
import { ref } from 'vue'
let num = ref(0)
function add() {
  num.value += 1
}
</script>

<style scoped></style>
