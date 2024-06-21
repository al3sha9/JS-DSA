let data = {
    fullName: "ali",
    myAge: 20,
    whichPhone: "OP9PRO"
}

console.log(`Keys of the object are: ${Object.keys(data)}`);
console.log(`Values in the object are: ${Object.values(data)}`);
console.log(`Entries are: ${Object.entries(data)}`);
console.log(`checking if it has a property: ${Object.hasOwnProperty("myAge")}`);