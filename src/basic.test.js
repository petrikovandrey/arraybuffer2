import * as index from './index';

test('buffer', () => {
    const aBuffer = new index.ArrayBufferConverter();
    aBuffer.load(index.getBuffer());
    const result = aBuffer.toString();
    expect(result).toBe('{"data":{"user":{"id":1,"name":"Hitman","level":10}}}');

});
