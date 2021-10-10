<script setup lang="ts">
import PlaygroundArea from "./components/PlaygroundArea.vue";
</script>

<template>
  <div class="flex flex-col h-[100vh] font-mono">
    <h1
      class="
        text-xl
        p-2
        text-white
        border-b-[4px] border-gray-100 border-solid
        bg-gray-500
      "
    >
      🔨 @swc/wasm-web Playground
    </h1>
    <PlaygroundArea class="flex-grow" />
  </div>
</template>
