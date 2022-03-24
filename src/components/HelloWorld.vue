<script setup lang="ts">
import request from '../utils/request'
const click = () => {
  request({
    url: '/api/test'
  }).then(res => {
    console.log(res)
  })
}
</script>

<template>
  Hello Vue 3 + TypeScript + Vite
  <el-button type="success" @click="click">Success</el-button>
  <p><a href="/api/test" target="hello1">Hello</a></p>
</template>

<style lang="scss" scoped></style>
