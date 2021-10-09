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

const src = ref("");
const result = ref("");
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
  transforming.value = true;
  src.value = newSrc;
  try {
    const transformResponse = transform(newSrc, swcOptions);
    console.log(transformResponse);
    result.value = transformResponse?.code || "";
  } finally {
    transforming.value = false;
  }
}, 1000);

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
        <ResultViewer :result="result" class="w-full h-full"
      /></Pane>
    </Splitpanes>
  </div>
</template>
