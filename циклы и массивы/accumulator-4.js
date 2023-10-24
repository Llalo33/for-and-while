const name = ["Vanya" , "Ahmad" , "Isa" , "Khalid" , "Walter" , "Andrey" , "Rayan" , "Saul" , "Abdul-Rakhman"];
let accumulator = []
for (let trueName of name) {
    if (trueName[0] === "A") {
        accumulator.push(trueName)
    }
}
