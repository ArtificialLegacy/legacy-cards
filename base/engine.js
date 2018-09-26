class Engine() {
  constructor(tempDeck0, tempDeck1){
    this.phase = "start";
    this.chainAct = false;
    this.field1 = {
      "deck": tempDeck0,
      "hand": [],
      "grave": [],
      "resources": {
        "mana": 0,
        "gold": 0,
        "food": 0,
      },
      "creature": {
        "1": {},
        "2": {},
        "3": {},
        "4": {},
        "5": {},
      },
      "rune": {
        "1": {},
        "2": {},
        "3": {},
        "4": {},
      },
      "equipment": {
        "1": {},
        "2": {},
        "3": {},
        "4": {},
      },
      "mixed": {
        "1": {},
        "2": {},
      },
    };
    this.field2 = {
      "deck": tempDeck1,
      "hand": [],
      "grave": [],
      "resources": {
        "mana": 0,
        "gold": 0,
        "food": 0,
      },
      "creature": {
        "1": {},
        "2": {},
        "3": {},
        "4": {},
        "5": {},
      },
      "rune": {
        "1": {},
        "2": {},
        "3": {},
        "4": {},
      },
      "equipment": {
        "1": {},
        "2": {},
        "3": {},
        "4": {},
      },
      "mixed": {
        "1": {},
        "2": {},
      },
    };
  }
}

export default Engine;
