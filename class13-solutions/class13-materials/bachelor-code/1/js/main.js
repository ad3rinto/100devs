document.querySelector('#finalRose').addEventListener('click', hide)

function hide() {
	var x = document.querySelector('#claire');
	var y = document.querySelector('#sharleen');
	if (x.style.display === "none" || y.style.display === "none") {
		x.style.display = "block";
		y.style.display = "block";
	} else {
		x.style.display = "none"
		y.style.display = "none"
	}
	// document.querySelector('#claire').style.display = 'none'
	// document.querySelector('#sharleen').style.display = 'none'
}
