<script setup lang="ts">
import { injectState } from "./composables/useState";

const { result, transformError } = injectState();
</script>

<template>
  <div class="p-2 font-mono text-[11px] relative whitespace-pre-wrap">
    <h2 class="text-sm border-b-[1px] pb-1 mb-2 font-bold">result</h2>

    {{ result }}
    <div
      v-show="transformError"
      class="
        absolute
        left-[8px]
        top-[40px]
        w-[calc(100%-20px)]
        text-[11px]
        whitespace-pre-wrap
        p-2
        border-[1px] border-solid border-red-300
        bg-red-100
        rounded-sm
      "
    >
      {{ transformError }}
    </div>
  </div>
</template>
