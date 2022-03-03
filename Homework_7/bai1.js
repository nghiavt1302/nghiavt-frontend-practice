
function kiemTraNamNhuan(year){
    if(year % 400 == 0){
        console.log("Năm " + year +" là năm nhuận");
    }
    else{
        if(year % 4 == 0 && year % 100 != 0){
            console.log("Năm "+ year +" là năm nhuận");
        }
        else{
            console.log("Năm "+ year +" không là năm nhuận");
        }
    }
}

function chuyenTenThang(number){
    if(number>=1 && number <=12){
        switch(number){
            case 1:
                console.log("Tháng Một");
                break;
            case 2:
                console.log("Tháng Hai");
                break;
            case 3:
                console.log("Tháng Ba");
                break;
            case 4:
                console.log("Tháng Bốn");
                break;
            case 5:
                console.log("Tháng Năm");
                break;
            case 6:
                console.log("Tháng Sáu");
                break;
            case 7:
                console.log("Tháng Bảy");
                break;
            case 8:
                console.log("Tháng Tám");
                break;
            case 9:
                console.log("Tháng Chín");
                break;
            case 10:
                console.log("Tháng Mười");
                break;
            case 11:
                console.log("Tháng Mười Một");
                break;
            case 12:
                console.log("Tháng Mười Hai");
                break;
        }
    }
    else{
        console.log("Tháng không hợp lệ");
    }
}