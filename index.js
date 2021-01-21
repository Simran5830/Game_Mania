cross=true;
score=0;
 audio=new Audio('music.mp3');

document.onkeydown=function(e){
    audio.play();
    // console.log(e.keyCode);
    if(e.keyCode==38)
    {
        dino=document.querySelector('.player');
        dino.classList.add('ani');
        setTimeout(() => {
            dino.classList.remove('ani')
        }, 700);
    }
    else if(e.keyCode==39)
    {
     player=document.querySelector('.player');
     x=parseInt(window.getComputedStyle(player,null).getPropertyValue('left'));
     player.style.left=x+132+"px";
    }

 else if(e.keyCode==37)
 {
player=document.querySelector('.player');
x=parseInt(window.getComputedStyle(player,null).getPropertyValue('left'));
player.style.left=x-112+"px";
 }
}



setInterval(()=> {                       //used for checking every 100s
dino=document.querySelector('.player');
x=parseFloat(window.getComputedStyle(dino,null).getPropertyValue('left'));
y=parseFloat(window.getComputedStyle(dino,null).getPropertyValue('top'));

obs=document.querySelector('.enemy');
ox=parseFloat(window.getComputedStyle(obs,null).getPropertyValue('left'));
oy=parseFloat(window.getComputedStyle(obs,null).getPropertyValue('top'));
move=document.querySelector('.movelinear');
offsetx=Math.abs(x-ox);
// console.log(offsetx);
offsety=Math.abs(y-oy);
// console.log(offsety);

if(offsetx<15)
{

   g=document.querySelector('.gameover');
   g.style.visibility='visible';
    obs.classList.remove('movelinear');
    dino.classList.remove('ani');
   
    player=document.querySelector('.player');
     x=parseInt(window.getComputedStyle(player,null).getPropertyValue('left'));
     player.style.left=x+"px";
 
    player=document.querySelector('.player');
    x=parseInt(window.getComputedStyle(player,null).getPropertyValue('left'));
    player.style.left=x+"px";
    audiout=new Audio('gameover.mp3');
    audiout.play();
    setTimeout(()=>{
    audio.pause();
    audiout.pause();
    score+=0;
},1000)
}


else if(offsetx<145 && cross)
{
    v=document.querySelector('.gameover');
    if(v.style.visibility!='visible')
    {
    score=score+5;
    document.querySelector('.game').innerHTML="Your score :" + score;
    cross=false;
    setTimeout(() =>{
        cross=true;
    },100);

    setTimeout(() => {
    s=parseFloat(window.getComputedStyle(obs,null).getPropertyValue('animation-duration'));
        console.log(s);
        newdur = s - 0.03;
        console.log(newdur);
        obs.style.animationDuration= newdur +'s';
    }, 500);
    }
}

} ,10);






