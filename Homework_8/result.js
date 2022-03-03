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

    document.getElementById('hour').innerHTML = paddingZero(hours);
    document.getElementById('minute').innerHTML = paddingZero(minutes);
    document.getElementById('second').innerHTML = paddingZero(seconds);
};

// run flash countdown in each second
countdownInterval = setInterval(function() {
    setCountDownFlashSale(flashSaleSecond--);
}, 1000);


// handle purchase proof animation
setTimeout(function() {
    document.getElementById('purchase-item').style.bottom = "50px";
    document.getElementById('purchase-item').style.opacity = "1";
}, 10000);

setTimeout(function() {
    document.getElementById('purchase-item').style.opacity = '0';
    document.getElementById('purchase-item').style.bottom = "-200px";
}, 15000);


// handle buy a course event
let addToCard = function(event) {
    event.target.style.display = "none";
    document.getElementById('bought-number').innerHTML = ++boughtCourseNumber;
};

// validate form 
let validateForm = function() {
    let arrIds = ['fullname', 'email', 'phone', 'age'];
    let input;
    let inputValue;
    for(let i = 0; i< arrIds.length; i++) {
        input = document.getElementById(arrIds[i]);
        inputValue = input.value;
        if(!inputValue) {
            input.style.borderColor = 'red';
        }
    }
  
};

// validate input 
let validateInput = function(id) {
    let input = document.getElementById(id);
    let inputValue = input.value;
    if(!inputValue) {
        input.style.borderColor = 'red';
    } else {
        input.style.borderColor = '#cacaca';
    }
}