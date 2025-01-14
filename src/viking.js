// Soldier
class Soldier {
  constructor(health, strength){
    this.health = health
    this.strength = strength
  }
  attack() {
    return this.strength
  }
  receiveDamage(damage) {
    this.health = this.health - damage
  }
} 

// Viking
class Viking extends Soldier{
  constructor(name, health, strength){
    super(health, strength)
    this.name = name
  }
  receiveDamage(damage) {
    this.health = this.health - damage
    if (this.health > 0) {
      return `${this.name} has received ${damage} points of damage`
    }
    if (this.health <= 0) {
      return `${this.name} has died in act of combat`
    }
  }
  battleCry() {
    return "Odin Owns You All!"
  }
}

// Saxon
class Saxon extends Soldier{
    receiveDamage(damage) {
      this.health = this.health - damage
      if (this.health > 0) {
        return `A Saxon has received ${damage} points of damage`
      }
      if (this.health <= 0) {
        return "A Saxon has died in combat"
      }
    }
  }


// War
class War {
  constructor () {
    this.vikingArmy = []
    this.saxonArmy = []
  }
  addViking(viking) {
    this.vikingArmy.push(viking)
  }
  addSaxon(saxon) {
    this.saxonArmy.push(saxon)
  }
  attack(attackerArmy, receiverArmy) {
    let receiverIndex = Math.floor(Math.random() * receiverArmy.length)
    let attackerIndex = Math.floor(Math.random() * attackerArmy.length)
    let receiver = receiverArmy[receiverIndex]
    let attacker = attackerArmy[attackerIndex]

    let damageResult = receiver.receiveDamage(attacker.strength)

    for (let i = 0; i < receiverArmy.length; i++) {
      if (receiverArmy[i].health <= 0) {
        receiverArmy.splice(i,1);
      }
    }
    return damageResult
  }
  vikingAttack() {
    return this.attack(this.vikingArmy, this.saxonArmy)
    /*let randomSaxonIndex = Math.floor(Math.random() * this.saxonArmy.length)
    let randomVikingIndex = Math.floor(Math.random() * this.vikingArmy.length)
    let randomViking = this.vikingArmy[randomVikingIndex]
    let randomSaxon = this.saxonArmy[randomSaxonIndex]

    this.attack(randomViking, randomSaxon)
    
    let damageResult = randomSaxon.receiveDamage(randomViking.strength)

      for (let i = 0; i < this.saxonArmy.length; i++) {
        if (this.saxonArmy[i].health <= 0) {
          this.saxonArmy.splice(i,1);
        }
      }
      return damageResult*/
  }
  saxonAttack() {
    return this.attack(this.saxonArmy, this.vikingArmy)
    /*let randomSaxonIndex = Math.floor(Math.random() * this.saxonArmy.length)
    let randomVikingIndex = Math.floor(Math.random() * this.vikingArmy.length)
    let randomViking = this.vikingArmy[randomVikingIndex]
    let randomSaxon = this.saxonArmy[randomSaxonIndex]
    
    let damageResult = randomViking.receiveDamage(randomSaxon.strength)

      for (let i = 0; i < this.vikingArmy.length; i++) {
        if (this.vikingArmy[i].health <= 0) {
          this.vikingArmy.splice(i,1)
        }
      }

      return damageResult;*/
  }
  showStatus() {
    if (this.saxonArmy.length === 0) {
      return "Vikings have won the war of the century!"
    }
    if (this.vikingArmy.length === 0) {
      return "Saxons have fought for their lives and survived another day..."
    }
    if (this.vikingArmy.length >= 1 && this.saxonArmy.length >= 1) {
        return "Vikings and Saxons are still in the thick of battle."
    }
  }
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
