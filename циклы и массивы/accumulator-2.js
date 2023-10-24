const number = [1 , 2 , -3 , -5 , -6 , 4 , 7 , 8 , 9 , 10]
let accumulator = 0
let i = 0
while (i < number.length) {
    if (number[i] > 0) { 
      accumulator = number[i]
      console.log(accumulator)
  }
  i++;
}