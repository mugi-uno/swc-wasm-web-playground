<script setup lang="ts">
import { Splitpanes, Pane } from "splitpanes";
import ResultViewer from "./ResultViewer.vue";
import SrcEditor from "./SrcEditor.vue";
import debounce from "lodash.debounce";
import { useSWCTransform } from "./composables/useSWCTransform";
import { reactive, ref } from "@vue/reactivity";
import { SWCOptions } from "./types";
import SWCOptionsEditor from "./SWCOptionsEditor.vue";
import TransformLoader from "./TransformLoader.vue";
import { defineComponent } from "@vue/runtime-core";

const src = ref("");
const result = ref("");
const transformError = ref("");
const transforming = ref(false);

const swcOptions = reactive<SWCOptions>({
  jsc: {
    parser: {
      syntax: "typescript",
    },
  },
});

const { transform } = useSWCTransform();

const handleChangeSrc = debounce((newSrc: string) => {
  transformError.value = "";
  transforming.value = true;
  src.value = newSrc;
  try {
    const transformResponse = transform(newSrc, swcOptions);
    console.log(transformResponse);
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

const handleUpdateOptions = (options: SWCOptions) => {
  swcOptions.jsc = options.jsc;

  handleChangeSrc(src.value);
};
</script>

<template>
  <div class="flex">
    <div
      class="w-[120px] h-full p-2 border-r-[1px] border-solid border-gray-200"
    >
      <SWCOptionsEditor
        :initial-options="swcOptions"
        @update="handleUpdateOptions"
      />
    </div>
    <Splitpanes class="default-theme">
      <Pane size="50"
        ><SrcEditor :src="src" class="w-full h-full" @change="handleChangeSrc"
      /></Pane>
      <Pane size="50" class="relative">
        <div
          v-if="transforming"
          class="absolute center ml-auto mr-auto left-1/2 right-1/2"
        >
          <TransformLoader />
        </div>
        <ResultViewer
          :result="result"
          :transformError="transformError"
          class="w-full h-full"
      /></Pane>
    </Splitpanes>
  </div>
</template>
