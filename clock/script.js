let turn=new Audio('ting.mp3');
setInterval(()=>{
d=new Date;
htime=d.getHours();
mtime=d.getMinutes();
stime=d.getSeconds();
turn.play();
hrotation=30*htime + mtime/2;

mrotation=6*mtime;
srotation=6*stime;
hour.style.transform=`rotate(${hrotation}deg)`
min.style.transform=`rotate(${mrotation}deg)`
sec.style.transform=`rotate(${srotation}deg)`
console.log(hrotation,mrotation,srotation)


},1000);