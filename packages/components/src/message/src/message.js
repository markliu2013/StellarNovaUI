import createInstance from './instance.js';

/**
 * Read configuration and render Message
 * @param {Object} typeCfg message type
 * @param {Object/String} cfg config
 */
function renderMsg(typeCfg = {}, cfg = '') {
  // Allow direct input of message content,
  // therefore, it is necessary to determine the type of the passed-in cfg
  const isContent = typeof cfg === 'string';

  // Integrate custom configurations
  cfg = isContent
    ? {
        content: cfg
      }
    : cfg;

  const config = Object.assign({}, typeCfg, cfg); // 合并配置

  const {
    type = 'text', // message type
    content = '', // message content
    icon = '', // message icon
    duration = 3000, // Automatic closing delay time
    close = false // Whether to display the close button
  } = config;

  // create instance
  return createInstance({
    type,
    content,
    duration,
    icon,
    close
  });
}

export default {
  // text type
  text(cfg = '') {
    const textCfg = {
      type: 'text',
      icon: ''
    };

    return renderMsg(textCfg, cfg);
  },
  // success type
  success(cfg = '') {
    const successCfg = {
      type: 'success',
      icon: 'ri-checkbox-circle-fill'
    };

    return renderMsg(successCfg, cfg);
  },
  // error type
  error(cfg = '') {
    const errorCfg = {
      type: 'error',
      icon: 'ri-close-circle-fill'
    };
    return renderMsg(errorCfg, cfg);
  }
};
