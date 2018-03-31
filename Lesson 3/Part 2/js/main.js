let str = "урок-3-был слишком легким";
let arr = [20, 33, 1, 'Человек', 2, 3];

function sqrt() {
  let sum = 0;
  for (var i = 0; i < arr.length; i++) {
    if ( (typeof(arr[i])) === 'number' ) {
      console.log(Math.sqrt(arr[i]**3));
      sum += Math.sqrt(arr[i]**3);
    } else {
      console.log('We need a number!');
    }
  }
  console.log(sum);
}
sqrt();

console.log(str[0].toUpperCase() + str.replace(/-/gi, ' ').substring(1));
console.log(str[19].toUpperCase() + str.slice(19,23).substring(1) + 'o');
console.log(str.replace('-', ' '));


result = Math.sqrt(arr[0]**3) + Math.sqrt(arr[1]**3) + Math.sqrt(arr[2]**3) +  Math.sqrt(arr[4]**3) + Math.sqrt(arr[5]**3);

console.log(result);
