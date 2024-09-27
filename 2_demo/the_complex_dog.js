// This dog has a complex of properties.

const zeus = {
  name: 'Zeus',
  colors: ['brown', 'black'],
  owner: {
    name: 'Higgins',
    age: 45
  }
}

const paintedZeus = { // it copies the first level only, so if we change the second object it is changing the first array as well since the reference is copied only ( shallow copy)
  ...zeus,
}
paintedZeus.colors.push('green');

// console.log('zeus === paintedZeus', zeus === paintedZeus);
// console.log('zeus.colors === paintedZeus.colors', zeus.colors === paintedZeus.colors);
// console.log('zeus.colors', zeus.colors);
// console.log('paintedZeus.colors', paintedZeus.colors);
// console.log('zeus', zeus);
// console.log('paintedZeus', paintedZeus);

// Celebrate the owner's birthday

 //  <REF0> = ['brown', 'black'] we just copy the reference and not the array
 //  <REF1> = {name: 'Higgins',age: 45} we just copy the reference and not the array

const apollo = {
  name: 'Apollo',
  colors: ['brown', 'black'], // it s like only a <REF0>
  owner: {// it s like only a <REF1>
    name: 'Higgins',
    age: 45
  }
};

const apolloWithOlderOwner = {
  ...apollo
};

apolloWithOlderOwner.owner.age = 46;

// console.log('apollo === apolloWithOlderOwner', apollo === apolloWithOlderOwner);
// console.log('apollo.owner === apolloWithOlderOwner.owner', apollo.owner === apolloWithOlderOwner.owner);
// console.log('apollo.owner', apollo.owner);
// console.log('apolloWithOlderOwner.owner', apolloWithOlderOwner.owner);
// console.log('apollo', apollo);
// console.log('apolloWithOlderOwner', apolloWithOlderOwner);
