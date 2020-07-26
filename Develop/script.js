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
    localStorage.setItem("10A", (text10A.val()));
    localStorage.setItem("11A", (text11A.val()));
    localStorage.setItem("12P", (text12P.val()));
    localStorage.setItem("1P", (text1P.val()));
    localStorage.setItem("2P", (text2P.val()));
    localStorage.setItem("3P", (text3P.val()));
    localStorage.setItem("4P", (text4P.val()));
    localStorage.setItem("5P", (text5P.val()));
});

$("#textarea9A").append(localStorage.getItem("9A"));
$("#textarea10A").append(localStorage.getItem("10A"));
$("#textarea11A").append(localStorage.getItem("11A"));
$("#textarea12P").append(localStorage.getItem("12P"));
$("#textarea1P").append(localStorage.getItem("1P"));
$("#textarea2P").append(localStorage.getItem("2P"));
$("#textarea3P").append(localStorage.getItem("3P"));
$("#textarea4P").append(localStorage.getItem("4P"));
$("#textarea5P").append(localStorage.getItem("5P"));
});

var currentTime = parseInt(moment().format("HH"));
$("textarea").each(function(){
    var timeBlock = parseInt($(this).attr("name"));
    
    if (timeBlock < currentTime){
        $(this).addClass("past");
        $(this).removeClass("present");
        $(this).removeClass("future");
    }
    if (timeBlock > currentTime){
        $(this).addClass("future");
        $(this).removeClass("past");
        $(this).removeClass("present");
    }
    if (timeBlock === currentTime){
        $(this).addClass("present");
        $(this).removeClass("past");
        $(this).removeClass("future");
    }
})