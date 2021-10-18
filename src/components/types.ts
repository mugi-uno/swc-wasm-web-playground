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
  };
};
