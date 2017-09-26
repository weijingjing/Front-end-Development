//对象.函数 --把内容去出来赋给变量
var myHeading = document.querySelector('#hello_title');
//给这个变量赋值
//myHeading.innerHTML = '<p>Hello!</p>';
//將變量保存下來
var old = myHeading.innerHTML;
myHeading.innerHTML = old+'<p>Hello!</p>';




//自定义函数
var helloDiv = document.querySelector('#hello_div');
helloDiv.innerHTML = hello();

function hello(){
    return '<p>自定义函数hello　div</p>';
}

//乘法
var helloMuli = document.querySelector('#hello_muli');
var num1 = 1;
var num2 = 2;
helloMuli.innerHTML = num1 + '*' + num2 + '=' + display(num1,num2);
function display(num1,num2){
    return num1*num2;
};



//显示数字
document.getElementById("one").onclick = function(){
    var result = document.getElementById('result');
    result.innerHTML = result.innerHTML + '1';
};

document.getElementById("two").onclick = function(){
    var result = document.getElementById('result');
    result.innerHTML = result.innerHTML + '2';
};




//计算器

var inputArray = [];
//显示内容
function appendResult(content){
   var result = document.getElementById('mul-result');
   result.innerHTML = result.innerHTML + content;
}
//清除内容
function clearResult(){
    var result = document.getElementById('mul-result');
    result.innerHTML = '';
    inputArray = [ ];
 }
//点击按钮做处理
function buttonClickHandler(event){
    var value = event.target.value;
    var number = Number(value);
    if( number ){
        inputArray.push(number);
    }
    appendResult(value);
}
//返回结果
function resultＣlickHandler(event){
    buttonClickHandler(event);
    appendResult(display(inputArray[0],inputArray[1]));
}
//清除功能
function clearＣlickHandler(event){
    buttonClickHandler(event);
    clearResult();
}

//创建元素
var map = {
    "mul-1":"1",
    "mul-2":"2",
    "mul-3":"3",
    "mul-4":"4",
    "mul-5":"5",
    "mul-6":"6",
    "mul-7":"7",
    "mul-8":"8",
    "mul-9":"9",
    "mul-0":"0",
    "mul-*":"*",
    "mul-/":"/",
    "mul-+":"+",
    "mul--":"-",
    "mul-=":"=",
    "clear":"清除"
};


for(var element_key in map){
    create_button(element_key,map[element_key]);
    function create_button(id,value){
        var element = document.createElement("input");
        document.createElement("input");
        element.setAttribute("type","button");
        element.setAttribute("id",id);
        element.setAttribute("value",value);
        element.onclick = buttonClickHandler;
        document.getElementById("number-pad-r1").appendChild(element);
        return element;
    }
}


document.getElementById('mul-=').onclick = resultＣlickHandler;
document.getElementById('clear').onclick = clearＣlickHandler;



/*
作业：

JS 创建“=”和“清除”按钮: V0.1.33   pass

合并CREATE_BUTTON和CREATE_FUNCTION_BUTTON: V0.1.34
函数参数默认值



*/
