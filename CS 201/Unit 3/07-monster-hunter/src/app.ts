// This should hold important information like 
//// name, 
//// location (lat and lon coords), 
//// challenge rating,  ( 1 to 10 )
//// Weaknesses
//// 2 more things that you can think of
// An abstract method to log the name of the monster and a easy to read format of all their stats
// An abstract method to add a new monster 
// An init method that when a monster is created (initialized) their name and stats are added to a static class (see part 5)

abstract class Monster{
  constructor(
  public name: string,
  public location: [string, string],
  public challengeRating: number,
  public weaknesses: [],
  public strengths: [],
  public ability: string,
  ) {}
    protected monsters: string[] = [];
    

  abstract addProject(name: string, location: string, challengeRating: number, weaknesses: [], strenghts: [], ability: string)
}

// class Ghosts extends Monsters {

// }

// class Beasts extends Monsters {

// }

// class Humanoids extends Monsters {

// }