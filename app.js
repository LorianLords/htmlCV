alert(1)

const people = [
    {name: 'Kerim', budget: 4200},
    {name: 'Elena', budget: 2000},
    {name: 'Victoria', budget: 10000}
]
const allBudget = people.filter(person => person.budget > 3000)
    .reduce((acc, person) => {
    acc += person.budget
    return acc
}, 0)

console.log(allBudget)