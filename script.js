const buttons = document.querySelectorAll(".student-btn");

buttons.forEach(button=>{
    button.addEventListener("click",()=>{

        buttons.forEach(btn=>{
            btn.style.background="#eef7ff";
        });

        button.style.background="#90cdf4";

        alert(button.innerText + " 학생을 선택했습니다.");

    });
});
