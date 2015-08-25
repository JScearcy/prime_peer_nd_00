function randomNumber(min, max) {
    return Math.random() * (max-min + 1) + min;
}

module.exports = randomNumber;