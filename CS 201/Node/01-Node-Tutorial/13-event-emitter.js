const eventEmitter = require("events");

const customEvent = new eventEmitter();

// .on listens for event
customEvent.on("request", (name, id) => {
  console.log(`${name} has an id of ${id}`);
});

customEvent.on("food", (name, _, __, food) => {
  console.log(`${name}'s favorite food is ${food}`);
});

customEvent.emit("food", "Jimmy", 12345, true, "donuts");
