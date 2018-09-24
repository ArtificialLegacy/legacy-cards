class Cards {
  constructor(tempName, tempType, tempDescription, tempHealth=null, tempDamage=null, tempAbility=()=>{}){
    this.name = tempName;
    this.type = tempType;
    this.description = tempDescription;
    this.health = tempHealth;
    this.damage = tempDamage;
    this.ability = tempAbility;
  }
  use(){
    this.ability();
  }
}

export default Cards;
