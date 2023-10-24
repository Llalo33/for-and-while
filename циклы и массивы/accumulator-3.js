let progLanguage = ["java" , "JavaScript" , "Python" , "c" , "css" , "HTML" , "PHP" , "c++" , "Pascal" , "Lisp"]
const accumulator = []
for (let lang of progLanguage) {
    if (lang.length > 3) {
        accumulator.push(lang)
    }
}