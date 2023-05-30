//Create a function that grabs the number of snacks from the input and tells you to stop that many times



const blaster = () => {
    const num1 = document.querySelector('input').value;
    let i = 0;
    document.querySelector("#stops").innerHTML = ""
    while (i < num1) {
        document.querySelector("#stops").innerHTML += `  Stop snacking!!`
        i++
    }
}


document.querySelector("#help").addEventListener("click", blaster)