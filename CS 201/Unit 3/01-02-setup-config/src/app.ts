console.log("something goes here");

const username: string = "Jimmy";

const userObj = {
  user: "Timmy",
  id: 12345,
};

const { user, id } = userObj;

const add = (n1: number, n2: number = 10) => {
  return console.log(n1 + n2);
};

const numArray = [1, 2, 3, 4];

const addAll = (current: string, ...numbers: number[]) => {
  console.log(current + " is working");
  return numbers.reduce((curr, next) => {
    return curr + next;
  }, 0);
};

console.log(addAll("Reve", ...numArray));

const button = document.querySelector("button")!;

button.addEventListener("click", () => {
  console.log("ping");
});
