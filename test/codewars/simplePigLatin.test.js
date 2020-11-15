const {
    pigIt,
} = require("../../codewars/simplePigLatin");

test("basic test", () => {
    expect(pigIt('Pig latin is cool')).toBe('igPay atinlay siay oolcay');
});

test("punctuation test", () => {
    expect(pigIt('This is my string !')).toBe('hisTay siay ymay tringsay !');
});
