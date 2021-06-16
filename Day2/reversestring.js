const reverseString = str =>
    str
        .toLowerCase()
        .split('')// split string thanh array
        .reverse('')
        .join(''); //return the array as a string
module.exports = reverseString;