function pigIt(str){
    // substr the first char of a word
    // punctuation is separated by a space, so may be a single non-letter char?
    // add to the end + 'ay'
    // leave any punctuation
    const words = str.split(" ");
    let latinWords = [];
    words.forEach(function (word) {
      if (word.match(/[^a-zA-Z]/)) {
        // add the punctuation
        latinWords.push(word);
      } else {
        latinWords.push(word.substr(1, word.length) + word.substr(0, 1) + 'ay');
      }
    });
    return latinWords.join(' ');
  }

  
  function pigItReplace(str){
    return str.replace(/(\w)(\w*)(\s|$)/g, "\$2\$1ay\$3")
  }

  module.exports = {
    pigIt,
    pigItReplace
  };