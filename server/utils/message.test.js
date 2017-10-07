var expect = require('expect');
var { generateMessage } = require('./message');

describe('generateMessage', () => {
  it('should generate the expected message', () => {
    var from = 'kyle';
    var text = 'message';
    var message = generateMessage(from, text);

    expect(message).toInclude({from, text});
    expect(message.createdAt, 'number').toBeA('number');
  });
});