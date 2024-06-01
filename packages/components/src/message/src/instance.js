import { createApp } from 'vue';
import MessageItem from './message-item.vue';

/**
 * Message
 * @param {Object} cfg
 */
const createInstance = (cfg) => {
  const config = cfg || {};

  // 1、Create a wrapper container, and set the outer Class attribute and message count.
  let messageNode = document.createElement('div');
  let attr = document.createAttribute('class');
  attr.value = 'message';
  messageNode.setAttributeNode(attr);
  const height = 54; // Height of a single message box.

  const messageList = document.getElementsByClassName('message');
  messageNode.style.top = `${messageList.length * height}px`;

  // 3、unmount method, and recount after unmounting.
  const handleRemove = () => {
    app.unmount(messageNode);
    document.body.removeChild(messageNode);
    resetMsgTop();
  };

  const resetMsgTop = () => {
    for (let i = 0; i < messageList.length; i++) {
      messageList[i].style.top = `${i * height}px`;
    }
  };

  // 2、Create an instance and mount it to the body.
  const app = createApp(MessageItem, {
    config,
    remove() {
      handleRemove(); // Remove the element. After the message is closed, unmount and remove it from the DOM.
    }
  });

  // Mount the instance and append it to the end of the body.
  app.vm = app.mount(messageNode);
  document.body.appendChild(messageNode);

  app.close = () => {
    handleRemove();
  };
  return app;
};
export default createInstance;
