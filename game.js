const c = document.getElementById("gameCanvas");
const ctx = c.getContext("2d");
c.width = innerWidth;
c.height = innerHeight;
let x = 50, y = 50, speed = 4;
document.addEventListener("keydown", e=>{
 if(e.key==="ArrowRight") x+=speed;
 if(e.key==="ArrowLeft") x-=speed;
 if(e.key==="ArrowUp") y-=speed;
 if(e.key==="ArrowDown") y+=speed;
});
function loop(){
 ctx.fillStyle="black"; ctx.fillRect(0,0,c.width,c.height);
 ctx.fillStyle="white"; ctx.beginPath(); ctx.arc(x,y,20,0,Math.PI*2); ctx.fill();
 requestAnimationFrame(loop);
}
loop();