import initSwc, { transformSync } from "@swc/wasm-web";
import { onMounted, ref } from "@vue/runtime-core";

export const useSWCTransform = () => {
  const wasmReady = ref(false);

  onMounted(async () => {
    await initSwc(
      import.meta.env.DEV
        ? "node_modules/@swc/wasm-web/wasm_bg.wasm"
        : undefined
    );
    wasmReady.value = true;
  });

  const transform = (src: string) => {
    if (!wasmReady.value) return "";

    const result = transformSync(src, {});

    return result;
  };

  return { wasmReady, transform };
};
