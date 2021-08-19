
let allDrinks = {}

people.forEach((person) =>{
    const { drink } = person;
    allDrinks[drink] ?
        allDrinks[drink] += 1 :
        allDrinks[drink] = 1
});

console.log(allDrinks);