# Global Component Import

> If your component library needs to support global component hints, you can add the components we developed to the src/components.d.ts file.

```js
import * as components from "./index";
declare module "@vue/runtime-core" {
  export interface GlobalComponents {
    EaButton: typeof components.Button;
    EaIcon: typeof components.Icon;
  }
}
export {};

```

> When using our component library, users need to configure `types: ["stellarnovaui/lib/src/components"]` in their `tsconfig.json` file. Of course, this should be based on the name of your component library.

```js
{
  "compilerOptions": {
    ...
    "types": ["stellarnovaui/lib/src/components"]
  }
}
```
