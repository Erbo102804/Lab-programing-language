function getRange(start, end, step) {
  if (!step || step === 0) {
    step = 1;
  }
  var result = [];
  if (start <= end) {
    for (var i = start; i <= end; i = i + step) {
      result.push(i);
    }
  } else {
    for (var i = start; i >= end; i = i - Math.abs(step)) {
      result.push(i);
    }
  }
  return result;
}

function myReverse(str) {
  var out = "";
  for (var i = str.length - 1; i >= 0; i--) {
    out = out + str[i];
  }
  return out;
}

function maskCard(cardNumber, maskChar) {
  if (maskChar === undefined) {
    maskChar = "X";
  }
  if (cardNumber.length <= 10) {
    return cardNumber;
  }
  var firstPart = cardNumber.slice(0, 6);
  var lastPart = cardNumber.slice(cardNumber.length - 4);
  var middleLen = cardNumber.length - 10;
  var middleMask = "";
  for (var i = 0; i < middleLen; i++) {
    middleMask = middleMask + maskChar;
  }
  return firstPart + middleMask + lastPart;
}

console.log(getRange(1, 10));
console.log(getRange(10, 30, 5));
console.log(getRange(5, 1));

console.log(myReverse("123456789"));
console.log(myReverse("hello"));

console.log(maskCard("4815154823541789"));
console.log(maskCard("4815154823541789", "*"));
console.log(maskCard("1234567890"));
