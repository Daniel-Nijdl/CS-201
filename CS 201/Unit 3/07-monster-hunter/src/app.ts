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
    public habitat: string = "",
    public defensives: string[] = [],
  ) {
    this.init()
  }
  public static monsterNames: string[] = [];
  public static monsterStats: [string, [string, string], number, string[], string[], string];

  logMonster() { 
    console.log(
      `Name: ${this.name} | Location: ${this.location} | Rating: ${this.challengeRating} | Weaknesses: ${this.weaknesses} | Strengths: ${this.strengths} | Ability: ${this.ability} `
    );
  }

  init(){
    // allMonsters.monsterNames.push(this.name)
    Monster.monsterNames.push(this.name)
    Monster.monsterStats.push(this.name, this.location, this.challengeRating, this.weaknesses, this.strengths, this.ability)
  }

  //TODO monsterInit(){}
}

// console.log(monsterNames);


class allMonsters{
  constructor(){
  }
  static logAllNames(){
    // this.monsterNames.push(Monster.name)
    Monster.monsterNames.sort()
    console.log(Monster.monsterNames);
  }
  static logMonsterStats(){
    console.log(Monster.monsterStats);
  }
}

allMonsters.logAllNames()
allMonsters.logMonsterStats()

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
  constructor(public type: string, public signs: Signs[], name: string, challengeRating: number, location: [string, string], public weaknesses: string[]) {
    super(name, location, challengeRating, weaknesses, ["Phase Through Walls", "Invisibility"], "Can possess people");
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
  constructor(public habitat: string, public defensives: string[], name: string, challengeRating: number, location: [string, string], public weaknesses: string[]) {
    super(name, location, challengeRating, weaknesses, ["Jump", "Strength"], "Immune to Non-Silver Bullets");
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
  constructor(public humanness: number, public compliance: ComplianceStatus, name: string, challengeRating: number, location: [string, string], public weaknesses: string[]) {
    super(name, location, challengeRating, weaknesses, ["Super Strength", "Super Speed"], "Can Look like humans");
  }
  updateHumanness(humanness: number) {
    return humanness;
  }
  updateCompliance(compliance: ComplianceStatus) {
    return compliance;
  }
}





//! Beasts

const Jimmy = new Beast("desert", ["heat resistance", "extra strength", "night vision"], "Werewolf", 7, ["46°45’59.9976”N", "23°45’59.9952”E"], ["silver bullets"])
console.log(Jimmy);

const Timmy = new Beast("forest", ["bug repelant", "extra jump", "night vision"], "Zombie", 3, ["46°45’59.9976”N", "23°45’59.9952”E"], ["Axe", "Fire"])
console.log(Timmy);

const Tommy = new Beast("tundra", ["cold resistance", "extra thick skin", "night vision"], "Hydra", 10, ["32°15’59.9436”N", "33°25’39.9952”E"], ["Silver Sword"])
console.log(Tommy);

//! Ghosts

const Jammy = new Ghost("Banshee", [Signs.FingerPrints], "Banshee", 5, ["41°42’02.7”N", "75°52’00.2”W"], ["Salt", "Cross", "Light"])
console.log(Jammy);

const Tammy = new Ghost("Demon", [Signs.GhostOrb], "Demon", 3, ["20°43’01.7”N", "35°42’01.52”W"], ["Salt", "Light"])
console.log(Tammy);


const Lammy = new Ghost("Figure", [Signs.EMF], "Figure",1, ["20°42’02.7”N", "55°23’00.23”W"], ["Silver Bullets"])
console.log(Lammy);


//! Humanoids

const Jummy = new Humanoid(8, ComplianceStatus.Hostile, "Giant", 10, ["40°42’02.7”N", "75°52’00.2”W"], ["Unknown"])
console.log(Jummy);

const Lummy = new Humanoid(8, ComplianceStatus.Ally, "Fairy", 1, ["62°32’02.2”S", "22°42’1.6”E"], ["Fire", "Water"])
console.log(Lummy);

const Dummy = new Humanoid(4, ComplianceStatus.Neutral, "Nix", 2, ["89°88’02.8”S", "34°43’1.1”E"], ["Fire"])
console.log(Dummy);


