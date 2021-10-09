<script setup lang="ts">
import { reactive } from "vue";
import { SWCOptions } from "./types";

const props = defineProps<{
  initialOptions: SWCOptions;
}>();

const options = reactive<SWCOptions>(
  JSON.parse(JSON.stringify(props.initialOptions))
);

const emit = defineEmits<{
  (e: "update", options: SWCOptions): void;
}>();

const jscParseSyntax: SWCOptions["jsc"]["parser"]["syntax"][] = [
  "typescript",
  "ecmascript",
];

function handleChangeJscParserSyntax(event: Event) {
  const value = (event.target as HTMLSelectElement).value;
  options.jsc.parser.syntax = value as SWCOptions["jsc"]["parser"]["syntax"];
  emit("update", options);
}
</script>

<template>
  <div class="text-[10px]">
    <div>
      <div>jsc.parser.syntax</div>
      <select
        :value="options.jsc.parser.syntax"
        @change="handleChangeJscParserSyntax"
        class="p-1 border-[1px]"
      >
        <option v-for="value in jscParseSyntax" :key="value">
          {{ value }}
        </option>
      </select>
    </div>
    <div></div>
  </div>
</template>
