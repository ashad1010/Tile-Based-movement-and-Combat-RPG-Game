//Defining all our global variables pointing to the different DIVs we need reference to
var bottomRow = document.getElementById('bottomRow');
var stats = document.getElementsByClassName('stats');
var Player1Stats = document.getElementById('Player1Stats');
var Player1Health = document.getElementById('Player1Health');
var CPUHP = document.getElementById('CPUHP');
var Player1Moves = document.getElementById('Player1Moves');
var attack = document.getElementById('attack');

//Define health variables
var Player1HP = 100;
var CPUHealth = 100;

function beginBattle(){
	bottomRow.innerHTML = "Attack by clicking the button above.";
	for (var x=0; x<stats.length; x++){
		stats[x].style.visibility = "visible";
	}
	
}

function CPUAttack(){
	enemyAttack.innerHTML = '<img src="CPUBlast.png">';
	var attackChoice = Math.ceil(Math.random()*3);
	if (attackChoice == 1){
		var hitChance = Math.round(Math.random()*10);
		if (hitChance <=7){
			var dmg = Math.round(Math.random()*10)+10;
			Player1HP -= dmg;
			if (Player1HP < 0){
				Player1HP = 0;
			}
			bottomRow.innerHTML += "<br>The Battle Boss hit with you a basic Blast, doing " + dmg + " damage. You now have " + Player1HP + "hp.";
			var Player1HPBarWidth = (Player1HP/100)*300;
			Player1Health.style.width = Player1HPBarWidth + "px";
		} else {
			bottomRow.innerHTML += "<br>The CPU missed!";
		}
	} else if (attackChoice == 2){
		var hitChance = Math.round(Math.random()*10);
		if (hitChance <=5){
			var dmg = Math.round(Math.random()*15)+15;
			Player1HP -= dmg;
			if (Player1HP < 0){
				Player1HP = 0;
			}
			bottomRow.innerHTML += "<br>The Battle Boss hit with you a basic Blast, doing " + dmg + " damage. You now have " + Player1HP + "hp.";
			var Player1HPBarWidth = (Player1HP/100)*300;
			Player1Health.style.width = Player1HPBarWidth + "px";
		} else {
			bottomRow.innerHTML += "<br>The CPU missed!";
		}
	} else {
		var hitChance = Math.round(Math.random()*10);
		if (hitChance <=3){
			var dmg = Math.round(Math.random()*20)+20;
			Player1HP -= dmg;
			if (Player1HP < 0){
				Player1HP = 0;
			}
			bottomRow.innerHTML += "<br>The Battle Boss hit with you a basic Blast, doing " + dmg + " damage. You now have " + Player1HP + "hp.";
			var Player1HPBarWidth = (Player1HP/100)*300;
			Player1Health.style.width = Player1HPBarWidth + "px";
		} else {
			bottomRow.innerHTML += "<br>The Battle Boss missed!";
		}
	}
	if (Player1HP == 0){
		bottomRow.innerHTML += "<br>Battle Boss has defeated you!<br><button onclick='restartGame()'>Play Again?</button>";
		Player1Moves.style.visibility = "hidden";
	}

}

function blast(){
	attack.innerHTML = '<img src="https://picfiles.alphacoders.com/156/156382.png" class="blast">';
	setTimeout(function() { attack.innerHTML= ""; }, 500);
	var hitChance = Math.round(Math.random()*10);
	if (hitChance <=7){
		var dmg = Math.round(Math.random()*10)+10;
		CPUHealth -= dmg;
		if (CPUHealth < 0){
			CPUHealth = 0;
		}
		bottomRow.innerHTML = "You hit Battle Boss with your blast, doing " + dmg + " damage. The CPU now has " + CPUHealth + "hp.";
		var CPUHPBarWidth = (CPUHealth/100)*300;
		CPUHP.style.width = CPUHPBarWidth + "px";
	} else {
		bottomRow.innerHTML = "You missed!";
	}
	if (CPUHealth == 0){
		bottomRow.innerHTML += "<br>You have successfully defeated the Boss!<br><button onclick='restartGame()'>Play Again?</button>";
		Player1Moves.style.visibility = "hidden";
	} else {
		CPUAttack()
	}
}

function restartGame(){
	CPUHealth = 100;
	Player1HP = 100;
	var Player1HPBarWidth = (Player1HP/100)*300;
	Player1Health.style.width = Player1HPBarWidth + "px";
	var CPUHPBarWidth = (CPUHealth/100)*300;
	CPUHP.style.width = CPUHPBarWidth + "px";
	Player1Moves.style.visibility = "visible";
	beginBattle();
}
