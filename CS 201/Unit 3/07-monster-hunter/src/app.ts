// This should hold important information like
//// name,
//// location (lat and lon coords),
//// challenge rating,  ( 1 to 10 )
//// Weaknesses
//// 2 more things that you can think of
//// An abstract method to log the name of the monster and a easy to read format of all their stats
//An init method that when a monster is created (initialized) their name and stats are added to a static class (see part 5)

//! Monster Class

abstract class Monster {
  constructor(
    public name: string = "",
    public location: [string, string] = ["", ""],
    public challengeRating: number = 0,
    public weaknesses: string[] = [],
    public strengths: string[] = [],
    public ability: string = "",
  ) {
    // this.init()
  }

  logMonster() { 
    console.log(
      `Name: ${this.name} | Location: ${this.location} | Rating: ${this.challengeRating} | Weaknesses: ${this.weaknesses} | Strengths: ${this.strengths} | Ability: ${this.ability} `
    );
  }

  // init(){
  //   allMonsters.monsterNames.push(this.name)
  // }

  //TODO monsterInit(){}
}

function Autobind(_: any, _2: any, desc: PropertyDescriptor) {
  const originalMethod = desc.value;
  const newMethod: PropertyDescriptor = {
    get() {
      return originalMethod.bind(this);
    },
  };

  return newMethod;
}

enum Signs {
  "DOTS_Projector" = "Dots Projector",
  "EMF" = "EMF",
  "FingerPrints" = "Finger Prints",
  "GhostOrb" = "Ghost Orb",
}

//! Ghost Class

// enum Types {
//   "Banshee" = "banshee"
// }

class Ghost extends Monster {
  monsters: Monster[] = [];
  private static instance: Ghost;
  constructor(public type: string, public signs: Signs[]) {
    super();
  }
  static logMonster() {
    if (this.instance) {
      return this.instance;
      // console.log(this.instance);
    }
    return this.instance;
    // console.log(this.instance);
  }
  addSign(sign: string) {
    if (sign === "finger prints") {
      this.signs.push(Signs.FingerPrints);
    } else if (sign === "EMF") {
      this.signs.push(Signs.EMF);
    } else if (sign === "DOTS_Projector"){
      this.signs.push(Signs.DOTS_Projector)
    } else if (sign === "GhostOrb"){
      this.signs.push(Signs.GhostOrb)
    }
  }
  updateGhost(type: string) {
    this.type = type
  }
}

class Beast extends Monster {
  monsters: Monster[] = [];
  // private static instance: Beast;
  constructor(public habitat: string, public defensives: string[]) {
    super("Bigfoot", ["40°42’02.7”N", "75°52’00.2”W"], 5, ["silver bullets", "Axe", "Fire"], ["Jump", "Strength"], "Immune to Non-Silver Bullets");
  }
  addDefensives(defensive: string) {
    this.defensives.push(defensive);
  }
  addHabitat(habitat: string) {
     this.habitat = habitat
  }
}

enum ComplianceStatus {
  Hostile = "hostile",
  Unfriendly = "unfriendly",
  Neutral = "neutral",
  Friendly = "friendly",
  Ally = "ally",
}

class Humanoid extends Monster {
  monsters: Monster[] = [];
  // private static instance: Humanoid;
  constructor(public humanness: number, public compliance: ComplianceStatus) {
    super();
  }
  updateHumanness(humanness: number) {
    return humanness;
  }
  updateCompliance(compliance: ComplianceStatus) {
    return compliance;
  }
}

class allMonsters{
  constructor(public monsterNames: string[], public monsterStats: []){
  }
  logAllNames(){
    this.monsterNames.push(Monster.name)
    this.monsterNames.sort()
    console.log(this.monsterNames);
  }
  // logMonsterStats(){
  //   this.monsterStats.push()
  // }
}

//! Beasts

const Jimmy = new Beast("desert", ["heat resistance", "extra strength", "night vision"])
console.log(Jimmy);

const Timmy = new Beast("forest", ["bug repelant", "extra jump", "night vision"])
console.log(Timmy);

const Tommy = new Beast("tundra", ["cold resistance", "extra thick skin", "night vision"])
console.log(Tommy);

//! Ghosts


