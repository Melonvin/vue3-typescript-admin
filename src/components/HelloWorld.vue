<script setup lang="ts">
import { onMounted } from 'vue'
import request from '../utils/request'
const click = () => {
  request({
    url: '/api/test'
  }).then(res => {
    console.log(res)
  })
}

onMounted(() => {
  console.log(import.meta.env.VITE_BASE_URL)
})
</script>

<template>
  <div>
    <H1>Hello Vue 3 + TypeScript + Vite</H1>
    <el-button type="success" @click="click">Success</el-button>
  </div>
</template>

<style lang="scss" scoped></style>
