console.log(
people.reduce ((total, person) =>
{
	return (total + person.age / 1000)
}, 0)
)