class Ship {
    constructor(hull, firepower, accuracy) {
        this.hull = hull
        this.firepower = firepower
        this.accuracy = accuracy
        // this.attack = this.attack.bind(this);
    }
    //Include methods below
    attack(target) {
        if (Math.random() < this.accuracy) {
            target.hull -= this.firepower;
            return "Direct Hit!";
        }
        else {
            return "Too slow, Joe!";
        }
     }

     flee() {
        return "You gave up! But kept your life in the process! GAME OVER. Final Score: " + scoreTally(Player, enemyShips)
     }
}

class PlayerShip extends Ship {
    constructor(hull, firepower, accuracy) {
        super(hull, firepower, accuracy)
    }
}

class EnemyShip extends Ship { //Getting negative numbers needs adressing
    constructor() {
        super(Math.floor(Math.random() * 4) + 3, Math.floor(Math.random() * 2) + 2, (Math.floor(Math.random() * 3) + 6)/10)
    }
}

///Loop to create alien ships 
const enemyShips = []

for (let i = 0; i < 6; i++){
    let newAlienShip = new EnemyShip()
    enemyShips.push(newAlienShip)
}

console.log(enemyShips)

function scoreTally(Player, arr){
    let finalScore = 50
    if (Player.hull < 0){
        finalScore -= 20
    }else{
    let deduction = 20 - Player.hull
    finalScore -= deduction; 
    }
    if (arr.length > 0) {
        finalScore -= (arr.length * 5);
    }
    return finalScore;
}

function battle(Player, Enemy) {
    while (Player.hull > 0 && Enemy.hull > 0){
        Player.attack(Enemy);
        if (enemyShips.length > 0){
            console.log(`alien has ${Enemy.hull} Your hull is ${Player.hull}`)
            if(Enemy.hull >= 1) {
                Enemy.attack(Player);
            } 
        }
        if(Enemy.hull <= 0) {
            console.log('Enemy ship was destroyed!')
            enemyShips.shift();
        }

        if(Player.hull <= 0) {
            console.log('Your ship has been destroyed! Try again?')
            console.log("Final Score: " + scoreTally(Player, enemyShips))
            break;
        }

        if (enemyShips.length === 0){
            console.log("You WIN")
            console.log("Final Score: " + scoreTally(Player, enemyShips))
        }
    }
    console.log(enemyShips.length)
}

const USSAssembly = new PlayerShip(2, 5, .7)


///BUTTONS AND STYLES 
const atkBtn = document.getElementById("atk__btn");
const fleeBtn = document.getElementById("flee__btn");

atkBtn.addEventListener("click" , (e) => {
    battle(USSAssembly, enemyShips[0]);
    })
//fleeBtn.addEventListener("click", flee());




// console.log(USSAssembly)

// console.log(alienVessel)
// console.log(alienVessel.hull);