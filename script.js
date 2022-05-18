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

console.log(numberArray.sort()) //* Sorts numbers by comparing the first numbers of each number

console.log(numberArray.sort((x, y) => x - y)) //* Sorting numbers ascending (when x - y outputs negative number, then switching position)

console.log(numberArray.sort((x, y) => y - x)) //* Sorting numbers descending (same as above but reversed)


console.table(letterArray.sort()) //* Sorts strings by ascending order

console.table(letterArray.sort((x, y) => x < y ? -1 : 1)) //* Sorts strings by descending order (If condition is true switch orders(-1) if it's false, keep order(1))



console.log(letterObject.sort((x, y) => x.id - y.id)) //* Sorting by ascending number order by targeting id key value

console.log(letterObject.sort((x, y) => x.name < y.name ? -1 : 1)); //* Sorting by ascending alphabetical order by targeting name key value


console.log(numberArray.filter(x => x < 10)); //* Filters out all the numbers that don't meet the requirement of being below 10

