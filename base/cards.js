class Cards {
  constructor(tempName, tempType, tempDescription, tempHealth=null, tempDamage=null){
    this.name = tempName;
    this.type = tempType;
    this.description = tempDescription;
    this.health = tempHealth;
    this.damage = tempDamage;
  }
}

export default Cards;
