const specifyType = function (collection) {
  if (collection instanceof Array) {
    return collection.slice();
  } else {
    return Object.values(collection);
  }
};

const myEach = function (collection, callback) {
  const newCollection = specifyType(collection);
  for (let i = 0; i < newCollection.length; i++) {
    callback(newCollection[i]);
  }
  return collection;
};

const myMap = function (collection, callback) {
  const newCollection = specifyType(collection);
  const newArr = [];
  for (let i = 0; i < newCollection.length; i++) {
    newArr.push(callback(newCollection[i]));
  }
  return newArr;
};

const myReduce = (collection, callback, acc) => {
  let newCollection = specifyType(collection);
  if (!acc) {
    acc = newCollection[0];
    newCollection = newCollection.slice(1);
  }
  const length = newCollection.length;
  for (let i = 0; i < length; i++) {
    acc = callback(acc, newCollection[i], newCollection);
  }
  return acc;
};

const myFind = function (collection, predicate) {
  const newCollection = specifyType(collection);
  for (let i = 0; i < newCollection.length; i++) {
    if (predicate(newCollection[i])) return newCollection[i];
  }
  return undefined;
};

const myFilter = function (collection, predicate) {
  const newCollection = specifyType(collection);
  const newArr = [];
  for (let i = 0; i < newCollection.length; i++) {
    if (predicate(newCollection[i])) newArr.push(newCollection[i]);
  }
  return newArr;
};

const mySize = function (collection) {
  const newCollection = specifyType(collection);
  return newCollection.length;
};

const myFirst = function (arr, stop = false) {
  return stop ? arr.slice(0, stop) : arr[0];
};

const myLast = function (arr, start = false) {
  return start
    ? arr.slice(arr.length - start, arr.length)
    : arr[arr.length - 1];
};

const myKeys = function (obj) {
  const keys = [];
  for (let key in obj) {
    keys.push(key);
  }
  return keys;
};

const myValues = function (obj) {
  const values = [];
  for (let key in obj) {
    values.push(obj[key]);
  }
  return values;
};
