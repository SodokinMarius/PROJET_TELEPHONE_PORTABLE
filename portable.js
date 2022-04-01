function displayTime()
{
var dat=new Date();
hour=dat.getHours();
minuites=dat.getMinutes();
seconds=dat.getSeconds();

/*if (hour.toString().length()==1)
    hour='0'+hour
if (minuites.toString().length()==1)
    minuites='0'+minuites
if (seconds.toString().length()==1)
    seconds='0'+seconds */
document.getElementById("timer").innerHTML=hour+":"+minuites+":"+seconds
setTimeout('displayTime()',1000);
}
displayTime()
