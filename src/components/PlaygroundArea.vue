<script setup lang="ts">
import { Splitpanes, Pane } from "splitpanes";
import ResultViewer from "./ResultViewer.vue";
import SrcEditor from "./SrcEditor.vue";
import debounce from "lodash.debounce";
import { useSWCTransform } from "./composables/useSWCTransform";
import { ref } from "@vue/reactivity";
import { SWCOptions } from "./types";
import SWCOptionsEditor from "./SWCOptionsEditor/SWCOptionsEditor.vue";
import TransformLoader from "./TransformLoader.vue";
import { watch, watchEffect } from "@vue/runtime-core";
import { injectState } from "./composables/useState";

const { src, options, result, transformError } = injectState();

const transforming = ref(false);

const { transform } = useSWCTransform();

const callTransform = debounce((newSrc: string, newOptions: SWCOptions) => {
  transformError.value = "";
  transforming.value = true;
  try {
    console.log("options", JSON.stringify(newOptions));
    const transformResponse = transform(newSrc, newOptions);
    result.value = transformResponse?.code || "";
  } catch (e) {
    if (typeof e === "string") {
      transformError.value = e;
    }
    if (e instanceof Error) {
      transformError.value = e.toString();
    }
  } finally {
    transforming.value = false;
  }
}, 500);

watch(
  [src, options],
  () => {
    console.log(src.value, options.value);
    callTransform(src.value, options.value);
  },
  {
    deep: true,
  }
);
</script>

<template>
  <div class="flex">
    <div
      class="h-full p-2 border-r-[1px] border-solid border-gray-200 flex-grow"
    >
      <SWCOptionsEditor />
    </div>
    <Splitpanes class="default-theme">
      <Pane size="50"><SrcEditor :src="src" class="w-full h-full" /></Pane>
      <Pane size="50" class="relative">
        <div
          v-if="transforming"
          class="absolute center ml-auto mr-auto left-1/2 right-1/2"
        >
          <TransformLoader />
        </div>
        <ResultViewer class="w-full h-full"
      /></Pane>
    </Splitpanes>
  </div>
</template>
