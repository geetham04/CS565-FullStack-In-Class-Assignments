function sConsole(event) {
  event.preventDefault();
  var text = document.getElementById("text");
  var email = document.getElementById("email");
  var message = document.getElementById("message");

  console.log(text.value);
  console.log(email.value);
  console.log(message.value);
}
