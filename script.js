/*global fetch*/
/*global $*/
// contentScript.js

var d = new Date();
console.log("Todays date",d)
var fullDate =d.getFullYear()+'-'+(d.getMonth()+1)+'-'+d.getDate();
console.log("Todays Full Date",fullDate);

function goto_previousDate() {
  
  d.setDate(d.getDate() - 1);
  console.log("Previous Date", d);
  var fullDate =d.getFullYear()+'-'+(d.getMonth()+1)+'-'+d.getDate();

  console.log("Full Date",fullDate);
  url = "https://api.nasa.gov/planetary/apod?api_key=2VNbudgKu8f4uT5F7mKlToOS8g3FsKX4uMLsmb4O&date="+fullDate;
  fetch(url)
    .then(response => {
      if (response.ok) {
        return response.json();
      }

      throw Error(response.statusText);
    })

    .then(json => {

      $('#apodDate').html(d.toDateString());
    image.attr('src', json.url);
      explanation.html(json.explanation).css('font-family', 'Quicksand');

    })
}

$("#date_previous_btn").click(goto_previousDate)


 var url = "https://api.nasa.gov/planetary/apod?api_key=2VNbudgKu8f4uT5F7mKlToOS8g3FsKX4uMLsmb4O";
//get todays date
const image = $('#imageHolder');
const explanation = $('#explanation');
let invis = $(".container-fluid");



fetch(url)
  .then(response => {
    if (response.ok) {
      return response.json();
    }

    throw Error(response.statusText);
  })

  .then(json => {

    $('#apodDate').html(d.toDateString());
    image.attr('src', json.url);
    explanation.html(json.explanation).css('font-family', 'Quicksand');

  })



  .catch(err => console.log(err.message));
