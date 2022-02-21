/**
 * Algorithm
 * Create a function findPath passing two parameters object and path
 * check of
 * split the path and put it in array
 * loop the keys of array
 * check for condition for path of obj is undefined
 * if condition is true then return undefined
 * else check the path and return the value
 *
 */
var obj = {
  a: {
    b: {
      c: 12,
      j: false,
    },
    k: null,
  },
};

function findPath(obj, path) {
  if (typeof obj !== "object") {
    return "object is not valid";
  }

  const array = path.split(".");
  for (let keys of array) {
    obj = obj[keys];
    if (obj === undefined) {
      return;
    }
  }
  return obj;
}

console.log(findPath(obj, "a.b.c")); // 12
console.log(findPath(obj, "a.b")); // {c: 12, j: false}
console.log(findPath(obj, "a.b.d")); // undefined
console.log(findPath(obj, "a.c")); // undefined
console.log(findPath(obj, "a.b.c.d")); // undefined
console.log(findPath(obj, "a.b.c.d.e")); // undefined
console.log(findPath(obj, "a.b.j")); //false
console.log(findPath(obj, "a.b.j.k")); //undefined
console.log(findPath(obj, "a.k")); //null
