<script setup lang="ts">
import { injectState } from "../composables/useState";

const { options } = injectState();

const parser = () => {
  if (options.value.jsc.parser.syntax === "ecmascript") {
    return options.value.jsc.parser;
  }

  throw new Error("invalid syntax");
};
</script>

<template>
  <div>
    <div class="option">
      <span class="optionName">jsc.parser.jsx</span>
      <input type="checkbox" v-model="parser().jsx" />
    </div>
    <div class="option">
      <span class="optionName">jsc.parser.dynamicImport</span>
      <input type="checkbox" v-model="parser().dynamicImport" />
    </div>
    <div class="option">
      <span class="optionName">jsc.parser.privateMethod</span>
      <input type="checkbox" v-model="parser().privateMethod" />
    </div>
    <div class="option">
      <span class="optionName">jsc.parser.functionBind</span>
      <input type="checkbox" v-model="parser().functionBind" />
    </div>
    <div class="option">
      <span class="optionName">jsc.parser.classPrivateProperty</span>
      <input type="checkbox" v-model="parser().classPrivateProperty" />
    </div>
    <div class="option">
      <span class="optionName">jsc.parser.exportDefaultFrom</span>
      <input type="checkbox" v-model="parser().exportDefaultFrom" />
    </div>
    <div class="option">
      <span class="optionName">jsc.parser.exportNamespaceFrom</span>
      <input type="checkbox" v-model="parser().exportNamespaceFrom" />
    </div>
    <div class="option">
      <span class="optionName">jsc.parser.decorators</span>
      <input type="checkbox" v-model="parser().decorators" />
    </div>
    <div class="option">
      <span class="optionName">jsc.parser.decoratorsBeforeExport</span>
      <input type="checkbox" v-model="parser().decoratorsBeforeExport" />
    </div>
    <div class="option">
      <span class="optionName">jsc.parser.importMeta</span>
      <input type="checkbox" v-model="parser().importMeta" />
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
