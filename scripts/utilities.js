var forEach = function(array, callback) {
    
    // call the callback on each item in the array
    // get an item from the array
    // call the callback function and pass the item into the function
    for (var i = 0; i < array.length; i++) {
        callback(array[i]);
    }
};