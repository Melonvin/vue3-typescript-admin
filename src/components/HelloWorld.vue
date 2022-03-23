<script setup lang="ts">
const click = () => {
  console.log('click');
}
</script>

<template>
 Hello Vue 3 + TypeScript + Vite 
 <el-button type="success" @click="click">Success</el-button>
</template>

<style lang="scss" scoped>

</style>
