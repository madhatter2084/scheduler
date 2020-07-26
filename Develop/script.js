$(document).ready(function() {
function clock() {
    var time = moment().format('MMMM Do YYYY, h:mm:ss a');
    $('#currentDay').text(time);
}
    setInterval(clock, 1000);

var text9A = $("#textarea9A");
var text10A = $("#textarea10A");
var text11A = $("#textarea11A");
var text12P = $("#textarea12P");
var text1P = $("#textarea1P");
var text2P = $("#textarea2P");
var text3P = $("#textarea3P");
var text4P = $("#textarea4P");
var text5P = $("#textarea5P");

$("button").on("click", function(){
    localStorage.setItem("9A", (text9A.val()));
});

$("#textarea9A").append(localStorage.getItem("9A"));

});

