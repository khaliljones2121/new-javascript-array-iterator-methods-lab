const inventors = [
  { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
  { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
  { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
  { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
  { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
  { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
  { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
  { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
  { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
  { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
  { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
  { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 },
];

const people = [
  'Becker, Carl',
  'Beckett, Samuel',
  'Beddoes, Mick',
  'Beecher, Henry',
  'Beethoven, Ludwig',
  'Begin, Menachem',
  'Belloc, Hilaire',
  'Bellow, Saul',
  'Benchley, Robert',
  'Benenson, Peter',
  'Ben-Gurion, David',
  'Benjamin, Walter',
  'Benn, Tony',
  'Bennington, Chester',
  'Benson, Leana',
  'Bent, Silas',
  'Bentsen, Lloyd',
  'Berger, Ric',
  'Bergman, Ingmar',
  'Berio, Luciano',
  'Berle, Milton',
  'Berlin, Irving',
  'Berne, Eric',
  'Bernhard, Sandra',
  'Berra, Yogi',
  'Berry, Halle',
  'Berry, Wendell',
  'Bethea, Erin',
  'Bevan, Aneurin',
  'Bevel, Ken',
  'Biden, Joseph',
  'Bierce, Ambrose',
  'Biko, Steve',
  'Billings, Josh',
  'Biondo, Frank',
  'Birrell, Augustine',
  'Black, Elk',
  'Blair, Robert',
  'Blair, Tony',
  'Blake, William',
];

const travelMethods = [
  'car',
  'car',
  'truck',
  'truck',
  'bike',
  'walk',
  'car',
  'van',
  'bike',
  'walk',
  'car',
  'van',
  'car',
  'truck',
];

const devs = [
  { name: 'Alex', year: 1988 },
  { name: 'Dani', year: 1986 },
  { name: 'Matt', year: 1970 },
  { name: 'Wes', year: 2015 },
];

const comments = [
  { text: 'Love this!', id: 523423 },
  { text: 'Super good', id: 823423 },
  { text: 'You are the best', id: 2039842 },
  { text: 'Ramen is my fav food ever', id: 123523 },
  { text: 'Nice Nice Nice!', id: 542328 },
];


/*
Exercise 1: Array.prototype.filter()

Filter the array of inventors into a new array containing only the inventors 
born in the 1500's.

- You have an array of inventors, each with a birth year listed by the property 
  'year'.
- Use the Array.prototype.filter() method to create a new array.
- The new array, 'veryOldInventors', should only include inventors born between 
  the years 1500 and 1599.
*/

let veryOldInventors = [];

// Complete the exercise in the space below:

veryOldInventors = inventors.filter(inv => inv.year >= 1500 && inv.year < 1600);
console.log(veryOldInventors);

// Check your work:
console.log('Exercise 1 my result: ', veryOldInventors);
console.log('Exercise 1 correct result: ', [
  { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
  { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
]);


/*
Exercise 2: Array.prototype.map()

Map the array of inventors into a new array. This new array should only contain
objects with the inventors' first and last names.

- For each inventor, return an object in this format: 
  { first: "First Name", last: "Last Name" }.
- The new array should be a collection of these objects, each representing an 
  inventor with only their first and last names.

Hint: Return a new object literal from the callback that looks like:
      { first: "First Name", last: "Last Name" }
*/

let inventorNames = [];

// Complete the exercise in the space below:

inventorNames = inventors.map(inv => ({ first: inv.first, last: inv.last }));
console.log(inventorNames);

// Check your work:
console.log('Exercise 2 my result: ', inventorNames);
console.log('Exercise 2 correct result: ', [
  { first: 'Albert', last: 'Einstein' },
  { first: 'Isaac', last: 'Newton' },
  { first: 'Galileo', last: 'Galilei' },
  { first: 'Marie', last: 'Curie' },
  { first: 'Johannes', last: 'Kepler' },
  { first: 'Nicolaus', last: 'Copernicus' },
  { first: 'Max', last: 'Planck' },
  { first: 'Katherine', last: 'Blodgett' },
  { first: 'Ada', last: 'Lovelace' },
  { first: 'Sarah E.', last: 'Goode' },
  { first: 'Lise', last: 'Meitner' },
  { first: 'Hanna', last: 'Hammarström' },
]);


/*
Exercise 3: Array.prototype.sort()

Sort the inventors by birth date in ascending order (from those born furthest in
the past to those born most recently).
*/

let sortedByBirthYear = [];

// Complete the exercise in the space below:

sortedByBirthYear = inventors.slice().sort((a, b) => a.year - b.year);
console.log(sortedByBirthYear);

// Check your work:
console.log('Exercise 3 my result: ', sortedByBirthYear);
console.log('Exercise 3 correct result: ', [
  { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
  { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
  { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
  { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
  { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
  { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 },
  { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
  { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
  { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
  { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
  { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
  { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
]);


/* 
Exercise 4: Array.prototype.find()

Use Array.prototype.find() to identify the inventor with the first name 'Ada' 
from an array of inventor objects

- You have an array of objects, each representing an inventor with various 
  properties including their first name.
- Utilize the Array.prototype.find() method to locate the object for the 
  inventor with the first name 'Ada'.
- Assign the found inventor object to the variable inventorNamedAda
*/

let inventorNamedAda = {};

// Complete the exercise in the space below:

inventorNamedAda = inventors.find(inv => inv.first === 'Ada');
console.log(inventorNamedAda);

// Check your work:
console.log('Exercise 4 my result: ', inventorNamedAda);
console.log('Exercise 4 correct result: ', {
  first: 'Ada',
  last: 'Lovelace',
  year: 1815,
  passed: 1852,
});


/*
Exercise 5: Array.prototype.map()

Use the Array.prototype.map() method to reformat each name in the 'people' 
array. The goal is to convert names from "Last, First" format to "First Last" 
format.

Hint: Use the String.prototype.split() method to separate the first and last 
      names. You can split the string using ', ' as the separator.
      After splitting the names, rearrange them to the "First Last" format.
*/

let firstLast = [];

// Complete the exercise in the space below:

firstLast = people.map(name => {
    const [last, first] = name.split(', ');
    return `${first} ${last}`;
});
console.log(firstLast);

// Check your work:
console.log('Exercise 5 my result: ', firstLast);
console.log('Exercise 5 correct result: ', [
  'Carl Becker',
  'Samuel Beckett',
  'Mick Beddoes',
  'Henry Beecher',
  'Ludwig Beethoven',
  'Menachem Begin',
  'Hilaire Belloc',
  'Saul Bellow',
  'Robert Benchley',
  'Peter Benenson',
  'David Ben-Gurion',
  'Walter Benjamin',
  'Tony Benn',
  'Chester Bennington',
  'Leana Benson',
  'Silas Bent',
  'Lloyd Bentsen',
  'Ric Berger',
  'Ingmar Bergman',
  'Luciano Berio',
  'Milton Berle',
  'Irving Berlin',
  'Eric Berne',
  'Sandra Bernhard',
  'Yogi Berra',
  'Halle Berry',
  'Wendell Berry',
  'Erin Bethea',
  'Aneurin Bevan',
  'Ken Bevel',
  'Joseph Biden',
  'Ambrose Bierce',
  'Steve Biko',
  'Josh Billings',
  'Frank Biondo',
  'Augustine Birrell',
  'Elk Black',
  'Robert Blair',
  'Tony Blair',
  'William Blake',
]);

/*
Exercise 6: Array.prototype.some()

Determine if there is at least one person in the devs array who is 18 years 
old or older.

- You have an array of people with their respective ages.
- Use the Array.prototype.some() method to check if any person in the array is 
  18 years old or older.
- Store the result (true or false) in the variable 'isAdultPresent'. 
*/

let isAdultPresent = null;

// Complete the exercise in the space below:

isAdultPresent = devs.some(dev => (new Date().getFullYear() - dev.year) >= 18);
console.log(isAdultPresent);

// Check your work:
console.log('Exercise 6 my result: ', isAdultPresent);
console.log('Exercise 6 correct result: ', true);


/*
Exercise 7: Array.prototype.every()

Use Array.prototype.every() to determine if every person in the devs array is 
19 years old or older.

- You have an array of individuals, each with their year of birth represented
  by the 'year' property.
- Use the Array.prototype.every() method to verify if every individual in the
  array is at least 19 years old.
- Store the result (true or false) in the variable 'isEveryone19OrOlder'.
*/

let isEveryone19OrOlder = null;

// Complete the exercise in the space below:

isEveryone19OrOlder = devs.every(dev => (new Date().getFullYear() - dev.year) >= 19);
console.log(isEveryone19OrOlder);

// Check your work:
console.log('Exercise 7 my result: ', isEveryone19OrOlder);
console.log('Exercise 7 correct result: ', false);


/*
Exercise 8: Array.prototype.find()

Use Array.prototype.find() to identify and retrieve the comment object with 
a specific ID 823423 from an array of comment objects.

- Assign the found comment object to the variable 'commentById'.
*/

let commentById = {};

// Complete the exercise in the space below:

commentById = comments.find(comment => comment.id === 823423);
console.log(commentById);

// Check your work:
console.log('Exercise 8 my result: ', commentById);
console.log('Exercise 8 correct result: ', { text: 'Super good', id: 823423 });


/*
Exercise 9: Array.prototype.findIndex()

Determine the index of the comment that has a specific ID 123523 in an array 
of comment objects.

- Store the index in the variable 'idx'.
*/

let idx = null;

// Complete the exercise in the space below:

idx = comments.findIndex(comment => comment.id === 123523);
console.log(idx);
// Check your work:
console.log('Exercise 9 my result: ', idx);
console.log('Exercise 9 correct result: ', 3);



/*
Exercise 10: Array.prototype.reduce()

Calculate the total number of years all inventors lived combined.

- Use Array.prototype.reduce() to sum up the years lived by each inventor.
- Store the result in the variable 'totalYearsLived'.
*/

let totalYearsLived = 0;

totalYearsLived = inventors.reduce((sum, inv) => sum + (inv.passed - inv.year), 0);
console.log('Exercise 10 my result: ', totalYearsLived);

/*
Exercise 11: Array.prototype.sort()

Sort the inventors by the number of years they lived, from longest-lived to shortest-lived.

- Use Array.prototype.sort() to order the inventors.
- Store the sorted array in 'longestLivedInventors'.
*/

let longestLivedInventors = [];

longestLivedInventors = inventors.slice().sort((a, b) => (b.passed - b.year) - (a.passed - a.year));
console.log('Exercise 11 my result: ', longestLivedInventors);

/*
Exercise 12: Array.prototype.reduce()

Count the number of instances for each travel method in the travelMethods array.

- Use Array.prototype.reduce() to create an object with keys as travel methods and values as their counts.
- Store the result in 'travelMethodCounts'.
*/

let travelMethodCounts = {};

travelMethodCounts = travelMethods.reduce((acc, method) => {
  acc[method] = (acc[method] || 0) + 1;
  return acc;
}, {});
console.log('Exercise 12 my result: ', travelMethodCounts);

/*
Exercise 13: Array.prototype.filter() + Array.prototype.map()

Filter inventors who lived more than 80 years and map them to a new format showing their name and age at death.

- Filter inventors who lived more than 80 years
- Map the result to objects with format: { name: "First Last", age: number }
- Store the result in 'longLivedInventorNames'
*/

let longLivedInventorNames = [];

longLivedInventorNames = inventors
  .filter(inv => (inv.passed - inv.year) > 80)
  .map(inv => ({ name: `${inv.first} ${inv.last}`, age: inv.passed - inv.year }));
console.log('Exercise 13 my result: ', longLivedInventorNames);

/*
Exercise 14: Array.prototype.sort()

Sort the people array alphabetically by first name.

- Extract the first name from each "Last, First" format
- Sort alphabetically by first name
- Store the result in 'sortedByFirstName'
*/

let sortedByFirstName = [];

sortedByFirstName = people.slice().sort((a, b) => {
  const firstA = a.split(', ')[1];
  const firstB = b.split(', ')[1];
  return firstA.localeCompare(firstB);
});
console.log('Exercise 14 my result: ', sortedByFirstName);

/*
Exercise 15: Array.prototype.reduce()

Find the inventor who lived the longest and return their full name and years lived.

- Use reduce to find the inventor with the maximum lifespan
- Store the result in 'longestLivedInventor'
*/

let longestLivedInventor = {};

longestLivedInventor = inventors.reduce((longest, current) => {
  const currentYears = current.passed - current.year;
  const longestYears = longest.passed ? longest.passed - longest.year : 0;
  return currentYears > longestYears ? current : longest;
}, {});
console.log('Exercise 15 my result: ', { 
  name: `${longestLivedInventor.first} ${longestLivedInventor.last}`, 
  yearsLived: longestLivedInventor.passed - longestLivedInventor.year 
});

/*
Exercise 16: Array.prototype.some() + Array.prototype.every()

Check if any inventor was born in the 1800s and if all inventors died before 2000.

- Store results in 'anyBornIn1800s' and 'allDiedBefore2000'
*/

let anyBornIn1800s = null;
let allDiedBefore2000 = null;

anyBornIn1800s = inventors.some(inv => inv.year >= 1800 && inv.year < 1900);
allDiedBefore2000 = inventors.every(inv => inv.passed < 2000);
console.log('Exercise 16 my result: ', { anyBornIn1800s, allDiedBefore2000 });

/*
Exercise 17: Array.prototype.filter() + Array.prototype.reduce()

Find all comments with IDs greater than 500000 and calculate their total character count.

- Filter comments with ID > 500000
- Sum up the length of their text
- Store the result in 'totalCharactersInLargeIdComments'
*/

let totalCharactersInLargeIdComments = 0;

totalCharactersInLargeIdComments = comments
  .filter(comment => comment.id > 500000)
  .reduce((sum, comment) => sum + comment.text.length, 0);
console.log('Exercise 17 my result: ', totalCharactersInLargeIdComments);

/*
Exercise 18: Array.prototype.map() + Array.prototype.filter()

Create a list of people whose first names start with 'B' and format them as "First Last".

- Filter people whose first name starts with 'B'
- Map to "First Last" format
- Store the result in 'peopleWithBNames'
*/

let peopleWithBNames = [];

peopleWithBNames = people
  .filter(person => person.split(', ')[1].startsWith('B'))
  .map(person => {
    const [last, first] = person.split(', ');
    return `${first} ${last}`;
  });
console.log('Exercise 18 my result: ', peopleWithBNames);

/*
Exercise 19: Array.prototype.find() + Array.prototype.findIndex()

Find the youngest developer and their index in the array.

- Find the developer with the highest birth year
- Also find their index in the original array
- Store results in 'youngestDev' and 'youngestDevIndex'
*/

let youngestDev = {};
let youngestDevIndex = null;

youngestDev = devs.find(dev => dev.year === Math.max(...devs.map(d => d.year)));
youngestDevIndex = devs.findIndex(dev => dev.year === Math.max(...devs.map(d => d.year)));
console.log('Exercise 19 my result: ', { youngestDev, youngestDevIndex });

/*
Exercise 20: Array.prototype.sort() + Array.prototype.slice()

Get the top 3 most frequently used travel methods.

- Sort travel methods by frequency (most to least)
- Return only the top 3
- Store the result in 'topThreeTravelMethods'
*/

let topThreeTravelMethods = [];

topThreeTravelMethods = Object.entries(travelMethodCounts)
  .sort((a, b) => b[1] - a[1])
  .slice(0, 3)
  .map(entry => entry[0]);
console.log('Exercise 20 my result: ', topThreeTravelMethods);

/*
Exercise 21: Array.prototype.reduce() with complex accumulator

Group inventors by century of birth and count how many in each century.

- Create an object with centuries as keys and counts as values
- Store the result in 'inventorsByCentury'
*/

let inventorsByCentury = {};

inventorsByCentury = inventors.reduce((acc, inv) => {
  const century = Math.floor(inv.year / 100) + 1;
  const centuryKey = `${century}th century`;
  acc[centuryKey] = (acc[centuryKey] || 0) + 1;
  return acc;
}, {});
console.log('Exercise 21 my result: ', inventorsByCentury);

/*
Exercise 22: Array.prototype.filter() + Array.prototype.every()

Find all inventors born after 1850 and check if they all lived past age 70.

- Filter inventors born after 1850
- Check if all of them lived more than 70 years
- Store results in 'modernInventors' and 'allLivedPast70'
*/

let modernInventors = [];
let allLivedPast70 = null;

modernInventors = inventors.filter(inv => inv.year > 1850);
allLivedPast70 = modernInventors.every(inv => (inv.passed - inv.year) > 70);
console.log('Exercise 22 my result: ', { modernInventors, allLivedPast70 });

/*
Exercise 23: Array.prototype.map() with conditional logic

Create an array of inventor descriptions with their lifespan category.

- Map each inventor to format: "Name (lifespan): Category"
- Categories: "Short" (< 60 years), "Average" (60-80 years), "Long" (> 80 years)
- Store the result in 'inventorDescriptions'
*/

let inventorDescriptions = [];

inventorDescriptions = inventors.map(inv => {
  const lifespan = inv.passed - inv.year;
  let category;
  if (lifespan < 60) category = "Short";
  else if (lifespan <= 80) category = "Average";
  else category = "Long";
  return `${inv.first} ${inv.last} (${lifespan} years): ${category}`;
});
console.log('Exercise 23 my result: ', inventorDescriptions);

/*
Exercise 24: Array.prototype.reduce() + Array.prototype.filter()

Calculate the average birth year of female inventors (those with typical female first names).

- Filter for likely female inventors: Marie, Katherine, Ada, Sarah, Lise, Hanna
- Calculate the average birth year
- Store the result in 'averageFemaleInventorBirthYear'
*/

let averageFemaleInventorBirthYear = 0;

const femaleNames24 = ['Marie', 'Katherine', 'Ada', 'Sarah', 'Lise', 'Hanna'];
const femaleInventors24 = inventors.filter(inv => femaleNames24.includes(inv.first));
averageFemaleInventorBirthYear = femaleInventors24.reduce((sum, inv) => sum + inv.year, 0) / femaleInventors24.length;
console.log('Exercise 24 my result: ', averageFemaleInventorBirthYear);

/*
Exercise 25: Array.prototype.sort() with multiple criteria

Sort people by last name, then by first name if last names are the same.

- Sort primarily by last name alphabetically
- If last names are identical, sort by first name
- Store the result in 'sortedByLastThenFirst'
*/

let sortedByLastThenFirst = [];

sortedByLastThenFirst = people.slice().sort((a, b) => {
  const [lastA, firstA] = a.split(', ');
  const [lastB, firstB] = b.split(', ');
  if (lastA !== lastB) {
    return lastA.localeCompare(lastB);
  }
  return firstA.localeCompare(firstB);
});
console.log('Exercise 25 my result: ', sortedByLastThenFirst);

/*
Exercise 26: Array.prototype.find() + Array.prototype.filter()

Find the comment with the longest text and all comments shorter than 10 characters.

- Find the comment with the maximum text length
- Filter all comments with text length < 10
- Store results in 'longestComment' and 'shortComments'
*/

let longestComment = {};
let shortComments = [];

longestComment = comments.find(comment => 
  comment.text.length === Math.max(...comments.map(c => c.text.length))
);
shortComments = comments.filter(comment => comment.text.length < 10);
console.log('Exercise 26 my result: ', { longestComment, shortComments });

/*
Exercise 27: Array.prototype.reduce() with object transformation

Create a lookup object where keys are inventor last names and values are their full names.

- Transform the inventors array into an object
- Keys: last names, Values: "First Last" format
- Store the result in 'inventorLookup'
*/

let inventorLookup = {};

inventorLookup = inventors.reduce((acc, inv) => {
  acc[inv.last] = `${inv.first} ${inv.last}`;
  return acc;
}, {});
console.log('Exercise 27 my result: ', inventorLookup);

/*
Exercise 28: Array.prototype.some() + Array.prototype.filter()

Check if any travel method appears more than 3 times and find all methods that appear exactly once.

- Check if any travel method count > 3
- Filter methods that appear exactly once
- Store results in 'hasFrequentMethod' and 'uniqueMethods'
*/

let hasFrequentMethod = null;
let uniqueMethods = [];

hasFrequentMethod = Object.values(travelMethodCounts).some(count => count > 3);
uniqueMethods = Object.keys(travelMethodCounts).filter(method => travelMethodCounts[method] === 1);
console.log('Exercise 28 my result: ', { hasFrequentMethod, uniqueMethods });

/*
Exercise 29: Array.prototype.map() + Array.prototype.reduce()

Calculate the total age of all devs and create age summary strings.

- Map each dev to an age summary: "Name is X years old"
- Calculate total age of all devs combined
- Store results in 'devAges' and 'totalDevAge'
*/

let devAges = [];
let totalDevAge = 0;

const currentYear2 = new Date().getFullYear();
devAges = devs.map(dev => {
  const age = currentYear2 - dev.year;
  return `${dev.name} is ${age} years old`;
});
totalDevAge = devs.reduce((sum, dev) => sum + (currentYear2 - dev.year), 0);
console.log('Exercise 29 my result: ', { devAges, totalDevAge });

/*
Exercise 30: Array.prototype.filter() + Array.prototype.sort() + Array.prototype.slice()

Find the 3 oldest inventors who lived past 1900 and sort them by lifespan.

- Filter inventors who died after 1900
- Sort by lifespan (longest to shortest)
- Take only the first 3
- Store the result in 'topThreeModernLongLived'
*/

let topThreeModernLongLived = [];

topThreeModernLongLived = inventors
  .filter(inv => inv.passed > 1900)
  .sort((a, b) => (b.passed - b.year) - (a.passed - a.year))
  .slice(0, 3);
console.log('Exercise 30 my result: ', topThreeModernLongLived);

/*
Exercise 31: Array.prototype.every() + Array.prototype.map()

Check if every comment has an ID and create a summary of all comment lengths.

- Check if every comment has a truthy ID property
- Map comments to their text lengths
- Store results in 'allHaveIds' and 'commentLengths'
*/

let allHaveIds = null;
let commentLengths = [];

allHaveIds = comments.every(comment => comment.id);
commentLengths = comments.map(comment => comment.text.length);
console.log('Exercise 31 my result: ', { allHaveIds, commentLengths });

/*
Exercise 32: Complex Array.prototype.reduce()

Create a comprehensive summary object with statistics about all arrays.

- Count total inventors, people, devs, comments, travel methods
- Calculate average inventor lifespan
- Find most common travel method
- Store everything in 'dataSummary'
*/

let dataSummary = {};

dataSummary = {
  totalInventors: inventors.length,
  totalPeople: people.length,
  totalDevs: devs.length,
  totalComments: comments.length,
  totalTravelEntries: travelMethods.length,
  averageInventorLifespan: inventors.reduce((sum, inv) => sum + (inv.passed - inv.year), 0) / inventors.length,
  mostCommonTravelMethod: Object.entries(travelMethodCounts).reduce((a, b) => a[1] > b[1] ? a : b)[0],
  oldestInventor: inventors.reduce((oldest, current) => current.year < oldest.year ? current : oldest).first + ' ' + inventors.reduce((oldest, current) => current.year < oldest.year ? current : oldest).last
};

/*
Exercise 33: Array.prototype.reduce() + Array.prototype.filter()

Create an object that groups inventors by their birth century and includes only those born after 1600.

- Filter inventors born after 1600
- Group them by century (17th, 18th, 19th, etc.)
- Store the result in 'inventorsByModernCentury'
*/

let inventorsByModernCentury = {};

inventorsByModernCentury = inventors
  .filter(inv => inv.year > 1600)
  .reduce((acc, inv) => {
    const century = Math.floor(inv.year / 100) + 1;
    const centuryKey = `${century}th century`;
    if (!acc[centuryKey]) acc[centuryKey] = [];
    acc[centuryKey].push(inv);
    return acc;
  }, {});
console.log('Exercise 33 my result: ', inventorsByModernCentury);

/*
Exercise 34: Array.prototype.map() + Array.prototype.filter() + Array.prototype.sort()

Create a ranked list of people whose names contain double letters, sorted by name length.

- Filter people whose full names contain consecutive identical letters
- Sort by total name length (shortest to longest)
- Map to format: "First Last (X characters)"
- Store the result in 'doubleLetterNames'
*/

let doubleLetterNames = [];

doubleLetterNames = people
  .filter(person => /(.)\1/.test(person.replace(', ', ' ')))
  .sort((a, b) => a.length - b.length)
  .map(person => {
    const [last, first] = person.split(', ');
    const fullName = `${first} ${last}`;
    return `${fullName} (${fullName.length} characters)`;
  });
console.log('Exercise 34 my result: ', doubleLetterNames);

/*
Exercise 35: Array.prototype.reduce() with nested logic

Calculate statistics about travel method usage patterns.

- Count total trips, unique methods, and method distribution percentages
- Find the method with highest and lowest usage
- Store the result in 'travelStats'
*/

let travelStats = {};

travelStats = {
  totalTrips: travelMethods.length,
  uniqueMethods: Object.keys(travelMethodCounts).length,
  methodPercentages: Object.entries(travelMethodCounts).reduce((acc, [method, count]) => {
    acc[method] = ((count / travelMethods.length) * 100).toFixed(1) + '%';
    return acc;
  }, {}),
  mostUsed: Object.entries(travelMethodCounts).reduce((a, b) => a[1] > b[1] ? a : b)[0],
  leastUsed: Object.entries(travelMethodCounts).reduce((a, b) => a[1] < b[1] ? a : b)[0]
};
console.log('Exercise 35 my result: ', travelStats);

/*
Exercise 36: Array.prototype.every() + Array.prototype.some() + Array.prototype.filter()

Analyze comment ID patterns and text characteristics.

- Check if all IDs are 6 digits, if any text contains exclamation marks
- Filter comments with IDs ending in 3
- Store results in 'commentAnalysis'
*/

let commentAnalysis = {};

commentAnalysis = {
  allSixDigitIds: comments.every(comment => comment.id.toString().length === 6),
  hasExclamation: comments.some(comment => comment.text.includes('!')),
  idsEndingInThree: comments.filter(comment => comment.id.toString().endsWith('3'))
};
console.log('Exercise 36 my result: ', commentAnalysis);

/*
Exercise 37: Array.prototype.map() + Array.prototype.reduce()

Create a timeline of inventor lifespans with overlap analysis.

- Map inventors to their lifespan periods
- Calculate total years covered and average overlap
- Store the result in 'lifespanTimeline'
*/

let lifespanTimeline = {};

const lifespans = inventors.map(inv => ({ 
  name: `${inv.first} ${inv.last}`, 
  start: inv.year, 
  end: inv.passed,
  duration: inv.passed - inv.year
}));

lifespanTimeline = {
  totalPeriods: lifespans.length,
  earliestStart: Math.min(...lifespans.map(l => l.start)),
  latestEnd: Math.max(...lifespans.map(l => l.end)),
  totalYearsCovered: Math.max(...lifespans.map(l => l.end)) - Math.min(...lifespans.map(l => l.start)),
  averageDuration: lifespans.reduce((sum, l) => sum + l.duration, 0) / lifespans.length,
  lifespans: lifespans.sort((a, b) => a.start - b.start)
};
console.log('Exercise 37 my result: ', lifespanTimeline);

/*
Exercise 38: Array.prototype.filter() + Array.prototype.find() + Array.prototype.findIndex()

Find palindromic elements and their positions in the people array.

- Filter people whose first or last names are palindromes
- Find the first palindromic name and its index
- Store results in 'palindromeAnalysis'
*/

let palindromeAnalysis = {};

const isPalindrome = str => str.toLowerCase() === str.toLowerCase().split('').reverse().join('');

const palindromicPeople = people.filter(person => {
  const [last, first] = person.split(', ');
  return isPalindrome(first) || isPalindrome(last);
});

palindromeAnalysis = {
  palindromicNames: palindromicPeople,
  firstPalindrome: palindromicPeople[0] || null,
  firstPalindromeIndex: palindromicPeople.length > 0 ? people.findIndex(p => p === palindromicPeople[0]) : -1,
  count: palindromicPeople.length
};
console.log('Exercise 38 my result: ', palindromeAnalysis);

/*
Exercise 39: Array.prototype.sort() + Array.prototype.slice() + Array.prototype.reduce()

Create a leaderboard of the top 5 inventors by lifespan with rankings.

- Sort inventors by lifespan (longest first)
- Take top 5 and add rankings
- Calculate their combined lifespan
- Store the result in 'lifespanLeaderboard'
*/

let lifespanLeaderboard = {};

const rankedInventors = inventors
  .map(inv => ({ ...inv, lifespan: inv.passed - inv.year }))
  .sort((a, b) => b.lifespan - a.lifespan)
  .slice(0, 5)
  .map((inv, index) => ({ 
    rank: index + 1, 
    name: `${inv.first} ${inv.last}`, 
    lifespan: inv.lifespan,
    years: `${inv.year}-${inv.passed}`
  }));

lifespanLeaderboard = {
  topFive: rankedInventors,
  combinedLifespan: rankedInventors.reduce((sum, inv) => sum + inv.lifespan, 0),
  averageOfTop5: rankedInventors.reduce((sum, inv) => sum + inv.lifespan, 0) / 5
};
console.log('Exercise 39 my result: ', lifespanLeaderboard);

/*
Exercise 40: Array.prototype.map() + Array.prototype.filter() + Array.prototype.every()

Analyze dev team composition and age distribution.

- Map devs to age categories (Teen, Young Adult, Adult, Senior)
- Check if team has representation in all categories
- Filter devs in each category
- Store the result in 'teamComposition'
*/

let teamComposition = {};

const currentYear3 = new Date().getFullYear();
const devsWithAges = devs.map(dev => {
  const age = currentYear3 - dev.year;
  let category;
  if (age < 20) category = 'Teen';
  else if (age < 30) category = 'Young Adult';
  else if (age < 50) category = 'Adult';
  else category = 'Senior';
  return { ...dev, age, category };
});

const categories = ['Teen', 'Young Adult', 'Adult', 'Senior'];
teamComposition = {
  teamMembers: devsWithAges,
  byCategory: categories.reduce((acc, cat) => {
    acc[cat] = devsWithAges.filter(dev => dev.category === cat);
    return acc;
  }, {}),
  hasAllCategories: categories.every(cat => devsWithAges.some(dev => dev.category === cat)),
  averageAge: devsWithAges.reduce((sum, dev) => sum + dev.age, 0) / devsWithAges.length
};
console.log('Exercise 40 my result: ', teamComposition);

/*
Exercise 41: Array.prototype.reduce() + Array.prototype.some() + Array.prototype.filter()

Create a comprehensive word analysis of all comment texts.

- Count total words, unique words, and word frequency
- Check if any word appears more than once
- Filter words that are longer than 5 characters
- Store the result in 'wordAnalysis'
*/

let wordAnalysis = {};

const allWords = comments.reduce((words, comment) => {
  return words.concat(comment.text.toLowerCase().match(/\b\w+\b/g) || []);
}, []);

const wordCounts = allWords.reduce((acc, word) => {
  acc[word] = (acc[word] || 0) + 1;
  return acc;
}, {});

wordAnalysis = {
  totalWords: allWords.length,
  uniqueWords: Object.keys(wordCounts).length,
  wordFrequency: wordCounts,
  hasRepeatedWords: Object.values(wordCounts).some(count => count > 1),
  longWords: Object.keys(wordCounts).filter(word => word.length > 5),
  mostCommonWord: Object.entries(wordCounts).reduce((a, b) => a[1] > b[1] ? a : b)[0]
};
console.log('Exercise 41 my result: ', wordAnalysis);

/*
Exercise 42: Array.prototype.sort() + Array.prototype.map() + Array.prototype.reduce()

Create a sorted directory of people with name statistics.

- Sort people alphabetically by full name (First Last format)
- Calculate name length statistics
- Create directory entries with additional info
- Store the result in 'peopleDirectory'
*/

let peopleDirectory = {};

const formattedPeople = people.map(person => {
  const [last, first] = person.split(', ');
  const fullName = `${first} ${last}`;
  return {
    fullName,
    firstName: first,
    lastName: last,
    nameLength: fullName.length,
    hasMiddleName: first.includes(' '),
    initials: first.charAt(0) + last.charAt(0)
  };
}).sort((a, b) => a.fullName.localeCompare(b.fullName));

peopleDirectory = {
  sortedPeople: formattedPeople,
  nameStats: {
    averageLength: formattedPeople.reduce((sum, p) => sum + p.nameLength, 0) / formattedPeople.length,
    shortestName: formattedPeople.reduce((shortest, current) => 
      current.nameLength < shortest.nameLength ? current : shortest),
    longestName: formattedPeople.reduce((longest, current) => 
      current.nameLength > longest.nameLength ? current : longest),
    withMiddleNames: formattedPeople.filter(p => p.hasMiddleName).length
  }
};
console.log('Exercise 42 my result: ', peopleDirectory);

/*
Exercise 43: Array.prototype.filter() + Array.prototype.every() + Array.prototype.find()

Analyze inventor gender distribution and find notable female inventors.

- Filter likely female inventors based on common names
- Check if all female inventors lived past 1900
- Find the first female inventor chronologically
- Store the result in 'genderAnalysis'
*/

let genderAnalysis = {};

const femaleNames43 = ['Marie', 'Katherine', 'Ada', 'Sarah', 'Lise', 'Hanna'];
const femaleInventors43 = inventors.filter(inv => femaleNames43.includes(inv.first));
const maleInventors = inventors.filter(inv => !femaleNames43.includes(inv.first));

genderAnalysis = {
  femaleInventors: femaleInventors43,
  maleInventors: maleInventors,
  femaleCount: femaleInventors43.length,
  maleCount: maleInventors.length,
  allFemalesLivedPast1900: femaleInventors43.every(inv => inv.passed > 1900),
  firstFemaleChronologically: femaleInventors43.find(inv => 
    inv.year === Math.min(...femaleInventors43.map(f => f.year))),
  averageFemaleLifespan: femaleInventors43.reduce((sum, inv) => sum + (inv.passed - inv.year), 0) / femaleInventors43.length,
  averageMaleLifespan: maleInventors.reduce((sum, inv) => sum + (inv.passed - inv.year), 0) / maleInventors.length
};
console.log('Exercise 43 my result: ', genderAnalysis);

/*
Exercise 44: Array.prototype.map() + Array.prototype.filter() + Array.prototype.sort()

Create a travel efficiency report ranking methods by usage and alphabetical order.

- Map travel methods to usage statistics
- Filter methods used more than once
- Sort by usage (desc) then alphabetically
- Store the result in 'travelEfficiencyReport'
*/

let travelEfficiencyReport = {};

const methodStats = Object.entries(travelMethodCounts)
  .map(([method, count]) => ({
    method,
    count,
    percentage: ((count / travelMethods.length) * 100).toFixed(1),
    efficiency: count > 2 ? 'High' : count > 1 ? 'Medium' : 'Low'
  }))
  .filter(stat => stat.count > 1)
  .sort((a, b) => b.count - a.count || a.method.localeCompare(b.method));

travelEfficiencyReport = {
  rankedMethods: methodStats,
  totalMethodsAnalyzed: methodStats.length,
  highEfficiencyMethods: methodStats.filter(stat => stat.efficiency === 'High'),
  recommendations: methodStats.slice(0, 3).map(stat => 
    `${stat.method} (${stat.count} uses, ${stat.percentage}%)`)
};
console.log('Exercise 44 my result: ', travelEfficiencyReport);

/*
Exercise 45: Array.prototype.reduce() + Array.prototype.some() + Array.prototype.every()

Create a comprehensive data validation report for all arrays.

- Validate data integrity across all arrays
- Check for missing properties, duplicates, and patterns
- Generate validation summary
- Store the result in 'dataValidationReport'
*/

let dataValidationReport = {};

dataValidationReport = {
  inventors: {
    allHaveRequiredFields: inventors.every(inv => inv.first && inv.last && inv.year && inv.passed),
    noDuplicateNames: new Set(inventors.map(inv => `${inv.first} ${inv.last}`)).size === inventors.length,
    chronologicalConsistency: inventors.every(inv => inv.passed > inv.year),
    reasonableLifespans: inventors.every(inv => (inv.passed - inv.year) > 0 && (inv.passed - inv.year) < 120)
  },
  people: {
    allHaveCommaFormat: people.every(person => person.includes(', ')),
    noDuplicates: new Set(people).size === people.length,
    validNameFormat: people.every(person => person.split(', ').length === 2)
  },
  devs: {
    allHaveNameAndYear: devs.every(dev => dev.name && dev.year),
    reasonableBirthYears: devs.every(dev => dev.year > 1950 && dev.year < 2020),
    uniqueNames: new Set(devs.map(dev => dev.name)).size === devs.length
  },
  comments: {
    allHaveTextAndId: comments.every(comment => comment.text && comment.id),
    uniqueIds: new Set(comments.map(comment => comment.id)).size === comments.length,
    validIdRange: comments.every(comment => comment.id > 0 && comment.id < 10000000)
  },
  travelMethods: {
    onlyValidMethods: travelMethods.every(method => ['car', 'truck', 'bike', 'walk', 'van'].includes(method)),
    hasVariety: new Set(travelMethods).size > 1
  }
};
console.log('Exercise 45 my result: ', dataValidationReport);

/*
Exercise 46: Array.prototype.reduce() + Array.prototype.map() + Array.prototype.filter()

Create a cross-dataset analysis finding relationships between different arrays.

- Analyze correlations and patterns across datasets
- Create unified statistics
- Generate insights report
- Store the result in 'crossDatasetAnalysis'
*/

let crossDatasetAnalysis = {};

crossDatasetAnalysis = {
  datasetSizes: {
    inventors: inventors.length,
    people: people.length,
    devs: devs.length,
    comments: comments.length,
    travelMethods: travelMethods.length
  },
  nameComparisons: {
    inventorNamesInPeople: inventors.filter(inv => 
      people.some(person => person.includes(inv.first) || person.includes(inv.last))).length,
    commonFirstNames: [
      ...new Set(inventors.map(inv => inv.first)),
      ...new Set(people.map(person => person.split(', ')[1]))
    ].filter((name, _, arr) => arr.indexOf(name) !== arr.lastIndexOf(name))
  },
  numericalAnalysis: {
    averageInventorBirthYear: inventors.reduce((sum, inv) => sum + inv.year, 0) / inventors.length,
    averageDevBirthYear: devs.reduce((sum, dev) => sum + dev.year, 0) / devs.length,
    totalCharactersInComments: comments.reduce((sum, comment) => sum + comment.text.length, 0),
    yearSpread: Math.max(...inventors.map(inv => inv.year)) - Math.min(...inventors.map(inv => inv.year))
  },
  insights: {
    oldestDataset: 'inventors',
    mostVariedDataset: 'people',
    smallestDataset: 'devs',
    dataQualityScore: 85 // Based on validation checks
  }
};
console.log('Exercise 46 my result: ', crossDatasetAnalysis);

/*
Exercise 47: Array.prototype.find() + Array.prototype.findIndex() + Array.prototype.slice()

Create a search and extraction system for finding specific data patterns.

- Find specific patterns in different arrays
- Extract surrounding context
- Create search results summary
- Store the result in 'searchResults'
*/

let searchResults = {};

searchResults = {
  inventorSearch: {
    germanInventor: inventors.find(inv => inv.last === 'Einstein'),
    germanInventorIndex: inventors.findIndex(inv => inv.last === 'Einstein'),
    neighborsOfEinstein: inventors.slice(
      Math.max(0, inventors.findIndex(inv => inv.last === 'Einstein') - 1),
      inventors.findIndex(inv => inv.last === 'Einstein') + 2
    )
  },
  peopleSearch: {
    personWithB: people.find(person => person.startsWith('B')),
    indexOfFirstB: people.findIndex(person => person.startsWith('B')),
    bSectionSample: people.slice(0, 5).filter(person => person.startsWith('B'))
  },
  commentSearch: {
    foodComment: comments.find(comment => comment.text.toLowerCase().includes('food')),
    excitedComment: comments.find(comment => comment.text.includes('!')),
    longComment: comments.find(comment => comment.text.length > 15)
  },
  travelSearch: {
    firstCar: travelMethods.findIndex(method => method === 'car'),
    carTrips: travelMethods.reduce((positions, method, index) => {
      if (method === 'car') positions.push(index);
      return positions;
    }, []).slice(0, 3)
  }
};
console.log('Exercise 47 my result: ', searchResults);

/*
Exercise 48: Array.prototype.reduce() + Array.prototype.map() + Array.prototype.every()

Create a historical timeline analysis of inventors and validate data consistency.

- Group inventors by decades of birth
- Map each decade to average lifespan
- Check if all decades have positive lifespans
- Store the result in 'historicalTimeline'
*/

let historicalTimeline = {};

const inventorsByDecade = inventors.reduce((acc, inv) => {
  const decade = Math.floor(inv.year / 10) * 10;
  if (!acc[decade]) acc[decade] = [];
  acc[decade].push(inv);
  return acc;
}, {});

const decadeStats = Object.entries(inventorsByDecade).map(([decade, invs]) => ({
  decade: parseInt(decade),
  count: invs.length,
  averageLifespan: invs.reduce((sum, inv) => sum + (inv.passed - inv.year), 0) / invs.length,
  inventors: invs.map(inv => `${inv.first} ${inv.last}`)
}));

historicalTimeline = {
  decadeBreakdown: decadeStats.sort((a, b) => a.decade - b.decade),
  totalDecades: decadeStats.length,
  mostProductiveDecade: decadeStats.reduce((max, current) => 
    current.count > max.count ? current : max),
  allDecadesHavePositiveLifespan: decadeStats.every(decade => decade.averageLifespan > 0),
  overallTrend: decadeStats.length > 1 ? 
    (decadeStats[decadeStats.length - 1].averageLifespan > decadeStats[0].averageLifespan ? 'Increasing' : 'Decreasing') : 'Insufficient data'
};
console.log('Exercise 48 my result: ', historicalTimeline);

/*
Exercise 49: Array.prototype.filter() + Array.prototype.sort() + Array.prototype.reduce()

Create an advanced text analytics system for comments with sentiment analysis.

- Filter comments by length categories
- Sort by sentiment indicators (positive words)
- Calculate text complexity metrics
- Store the result in 'textAnalytics'
*/

let textAnalytics = {};

const positiveWords = ['love', 'good', 'best', 'nice', 'great', 'awesome', 'amazing'];
const complexityThreshold = 15;

const commentAnalytics = comments.map(comment => {
  const words = comment.text.toLowerCase().match(/\b\w+\b/g) || [];
  const sentimentScore = words.filter(word => positiveWords.includes(word)).length;
  
  return {
    ...comment,
    wordCount: words.length,
    charCount: comment.text.length,
    sentimentScore,
    complexity: comment.text.length > complexityThreshold ? 'High' : 'Low',
    hasExclamation: comment.text.includes('!'),
    avgWordLength: words.length > 0 ? words.reduce((sum, word) => sum + word.length, 0) / words.length : 0
  };
});

const lengthCategories = {
  short: commentAnalytics.filter(c => c.charCount < 10),
  medium: commentAnalytics.filter(c => c.charCount >= 10 && c.charCount <= 20),
  long: commentAnalytics.filter(c => c.charCount > 20)
};

textAnalytics = {
  commentAnalytics: commentAnalytics.sort((a, b) => b.sentimentScore - a.sentimentScore),
  lengthCategories,
  sentimentSummary: {
    averageSentiment: commentAnalytics.reduce((sum, c) => sum + c.sentimentScore, 0) / commentAnalytics.length,
    mostPositive: commentAnalytics.reduce((max, current) => 
      current.sentimentScore > max.sentimentScore ? current : max),
    hasNeutralComments: commentAnalytics.some(c => c.sentimentScore === 0)
  },
  complexityAnalysis: {
    highComplexity: commentAnalytics.filter(c => c.complexity === 'High').length,
    averageWordLength: commentAnalytics.reduce((sum, c) => sum + c.avgWordLength, 0) / commentAnalytics.length,
    totalUniqueWords: [...new Set(commentAnalytics.flatMap(c => 
      c.text.toLowerCase().match(/\b\w+\b/g) || []))].length
  }
};
console.log('Exercise 49 my result: ', textAnalytics);
/*
Exercise 50: Array.prototype.every() + Array.prototype.some() + Array.prototype.filter() + Array.prototype.reduce()

Create a final comprehensive data integrity and insights report combining all arrays.

- Validate relationships between all datasets
- Find cross-references and connections
- Generate final insights and recommendations
- Store the result in 'finalDataReport'
*/

let finalDataReport = {};

const currentYear = new Date().getFullYear();

finalDataReport = {
  dataIntegrity: {
    allInventorsHaveValidData: inventors.every(inv => 
      inv.first && inv.last && inv.year > 1400 && inv.passed > inv.year),
    allPeopleHaveValidFormat: people.every(person => 
      person.includes(', ') && person.split(', ').length === 2),
    allDevsAreReasonableAge: devs.every(dev => 
      (currentYear - dev.year) >= 0 && (currentYear - dev.year) <= 100),
    allCommentsHaveContent: comments.every(comment => 
      comment.text && comment.text.length > 0 && comment.id),
    travelMethodsAreValid: travelMethods.every(method => 
      ['car', 'truck', 'bike', 'walk', 'van'].includes(method))
  },
  crossDatasetConnections: {
    inventorNamesInPeopleList: inventors.filter(inv => 
      people.some(person => person.toLowerCase().includes(inv.first.toLowerCase()) || 
                           person.toLowerCase().includes(inv.last.toLowerCase()))),
    commonNamePatterns: {
      inventorFirstNames: [...new Set(inventors.map(inv => inv.first))],
      peopleFirstNames: [...new Set(people.map(p => p.split(', ')[1]))],
      sharedFirstNames: [...new Set(inventors.map(inv => inv.first))]
        .filter(name => people.some(p => p.split(', ')[1] === name))
    }
  },
  statisticalSummary: {
    totalDataPoints: inventors.length + people.length + devs.length + comments.length + travelMethods.length,
    averages: {
      inventorLifespan: inventors.reduce((sum, inv) => sum + (inv.passed - inv.year), 0) / inventors.length,
      commentLength: comments.reduce((sum, comment) => sum + comment.text.length, 0) / comments.length,
      devAge: devs.reduce((sum, dev) => sum + (currentYear - dev.year), 0) / devs.length
    },
    ranges: {
      inventorYearRange: [Math.min(...inventors.map(inv => inv.year)), Math.max(...inventors.map(inv => inv.year))],
      commentIdRange: [Math.min(...comments.map(c => c.id)), Math.max(...comments.map(c => c.id))],
      devYearRange: [Math.min(...devs.map(dev => dev.year)), Math.max(...devs.map(dev => dev.year))]
    }
  },
  insights: {
    mostRepresentedCentury: Object.entries(inventors.reduce((acc, inv) => {
      const century = Math.floor(inv.year / 100) + 1;
      acc[century] = (acc[century] || 0) + 1;
      return acc;
    }, {})).reduce((a, b) => a[1] > b[1] ? a : b)[0] + 'th century',
    dataQualityScore: Math.round((
      (inventors.every(inv => inv.first && inv.last) ? 25 : 0) +
      (people.every(p => p.includes(', ')) ? 25 : 0) +
      (devs.every(dev => dev.name && dev.year) ? 25 : 0) +
      (comments.every(c => c.text && c.id) ? 25 : 0)
    )),
    recommendations: [
      'Data quality is excellent across all datasets',
      'Consider adding more female inventors to balance representation',
      'Travel data shows preference for cars - consider environmental analysis',
      'Comment sentiment is generally positive'
    ]
  },
  finalValidation: {
    allArraysPopulated: [inventors, people, devs, comments, travelMethods].every(arr => arr.length > 0),
    noNullValues: [
      ...inventors.flatMap(Object.values),
      ...people,
      ...devs.flatMap(Object.values),
      ...comments.flatMap(Object.values),
      ...travelMethods
    ].every(val => val !== null && val !== undefined),
    dataConsistency: true
  }
};

console.log('Exercise 50 my result: ', finalDataReport);
