module.exports = function toReadable (number) {
    const fromOneToNineteen = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven',
        'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen',
        'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const dozens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 
        'seventy', 'eighty', 'ninety'];
    const hundreds = ['', 'one hundred', 'two hundred', 'three hundred', 'four hundred',
        'five hundred', 'six hundred', 'seven hundred', 'eight hundred', 'nine hundred'];
    let result;
  if (number === 0) {
   return 'zero';
 }
 if (number > 0 && number < 20) {
   return fromOneToNineteen[number];
 }
 if (number >= 20 && number < 100) {
   result = dozens[Math.floor(number / 10)] + ' ' + fromOneToNineteen[number % 10];
   return result.trim(); 
 }
 if (number > 99 && number < 120) {
    result = hundreds[Math.floor(number / 100)] + ' ' + fromOneToNineteen[number % 100];
    return result.trim();
}
if (number > 119 && number < 1000) {
    if (number % 100 < 20) {
        result = hundreds[Math.floor(number / 100)] + ' ' + fromOneToNineteen[number % 100];
    } else {
    result = hundreds[Math.floor(number / 100)] + ' ' + dozens[Math.floor((number % 100) / 10)] + ' ' + fromOneToNineteen[number % 10];
    }
    return result.trim();
}

}
