<script lang="ts" setup>
import './style/index.less';
import { computed } from 'vue';
defineOptions({ name: 'sn-button' });
type ButtonProps = {
  type?: string;
  size?: string;
};
const buttonProps = defineProps<ButtonProps>();

const buttonStyle = computed(() => {
  return { [`sn-button--${buttonProps.type}`]: buttonProps.type };
});
</script>

<template>
  <button class="sn-button" :class="buttonStyle">
    <slot />
  </button>
</template>
