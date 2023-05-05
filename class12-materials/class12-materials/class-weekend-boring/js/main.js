document.querySelector('#check').addEventListener('click', check)

function check() {

  const day = document.querySelector('#day').value.toLowerCase();

  //Conditionals go here

  if (day === "Tuesday".toLowerCase() || day === "Thursday".toLowerCase()) {
    document.querySelector("#placeToSee").innerHTML = "Course day";
  } else if (day === "Monday".toLowerCase() || day === "Wednesday".toLowerCase() || day === "Friday".toLowerCase()) {
    document.querySelector("#placeToSee").innerHTML = "Typical Week Day";
  } else {
    document.querySelector("#placeToSee").innerHTML = "Weekend Yayyyy!!!!!";

  }
}
