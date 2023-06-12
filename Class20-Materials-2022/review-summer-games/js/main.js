//Create a function that takes in an array of numbers. Multiply each number together and alert the product. 

const arrayChomper = (arr1) => {
    let answer = 1;
    arr1.forEach(element => {
        answer *= element

    });
    console.log(answer)
}


arrayChomper([1, 2, 3, 4, 10])