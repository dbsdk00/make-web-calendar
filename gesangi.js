var NumberClicked = false;


function add_char(char) {
    if (NumberClicked == false) { // 눌렀던게 숫자가 아니다
        if (isNaN(char)) {} // 지금 치려는게 숫자가 아니면 실행 안함 ('{}')
        else {document.getElementById("display").value += char}

    } else {document.getElementById("display").value += char}

    if (isNaN(char) == false) {NumberClicked = true;} // isNaN 숫자인지 아닌지 판별 (숫자일 경우 true반환)
    else {NumberClicked = false}
}

function calculrate() {
    var display = document.getElementById("display");
    var result = eval(display.value)
    document.getElementById("result").value = result;
}

function reset_display() {
    document.getElementById("result").value = "";
    document.getElementById("display").value = "";
    NumberClicked = false;
}