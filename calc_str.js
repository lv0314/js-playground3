var input = document.getElementById("input");
var btn = document.getElementById("btn");
var p = document.getElementById('p1');
var nums = [];
var ans;

//입력값 가져오기
function getValue(){
    return input.value;
}

//잘라서 배열로 만들기
function getFormula(val){
    var formula = val.split(" ");
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

//계산
function calc(arr){
    ans = Number(arr[0]);
    for(var i = 1; i < arr.length; i++){
        if(i % 2 != 0){
            _4chic(arr[i], arr[i+1]);  
        } else{
            continue;
        } 
    }
}

//화면에 출력
function showAns(){
    p.innerHTML = "답 : " + ans;
}

//조립
function main() {
    calc(getFormula(getValue()));
    showAns();
}

btn.onclick = main;