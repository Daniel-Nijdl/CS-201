enum Role {
  "READ_ONLY",
  "AUTHOR",
  "ADMIN",
}

const person: {
  name: string,
  age: number,
  hobbies: string[],
  role: Role;
} = {
  name: "timmy",
  age: 50,
  hobbies: ['soccer', 'cooking'],
  role: Role.ADMIN,
}

console.log(person);


const product: {
  name: string,
  age: number,
  tags: string[],
  description: [number, string],
} = {
  name: "timmy",
  age: 50,
  tags: ['soccer', 'cooking'],
  description: [1234, "soccer ball"],
}

//! pushing to tuples skips the length and type checking
// product.description.push('testing')

