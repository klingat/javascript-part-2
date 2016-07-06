/* Read about the Array.prototype.sort method. Create a function that can be 
used with sort. This function should take two strings, and return a value that 
sort can use to determine which is the longest string. Finally, create an array 
of strings and try to get it sorted using your new function. */
function sortStrings (str1, str2) {
    var arrayStrings = [str1, str2];
    arrayStrings.sort(
        function (str1, str2) {
            if (str1.length < str2.length) {
                return -1;
            }
            if (str2.length < str1.length) {
                return 1;
            }
            else if (str1.length === str2.length) {
                return 0;
            }
        }
        )
        return arrayStrings;
}

console.log(sortStrings("kitties", "dogs"));


/* Create an array of objects (don’t need to use new here, just regular object 
literals). These objects will contain a name and email property. Then, run some 
code that will sort your array by the longest name. Then, run some code that 
will sort your array by e-mail address in alphabetical order. */

var object1 = {
    name: "Kash",
    email: "klingat@me.com"
}

var object2 = {
    name: "Claudia",
    email: "clingat@me.com"
}

var arrayObjects = [object1, object2]

//sorts objects by longest name
arrayObjects.sort(function (object1, object2) {
            if (object1.name.length < object2.name.length) {
                return -1;
            }
            if (object2.name.length < object1.name.length) {
                return 1;
            }
            else if (object1.name.length === object2.name.length) {
                return 0;
            }
        }
        );

console.log(arrayObjects);


//sorts objects by email, alphabetically
arrayObjects.sort(function (object1, object2) {
            if (object1.email < object2.email) {
                return -1;
            }
            if (object2.email < object1.email) {
                return 1;
            }
            else if (object1.email === object2.email) {
                return 0;
            }
        }
        );
        
console.log(arrayObjects);


/* Create a function that can be used with Array.prototype.map. This function 
should take a number and return its square. Then, use this function with map on 
an array of numbers to check the result. */

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var numbersSquared = numbers.map(function(num) {
        return num*num;   
    }
 );
 
console.log(numbersSquared);


 
