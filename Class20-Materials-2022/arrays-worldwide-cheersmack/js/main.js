//Create a function that takes in a number. 
//The function should return an array that contains every number from 1 
//to that number as separate elements


const numSeperator = (num) => {
    let numList = [];
    let i = 1;
    while (i <= num) {
        numList.push(i)
        i++;
    }

    console.log(numList)

}

numSeperator(8)