function clock() {
    var time = moment().format('MMMM Do YYYY, h:mm:ss a');
    $('#currentDay').text(time);
}
setInterval(clock, 1000);


