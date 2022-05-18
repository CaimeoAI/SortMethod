let numberArray = [2, 6, 12, 5, 107 ,1]
let letterArray = ["N", "I", "A", "O", "W", "S", "C"]

let letterObject = [
    {id: 5,
    name: "Ana"},
    {id: 7,
    name: "Naqvi"},
    {id: 1,
    name: "Jude"}
]

console.log(numberArray.sort((x, y) => {
    console.log(x,y);
    return y - x}));
console.table(letterArray.sort((x, y) => x > y? -1 : 1)); //* Descending order strings

console.log(letterObject.sort((x, y) => x.id - y.id));
