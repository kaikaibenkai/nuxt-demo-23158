<script lang="ts" setup>
import { ref } from 'vue'

const count = ref(0)
</script>

<template>
  <AButton type='primary' @click='() => ++count'>
    Click Me
  </AButton>
  count: {{ count }}
</template>
