<script setup lang="ts">
import { injectState } from "../composables/useState";
import JscParserSyntaxSelect from "./JscParserSyntaxSelect.vue";
import SyntaxTypeScriptOptions from "./SyntaxTypeScriptOptions.vue";
import SyntaxECMAScriptOptions from "./SyntaxECMAScriptOptions.vue";

const { options } = injectState();
</script>

<template>
  <div class="text-[10px]">
    <JscParserSyntaxSelect />

    <SyntaxTypeScriptOptions
      v-if="options.jsc.parser.syntax === 'typescript'"
    />
    <SyntaxECMAScriptOptions
      v-if="options.jsc.parser.syntax === 'ecmascript'"
    />
  </div>
</template>
