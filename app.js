//1
function hasOddNumber(arr) {
  return arr.some((num) => {
    return num % 2 !== 0;
  });
}

//2 NOT SOLVED?
function hasAZero(num) {
  num
    .toString()
    .split("")
    .some((val) => {
      return val === "0";
    });
}

//3
function hasOnlyOddNumbers(arr) {
  return arr.every((numsOfArr) => {
    return numsOfArr % 2 !== 0;
  });
}

//4
function hasNoDuplicates(arr) {
  return arr.every((val) => {
    return arr.indexOf(val) === arr.indexOf(val);
  });
}

//5
function hasCertainKey(obj, key) {
  return obj.every((object) => {
    return key in object;
  });
}

//6
function hasCertainValue(obj, key, searchValue) {
  return arr.every((object) => {
    return object[key] === searchValue;
  });
}
