import { ModuleCategory } from './SDK';

declare type PatchedFunctionData = {
    name: string;
    hooks: {
      hook: import('./sdkInterface').PatchHook;
      priority: number;
      module: ModuleCategory | null;
      removeCallback: () => void;
    }[];
  };