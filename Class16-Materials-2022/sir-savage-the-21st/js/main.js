//Create a function that has a loop that prints '21' 21 times to the console and then call that function

const callSavage = (a) => {
    for (let i = 0; i < a; i++) {
        const para = document.createElement('p')
        const node = document.createTextNode('21');
        para.appendChild(node)
        document.querySelector("#savageSays").appendChild(para);
    }


}
callSavage(5)
//Bonus can you make it print '21' 21 times to the dom?
