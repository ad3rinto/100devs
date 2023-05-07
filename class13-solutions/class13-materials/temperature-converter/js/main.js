//Write your pseduo code first! 


//Throw in an even handler
document.querySelector("#yell").addEventListener('click', transform);




function transform () {
    //Obtain input
    const celciusTemp = Number(document.querySelector("#temp").value);
    //transform from celcius to Farenheit
    if(Number.isInteger(celciusTemp)){
        const converterTemp = (celciusTemp*9/5) + 32
        console.log(converterTemp)
    // display answer in DOM
        document.querySelector("#placeToYell").innerText = `The converted temperature is ${converterTemp}F degs` ;
    } else {
        const result = "Invalid input"
        document.querySelector("#placeToYell").innerText = result; 
    }
} 
    


//through in some validation


























//0 -> 32
// document.querySelector('#yell').addEventListener('click', convert)

// function convert() {
//     //need the value that is in selseeyus
//     let temp = document.querySelector('#sel').value
//     //convert from selseeyus to fairinheight
//     temp = temp * 9/5 + 32
//     //show it
//     document.querySelector('#placeToYell').innerText = temp
  
// }

