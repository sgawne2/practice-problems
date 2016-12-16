/*
 Create a function, search_array(), that does the following:

 #### Input: 2 arrays
 - haystack array, which has values to search through
 - needle array, which has values to search for
 #### Output:
 - output array, which has all values in needle that are found in haystack
 #### Example:
 var haystack = ['cat','dog','bird','turtle','lizard'];
 var needle = ['dog','lizard','flower','monkey','unicorn']
 var output = null;

 output = search_array(haystack,needle);
 console.log(output); //outputs ['dog','lizard'];

 */

var haystack_array = ['cat','dog','bird','turtle','lizard'];
var needle_array = ['dog','lizard','flower','monkey','unicorn'];

function search_array(haystack, needles) {
    var results = [];
    for (var i = 0; i < needles.length; i++) {
        if (haystack.indexOf(needles[i]) > -1) {
            results.push(needles[i]);
        }
    }
    return results;
}

var output = search_array(haystack_array,needle_array);
console.log(output); //outputs ['dog','lizard'];