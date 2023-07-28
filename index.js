
//Đoạn mã trong window.onload sẽ đươc thực hiện sau khi trang web đa tải xong
window.onload =  function(){
    //Đoạn mã sẽ được thực hiện 

    let seconds = 0;
    let tens = 0;
    //Hàm trả về phần tử có id là chuỗi "tens" bên html 
    let appendTens = document.getElementById("tens")
    let appendSeconds = document.getElementById("seconds")
    let buttonStart = document.getElementById("button-start");
    let buttonStop = document.getElementById("button-stop")
    let buttonReset = document.getElementById("button-reset")

    let Interval;

    buttonStart.onclick = function(){
        //cleaeInterval : thực thi đoạn mã hoặc hàm đã được lập lịch với setInterval()
        //Interval: Tên biến hoặc tham số được sủ dụng trong hàm 
        clearInterval(Interval);
        //là điểm bắt đầu và số lần tăng lên là 10 ms
        Interval = setInterval(startTimer, 10);
    }
    buttonStop.onclick = function(){
        clearInterval(Interval);
    }

    buttonReset.onclick = function(){
        //Trong trường hợp này biên interval đang lưu trữ giá trị hẹn giờ từ hàm setInterval() trước đó
        clearInterval(Interval);
        tens = "00";
        seconds = "00";
        //đặt các nội dung của phần tử html có id tens và second thnahf các giá trị mới tương ứng 
        appendTens.innerHTML = tens;
        appendSeconds.innerHTML = seconds;
    }

    function startTimer(){
        tens++;
        //nếu tens <=9 thì thì append sẽ cập nhật với số 0 đúng trước 
        if(tens <= 9){
            appendTens.innerHTML = "0" + tens;
        }
        //Nếu tens > 9 thì append sẽ cập nhật tens có 2 chữ số
        if(tens > 9){
            appendTens.innerHTML = tens;
        }
        //Neus tens > 99 thì append sẽ cập nhật tens có 3 chu
        if(tens > 99){
            console.log("seconds");
            seconds++;
            appendSeconds.innerHTML = "0" + seconds;
            tens = 0;
            appendTens.innerHTML = "0" + 0;
        }

        if(seconds > 9){
            appendSeconds.innerHTML = seconds;
        }
    }
}