/*
 Create a function, matrix_add(), that does the following:

 Input:

 array1: a multi-dimensional array
 array2: a multi-dimensional array
 Output:

 output: a multi-dimensional array
 Example:

 var array1 = [ [1,2,3], [3,4,5], [6,7,8] ] var array2 = [ [1,2,3], [1,2,3], [1,2,3] ]

 output = matrix_add(array1,array2); console.log(output); //outputs [ [2,4,6], [4,6,8], [7,9,11] ]

 Put your solution in answer.js
 */

var array1 = [ [1,2,3], [3,4,5], [6,7,8] ];
var array2 = [ [1,2,3], [1,2,3], [1,2,3] ];

function matrix_add(input_array1, input_array2) {
    var result = [];
    for (var i = 0; i < input_array1.length; i++) {
        var temp = [];
        for (var j = 0; j < input_array1[i].length; j++) {
            num1 = input_array1[i][j];
            num2 = input_array2[i][j];

            temp.push(num1 + num2);
        }
        result.push(temp);
    }
    return result;
}

var output = matrix_add(array1,array2);
console.log(output); //outputs [ [2,4,6], [4,6,8], [7,9,11] ]