//
//
//


// const person = {
//   name: 'Hemal',
//   age: 22,
//   location: {
//     city: 'Durgapur',
//     temp: 92
//   }
// };
//
// const { name: firstName = 'Anonymous', age } = person;
// console.log(`${firstName} is ${age}.`);
//
// const { city, temp: temperature } = person.location;
// if(city && temperature){
//   console.log(`It's ${temperature} in ${city}.`);
// }

// const book = {
//   title: 'Ego is the Enemy',
//   author: 'Ryan Holiday',
//   publisher: {
//     name: 'Penguin'
//   }
// };
//
// const { title, author } = book;
//
// const { name: publisherName = 'Self-Published' } = book.publisher;
//
// console.log(publisherName);

//
// Array destrcuturing
//

// const address = ['1299 South Juniper Street', 'Philadelphia', 'Pennsylvania', '123123'];
// // Default used in state
// const [ , city, state = 'New York', zip ] = address;
// console.log(`You are in ${city} ${state}.`);

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];
const [ itemName, , medium] = item;
console.log(`A medium ${itemName} costs ${medium}`);
