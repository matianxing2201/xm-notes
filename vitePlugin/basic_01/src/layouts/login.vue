<template>
    <div class="login-catainer">
        <router-view />
    </div>
</template>
<script setup>
defineOptions({
    name: "LoginLayout"
})

</script>
<style scoped>
.login-container {
  min-height: 100%;
  min-width: 100%;
  padding-top: 40px;
  background: '#f0f2f5';
}
</style>
