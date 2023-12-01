// Exercise #3: Min Numbers
let numbers = [100, 20, 3, 1000];
let minNumber = 0;

for (let i = 0; i < numbers.length; i++) {
  if (minNumber === 0 || numbers[i] < minNumber) {
    minNumber = numbers[i];
  }
}

console.log(minNumber);

//   if (minNumber === 0 || minNumber > numbers[i]) {
// รอบ1   0 > 100 = false  or minNumber === 0 = true -> re-as minNumber = 100
// รอบ2  100 > 20 = true -> re-as minNumber= 20
// รอบ3 20 > 3 = true -> re-as minNumber=3
// รอบ4 3 > 100 = false -> minNumber=3

//  if (minNumber === 0 || numbers[i] < minNumber) {
// รอบ1   100 < 0 = false  or minNumber === 0 = true -> re-as minNumber = 100
// รอบ2  20 < 100 = true -> re-as minNumber= 20
// รอบ3 3 < 20 = true -> minNumber=3
// รอบ4 1000 < 3 = false ->  minNumber= 3
