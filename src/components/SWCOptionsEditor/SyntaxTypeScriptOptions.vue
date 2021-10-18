<script setup lang="ts">
import { injectState } from "../composables/useState";

const { options } = injectState();

const parser = () => {
  if (options.value.jsc.parser.syntax === "typescript") {
    return options.value.jsc.parser;
  }

  throw new Error("invalid syntax");
};
</script>

<template>
  <div>
    <div class="optionCheckbox">
      <span class="optionName">jsc.parser.tsx</span>
      <input type="checkbox" v-model="parser().tsx" />
    </div>
    <div class="optionCheckbox">
      <span class="optionName">jsc.parser.decorators</span>
      <input type="checkbox" v-model="parser().decorators" />
    </div>
    <div class="optionCheckbox">
      <span class="optionName">jsc.parser.dynamicImport</span>
      <input type="checkbox" v-model="parser().dynamicImport" />
    </div>
  </div>
</template>
