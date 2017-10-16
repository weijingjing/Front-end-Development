//定义参数
var results="";//全局变量
var results2="";
var calresults="";
var lastkey="";
var flg=1;
//正则表达式
var re1=/^[\*|\/].+/;//*+
var re2=/.+[\*|\/]$/;//+*
var re3=/(\+|-|\*|\/)/;
var re4=/.+[\+|-|\*|\/]{1,99}.+/
var re5=/\d.+/;

//获取单元格上的内容 results就是单元格的内容
function calculater () {
    //点击=的时候，函数得不到任何结果
    if (event.srcElement.innerText=="=") {
        return;
    }
    //c键的清楚功能
    if (event.srcElement.innerText=="c") {
        results="";
        //display是第一个单元格的id--在第一行显示你点击的内容
        display.innerText="0";
        return;
    }
    if (event.srcElement.id=="display") {
       return;
     }
    
    if (results.match(re1)) {
     display.innerText="输入错误";
     results="";
     return;
  }
  //如果多次输入代码会自动取消--多运算符号优化处理
    if(lastkey.match(re3)&&event.srcElement.innerText.match(re3)){
        return;
    }
    //检测在输入的键是不是运算符号
    if(lastkey=="="&&event.srcElement.innerText.match(re3)){
       results=calresults;
    }
    //相反数要求的功能
    if (event.srcElement.innerText=="+/-"&&results!="") {
        if (flg==-1) {
            //强制类型转换
           results=String(results2);
           display.innerText=results;
           flg=-flg;
           return;
        }
           results2=results;
           results = "-"+"("+results+")";
           flg=-flg;
           display.innerText=results;
        return;  
    }
   
   results+=event.srcElement.innerText;
   lastkey=event.srcElement.innerText;
   display.innerText=results;
      }
//如果输入re1 re2的话提示错误
function resultscalcaulte(){
     if (results.match(re1)||results.match(re2)) {
     display.innerText="输入错误";
     results="";
     return;
  }
  //运行括号里的字符串并返回results
  calresults=eval(results);
  display.innerText=calresults;
  lastkey="=";
  results="";
}