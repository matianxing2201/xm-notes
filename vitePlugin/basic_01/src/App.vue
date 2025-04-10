

<template>
    <h1>{{ title }}</h1>
    <HelloWorld />
    <a-button>Add</a-button>
    <router-view />
</template>
<script setup>

const title = ref('hello world')
</script>

<style scoped>
</style>
