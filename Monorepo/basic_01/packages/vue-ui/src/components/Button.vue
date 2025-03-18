<template>
  <button :class="type">
    <slot></slot>
  </button>
</template>

<script setup>
const props = defineProps({
  type: {
    type: String,
    default: 'primary',
    validator: (value) => {
      return ['primary', 'success', 'wran', 'danger'].includes(value)
    }
  }
})
</script>
<style scoped>
.primary {
    background: blue;
    color: #fff;
}
.success {
    background: green;
    color: #fff;
}
.wran {
    background: orange;
    color: #000;
}
.danger {
    background: red;
    color: #fff;
}

</style>