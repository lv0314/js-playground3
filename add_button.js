console.log("button js");

// var test = document.getElementById("test");

// var menu = document.createElement("ul");

// var item1 = document.createElement("li");
// item1.innerHTML = "치킨";
// menu.appendChild(item1)

// var item2 = document.createElement("li");
// item2.innerHTML = "자장면";
// menu.appendChild(item2);

// test.appendChild(menu);

var readInput = function(){
    var input = document.getElementById("input1");
    console.log(input.value);
}

var btn1 = document.getElementById('btn1');
btn1.onclick = readInput;

var btn2 = document.createElement("button");
btn2.innerHTML = "버튼2";
btn2.onclick = readInput;

var test = document.getElementById('test2');
test.appendChild(btn2)