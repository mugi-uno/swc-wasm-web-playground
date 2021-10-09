<script setup lang="ts">
import { Splitpanes, Pane } from "splitpanes";
import ResultViewer from "./ResultViewer.vue";
import SrcEditor from "./SrcEditor.vue";
import debounce from "lodash.debounce";
import { useSWCTransform } from "./composables/useSWCTransform";
import { ref } from "@vue/reactivity";

const result = ref("");

const { transform } = useSWCTransform();

const handleChangeSrc = debounce((src: string) => {
  const transformResponse = transform(src);
  console.log(transformResponse);
  result.value = transformResponse?.code || "";
}, 1000);
</script>

<template>
  <Splitpanes class="default-theme">
    <Pane><SrcEditor class="w-full h-full" @change="handleChangeSrc" /></Pane>
    <Pane><ResultViewer :result="result" class="w-full h-full" /></Pane>
  </Splitpanes>
</template>
