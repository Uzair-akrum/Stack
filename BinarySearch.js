let array = [1, 6, 239, 92, 30, 283, 98, 12, 16, 25];
array.sort((a, b) => a - b);
function mida(a) {
  return Math.floor(a / 2);
}
function binarySearch(array, target, start, end) {
  let mid = mida(end);

  if (array[mid] == target) {
    console.log(" :", array[mid]);
    console.log(mid);
  } else if (array[mid] < target) {
    binarySearch(array, target, mid + 1, end);
  } else if (array[mid] > target) {
    binarySearch(array, target, start, mid - 1);
  }
}

binarySearch(array, 239, 0, array.length);
