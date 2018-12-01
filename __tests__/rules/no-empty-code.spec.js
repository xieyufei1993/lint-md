const lint = require('../lint');

describe('no-empty-code', () => {
  test('success', () => {
    let md = '```js\n' +
               'const a = 0;\n' +
               '```';
    expect(lint(md)).toEqual([]);

    md = '`const a = 0;`';
    expect(lint(md)).toEqual([]);
  });

  test('fail', () => {
    let md = '```js\n' +
               '```';
    expect(lint(md)).toEqual([{
      column: 1,
      level: 'error',
      line: 1,
      text: 'Code block can not be empty',
      type: 'no-empty-code'
    }]);

    md = '``';
    expect(lint(md)).toEqual([{
      column: 1,
      level: 'error',
      line: 1,
      text: 'Code block can not be empty',
      type: 'no-empty-code'
    }]);
  });
});
