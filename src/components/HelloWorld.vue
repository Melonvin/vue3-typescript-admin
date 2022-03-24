<script setup lang="ts">
import request from '../utils/request'
const click = () => {
  request({
    url: 'https://api.apishop.net/common/weather/get15DaysWeatherByArea',
    params: {
      apiKey: 'i3jBSaj9d59a00cef130c3a723bf126145b1fccb06a37e2',
      areaID: '101280101'
    }
  }).then(res => {
    console.log(res)
  })
}
</script>

<template>
  Hello Vue 3 + TypeScript + Vite
  <el-button type="success" @click="click">Success</el-button>
</template>

<style lang="scss" scoped></style>
