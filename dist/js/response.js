document.getElementById("submit").addEventListener("click", loadJson);
function loadJson() {
  var xhttp = new XMLHttpRequest();
  if (!xhttp) {
    alert("cannot process request");
    return false;
  }
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var response = JSON.parse(this.responseText);
    //  var form = document.getElementById("form");
    //  form.className += "hide";
    const isValidFirstName = fname.checkValidity();
  const isValidLastName = lname.checkValidity();
  const isValidMessage = message.checkValidity();
  const isValidEmail = email.checkValidity();
  if (!isValidFirstName) {
      document.getElementById('firstname-label').style.color = "red";
  }
  if (!isValidLastName) {
      document.getElementById('lastname-label').style.color = "red";
  }
  if (!isValidMessage) {
      document.getElementById('message-label').style.color = "red";
  }
  if (!isValidEmail) {
    document.getElementById('email-label').style.color = "red";
}

  if  (isValidFirstName && isValidLastName && isValidMessage && !isValidEmail){
      
      alert(response.text.response)  
  }
}
  };
  //walkaround to by pass cors and test request from local host
  var corsWalkaround = "https://cors-anywhere.herokuapp.com/";
  var jsonUrl = "http://lovnos.dreamhosters.com/response.json";
  xhttp.open("GET", `${corsWalkaround}${jsonUrl}`);
  xhttp.send();
}



