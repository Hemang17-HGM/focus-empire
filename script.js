let coins =
Number(localStorage.getItem("coins")) || 0;


let income =
Number(localStorage.getItem("income")) || 1;


let level =
Number(localStorage.getItem("level")) || 1;


let upgradeLevel =
Number(localStorage.getItem("upgrade")) || 0;


let cost =
Number(localStorage.getItem("cost")) || 100;



function save(){

localStorage.setItem("coins",coins);

localStorage.setItem("income",income);

localStorage.setItem("level",level);

localStorage.setItem("upgrade",upgradeLevel);

localStorage.setItem("cost",cost);

}



function update(){


document.getElementById("coins").innerHTML=
Math.floor(coins);


document.getElementById("income").innerHTML=
income;


document.getElementById("level").innerHTML=
level;


document.getElementById("upgradeLevel").innerHTML=
upgradeLevel;


document.getElementById("cost").innerHTML=
cost;


save();


}



function collectCoins(){

coins += 10;

update();

}



function upgrade(){


if(coins >= cost){


coins -= cost;


income += 1;


upgradeLevel++;


cost = cost * 2;


}


update();


}



setInterval(()=>{


coins += income;


if(coins >= level*1000){

level++;

}


update();


},1000);



update();
