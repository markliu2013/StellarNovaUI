<template>
  <div>
    <sn-button>Button</sn-button>
    <Button>123</Button>
  </div>
</template>
<script lang="ts" setup>
import { Button, Message } from '@stellarnovaui/components';
import {onMounted} from "@vue/runtime-core";

onMounted(() => {
  Message.success('Success')
})

</script>
