//Create a conditonal that checks their age
//If under 16, tell them they can not drive
//If under 18, tell them they can't hate from outside the club, because they can't even get in
//If under 21, tell them they can not drink
//If under 25, tell them they can not rent cars affordably
//If under 30, tell them they can not rent fancy cars affordably
//If under over 30, tell them there is nothing left to look forward too

//--- Harder
//On click of the h1

const checkAge = () => {
    let age = document.getElementById('danceDanceRevolution').value
    if (age < 16) {
        document.getElementById('placement').innerText = 'You are not old enough to drive'
    } else if (age > 16 && age <= 18) {
        document.getElementById('placement').innerText = `You can't hate from outside the club, because they can
        \'t even get in`
    } else if (age < 21) {
        document.getElementById('placement').innerText = `You can not drink`
    } else if (age < 25) {
        document.getElementById('placement').innerText = `You can not rent affordable cars`
    } else if (age < 30) {
        document.getElementById('placement').innerText = `You can not rent fancy cars`
    } else {
        document.getElementById('placement').innerText = `Nothing more to look forward to mate`

    }
    console.log(age)

}
//Take the value from the input
//Place the result of the conditional in the paragraph
document.getElementById("check").addEventListener('click', checkAge);
