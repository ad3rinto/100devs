// const contestants = document.querySelectorAll('.contestant')

// Array.from(contestants).forEach(element => element.addEventListener('click', checkForRose))

// function checkForRose(click){
// 	if(click.target.classList.contains('rose')){
// 		document.querySelector('#nikki').classList.toggle('hidden')
// 	}else{
// 		alert("Wrong!");
// 	}
// }
const test = document.querySelectorAll("header >h2")
console.log(test)
test.forEach((item) => item.addEventListener('click', checkForWinner))

function checkForWinner(click) {
	if (click.target.classList.contains('rose')) {
		document.querySelector('#nikki').classList.toggle('hidden')
	} else {
		alert("Oyato")
	}
}