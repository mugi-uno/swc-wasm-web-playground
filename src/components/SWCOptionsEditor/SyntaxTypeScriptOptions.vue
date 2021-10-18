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
    <div class="option">
      <span class="optionName">jsc.parser.tsx</span>
      <input type="checkbox" v-model="parser().tsx" />
    </div>
    <div class="option">
      <span class="optionName">jsc.parser.decorators</span>
      <input type="checkbox" v-model="parser().decorators" />
    </div>
    <div class="option">
      <span class="optionName">jsc.parser.dynamicImport</span>
      <input type="checkbox" v-model="parser().dynamicImport" />
    </div>
  </div>
</template>

<style scoped>
.option {
  display: flex;
  align-items: center;
  margin-top: 8px;
}
.optionName {
  margin-right: 4px;
}

.optionValue {
  padding: 2px;
}
</style>
