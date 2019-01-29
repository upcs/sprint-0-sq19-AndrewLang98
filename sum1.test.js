const addition = require('./js/functions');

//First test that is correct
test('adds 3 + 4 to equal 7', () => {
    expect(addition(3,4)).toBe(7);
});

//Test that shouldn't work
// test('adds 1 + 1 to equal 3', () => {
//     expect(addition(1,1)).toBe(4);
// });