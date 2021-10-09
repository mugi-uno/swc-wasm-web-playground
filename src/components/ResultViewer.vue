<script setup lang="ts">
import { ref } from "vue";

defineProps<{ result: string }>();
</script>

<template>
  <div class="p-2 font-mono text-[14px]">{{ result }}</div>
</template>
