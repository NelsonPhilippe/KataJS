const assert = require('chai').assert
    , foo = 'bar'
    , beverages = { tea: [ 'chai', 'matcha', 'oolong' ] };
const chess = require('./chessboard');

describe('Chessboard', () => {
    describe('#typeOf()', function () {
        it('Check if type is a string for chess', () => {
            assert.typeOf(chess(), 'string');
        })
    });
})
