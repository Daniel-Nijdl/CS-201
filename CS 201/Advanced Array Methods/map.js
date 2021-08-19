let ageDrinkThing = people.map((person) => {
    const { age, drink } = person;
    if(alchohol.includes(drink) && age < 21){
        return {...person, ejected: true}
    }
    return {...person, ejected: false}
})
console.log(ageDrinkThing);