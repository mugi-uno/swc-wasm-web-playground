<script setup lang="ts">
import { injectState } from "../composables/useState";
import JscParserSyntaxSelect from "./JscParserSyntaxSelect.vue";
import SyntaxTypeScriptOptions from "./SyntaxTypeScriptOptions.vue";
import SyntaxECMAScriptOptions from "./SyntaxECMAScriptOptions.vue";
import JscTargetSelect from "./JscTargetSelect.vue";

const { options } = injectState();

const jsc = () => options.value.jsc;
</script>

<template>
  <div class="optionsEditor text-[10px]">
    <JscParserSyntaxSelect />

    <SyntaxTypeScriptOptions
      v-if="options.jsc.parser.syntax === 'typescript'"
    />
    <SyntaxECMAScriptOptions
      v-if="options.jsc.parser.syntax === 'ecmascript'"
    />

    <JscTargetSelect />

    <div class="optionCheckbox">
      <span class="optionName">jsc.externalHelpers</span>
      <input type="checkbox" v-model="jsc().externalHelpers" />
    </div>
  </div>
</template>

<style>
.optionSelect {
  margin-top: 8px;
}

.optionCheckbox {
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
