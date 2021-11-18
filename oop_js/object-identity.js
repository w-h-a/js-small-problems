const objectsEqual = function(obj1, obj2) {
  if (obj1 === obj2) return true;
  const keys1 = Object.keys(obj1).sort();
  const keys2 = Object.keys(obj2).sort();
  if (keys1.length !== keys2.length) return false;
  for (let idx = 0; idx < keys1.length; idx += 1) {
    if (keys1[idx] !== keys2[idx]) {
      return false;
    }
  }
  for (let idx = 0; idx < keys1.length; idx += 1) {
    if (obj1[keys1[idx]] !== obj2[keys2[idx]]) {
      return false;
    }
  }
  return true;
};

console.log(objectsEqual({a: 'foo'}, {a: 'foo'}));                      // true
console.log(objectsEqual({a: 'foo', b: 'bar'}, {a: 'foo'}));            // false
console.log(objectsEqual({}, {}));                                      // true
console.log(objectsEqual({a: 'foo', b: undefined}, {a: 'foo', c: 1}));  // false
