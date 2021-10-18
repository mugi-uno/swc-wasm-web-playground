import { SWCOptions } from "../types";
import { inject, provide, reactive, ToRefs, toRefs } from "vue";

export type State = {
  src: string;
  result: string;
  transformError: string;
  options: SWCOptions;
};

export const DEFAULT_ECMASCRIPT_PARSER_OPTIONS: SWCOptions["jsc"]["parser"] = {
  syntax: "ecmascript",
  jsx: false,
  dynamicImport: false,
  privateMethod: false,
  functionBind: false,
  classPrivateProperty: false,
  exportDefaultFrom: false,
  exportNamespaceFrom: false,
  decorators: false,
  decoratorsBeforeExport: false,
  importMeta: false,
} as const;

export const DEFAULT_TYPESCRIPT_PARSER_OPTIONS: SWCOptions["jsc"]["parser"] = {
  syntax: "typescript",
  tsx: false,
  decorators: false,
  dynamicImport: false,
} as const;

export const DEFAULT_STATE = {
  src: "",
  result: "",
  transformError: "",
  options: {
    jsc: {
      parser: DEFAULT_TYPESCRIPT_PARSER_OPTIONS,
    },
  },
} as const;

const state: State = reactive(DEFAULT_STATE);

const KEY = "STATE";

export const injectState = () => inject<ToRefs<State>>(KEY)!;

export const provideState = () =>
  provide<ToRefs<State>>(KEY, { ...toRefs(state) });
