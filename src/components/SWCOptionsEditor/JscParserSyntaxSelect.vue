<script setup lang="ts">
import { getSWCOptionValue } from "../../lib/getSWCOptionValue";
import {
  DEFAULT_ECMASCRIPT_PARSER_OPTIONS,
  DEFAULT_TYPESCRIPT_PARSER_OPTIONS,
  injectState,
} from "../composables/useState";
import { SWCOptions } from "../types";

const { options } = injectState();

const jscParseSyntax: SWCOptions["jsc"]["parser"]["syntax"][] = [
  "typescript",
  "ecmascript",
];

function handleChangeJscParserSyntax(event: Event) {
  const value = getSWCOptionValue<SWCOptions["jsc"]["parser"]["syntax"]>(event);
  if (value === "ecmascript") {
    options.value.jsc.parser = JSON.parse(
      JSON.stringify(DEFAULT_ECMASCRIPT_PARSER_OPTIONS)
    );
  } else {
    options.value.jsc.parser = JSON.parse(
      JSON.stringify(DEFAULT_TYPESCRIPT_PARSER_OPTIONS)
    );
  }
}
</script>

<template>
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
</template>
