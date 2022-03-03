let flashSaleSecond = 7200;
let boughtCourseNumber = 0;

// padding 0 to time unit
let paddingZero = function(timeUnit) {
    return timeUnit < 10 ? '0' + timeUnit : timeUnit;
};
let countdownInterval;

// handle the flashsale countdown
let setCountDownFlashSale = function(second) {
    if(second === 0) {
        clearInterval(countdownInterval);
    }
    var hours = Math.floor(second / 3600);
    var minutes = Math.floor((second % 3600) / 60);
    var seconds = second - hours * 3600 - minutes * 60;

    $('#hour').text(paddingZero(hours));
    $('#minute').text(paddingZero(minutes));
    $('#second').text(paddingZero(seconds));
};

// run flash countdown in each second
countdownInterval = setInterval(function() {
    setCountDownFlashSale(flashSaleSecond--);
}, 1000);


// handle purchase proof animation
setTimeout(function() {
    $('#purchase-item').css('bottom', "50px");
    $('#purchase-item').css('opacity', "1");
}, 10000);

setTimeout(function() {
    $('#purchase-item').css('bottom', "-200px");
    $('#purchase-item').css('opacity', "0");
}, 15000);


// handle buy a course event
let addToCard = function(event) {
    event.target.style.display = "none";
    $('#bought-number').text(++boughtCourseNumber);
};

// validate form 
let validateForm = function() {
    let arrIds = ['fullname', 'email', 'phone', 'age'];
    let input;
    let inputValue;
    for(let i = 0; i< arrIds.length; i++) {
        input = $('#' + arrIds[i]);
        inputValue = input.val();
        if(!inputValue) {
            input.css('border-color', 'red');
        }
    }
  
};

// validate input 
let validateInput = function(id) {
    let input = $('#' + id);
    let inputValue = input.val();
    if(!inputValue) {
        input.css('border-color', 'red');
    } else {
        input.css('border-color', '#cacaca');
    }
}