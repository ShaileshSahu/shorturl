

const randomGenerator = (length) => {
    const characters = "abcdefghIJKPLMNOPER1234567890";
    if(typeof length != 'number') return new TypeError("Please provide number as arg");
    let random = "";
    let i = 0;
    while(i<length) {
        random+=characters[parseInt(Math.random()*characters.length)];
        i++;
    }
    return random;
}

module.exports = {randomGenerator};