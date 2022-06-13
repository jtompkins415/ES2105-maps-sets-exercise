//Maps

//creating a map and setting key/value pairs

// const myMap = new Map()
// myMap.set(7,'seven')
// myMap.set('7','seven string')

//Must create a reference for empty arrays/objects to use them as keys

// const empty = [];
// myMap.set(empty, 'empty array!');

//Maps do not convert keys to strings, the data type stays how it is

// myMap.set(true, 'True!');
 
//Retrieve data from the map using the .get() method

// myMap.get(7);

//Can use functions as keys
const add = (x,y) => x+y;
const mult = (x,y) => x*y;

const funcCalls = new Map();
funcCalls.set(add, 0);
funcCalls.set(mult, 0);

//Easy syntax for creating a new map

//Nested Arrays within an Array. Key/value pair within each sub array

const bandData = [
    [3,'3 Doors Down'],
    ['three','Three Dog Night'],
    ['nine','Nine Inch Nails'],
    ['four','The Four Seasons'],
    [41,'Sum 41']
];

//Pass the main array as a parameter in the Map function

const bandMap = new Map(bandData);

//See if a Map has a key/value pair using .has() method, will return true/false

bandMap.has(3);

//will return true

//Can link .set() to create multiple key/value pairs in the app

bandMap.set(182, 'Blink 182').set('twenty', 'Matchbox Twenty');

//Delete a pair based off a particular key using .delete() method

bandMap.delete(41);

//Empty a map using .clear() method

// bandMap.clear();

//Access all keys in a map using .keys() method, same thing for values except with .values() method

bandMap.keys();
bandMap.values();

//Iterating over a Map

//Can iterate over a Map using the .forEach() method like an Array

//In the .forEach function, we pass the value first, then the key

// bandMap.forEach((val, key) => {
//     console.log(key + '=>' + val);
// });

//Can also use a for...of loop, unlike forEach() must destructure w/ key first then value


for(let [key,value] of bandMap){
console.log(key);
}

//Sets



// const bannedHashtags = new Set(['nofilter', 'justsaying', 'winning', 'yolo'])

//add to set using .add() method
//Can chain .add() to add multiple values at once
// bannedHashtags.add('bestlife').add('selfie');

//check if a value exsits in the set using .has() method
// bannedHashtags.has('justsaying')
//Returns true

//Remove a value from a set using .delete() method

// bannedHashtags.delete('yolo');
//Removes 'yolo' from the set

//Empty a set using .clear() method

//bannedHashtags.clear()
//Empties the set

function filterHashtags(tags){
    const bannedHashtags = new Set(['nofilter', 'justsaying', 'winning', 'yolo'])
    return tags.filter((tag) => !bannedHashtags.has(tag))
}

const susansTags = ['happymonday', 'yolo', 'winning', 'sunset'];

//A set are really fast at adding in new values and checking if duplicates exist
//Can also return an set back into an Array by using the spread operator

const ages = [45,43,56,7,7,8,8,5,5,12,3,45]

const uniqueAges = [...new Set(ages)]

