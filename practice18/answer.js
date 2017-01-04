/*
 ### calculate multi average
 Create a function, average_array, that calculates the average of an arbitrary area of a multi-dimensional array, that does the following:
 - Takes a multi-dimensional array
 - Takes a number describing size of an area to calculate the average of
 - Outputs an array of the same size as the multi-dimensional array, but with all sampled values set to the calculated average of those elements

 #### Input:
 - input_array: a multi-dimensional array of numbers
 - average_size: a number representing a block of area to be averaged

 #### Output:
 - output_array: a multi-dimensional array of numbers the same size as the input array, but with batches of numbers replaced

 #### Example:
 ```
 <pre>
 var input_array =
 [
 [1, 1, 4, 7, 8, 3, 6, 9, 5, 8],
 [0, 4, 3, 3, 2, 3, 1, 5, 8, 1],
 [5, 8, 5, 1, 1, 8, 0, 7, 4, 1],
 [6, 3, 9, 1, 3, 8, 1, 6, 1, 6]
 ]
 var average_size = 2</pre>
 ```
 Output:
 ```
 <pre>
 output = [
 [1.5, 1.5, 4.2, 4.2, 4.0, 4.0, 5.2, 5.2, 5.5, 5.5],
 [1.5, 1.5, 4.2, 4.2, 4.0, 4.0, 5.2, 5.2, 5.5, 5.5],
 [5.5, 5.5, 4.0, 4.0, 5.0, 5.0, 3.5, 3.5, 3.0, 3.0],
 [5.5, 5.5, 4.0, 4.0, 5.0, 5.0, 3.5, 3.5, 3.0, 3.0]
 ]</pre>
 ```
 So, for example, you would take the values from input_array[0][0],
 input_array[0][1], input_array[1,0], and input_array[1,1],
 add them all together, divide by the total number of cells added,
 and then place that value back into all the cells sampled



0   [0, 1, 2, 3],
1   [0, 1, 2, 3],
2   [0, 1, 2, 3],
3   [0, 1, 2, 3]

i
 j   0  1  2  3
 */


// var input_array = [
//     [1, 1, 4, 7, 8, 3, 6, 9, 5, 8],
//     [0, 4, 3, 3, 2, 3, 1, 5, 8, 1],
//     [5, 8, 5, 1, 1, 8, 0, 7, 4, 1],
//     [6, 3, 9, 1, 3, 8, 1, 6, 1, 6],
//     [1, 1, 4, 7, 8, 3, 6, 9, 5, 8],
//     [0, 4, 3, 3, 2, 3, 1, 5, 8, 1],
//     [5, 8, 5, 1, 1, 8, 0, 7, 4, 1],
//     [6, 3, 9, 1, 3, 8, 1, 6, 1, 6],
//     [1, 1, 4, 7, 8, 3, 6, 9, 5, 8],
//     [0, 4, 3, 3, 2, 3, 1, 5, 8, 1]
// ];

var input_array = [
    [1, 1, 4, 7, 8, 3, 6, 9, 5, 8],
    [0, 4, 3, 3, 2, 3, 1, 5, 8, 1],
    [5, 8, 5, 1, 1, 8, 0, 7, 4, 1],
    [6, 3, 9, 1, 3, 8, 1, 6, 1, 6]
];

var average_size = 2;

function average_array(array, size) {
    if (array.length % size || array[0].length % size) {
        console.log("Can't use size " + size + " with array", array);
        return;
    }
    var result = [];
    for (var i = 0; i < array.length; i++) {
        result.push([]);
    }
    for (i = 0; i < array.length; i += size) {
        // console.log("in array " + i);
        for (var j = 0; j < array[i].length; j += size) {
            //console.log("in element " + i + ", " + j);
            var average = 0;
            for (var k = i; k < i + size; k++) {
                for (var l = j; l < j + size; l++) {
                    // console.log("in element " + k + ", "  + l);
                    average += array[k][l];
                }
            }
            average = average / (size * size);
            average = Math.floor(average * 10) / 10;
            //average = average.toFixed(1);
            for (k = i; k < i + size; k++) {
                for (l = j; l < j + size; l++) {
                    // console.log("in element " + k + ", "  + l);
                    result[k][l] = average;
                }
            }
            console.log("average: " + average);
        }
    }
    return result;
}

console.log( average_array(input_array, average_size) );