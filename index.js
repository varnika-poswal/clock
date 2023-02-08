setInterval(()=>{
d=new Date();
htime=d.getHours();
mtime=d.getMinutes();
Stime=d.getSeconds();
hrotation = 30*htime + mtime/2;
mrotation = 6*mtime;
Srotation = 6*Stime;

hour.style.transform=`rotate(${hrotation}deg)`;
minute.style.transform=`rotate(${mrotation}deg)`;
Second.style.transform=`rotate(${Srotation}deg)`;
},1000);