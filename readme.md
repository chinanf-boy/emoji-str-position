# emoji-str-position [![Build Status](https://travis-ci.org/chinanf-boy/emoji-str-position.svg?branch=master)](https://travis-ci.org/chinanf-boy/emoji-str-position) [![codecov](https://codecov.io/gh/chinanf-boy/emoji-str-position/badge.svg?branch=master)](https://codecov.io/gh/chinanf-boy/emoji-str-position?branch=master) [![explain](http://llever.com/explain.svg)](https://github.com/chinanf-boy/emoji-str-position-explain)

「 emoji in str position 」

## Install

```
npm install emoji-str-position
```

```
yarn add emoji-str-position
```

## Usage

```js
const emojiStrPos = require('emoji-str-position');

const text = `
\u{231A}: ⌚ default emoji presentation character (Emoji_Presentation)
\u{2194}\u{FE0F}: ↔️ default text presentation character rendered as emoji
\u{1F469}: 👩 emoji modifier base (Emoji_Modifier_Base)
\u{1F469}\u{1F3FF}: 👩🏿 emoji modifier base followed by a modifier
`;

const data = m(text);
// data.emojiPos.length === 8
```

<details>

<summary> <b>data</b> details </summary>

### data

#### data.emojiIdx

```js
//
data.emojiIdx ==
  {
    '1': true,
    '4': true,
    '64': true,
    '68': true,
    '125': true,
    '129': true,
    '174': true,
    '180': true,
  };
```

#### data.emojiPos

```js
const emojiPos = [
  {
    emoji: '⌚',
    len: 1,
    pos: 1,
  },
  {
    emoji: '⌚',
    len: 1,
    pos: 4,
  },
  {
    emoji: '↔️',
    len: 1,
    pos: 64,
  },
  {
    emoji: '↔️',
    len: 1,
    pos: 68,
  },
  {
    emoji: '👩',
    len: 1,
    pos: 125,
  },
  {
    emoji: '👩',
    len: 1,
    pos: 129,
  },
  {
    emoji: '👩🏿',
    len: 1,
    pos: 174,
  },
  {
    emoji: '👩🏿',
    len: 1,
    pos: 180,
  },
];
```

> the `emoji length` **diff** Between `node` with `Browser`

</details>

## API

### emojiStrPosition(str) : [data](#data)

#### str

| name: | str                 |
| ----- | ------------------- |
| Type: | `string`            |
| Desc: | str with/out emoji. |

#### data

| name: | data                  |
| ----- | --------------------- |
| Type: | `Object`              |
| Opt:  | [emojiPos](#emojipos) |
| Opt:  | [emojiIdx](#emojiidx) |

##### emojiPos

| name: | emojipos                   |
| ----- | -------------------------- |
| Type: | `Array`                    |
| Opt:  | emoji: \<source emoji\>    |
| Opt:  | len :< emoji length>       |
| Opt:  | pos :< emoji in str index> |

##### emojiIdx

| name:         | emojiIdx                                                                               |
| ------------- | -------------------------------------------------------------------------------------- |
| Type:         | `Object`                                                                               |
| Opt:          | `index`: true                                                                          | P |
| Desc:`index`: | each emoji from **pos** to **pos+len**, be **true** `emojiIdx[pos...(pos+len)] = true` |

## concat

- [emoji-regex](https://github.com/mathiasbynens/emoji-regex) A regular expression to match all Emoji-only symbols as per the Unicode Standard.

## Use by

- [zh-to-en-symbol](https://github.com/chinanf-boy/zh-to-en-symbol) Fix Zh symbol to En symbol

## License

MIT © [chinanf-boy](http://llever.com)
