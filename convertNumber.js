
function convertNumber(num) {
    num = Math.round(num * 100) / 100;
    num = ('$' + addZero(num.toLocaleString('en-US', 'USD')));
    return num;
}

function addZero(num) {
    num = num.split('.')
    if (num[1].length == 1) {
        num[1] = num[1] + 0;
    }
    return num.join('.');
}

module.exports = convertNumber;