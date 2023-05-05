document.querySelector('#check').addEventListener('click', check)

function check() {

  const day = document.querySelector('#day').value.toLowerCase();

  //Conditionals go here

  if (day === "tuesday" || day === "thursday") {
    document.querySelector("#placeToSee").innerHTML = "Class day";
  } else if (day === "Monday".toLowerCase() || day === "Wednesday".toLowerCase() || day === "Friday".toLowerCase()) {
    document.querySelector("#placeToSee").innerHTML = "Boring Day";
  } else {
    document.querySelector("#placeToSee").innerHTML = "Weekend Yayyyy!!!!!";

  }
}
