<template>
  <div>数据求和1：{{ countStore.count }}</div>
  <button @click="add">点击+1</button>
</template>
<script setup lang="ts">
import { toRefs } from 'vue'
import { useCounterStore } from '@/stores/counter'
let countStore = toRefs(useCounterStore())
console.log('countStore:', countStore)
function add() {
  countStore.count.value += 1
}
</script>
