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
  Hello Vue 3 + TypeScript + Vite
  <el-button type="success" @click="click">Success</el-button>
  <p><a href="/api/test" target="hello1">Hello</a></p>
</template>

<style lang="scss" scoped></style>
