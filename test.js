import test from 'ava';
import m from '.';

const TextCnt = `
\u{231A}: ⌚ default emoji presentation character (Emoji_Presentation)
\u{2194}\u{FE0F}: ↔️ default text presentation character rendered as emoji
\u{1F469}: 👩 emoji modifier base (Emoji_Modifier_Base)
\u{1F469}\u{1F3FF}: 👩🏿 emoji modifier base followed by a modifier
`;

test('Err: input number', t => {
  const err = t.throws(() => {
    m(123);
  }, TypeError);
  t.is(err.message, 'Expected a string, got number');
});

test('emoji positions', t => {
  const data = m(TextCnt);
  t.is(data.emojiPos.length, 8);
  let emojiIdx = {
    '1': true,
    '4': true,
    '64': true,
    '68': true,
    '125': true,
    '129': true,
    '174': true,
    '180': true,
  };

  t.deepEqual(data.emojiPos, emojiPos);
  t.deepEqual(data.emojiIdx, emojiIdx);
});

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
