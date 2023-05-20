//Write your pseduo code first!





document.querySelector('#convert').addEventListener('click', convertIt);

function convertIt() {

  let num = document.querySelector('#temp').value
  console.log(num);
  document.querySelector('#placeToConvert').innerText = `Calculated value is ${num + 31}`
}




// //only on click
// document.querySelector('#yell').addEventListener('click', run)

// function run() {
//   console.log('HELLO TWITCH')
//   //get value out of input
//   let pumpkin = document.querySelector('#firstName').value
//   //convert the value
//   pumpkin = pumpkin * 9 / 5 + 32
//   //show the value to user
//   document.querySelector('#placeToYell').innerText = pumpkin
// }
