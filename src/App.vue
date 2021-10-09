<script setup lang="ts">
import PlaygroundArea from "./components/PlaygroundArea.vue";
</script>

<template>
  <div class="flex flex-col h-[100vh] font-mono">
    <h1
      class="
        text-2xl
        p-2
        text-gray-800
        border-b-[4px] border-gray-100 border-solid
      "
    >
      🔨 @swc/wasm-web Playground
    </h1>
    <PlaygroundArea class="flex-grow" />
  </div>
</template>
