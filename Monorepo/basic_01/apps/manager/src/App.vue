<template>
  <div>
    <h1>Hello Vue</h1>
    <my-button :type="'success'">success</my-button>
  </div>
</template>

<script setup>
import { MyButton } from '@monorepo/vue-ui'
</script>
<style scoped>
</style>