const number = [2 ,3 ,5 ,6 ,8 ,1 ,6 ,8 ,0, 1, 2 ,5] 
let accumulatorOdd = 0
for (let trueNumber of number) {
    if (trueNumber % 2 !== 0) {
       accumulatorOdd += trueNumber
    }
}
console.log(accumulatorOdd)