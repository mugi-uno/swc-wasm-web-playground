<script setup lang="ts">
import { ref } from "vue";

const emit = defineEmits<{
  (e: "change", value: string): void;
}>();

const src = ref("");

function handleChangeSrc(event: Event) {
  src.value = (event.target as HTMLTextAreaElement).value;
  emit("change", src.value);
}
</script>

<template>
  <div class="p-2">
    <textarea
      :value="src"
      @input="handleChangeSrc"
      class="w-full h-full focus:outline-none font-mono text-[14px]"
    />
  </div>
</template>
