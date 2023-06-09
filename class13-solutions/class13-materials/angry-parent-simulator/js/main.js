// document.querySelector('#yell').addEventListener('click', run)

// function run() {
//   const fName = document.querySelector('#firstName').value
//   const fMidName = document.querySelector('#firstMiddle').value
//   const lMidName = document.querySelector('#lastMiddle').value
//   const lName = document.querySelector('#lastName').value

//   // document.querySelector('#placeToYell').innerText = fName + ' ' + fMidName + ' ' + ' ' + lMidName + ' ' + lName

//   //Add what you should be doing - conditionals go here

//   document.querySelector('#placeToYell').innerText = `${fName} ${fMidName} ${lMidName} ${lName}`
// }

const synth = window.speechSynthesis;
document.querySelector('#yell').addEventListener('click', run)

function run() {
  const fName = document.querySelector('#firstName').value
  const fMidName = document.querySelector('#firstMiddle').value
  const lMidName = document.querySelector('#lastMiddle').value
  const lName = document.querySelector('#lastName').value
  if (fName !== "") {
    const yellText = `${fName}, ${fMidName}, ${lMidName}- ${lName}`

    document.querySelector('#placeToYell').innerText = yellText
    document.querySelector("#my-form").reset();

    let yellThis = new SpeechSynthesisUtterance(yellText);

    synth.speak(yellThis);
  } else {
    document.querySelector('#placeToYell').innerText = "No name entered"
    document.querySelector("#my-form").reset();
  };
};
