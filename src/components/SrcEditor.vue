<script setup lang="ts">
import { injectState } from "./composables/useState";

const { src } = injectState();

function handleChangeSrc(event: Event) {
  src.value = (event.target as HTMLTextAreaElement).value;
}
</script>

<template>
  <div class="p-2">
    <h2 class="text-sm border-b-[1px] pb-1 mb-2 font-bold">src</h2>
    <textarea
      :value="src"
      @input="handleChangeSrc"
      class="w-full h-full focus:outline-none font-mono text-[14px]"
    />
  </div>
</template>
