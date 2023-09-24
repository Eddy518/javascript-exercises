function findTheOldest(people) {
  const currentYear = new Date().getFullYear();
  const oldest = people
    .map((person) => {
      const age = person.yearOfDeath
        ? person.yearOfDeath - person.yearOfBirth
        : currentYear - person.yearOfBirth;
      return { ...person, age: age };
    })
    .sort((a, b) => (a.age > b.age ? -1 : 1));
  return oldest[0];
}
// Do not edit below this line
module.exports = findTheOldest;
