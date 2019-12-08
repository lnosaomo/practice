window.addEventListener("load", loadJson);
function loadJson() {
  var xhttp = new XMLHttpRequest();
  if (!xhttp) {
    alert("cannot process request");
    return false;
  }
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var books = JSON.parse(this.responseText);
      document.getElementById("detail1").innerHTML =
        books.my_book_recs[0].book_one.details;

      document.getElementById("detail2").innerHTML =
        books.my_book_recs[1].book_two.details;

      document.getElementById("detail3").innerHTML =
        books.my_book_recs[2].book_three.details;

      document.getElementById("detail4").innerHTML =
        books.my_book_recs[3].book_four.details;

      document.getElementById("detail5").innerHTML =
        books.my_book_recs[4].book_five.details;

      document.getElementById("detail6").innerHTML =
        books.my_book_recs[5].book_six.details;

      document.getElementById("detail7").innerHTML =
        books.my_book_recs[6].book_seven.details;
    }
  };
  //walkaround to by pass cors and test request from local host
  var corsWalkaround = "https://cors-anywhere.herokuapp.com/";
  var jsonUrl = "http://lovnos.dreamhosters.com/books.json";
  xhttp.open("GET", `${corsWalkaround}${jsonUrl}`);
  xhttp.send();
}
