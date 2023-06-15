//Create a function that takes in an array of numbers. 
//Return a new array containing every even number from the original array (do not use map or filter)



function arraySelector(arr1) {
    let evens = [];
    arr1.forEach(element => {
        if (element % 3 == 0) {
            evens.push(element)
        }
    });
    console.log(evens)

}

arraySelector([1, 2, 3, 4, , 23, 32, 446, 676, 87, 89, 22, 12, 8, 9, 10])


function arraySelector2(arr) {
    let newList = arr.filter(x => x % 3 == 0)
    console.log(newList)
}