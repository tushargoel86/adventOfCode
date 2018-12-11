md5 = require('js-md5')
var key = "abcdef";

Array.from(Array(10000000).keys())
    .map(digit => key+digit)
    .map((data, index) =>  md5(data).startsWith("00000") ? index : -1)
    .filter(index => index != -1)
    .forEach(index => console.log(index));
