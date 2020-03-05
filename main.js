

function submit(test) {
  var x = document.getElementById(test).value;

  if (x % 3 === 0) {
    document.querySelector("h2").innerHTML = "You are a lion";
  } else if (x % 5 === 0) {
    document.querySelector("h2").innerHTML = "You are a leopard";
  } else if (x % 7 === 0) {
    document.querySelector("h2").innerHTML = "You are an eagle";
  } else if (x % 2 === 0) {
    document.querySelector("h2").innerHTML = "You are an elephant";
  } else if (x % 1 === 0) {
    document.querySelector("h2").innerHTML = "You are a sea turtle";
  } else {
    document.querySelector("h2").innerHTML = "You are a squirrel for not entering a number.";
  }
}
