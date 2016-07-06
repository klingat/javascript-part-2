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
