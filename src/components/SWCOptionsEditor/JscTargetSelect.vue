<script setup lang="ts">
import { getSWCOptionValue } from "../../lib/getSWCOptionValue";
import {
  DEFAULT_ECMASCRIPT_PARSER_OPTIONS,
  DEFAULT_TYPESCRIPT_PARSER_OPTIONS,
  injectState,
} from "../composables/useState";
import { SWCOptions } from "../types";

const { options } = injectState();

const jscTarget: SWCOptions["jsc"]["target"][] = [
  "es3",
  "es5",
  "es2015",
  "es2016",
  "es2017",
  "es2018",
  "es2019",
  "es2020",
  "es2021",
];

function handleChange(event: Event) {
  const value = getSWCOptionValue<SWCOptions["jsc"]["target"]>(event);
  options.value.jsc.target = value;
}
</script>

<template>
  <div className="optionSelect">
    <div className="optionName">jsc.parser.target</div>
    <select
      :value="options.jsc.target"
      @change="handleChange"
      class="p-1 border-[1px]"
    >
      <option v-for="value in jscTarget" :key="value">
        {{ value }}
      </option>
    </select>
  </div>
</template>
