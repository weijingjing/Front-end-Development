import multiply from '../math/math.js';


//对象.函数 --把内容去出来赋给变量
var myHeading = document.querySelector('#hello_title');
//给这个变量赋值
//myHeading.innerHTML = '<p>Hello!</p>';
//將變量保存下來
var old = myHeading.innerHTML;
myHeading.innerHTML = old + '<p>Hello!</p>';




//自定义函数
var helloDiv = document.querySelector('#hello_div');
helloDiv.innerHTML = hello();

function hello() {
    return '<p>自定义函数hello　div</p>';
}

//乘法
var helloMuli = document.querySelector('#hello_muli');
var num1 = 1;
var num2 = 2;
helloMuli.innerHTML = num1 + '*' + num2 + '=' + display(num1, num2);
function display(num1, num2) {
    return num1 * num2;
};



//显示数字
document.getElementById("one").onclick = function () {
    var result = document.getElementById('result');
    result.innerHTML = result.innerHTML + '1';
};

document.getElementById("two").onclick = function () {
    var result = document.getElementById('result');
    result.innerHTML = result.innerHTML + '2';
};




//计算器

var inputArray = [];
//显示内容
function appendResult(content) {
    var result = document.getElementById('mul-result');
    result.innerHTML = result.innerHTML + content;
}
//清除内容
function clearResult() {
    var result = document.getElementById('mul-result');
    result.innerHTML = '';
    inputArray = [];
}
//点击按钮做处理
function buttonClickHandler(event) {
    var value = event.target.value;
    var number = Number(value);
    if (number) {
        inputArray.push(number);
    }
    appendResult(value);
}
//返回结果
function resultＣlickHandler(event) {
    buttonClickHandler(event);
    appendResult(display(inputArray[0], inputArray[1]));
}
//清除功能
function clearＣlickHandler(event) {
    buttonClickHandler(event);
    clearResult();
    inputArray = [];
}

//合并CREATE_BUTTON和CREATE_FUNCTION_BUTTON: V0.1.34 函数参数默认值
function create_button(parentNode, id, value, cd = buttonClickHandler) {
    var element = document.createElement("input");
    document.createElement("input");
    element.setAttribute("type", "button");
    element.setAttribute("id", id);
    element.setAttribute("value", value);
    element.onclick = cd;
    parentNode.appendChild(element);
    return element;
}


//创建元素
var map = {
    "mul-1": "1",
    "mul-2": "2",
    "mul-3": "3",
    "mul-4": "4",
    "mul-5": "5",
    "mul-6": "6",
    "mul-7": "7",
    "mul-8": "8",
    "mul-9": "9",
    "mul-0": "0",
    "mul-*": "*",
    "mul-=": "=",
    "clear": "清除"
};

//分行展示
for (var element_key in map) {
    var parentNode;
    if (["mul-1", "mul-2", "mul-3", "mul-4", "mul-5"].includes(element_key)) {
        parentNode = document.getElementById('number-pad-r1');
    }
    else if (["mul-6", "mul-7", "mul-8", "mul-9", "mul-0"].includes(element_key)) {
        parentNode = document.getElementById('number-pad-r2');
    }
    else {
        parentNode = document.getElementById('number-pad-r3');
    }
    create_button(parentNode, element_key, map[element_key]);
}

var parentNode = document.getElementById('number-pad-r3');
document.getElementById('mul-=').onclick = resultＣlickHandler;
document.getElementById('clear').onclick = clearＣlickHandler;



/*
作业：
数字按钮分两行: V0.1.32  pass

JS 创建“=”和“清除”按钮: V0.1.33   pass

合并CREATE_BUTTON和CREATE_FUNCTION_BUTTON: V0.1.34
函数参数默认值

*/



function creaeItems() {
    const root = node;
    root.innerHTML = '<div id="hello_title"><h2>Hello 标题</h2></div>'
        + '<h1>自定义函数</h1><div id="hello_div"><h2>Hello DIV</h2></div>'
        + '<h1>自定义函数乘法</h1><div id="hello_mul"></div>'
        + '<h1>答案</h1><div id="hello_muli"></div>'
        + '<h1>点击按钮，显示数字</h1>< div id= "multiplier1" ><input type="button" id="one" value="1"><input type="button" id="two" value="2"><div id="result"></div></div>'
        + '<h1>简单计算器</h1><div id="multiplier"><div id="mul-result"></div><div id="number-pad-r1"></div><div id="number-pad-r2"></div>'
        + '<div id="number-pad-r3"></div></div>';
    return root;
}
document.body.appendChild(basic());