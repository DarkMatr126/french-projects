let pos = 0
let quesNum = 13
let quesExtra = 0
let answerOffDel = 1000
let tileNum = 42
let rollLock = 0
let offsetX = 35 //.__
let offsetY = 35 //.__
let seenAll = 0

let quesDone = []

let quesSeen = []

for (let l = 1; l < quesNum + 1; l++) {
    quesDone.push(l);
}

let endX = 13.36
let endY = 5.36

function roll() {
    if (rollLock != 1) {
        rollLock = 1
        let piece = document.getElementById("gmPc")
        let roll = Math.ceil(Math.random()*6)
        document.getElementById('die').src = `./images/die.${roll}.png`;
        let fin = document.getElementById("fin");
        switch (pos + roll) {
            case 1:
                pos = 1;
                piece.style.left = `1.${offsetX}in`; //right >>>
                quesSlt();
                break;
            case 2:
                pos = 2;
                piece.style.left = `2.${offsetX}in`;
                quesSlt();
                break;
            case 3:
                pos = 3;
                piece.style.left = `3.${offsetX}in`;
                quesSlt();
                break;
            case 4:
                pos = 4;
                piece.style.left = `4.${offsetX}in`;
                quesSlt();
                break;
            case 5:
                pos = 5;
                piece.style.left = `5.${offsetX}in`;
                quesSlt(1)
                break;
            case 6:
                pos = 6;
                piece.style.left = `6.${offsetX}in`;
                quesSlt()
                break;
            case 7:
                pos = 7;
                piece.style.left = `7.${offsetX}in`;
                quesSlt()
                break;
            case 8:
                pos = 8;
                piece.style.left = `8.${offsetX}in`;
                quesSlt();
                break;
            case 9:
                pos = 9;
                piece.style.left = `9.${offsetX}in`;
                quesSlt();
                break;
            case 10:
                pos = 10;
                piece.style.left = `10.${offsetX}in`;
                quesSlt(1);
                break;
            case 11:
                pos = 11;
                piece.style.left = `11.${offsetX}in`;
                quesSlt();
                break;
            case 12:
                pos = 12;
                piece.style.left = `12.${offsetX}in`;
                quesSlt();
                break;
            case 13:
                pos = 13;
                piece.style.left = `13.${offsetX}in`;
                quesSlt();
                break;
            case 14:
                pos = 14;
                piece.style.left = `13.${offsetX}in`; //down VVV
                piece.style.top = `1.${offsetY}`;
                quesSlt();
                break;
            case 15:
                pos = 15;
                piece.style.left = `13.${offsetX}in`;
                piece.style.top = `2.${offsetY}in`;
                quesSlt(1);
                break;
            case 16:
                pos = 16;
                piece.style.left = `12.${offsetX}in`; //left <<<
                piece.style.top = `2.${offsetY}in`;
                quesSlt();
                break;
            case 17:
                pos = 17;
                piece.style.left = `11.${offsetX}in`;
                piece.style.top = `2.${offsetY}in`;
                quesSlt();
                break;
            case 18:
                pos = 18;
                piece.style.left = `10.${offsetX}in`;
                piece.style.top = `2.${offsetY}in`;
                quesSlt();
                break;
            case 19:
                pos = 19;
                piece.style.left = `9.${offsetX}in`;
                piece.style.top = `2.${offsetY}in`;
                quesSlt();
                break;
            case 20:
                pos = 20;
                piece.style.left = `8.${offsetX}in`;
                piece.style.top = `2.${offsetY}in`;
                quesSlt(1);
                break;
            case 21:
                pos = 21;
                piece.style.left = `7.${offsetX}in`;
                piece.style.top = `2.${offsetY}in`;
                quesSlt();
                break;
            case 22:
                pos = 22;
                piece.style.left = `6.${offsetX}in`;
                piece.style.top = `2.${offsetY}in`;
                quesSlt();
                break;
            case 23:
                pos = 23;
                piece.style.left = `5.${offsetX}in`;
                piece.style.top = `2.${offsetY}in`;
                quesSlt();
                break;
            case 24:
                pos = 24;
                piece.style.left = `4.${offsetX}in`;
                piece.style.top = `2.${offsetY}in`;
                quesSlt();
                break;
            case 25:
                pos = 25;
                piece.style.left = `3.${offsetX}in`;
                piece.style.top = `2.${offsetY}in`;
                quesSlt(1);
                break;
            case 26:
                pos = 26;
                piece.style.left = `2.${offsetX}in`;
                piece.style.top = `2.${offsetY}in`;
                quesSlt();
                break;
            case 27:
                pos = 27;
                piece.style.left = `1.${offsetX}in`;
                piece.style.top = `2.${offsetY}in`;
                quesSlt();
                break;
            case 28:
                pos = 28;
                piece.style.left = `1.${offsetX}in`; //down VVV
                piece.style.top = `3.${offsetY}in`;
                quesSlt();
                break;
            case 29:
                pos = 29;
                piece.style.left = `1.${offsetX}in`;
                piece.style.top = `4.${offsetY}in`;
                quesSlt();
                break;
            case 30:
                pos = 30;
                piece.style.left = `2.${offsetX}in`; //right >>>
                piece.style.top = `4.${offsetY}in`;
                quesSlt(1);
                break;
            case 31:
                pos = 31;
                piece.style.left = `3.${offsetX}in`;
                piece.style.top = `4.${offsetY}in`;
                quesSlt();
                break;
            case 32:
                pos = 32;
                piece.style.left = `4.${offsetX}in`;
                piece.style.top = `4.${offsetY}in`;
                quesSlt();
                break;
            case 33:
                pos = 33;
                piece.style.left = `5.${offsetX}in`;
                piece.style.top = `4.${offsetY}in`;
                quesSlt();
                break;
            case 34:
                pos = 34;
                piece.style.left = `6.${offsetX}in`;
                piece.style.top = `4.${offsetY}in`;
                quesSlt();
                break;
            case 35:
                pos = 35;
                piece.style.left = `7.${offsetX}in`;
                piece.style.top = `4.${offsetY}in`;
                quesSlt(1);
                break;
            case 36:
                pos = 36;
                piece.style.left = `8.${offsetX}in`;
                piece.style.top = `4.${offsetY}in`;
                quesSlt();
                break;
            case 37:
                pos = 37;
                piece.style.left = `9.${offsetX}in`;
                piece.style.top = `4.${offsetY}in`;
                quesSlt();
                break;
            case 38:
                pos = 38;
                piece.style.left = `10.${offsetX}in`;
                piece.style.top = `4.${offsetY}in`;
                quesSlt();
                break;
            case 39:
                pos = 39;
                piece.style.left = `11.${offsetX}in`;
                piece.style.top = `4.${offsetY}in`;
                quesSlt();
                break;
            case 40:
                pos = 40;
                piece.style.left = `12.${offsetX}in`;
                piece.style.top = `4.${offsetY}in`;
                quesSlt(1);
                break;
            case 41:
                pos = 41;
                piece.style.left = `13.${offsetX}in`;
                piece.style.top = `4.${offsetY}in`;
                quesSlt();
                break;
            case 42:
                pos = 42;
                piece.style.left = `13.${offsetX}in`; //down VVV
                piece.style.top = `5.${offsetY}in`;
                fin.style.display = "block";
                setTimeout(function(){fin.style.display = "none"}, answerOffDel);
                end()
                break;
            default:
                if (pos + roll >= tileNum) {
                    piece.style.left = `${endX}in`;
                    piece.style.top = `${endY}in`;
                    fin.style.display = "block";
                    pos = 42;
                    setTimeout(function(){fin.style.display = "none"}, answerOffDel);
                    end()
                } else {
                    alert("Error");
                }
        }
    }
}

function quesSlt(a) {
    if (quesDone.length !=0) {
        let ques = quesDone[Math.floor(Math.random() * quesDone.length)];
        
        if (quesSeen.indexOf(ques) === -1) {
            setTimeout(function() {document.getElementById(`ques${ques}`).style.display = "block"},500);
            quesDone.splice(quesDone.indexOf(ques),1);

            quesSeen.push(ques);
        } else {
            quesSlt(a);
        }
    } else {
        for (let l = 1; l < quesNum + 1; l++) {
            quesDone.push(l);

            quesSeen = [];
        }

        quesSlt(a);
        seenAll = 1;

        document.getElementById("dataBtn").style.backgroundImage = "linear-gradient(#00ff00,#008800)";
    }
    if (a === 1) {
        quesExtra = 1;
    }
}

function eval(qNum,res) {
    let correct = document.getElementById("correct");
    let incorrect = document.getElementById("incorrect")
    let ques = document.getElementById(`ques${qNum}`);
    if (qNum === 1) {
        if (res === 3) {
            correct.style.display = "block";
            ques.style.display = "none";
            setTimeout(function() {correct.style.display = "none"}, answerOffDel);
            rollLock = 0
            quesEx();
        } else {
            incorrect.style.display = "block";
            setTimeout(function() {incorrect.style.display = "none"}, answerOffDel);
        }
    } else if (qNum === 2) {
        if (res === 2) {
            correct.style.display = "block";
            ques.style.display = "none";
            setTimeout(function() {correct.style.display = "none"}, answerOffDel);
            rollLock = 0
            quesEx();
        } else {
            incorrect.style.display = "block";
            setTimeout(function() {incorrect.style.display = "none"}, answerOffDel);
        }
    } else if (qNum === 3) {
        if (res === 2) {
            correct.style.display = "block";
            ques.style.display = "none";
            setTimeout(function() {correct.style.display = "none"}, answerOffDel);
            rollLock = 0
            quesEx();
        } else {
            incorrect.style.display = "block";
            setTimeout(function() {incorrect.style.display = "none"}, answerOffDel);
        }
    } else if (qNum === 4) {
        if (res === 3) {
            correct.style.display = "block";
            ques.style.display = "none";
            setTimeout(function() {correct.style.display = "none"}, answerOffDel);
            rollLock = 0
            quesEx();
        } else {
            incorrect.style.display = "block";
            setTimeout(function() {incorrect.style.display = "none"}, answerOffDel);
        }
    } else if (qNum === 5) {
        if (res === 4) {
            correct.style.display = "block";
            ques.style.display = "none";
            setTimeout(function() {correct.style.display = "none"}, answerOffDel);
            rollLock = 0
            quesEx();
        } else {
            incorrect.style.display = "block";
            setTimeout(function() {incorrect.style.display = "none"}, answerOffDel);
        }
    } else if (qNum === 6) {
        if (res === 1) {
            correct.style.display = "block";
            ques.style.display = "none";
            setTimeout(function() {correct.style.display = "none"}, answerOffDel);
            rollLock = 0
            quesEx();
        } else {
            incorrect.style.display = "block";
            setTimeout(function() {incorrect.style.display = "none"}, answerOffDel);
        }
    } else if (qNum === 7) {
        if (res === 2) {
            correct.style.display = "block";
            ques.style.display = "none";
            setTimeout(function() {correct.style.display = "none"}, answerOffDel);
            rollLock = 0
            quesEx();
        } else {
            incorrect.style.display = "block";
            setTimeout(function() {incorrect.style.display = "none"}, answerOffDel);
        }
    } else if (qNum === 8) {
        if (res === 2) {
            correct.style.display = "block";
            ques.style.display = "none";
            setTimeout(function() {correct.style.display = "none"}, answerOffDel);
            rollLock = 0
            quesEx();
        } else {
            incorrect.style.display = "block";
            setTimeout(function() {incorrect.style.display = "none"}, answerOffDel);
        }
    } else if (qNum === 9) {
        if (res === 3) {
            correct.style.display = "block";
            ques.style.display = "none";
            setTimeout(function() {correct.style.display = "none"}, answerOffDel);
            rollLock = 0
            quesEx();
        } else {
            incorrect.style.display = "block";
            setTimeout(function() {incorrect.style.display = "none"}, answerOffDel);
        }
    } else if (qNum === 10) {
        if (res === 1) {
            correct.style.display = "block";
            ques.style.display = "none";
            setTimeout(function() {correct.style.display = "none"}, answerOffDel);
            rollLock = 0
            quesEx();
        } else {
            incorrect.style.display = "block";
            setTimeout(function() {incorrect.style.display = "none"}, answerOffDel);
        }
    } else if (qNum === 11) {
        if (res === 2) {
            correct.style.display = "block";
            ques.style.display = "none";
            setTimeout(function() {correct.style.display = "none"}, answerOffDel);
            rollLock = 0
            quesEx();
        } else {
            incorrect.style.display = "block";
            setTimeout(function() {incorrect.style.display = "none"}, answerOffDel);
        }
    } else if (qNum === 12) {
        if (res === 2) {
            correct.style.display = "block";
            ques.style.display = "none";
            setTimeout(function() {correct.style.display = "none"}, answerOffDel);
            rollLock = 0
            quesEx();
        } else {
            incorrect.style.display = "block";
            setTimeout(function() {incorrect.style.display = "none"}, answerOffDel);
        }
    } else if (qNum === 13) {
        if (res === 4) {
            correct.style.display = "block";
            ques.style.display = "none";
            setTimeout(function() {correct.style.display = "none"}, answerOffDel);
            rollLock = 0
            quesEx();
        } else {
            incorrect.style.display = "block";
            setTimeout(function() {incorrect.style.display = "none"}, answerOffDel);
        }
    }
}

function quesEx() {
    let another = document.getElementById("another")
    if (quesExtra === 1) {
        rollLock = 1
        another.style.display = "block";
        setTimeout(function() {
            another.style.display = "none";
            quesSlt();
        }, answerOffDel);
        quesExtra = 0;
    }
}

function end() {
    if (seenAll != 1) {
        let length = quesDone.length;
        for (let l = 0; l < length; l++) {
            document.getElementById(`ques${quesDone[0]}`).style.display = "block";
            quesDone.splice(0,1);
        }
    }
}

window.addEventListener("keydown", function(event) {
    if (event.which === 13) {
        roll();
    }
})
