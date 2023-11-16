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
        return "You gave up! But kept your life in the process! GAME OVER. Final Score: "
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
const bob = Math.floor(Math.random() * 4) + 3
const USSAssembly = new PlayerShip(40, 5, .7)
const alienVessel = new EnemyShip()

const atkBtn = document.getElementById("atk__btn");
const fleeBtn = document.getElementById("flee__btn");

//atkBtn.addEventListener('click', () => {return 'click'});

function battle(Player, Enemy) {
    while (Player.hull > 0 || Enemy.hull > 0){
        Player.attack(Enemy);
        console.log(`alien has ${Enemy.hull} Your hull is ${Player.hull}`)
        if(Enemy.hull >= 1) {
            Enemy.attack(Player);
        } 
        if(Enemy.hull <= 0) {
            console.log('Enemy ships destroyed!')
            break;
        }

        if(Player.hull <= 0) {
            console.log('Your ship has been destroyed! Try again?')
            console.log(`alien has ${Enemy.hull} Your hull is ${Player.hull}`)
            break;
        }
    }
}
atkBtn.addEventListener("click" , (e) => {
    battle(USSAssembly, alienVessel);
    })
//fleeBtn.addEventListener("click", flee());




// console.log(USSAssembly)

// console.log(alienVessel)
// console.log(alienVessel.hull);


