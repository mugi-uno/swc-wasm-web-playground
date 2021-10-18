// see https://github.com/swc-project/swc/blob/4846c3230396875ee5a7017c525aa64e788b3bb7/node-swc/src/types.ts

export type TypeScriptParserOptions = {
  syntax: "typescript";
  tsx: boolean;
  decorators: boolean;
  dynamicImport: boolean;
};
export type ECMAScriptParserOptions = {
  syntax: "ecmascript";
  jsx: boolean;
  dynamicImport: boolean;
  privateMethod: boolean;
  functionBind: boolean;
  classPrivateProperty: boolean;
  exportDefaultFrom: boolean;
  exportNamespaceFrom: boolean;
  decorators: boolean;
  decoratorsBeforeExport: boolean;
  importMeta: boolean;
};

export type SWCOptions = {
  jsc: {
    parser: TypeScriptParserOptions | ECMAScriptParserOptions;
    externalHelpers: boolean;
    target:
      | "es3"
      | "es5"
      | "es2015"
      | "es2016"
      | "es2017"
      | "es2018"
      | "es2019"
      | "es2020"
      | "es2021";
  };
};
