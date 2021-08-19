
// Practice #1
const drinks = [
    'Soda',
    'Coffee',
    'Lemonade',
    'Iced tea',
    'Juice',
    'Milkshake',
    'Water',
    'Milk',
    'Beer',
    'Martini',
    'Margarita',
    'Wine',
    'Daiquari',
  ];

  let mDrinks = drinks.filter((drinks) => {
      return drinks.startsWith('M')
  })

console.log(mDrinks)

// Practice #2
const colors = ['red', 'black', 'white', 'blue', 'purple', 'orange', 'green', 'yellow'];

let newArray = colors.map((color, index) => {
    return {color, index}
})

console.log(newArray)

// Practice #3
let pets = [
    'snake', 
    'dog',
    'cat',
    'fish',
    'lizard',
    'bird',
    'rabbit',
  ]

  pets = pets.map((pet) => {
      return pet[0].toUpperCase() + pet.slice(1)
  })

  console.log(pets)