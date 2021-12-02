var display = document.getElementById("display");
var displayContent = "";
var ans;

//-GUI 동적 구현
//화면에 출력
function showDis(){
    display.innerHTML = displayContent;
}

//버튼 만들기
function createBtn(){
    var btn = document.createElement("button");
    return btn;
}

//첫 번째 줄
function createLine1(){
    var line1 = document.getElementById("line1");
    for(i = 7; i <=9; i++){
        var btnLine1 = createBtn();
        btnLine1.setAttribute("id", i)
        btnLine1.setAttribute("class", "nums");
        btnLine1.innerHTML = i;
        line1.appendChild(btnLine1);
    }
    var btnDiv = createBtn();
    btnDiv.setAttribute("id", "div");
    btnDiv.setAttribute("class", "ops");
    btnDiv.innerHTML = " / ";
    line1.appendChild(btnDiv);
}
//두 번째 줄
function createLine2(){
    var line2 = document.getElementById("line2");
    for(i = 4; i <=6; i++){
        var btnLine2 = createBtn();
        btnLine2.setAttribute("id", i)
        btnLine2.setAttribute("class", "nums");
        btnLine2.innerHTML = i;
        line2.appendChild(btnLine2);
    }
    var btnMul = createBtn();
    btnMul.setAttribute("id", "mul");
    btnMul.setAttribute("class", "ops");
    btnMul.innerHTML = " * ";
    line2.appendChild(btnMul);
}
//세 번째 줄
function createLine3(){
    var line3 = document.getElementById("line3");
    for(i = 1; i <=3; i++){
        var btnLine3 = createBtn();
        btnLine3.setAttribute("id", i)
        btnLine3.setAttribute("class", "nums");
        btnLine3.innerHTML = i;
        line3.appendChild(btnLine3);
    }
    var btnSub = createBtn();
    btnSub.setAttribute("id", "sub");
    btnSub.setAttribute("class", "ops");
    btnSub.innerHTML = " - ";
    line3.appendChild(btnSub);
}
//네 번째 줄
function createLine4(){
    var line3 = document.getElementById("line3");

    var btnDel = createBtn();
    btnDel.setAttribute("id", "del");
    btnDel.innerHTML = "←";
    line4.appendChild(btnDel);

    var btnZero = createBtn();
    btnZero.setAttribute("id", "0");
    btnZero.setAttribute("class", "nums");
    btnZero.innerHTML = "0";
    line4.appendChild(btnZero);

    var btnEq = createBtn();
    btnEq.setAttribute("id", "eq");
    btnEq.innerHTML = "=";
    line4.appendChild(btnEq);

    var btnPlus = createBtn();
    btnPlus.setAttribute("id", "plus");
    btnPlus.setAttribute("class", "ops");
    btnPlus.innerHTML = " + ";
    line4.appendChild(btnPlus);
}

//전체 버튼 만들기
function createBtns(){
    createLine1();
    createLine2();
    createLine3();
    createLine4();
}

//-기능 구현
//숫자 기호 클릭 시
function target(){
    displayContent += this.innerHTML;
    showDis();
}

//버튼누르면 작동
function addClick(){
    var nums = document.getElementsByClassName("nums");
    for(var i = 0; i < nums.length; i++){
        nums[i].addEventListener("click", target);
    }
    var ops = document.getElementsByClassName("ops");
    for(var i = 0; i < ops.length; i++){
        ops[i].addEventListener("click", target);
    }
}

//식 잘라서 배열로 만들기
function getFormula(){
    var formula = displayContent.split(" ");
    return formula;
}

//사칙연산
function _4chic(b, c){
    var num = Number(c)
    if(b === '+'){
        ans += num;
    } else if(b === '-'){
        ans -= num;
    } else if(b === '*'){
        ans *= num;
    } else if(b === '/'){
        ans /= num;
        ans = Math.floor(ans);
    } 
}

//식 계산
function calcFormula(arr){
    ans = Number(arr[0]);
    for(var i = 1; i < arr.length; i++){
        if(i % 2 != 0){
            _4chic(arr[i], arr[i+1]);  
        } else{
            continue;
        } 
    }
}

//답 출력
function showAns(){
    display.innerHTML = ans;
}

//초기화
function _init(){
    displayContent = "";
    ans = [];
}

//결과 실행
function calc(){
    calcFormula(getFormula());
    showAns();
    _init();
}

//=에 기능 추가
function addEq(){
    var eq = document.getElementById("eq");
    eq.addEventListener("click", calc)
}

//del 기능 구현
function delOp(){
    displayContent = displayContent.slice(0, -1);
    showDis();
}
//del에 기능 추가
function addDel(){
    var del = document.getElementById("del");
    del.addEventListener("click", delOp)
}

//실행 함수
function main(){
    createBtns();
    addClick();
    addEq();
    addDel();
}

main();