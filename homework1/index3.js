const bigOne = "KC";
const bigTwo = "John Doe";
const bigThree = "Jane Doe";

console.log(bigOne);
console.log(bigTwo);
console.log(bigThree);

const group = new Array(
    "Ebere",
    "KC",
    true,
    false,
    undefined,
    Account1,
    "Jane"
);

//console.log(group); //['KC', 'John', 'Jane']
console.log(group);
console.log(group.length);
console.log(group[4]);

//.at(integer)
const index = 10;
console.log("At Method", group.at(index));

//array.concat(array)
const array1 = [1, 2, 3, 4, 5, 6];
const array2 = ["Ebere", "KC", "John", "Jane"];
const concatenateArray = array1.concat(array2);
console.log("Concatenated Array", concatenateArray);

//array.copyWithin(array)
const arrayA = [1, 2, 3, 4, 5];
console.log("a", arrayA.copyWithin(0, 2, 4));
//copies from index 2 to index 3(which is is the index before 4) to index 0
//so it replaces index 0 and index 1
console.log(arrayA.copyWithin(1,2));
console.log(arrayA.copyWithin(1,2,3));

//array.entries()
const array3 = ["a", "b", "c", "d", "e"];
const iterator = array3.entries();
console.log(iterator.next().value);
console.log(iterator.next().value);

//array.every(array)
const array4 = [2, 4, 6, 8, 9];
const even = (currentValue) => currentValue % 2 == 0;
console.log(array4.every(even));

//array.fill(array)
const array5 = [1, 2, 3, 4, 5, 6, 7];
console.log(array5.fill(5, 3, 6)); 
// we use 6 to tell it to stop at the index before 6 which is index 5
// so it fills index 3 to index 5 with the number 5

//array.filter(array)
const array6 = ["dew", "sun", "car", "four", "plate"];
const result = array6.filter((three) => three.length == 3);
console.log(result);

//array.find()
const array7 = [2, 5, 7, 9, 12];
const findIt = array7.find((greater) => greater >= 5);
console.log(findIt);
//remeber find finds the first element that satisfys the condition while filter finds all elements that satisfy that condition.

//array.findIndex()
const find = array7.findIndex((greater) => greater == 7);
console.log(find);

//or
const finder = ((greater) => greater == 9);
console.log(array7.findIndex(finder));
//still the same thing

//array.findLast()
const finding = ((greater) => greater >= 5);
console.log(array7.findLast(finding));

//array.findLastIndex()
console.log(array7.findLastIndex(finding));

//array.flat()
const array8 = [2, 4, 6, [5, [7, 8]]];
console.log(array8.flat());

//array.flatMap()
const array9 = [2, 5, 4, [7, [8, 9]]];
const map = array9.flatMap(mapp => (mapp >= 3 ? [2, 3]: 4));//note it won't flatten out any stuff that wasn't mapped or didn't come from the result of mapping it
const maps = array9.map(mapp => mapp);
console.log(map, maps);
//flat map maps the result then flattens anything that came from the result only.

//array.forEach()
const array10 = [1, 3, 5, 7];
array10.forEach((number) => console.log(number));

//array.include()
const array12 = ["me", "you", "she", "he"];
console.log(array12.includes("she"));
console.log(array12.includes("why"));

//array.indexOf()
console.log(array12.indexOf("me"));

//array.join()
const health = ["World", "Health", "Organization"];
console.log(health.join());
console.log(health.join(""));
console.log(health.join("-"));
console.log(health.join("#"));

//array.keys its like showing the index of each element in the array
const face = ["eyes", "nose", "mouth"];
const keys = Object.keys(face);
console.log(keys);

//array.lastIndedOf() shows the last index of the value
const nam = ["Ebere", "Dumebi", "Chinwoke", "Dumebi", "Dumebi"];
console.log(nam.lastIndexOf("Dumebi"));

//array.map()
const mapnames = nam.map((n) => n + " Ezenwa");
console.log(mapnames);

//array.pop() 
//removes the last element from the array
console.log(nam.pop()); //removed Dumebi and hence output was dumebi
console.log(nam);  //if that array is now logged the last element dumebi whcuh has been removed by pop is no longer there.
nam.pop();
console.log(nam);

//array.push()
//adds an element to the end of the array
nam.push("Uju");
console.log(nam);

//array.reduce()

//array.reducRight()

//array.reverse()
console.log(nam.reverse());

//array.shift()
//removes the first element from the array
console.log(nam.shift());
console.log(nam);

//array.slice()
console.log(nam.slice(1,2));
//slices only index 1 and brings index 1 as the output
console.log(nam.slice (0, -1)); 
// -1 also logs the element and ommits one element from the back
//-2 will log the the element and ommits 2 elements from the back as seen below
const colors = ["red", "blue", "green", "yellow", "black"]
console.log(colors.slice(1, -2));
console.log(colors.slice(0, -2));
console.log(colors.slice(1, 4));
//the last number represents the number after you want it to stop so it will slice index 1 and stop slicing at 4
//hence it slices 1, 2 and 3

//array.some()
const array13 = [1, 2, 3, 4, 5];
const two = array13.some((m) => m > 2);
console.log(two);

//array.sort()
//sorts in alphabetical order
//if number it sorts from lowest num to highest starting with the number at the front
console.log(colors.sort());
const array14 = [2, 1, 100, 10.1, 10.01, 121, 5];
console.log(array14.sort());

//array.splice()
//(1, 0) replaces 0 elements at index 1, so hence it just inderts itself at index 1 and the remaining elements take up the remaining indexes
//(3, 2)replaces 2 elements at index 3, so hence it will replace 2 elemnts, hence those 2 elements will no longer be in the array.
colors.splice(3,1, "purple"); //replaces red
console.log(colors);
nam.splice(0, 0, "Mimi");
console.log(nam);

//array[Symbol.iterator]()
//acts like keys but instead of logging the index, it logs the value itself.
const iterate = colors[Symbol.iterator]();
for (const value of iterate){
    console.log(value);
}

const iterate1 =  colors.keys();
for(const value1 of iterate1){
    console.log(value1);
}

//array.toLocaleString()


//toReversed
//reverses an array but does it creates a new array reversed. The original array still remains unchanged.
//reverse on the other hand revrses the array and replaces the array reversed.
console.log(colors.toReversed());
console.log(colors); //original array remains unchanged but rather makes a copy of the array reversed.
console.log(colors.reverse());
console.log(colors); //reversed the original array

//toSorted also sorts but returns a copy othe array sorted while the original array remains unchanged
//sort won't make a copy but rather replaces the original with the sorted
console.log(nam.toSorted());
console.log(nam);

//toSpliced()
//makes a copy unlike splice that replaces it after being spliced
console.log(nam.toSpliced(1, 0, "Uju"));
console.log(nam);
//also recalal you can't log the splice since it doesn't create a new array but replaces
//toSpliced can since it is a new array.

//toString
//creates a single string from the array
console.log(nam.toString());
console.log(array13.toString());

//unshift()
//opposite of shift
//adds an element(s) to the beginning og the array

console.log(array14.unshift(0,9,5)); //this prints the number of elements now present
console.log(array14);

//array.values()
//to me it does the same thing as [Symbol.iterator]()
//find out if there is a difference
const iterate3 = array14.values();
for (const number of iterate3){
    console.log(number);
}

//array.with()
//it adds to the array without chnaging the original array
//makes a copy of what was added tp the original
console.log(array13.with(4, 8));//adds 8 after element 4 and replaces the elemnt after element 2
console.log(array13.with(2, 8));
console.log(array13);

const humans = ["Laura", "Bimpe", "Erica", "Ugo"];
const hu = humans.keys().toArray();
for(const stuff of hu){
    console.log(stuff);
}

console.log(hu);
const mans = Object.keys(humans);
console.log(mans);


const na = {
    name1: "queen",
    name2: "stephanie",
    name3: "naomi",  
}

const key = Object.keys(na);
console.log(key);