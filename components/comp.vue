<script lang="ts" setup>
const count = ref(0)
</script>

<template>
  <AButton type='primary' @click='() => ++count'>
    Click Me
  </AButton>
  count: {{ count }}
</template>
