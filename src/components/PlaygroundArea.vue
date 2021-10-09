<script setup lang="ts">
import { Splitpanes, Pane } from "splitpanes";
import ResultViewer from "./ResultViewer.vue";
import SrcEditor from "./SrcEditor.vue";
import debounce from "lodash.debounce";
import { useSWCTransform } from "./composables/useSWCTransform";
import { reactive, ref } from "@vue/reactivity";
import { SWCOptions } from "./types";
import SWCOptionsEditor from "./SWCOptionsEditor.vue";

const result = ref("");

const swcOptions = reactive<SWCOptions>({
  jsc: {
    parser: {
      syntax: "typescript",
    },
  },
});

const { transform } = useSWCTransform();

const handleChangeSrc = debounce((src: string) => {
  const transformResponse = transform(src, swcOptions);
  console.log(transformResponse);
  result.value = transformResponse?.code || "";
}, 1000);

const handleUpdateOptions = (options: SWCOptions) => {
  swcOptions.jsc = options.jsc;
};
</script>

<template>
  <Splitpanes class="default-theme">
    <Pane
      ><SWCOptionsEditor
        :initial-options="swcOptions"
        @update="handleUpdateOptions"
    /></Pane>
    <Pane><SrcEditor class="w-full h-full" @change="handleChangeSrc" /></Pane>
    <Pane><ResultViewer :result="result" class="w-full h-full" /></Pane>
  </Splitpanes>
</template>
