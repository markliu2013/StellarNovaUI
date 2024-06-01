# Component Development

Component development should be done under the components/src directory. For example, the directory for the button component is as follows:

```
-- components
  -- src
     -- button
        -- style               Stylesheets
        -- button.vue          Component Main Logic
        -- index.ts            Export Component
     -- index.ts               Export All Components
  -- index.ts                  Entry File for the Component Library

```

button.vue Example

```vue
<template>
  <button class="sn-button" :class="buttonStyle"><slot /></button>
</template>

<script lang="ts" setup>
import "./style/index.less";
import { computed } from "vue";
//Component Naming
defineOptions({ name: "sn-button" });
type ButtonProps = {
  type?: string;
  size?: string;
};
const buttonProps = defineProps<ButtonProps>();

const buttonStyle = computed(() => {
  return { [`sn-button--${buttonProps.type}`]: buttonProps.type };
});
</script>
```

Export Component Example (button/index.ts)

```js
import _Button from "./button.vue";
import { withInstall } from "@stellarnovaui/utils";
export const Button = withInstall(_Button);
export default Button;
```

Export All Components(src/index.ts)

```js
export * from "./button";
export * from "./xx";
```

Entry File for the Component Library(components/index.ts)

```js
import * as components from "./src/index";
export * from "./src/index";
import { App } from "vue";

export default {
  install: (app: App) => {
    for (let c in components) {
      app.use(components[c]);
    }
  },
};
```
