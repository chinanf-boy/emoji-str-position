'use strict';
const emojiRegex = require('emoji-regex')();

/**
 * @description return str with emoji position
 * @param {string} input
 * @param {Object} opts
 * @returns {Object} data
 * @returns {Array<Object>} data.emojiPos
 * @returns {Object} data.emojiIdx { keys is the emoji position indexs}
 */
exports = module.exports = function emojiStrPosition(str, opts) {
  if (typeof str !== 'string') {
    throw new TypeError(`Expected a string, got ${typeof str}`);
  }

  let emojiPos = [];
  let moreEmoji = {};
  let onEmojiPos = {};

  let match;
  while ((match = emojiRegex.exec(str))) {
    const emoji = match[0];
    const len = [...emoji].length;
    const pos = str.indexOf(emoji, moreEmoji[emoji] || 0);

    moreEmoji[emoji] = pos + len;

    emojiPos.push({
      emoji,
      len,
      pos,
    });

    for (let i = pos; i < pos + len; i++) {
      onEmojiPos[i] = true;
    }
  }

  const data = {
    emojiPos,
    emojiIdx: onEmojiPos,
  };

  return data;
};
