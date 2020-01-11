var img = document.createElement("img");
img.setAttribute("src","./img/1.jpg");
img.setAttribute("height","100%");
img.setAttribute("width", "100%");
var div = document.querySelector("div");

var button = document.querySelector("button");
function changeImg(){
    var ab = "./img/";
    var ac = ".jpg";
    var num = Math.floor(Math.random()*10);
    var fin = ab+num+ac;
    console.log(fin);
    img.setAttribute("src",fin);
    img.setAttribute("height","100%");
    img.setAttribute("width", "100%");
}
div.appendChild(img);
button.addEventListener("click",changeImg)

var span = document.querySelectorAll("span")[0];
var today = new Date();
var date = today.getFullYear()+ "-" + (today.getMonth()+1) + "-" +(today.getDate());
span.innerHTML = date;

var span2 = document.querySelectorAll("span")[1];
var time = today.getHours()+ ":"+ today.getMinutes();
span2.innerHTML = time;

function finds(){
    var postyear = document.querySelector("#year");
    var postmonth = document.querySelector("#month");
    var postdate = document.querySelector("#date");
    var curyear = today.getFullYear();
    
    var curmonth = today.getMonth()+1;
    var curdate = today.getDate();
    var deltayear = (postyear.value - curyear);
    var deltamonth = postmonth.value-curmonth;
    var deltaday = postdate.value-curdate;
    var finalp = document.querySelector("#calculateddue");
    finalp.innerHTML = "Presently you have "+deltayear+" year, "+deltamonth+" months "+" and "+deltaday+" days left.";
}
var getduetime = document.querySelector("#timesubmit");
getduetime.addEventListener("click",finds);
