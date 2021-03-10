module.exports = function toReadable(number) {
  const dependings = {
    0: '',
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    10: 'ten',
    11: 'eleven',
    12: 'twelve',
    13: 'thirteen',
    14: 'fourteen',
    15: 'fifteen',
    16: 'sixteen',
    17: 'seventeen',
    18: 'eighteen',
    19: 'nineteen',
    20: 'twenty',
    30: 'thirty',
    40: 'forty',
    50: 'fifty',
    60: 'sixty',
    70: 'seventy',
    80: 'eighty',
    90: 'ninety',
  };
  const str = String(number).split('').reverse();
  let item;
  const result = str.reduce((acc, digit, index) => {
    if (index === 1 && digit >= 1 && digit < 2) {
      return [dependings[10 + item]];
    }
    if (index === 2) {
      return [`${dependings[digit]} hundred`, ...acc];
    }
    item = Number(digit);
    return [`${dependings[digit * (10 ** index)]}`, ...acc]

  }, []);
  return (number !== 0) ? result.filter((item) => item !== '').join(' ') : 'zero';
}
