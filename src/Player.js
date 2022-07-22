// import { playersArr } from "./playersArr";
import { getRndInteger, excellent, good, ok, bad } from "./getRndInteger";

//start constructor function
//

export function Player(
  name,
  id,
  age,
  position,
  score,
  pass,
  dribble,
  rebound,
  steal,
  block,
  defense,
  emotion,
  durability
) {
  //   let randomPlayer = Math.floor(Math.random() * playersArr.length);

  this.name = name;
  this.id = id;
  this.position = position;
  //positon type sets the this.height variable
  if (this.position === "pg") {
    this.height = getRndInteger(5, 7) + "'" + getRndInteger(1, 9) + '"';
    this.weight = getRndInteger(130, 180);
  } else if (this.position === "sg") {
    this.height = getRndInteger(5, 7) + "'" + getRndInteger(6, 11) + '"';
    this.weight = getRndInteger(140, 190);
  } else if (this.position === "sf") {
    this.height = getRndInteger(6, 7) + "'" + getRndInteger(3, 11) + '"';
    this.weight = getRndInteger(150, 210);
  } else if (this.position === "pf") {
    this.height = getRndInteger(6, 7) + "'" + getRndInteger(7, 12) + '"';
    this.weight = getRndInteger(160, 230);
  }
  if (this.position === "c") {
    this.height = getRndInteger(6, 7) + "'" + getRndInteger(7, 12) + '"';
    this.weight = getRndInteger(170, 250);
  }
  //end height set conditionals

  this.age = age;
  this.score = score;
  this.pass = pass;
  this.dribble = dribble;
  this.rebound = rebound;
  this.steal = steal;
  this.block = block;
  this.defense = defense;
  this.emotion = emotion;
  this.badges = [];
  this.overall = Math.floor(
    (this.score +
      this.pass +
      this.dribble +
      this.rebound +
      this.steal +
      this.block +
      this.defense) /
      7
  );
  this.durability = durability;

  //badges area

  if (this.score >= 90) {
    this.badges.push("Volume Scorer");
  }
  if (this.pass >= 89) {
    this.badges.push("Playmaker");
  }
  if (this.dribble >= 89) {
    this.badges.push("Quickster");
  }
  if (this.rebound >= 89) {
    this.badges.push("Interior Force");
  }
  if (this.steal >= 89) {
    this.badges.push("Ballhawk");
  }
  if (this.block >= 89) {
    this.badges.push("Rim Protector");
  }
  if (this.defense >= 89) {
    this.badges.push("Lockdown Defender");
  }
  //end badges area

  //methods

  this.playGame = function () {
    let individualGame__Points;
    let individualGame__Assists;
    let individualGame__Rebounds;
    let individualGame__Steals;
    let individualGame__Blocks;
    let individualGame__Turnovers;

    //points generator
    if (this.score >= 90) {
      //excellent game score__points
      individualGame__Points = getRndInteger(12, 39);
    } else if (this.score >= 78 && this.score < 90) {
      //good game score__points
      individualGame__Points = getRndInteger(9, 25);
    } else if (this.score >= 66 && this.score < 78) {
      //ok game score__points
      individualGame__Points = getRndInteger(5, 16);
    } else if (this.score >= 0 && this.score < 66) {
      //bad game score__points
      individualGame__Points = getRndInteger(0, 11);
    }
    //end points generator

    //assists generator
    if (this.pass >= 90) {
      //excellent game score__assists
      individualGame__Assists = getRndInteger(4, 17);
    } else if (this.pass >= 78 && this.pass < 90) {
      //good game score__assists
      individualGame__Assists = getRndInteger(3, 10);
    } else if (this.pass >= 66 && this.pass < 78) {
      //ok game score__assists
      individualGame__Assists = getRndInteger(0, 8);
    } else {
      //bad game score__assists
      individualGame__Assists = getRndInteger(0, 5);
    }
    //end assists generator

    //rebounds generator
    if (this.rebound >= 90) {
      //excellent game score__rebounds
      individualGame__Rebounds = getRndInteger(7, 17);
    } else if (this.rebound >= 78 && this.rebound < 90) {
      //good game score__rebounds
      individualGame__Rebounds = getRndInteger(3, 10);
    } else if (this.rebound >= 66 && this.rebound < 78) {
      //ok game score__rebounds
      individualGame__Rebounds = getRndInteger(0, 10);
    } else {
      //bad game score__rebounds
      individualGame__Rebounds = getRndInteger(0, 6);
    }
    //end rebounds generator

    //steals generator
    if (this.steal >= 90) {
      //excellent game score__steals
      individualGame__Steals = getRndInteger(0, 9);
    } else if (this.steal >= 78 && this.steal < 90) {
      //good game score__steals
      individualGame__Steals = getRndInteger(0, 4);
    } else if (this.steal >= 66 && this.steal < 78) {
      //ok game score__steals
      individualGame__Steals = getRndInteger(0, 2);
    } else {
      //bad game score__rebounds
      individualGame__Steals = getRndInteger(0, 1);
    }
    //end steals generator

    //blocks generator
    if (this.block >= 90) {
      //excellent game score__blocks
      individualGame__Blocks = getRndInteger(0, 11);
    } else if (this.block >= 78 && this.block < 90) {
      //good game score__blocks
      individualGame__Blocks = getRndInteger(0, 7);
    } else if (this.block >= 66 && this.block < 78) {
      //ok game score__blocks
      individualGame__Blocks = getRndInteger(0, 4);
    } else {
      //bad game score__blocks
      individualGame__Blocks = getRndInteger(0, 2);
    }
    //end blocks generator

    //turnovers generator
    if (this.dribble >= 90) {
      //excellent game score__turnovers
      individualGame__Turnovers = getRndInteger(0, 3);
    } else if (this.dribble >= 78 && this.dribble < 90) {
      //good game score__turnovers
      individualGame__Turnovers = getRndInteger(0, 4);
    } else if (this.dribble >= 66 && this.dribble < 78) {
      //ok game score__turnovers
      individualGame__Turnovers = getRndInteger(0, 8);
    } else {
      //bad game score__turnovers
      individualGame__Turnovers = getRndInteger(0, 11);
    }
    //end turnovers generator

    //durability weight
    //ie: if your durability is low, it will dampen your individual game stats

    if (this.durability < 60) {
      individualGame__Points = individualGame__Points - getRndInteger(4, 11);
      individualGame__Assists = individualGame__Assists - getRndInteger(2, 5);
      individualGame__Rebounds = individualGame__Rebounds - getRndInteger(2, 5);
      individualGame__Steals = individualGame__Steals - getRndInteger(0, 3);
      individualGame__Blocks = individualGame__Blocks - getRndInteger(0, 3);
      individualGame__Turnovers =
        individualGame__Turnovers + getRndInteger(1, 4);
    } else if (this.durability < 50) {
      individualGame__Points = individualGame__Points - getRndInteger(8, 15);
      individualGame__Assists = individualGame__Assists - getRndInteger(3, 7);
      individualGame__Rebounds = individualGame__Rebounds - getRndInteger(3, 7);
      individualGame__Steals = individualGame__Steals - getRndInteger(1, 5);
      individualGame__Blocks = individualGame__Blocks - getRndInteger(1, 5);
      individualGame__Turnovers =
        individualGame__Turnovers + getRndInteger(1, 7);
    } else if (this.durability < 40) {
      individualGame__Points = individualGame__Points - getRndInteger(20, 25);
      individualGame__Assists = individualGame__Assists - getRndInteger(13, 17);
      individualGame__Rebounds =
        individualGame__Rebounds - getRndInteger(13, 17);
      individualGame__Steals = individualGame__Steals - getRndInteger(3, 7);
      individualGame__Blocks = individualGame__Blocks - getRndInteger(3, 8);
      individualGame__Turnovers =
        individualGame__Turnovers + getRndInteger(1, 7);
    } else if (this.durability < 20) {
      individualGame__Points = individualGame__Points - getRndInteger(30, 35);
      individualGame__Assists = individualGame__Assists - getRndInteger(23, 27);
      individualGame__Rebounds =
        individualGame__Rebounds - getRndInteger(23, 27);
      individualGame__Steals = individualGame__Steals - getRndInteger(13, 17);
      individualGame__Blocks = individualGame__Blocks - getRndInteger(13, 18);
      individualGame__Turnovers =
        individualGame__Turnovers + getRndInteger(1, 7);
    }

    //fix to disable negative scores
    if (individualGame__Points < 0) {
      individualGame__Points = 0;
    }
    if (individualGame__Assists < 0) {
      individualGame__Assists = 0;
    }
    if (individualGame__Rebounds < 0) {
      individualGame__Rebounds = 0;
    }
    if (individualGame__Steals < 0) {
      individualGame__Steals = 0;
    }
    if (individualGame__Blocks < 0) {
      individualGame__Blocks = 0;
    }
    //end durability weight

    return {
      points: individualGame__Points,
      assists: individualGame__Assists,
      rebounds: individualGame__Rebounds,
      steals: individualGame__Steals,
      blocks: individualGame__Blocks,
      turnovers: individualGame__Turnovers,
    };
  };

  this.moreTired = function () {
    //decrement durability after energy spent.
    //larger decrement for older players
    if (this.age >= 33) {
      this.durability = this.durability - 4;
    } else if (this.age >= 28 && this.age < 33) {
      this.durability = this.durability - 3;
    } else if (this.age >= 23 && this.age < 28) {
      this.durability = this.durability - 2;
    } else if (this.age >= 0 && this.age < 23) {
      this.durability = this.durability - 1;
    }
  };

  this.agePlayer = function () {
    //remember if you want to change the value of an object you have to return it out of the
    //method
    let ager = this.age + 1;
    return ager;
  };
}
//
//end constructor function
