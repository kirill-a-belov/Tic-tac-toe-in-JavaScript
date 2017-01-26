var move = true;
var moveCount = 0;
var first = true;

function initialization() {
    document.getElementById("1").innerHTML = ' ';
    document.getElementById("2").innerHTML = '';
    document.getElementById("3").innerHTML = ' ';
    document.getElementById("4").innerHTML = '';
    document.getElementById("5").innerHTML = ' ';
    document.getElementById("6").innerHTML = '';
    document.getElementById("7").innerHTML = '';
    document.getElementById("8").innerHTML = ' ';
    document.getElementById("9").innerHTML = '';
    moveCount = 0;
    if (first) {
        first = false;
        compMove();
    } else {
        first = true;
    }
}

function nextMove() {
    if (winCheck()) {
        alert(move ? "Выиграл - О" : "Выиграл - Х");
        initialization();
    } else {
        moveCount++;
        if (moveCount == 9) {
            alert("Ничья!");
            initialization();
        } else {
            if ((moveCount % 2 > 0) && (first)) {
                compMove();
            }
            if ((moveCount % 2 == 0) && (!first)) {
                compMove();
            }
        }
    }
}

function btnClk(btnId) {
    var btn = document.getElementById(btnId);
    var btnTxt = btn.innerHTML;
    if ((btnTxt != "X") && (btnTxt != "O")) {
        if (move) {
            btn.innerHTML = "X";
            move = false;
        } else {
            btn.innerHTML = "O";
            move = true;
        }
        setTimeout(nextMove,10);

    }
}
function compMove() {
    var btnId = Math.floor(Math.random() * 9) + 1;
    while ((document.getElementById(btnId.toString()).innerHTML == "X") ||
    (document.getElementById(btnId.toString()).innerHTML == "O")) {
        btnId = Math.floor(Math.random() * 9) + 1;
    }
    btnClk(btnId);
}

function winCheck(){
    return ((document.getElementById("1").innerHTML == document.getElementById("2").innerHTML) &&
        (document.getElementById("2").innerHTML == document.getElementById("3").innerHTML)) ||
        ((document.getElementById("4").innerHTML == document.getElementById("5").innerHTML) &&
        (document.getElementById("5").innerHTML == document.getElementById("6").innerHTML)) ||
        ((document.getElementById("7").innerHTML == document.getElementById("8").innerHTML) &&
        (document.getElementById("8").innerHTML == document.getElementById("9").innerHTML)) ||
        ((document.getElementById("1").innerHTML == document.getElementById("4").innerHTML) &&
        (document.getElementById("4").innerHTML == document.getElementById("7").innerHTML)) ||
        ((document.getElementById("2").innerHTML == document.getElementById("5").innerHTML) &&
        (document.getElementById("5").innerHTML == document.getElementById("8").innerHTML)) ||
        ((document.getElementById("3").innerHTML == document.getElementById("6").innerHTML) &&
        (document.getElementById("6").innerHTML == document.getElementById("9").innerHTML)) ||
        ((document.getElementById("1").innerHTML == document.getElementById("5").innerHTML) &&
        (document.getElementById("5").innerHTML == document.getElementById("9").innerHTML)) ||
        ((document.getElementById("7").innerHTML == document.getElementById("5").innerHTML) &&
        (document.getElementById("5").innerHTML == document.getElementById("3").innerHTML));
}