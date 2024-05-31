<script setup>
import { ref } from 'vue';
import './style/index.less';

const props = defineProps({
  config: { type: Object, default: () => undefined }, // message config
  remove: { type: Function, default: () => undefined } // callback of remove message
});

const visible = ref(false);

const onClose = () => {
  visible.value = false;
  setTimeout(() => {
    props.remove();
  }, 200);
};

const onOpen = (config) => {
  setTimeout(() => {
    visible.value = true;
  }, 10);

  // remove message in duration
  if (config.duration !== 0) {
    setTimeout(() => {
      onClose();
    }, config.duration);
  }
};

onOpen(props.config);
</script>

<template>
  <!-- message list -->
  <Transition name="slide-fade">
    <div class="message-container" v-show="visible">
      <!-- content -->
      <div class="message-content">
        <!-- Icon is determined by the message type. No icon is configured for text type -->
        <div class="message-icon" v-if="config.icon">
          <i :class="config.icon"></i>
        </div>

        <!-- message text -->
        <span v-text="config.content"></span>

        <!-- click to close -->
        <div class="option" v-if="config.close">
          <i class="ri-close-fill" @click="onClose"></i>
        </div>
      </div>
    </div>
  </Transition>
</template>