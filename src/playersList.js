import { Player } from "./Player";
import { getRndInteger, excellent, good, ok, bad } from "./getRndInteger";

let count = 0;
//player templates

//young players
export let pg1 = new Player(
  "John Bryant", //name
  count++, //unique id
  getRndInteger(18, 23), //age
  "pg", //position
  ok(), //scoring
  ok(), //passing
  good(), //dribbling
  bad(), //rebounding
  ok(), //stealing
  bad(), //blocking
  ok(), //defense
  "happy", //emotion
  99 //durability
);

export let pg2 = new Player(
  "Trusco Yordan", //name
  count++, //unique id
  getRndInteger(18, 23), //age
  "pg", //position
  good(), //scoring
  good(), //passing
  good(), //dribbling
  ok(), //rebounding
  good(), //stealing
  ok(), //blocking
  ok(), //defense
  "happy", //emotion
  99 //durability
);

export let pg3 = new Player(
  "Nwaba James", //name
  count++, //unique id
  getRndInteger(18, 23), //age
  "pg", //position
  good(), //scoring
  excellent(), //passing
  excellent(), //dribbling
  ok(), //rebounding
  good(), //stealing
  ok(), //blocking
  ok(), //defense
  "happy", //emotion
  99 //durability
);

export let pg4 = new Player(
  "Damian Heatherford", //name
  count++, //unique id
  getRndInteger(24, 36), //age
  "pg", //position
  ok(), //scoring
  good(), //passing
  good(), //dribbling
  bad(), //rebounding
  ok(), //stealing
  bad(), //blocking
  good(), //defense
  "happy", //emotion
  79 //durability
);

export let pg5 = new Player(
  "Singh JuWat", //name
  count++, //unique id
  getRndInteger(24, 36), //age
  "pg", //position
  good(), //scoring
  excellent(), //passing
  good(), //dribbling
  good(), //rebounding
  good(), //stealing
  bad(), //blocking
  good(), //defense
  "happy", //emotion
  79 //durability
);

export let pg6 = new Player(
  "Linty Love", //name
  count++, //unique id
  getRndInteger(24, 36), //age
  "pg", //position
  excellent(), //scoring
  excellent(), //passing
  excellent(), //dribbling
  good(), //rebounding
  good(), //stealing
  ok(), //blocking
  good(), //defense
  "happy", //emotion
  79 //durability
);

//sgs
export let sg1 = new Player(
  "Juj McCarthy", //name
  count++, //unique id
  getRndInteger(18, 23), //age
  "sg", //position
  ok(), //scoring
  ok(), //passing
  good(), //dribbling
  bad(), //rebounding
  ok(), //stealing
  bad(), //blocking
  good(), //defense
  "happy", //emotion
  99 //durability
);

export let sg2 = new Player(
  "Tolin Fresco", //name
  count++, //unique id
  getRndInteger(18, 23), //age
  "sg", //position
  good(), //scoring
  ok(), //passing
  good(), //dribbling
  ok(), //rebounding
  good(), //stealing
  ok(), //blocking
  ok(), //defense
  "happy", //emotion
  99 //durability
);

export let sg3 = new Player(
  "Jeff Furyt", //name
  count++, //unique id
  getRndInteger(18, 23), //age
  "sg", //position
  excellent(), //scoring
  ok(), //passing
  good(), //dribbling
  ok(), //rebounding
  good(), //stealing
  ok(), //blocking
  ok(), //defense
  "happy", //emotion
  99 //durability
);

export let sg4 = new Player(
  "Jesse Mendez", //name
  count++, //unique id
  getRndInteger(24, 36), //age
  "sg", //position
  good(), //scoring
  ok(), //passing
  good(), //dribbling
  bad(), //rebounding
  good(), //stealing
  bad(), //blocking
  good(), //defense
  "happy", //emotion
  79 //durability
);

export let sg5 = new Player(
  "Jamal Hurry", //name
  count++, //unique id
  getRndInteger(24, 36), //age
  "sg", //position
  good(), //scoring
  good(), //passing
  good(), //dribbling
  ok(), //rebounding
  good(), //stealing
  ok(), //blocking
  good(), //defense
  "happy", //emotion
  79 //durability
);

export let sg6 = new Player(
  "De'antony Smith", //name
  count++, //unique id
  getRndInteger(24, 36), //age
  "sg", //position
  excellent(), //scoring
  good(), //passing
  excellent(), //dribbling
  ok(), //rebounding
  good(), //stealing
  ok(), //blocking
  excellent(), //defense
  "happy", //emotion
  79 //durability
);

//sfs
export let sf1 = new Player(
  "Johtay Spuetzer", //name
  count++, //unique id
  getRndInteger(18, 23), //age
  "sf", //position
  ok(), //scoring
  ok(), //passing
  ok(), //dribbling
  good(), //rebounding
  ok(), //stealing
  ok(), //blocking
  good(), //defense
  "happy", //emotion
  99 //durability
);

export let sf2 = new Player(
  "Ryan Hollisland", //name
  count++, //unique id
  getRndInteger(18, 23), //age
  "sf", //position
  ok(), //scoring
  ok(), //passing
  good(), //dribbling
  good(), //rebounding
  good(), //stealing
  ok(), //blocking
  good(), //defense
  "happy", //emotion
  99 //durability
);

export let sf3 = new Player(
  "Allen McDaniels II", //name
  count++, //unique id
  getRndInteger(18, 23), //age
  "sf", //position
  good(), //scoring
  ok(), //passing
  good(), //dribbling
  good(), //rebounding
  good(), //stealing
  good(), //blocking
  good(), //defense
  "happy", //emotion
  99 //durability
);

export let sf4 = new Player(
  "Theonius Melon", //name
  count++, //unique id
  getRndInteger(24, 36), //age
  "sf", //position
  ok(), //scoring
  ok(), //passing
  good(), //dribbling
  good(), //rebounding
  ok(), //stealing
  good(), //blocking
  good(), //defense
  "happy", //emotion
  79 //durability
);

export let sf5 = new Player(
  "Javier Porter", //name
  count++, //unique id
  getRndInteger(24, 36), //age
  "sf", //position
  good(), //scoring
  good(), //passing
  good(), //dribbling
  good(), //rebounding
  good(), //stealing
  good(), //blocking
  good(), //defense
  "happy", //emotion
  79 //durability
);

export let sf6 = new Player(
  "Ricky Rubhiit", //name
  count++, //unique id
  getRndInteger(24, 36), //age
  "sf", //position
  excellent(), //scoring
  good(), //passing
  good(), //dribbling
  good(), //rebounding
  excellent(), //stealing
  good(), //blocking
  excellent(), //defense
  "happy", //emotion
  79 //durability
);

//pfs
export let pf1 = new Player(
  "Jonathan Williams", //name
  count++, //unique id
  getRndInteger(18, 23), //age
  "pf", //position
  ok(), //scoring
  ok(), //passing
  bad(), //dribbling
  good(), //rebounding
  ok(), //stealing
  ok(), //blocking
  ok(), //defense
  "happy", //emotion
  99 //durability
);

export let pf2 = new Player(
  "Brittonio Anthony", //name
  count++, //unique id
  getRndInteger(18, 23), //age
  "pf", //position
  good(), //scoring
  ok(), //passing
  ok(), //dribbling
  good(), //rebounding
  ok(), //stealing
  good(), //blocking
  ok(), //defense
  "happy", //emotion
  99 //durability
);

export let pf3 = new Player(
  "Javal Sandoval", //name
  count++, //unique id
  getRndInteger(18, 23), //age
  "pf", //position
  good(), //scoring
  ok(), //passing
  ok(), //dribbling
  excellent(), //rebounding
  ok(), //stealing
  good(), //blocking
  good(), //defense
  "happy", //emotion
  99 //durability
);

export let pf4 = new Player(
  "Ulis Halpis", //name
  count++, //unique id
  getRndInteger(24, 36), //age
  "pf", //position
  ok(), //scoring
  ok(), //passing
  good(), //dribbling
  good(), //rebounding
  ok(), //stealing
  good(), //blocking
  ok(), //defense
  "happy", //emotion
  79 //durability
);

export let pf5 = new Player(
  "Kofi Koburn", //name
  count++, //unique id
  getRndInteger(24, 36), //age
  "pf", //position
  good(), //scoring
  ok(), //passing
  good(), //dribbling
  good(), //rebounding
  ok(), //stealing
  good(), //blocking
  good(), //defense
  "happy", //emotion
  79 //durability
);

export let pf6 = new Player(
  "JaSean Daniels", //name
  count++, //unique id
  getRndInteger(24, 36), //age
  "pf", //position
  excellent(), //scoring
  good(), //passing
  good(), //dribbling
  excellent(), //rebounding
  good(), //stealing
  good(), //blocking
  excellent(), //defense
  "happy", //emotion
  79 //durability
);

//cs
export let c1 = new Player(
  "David Rescoe", //name
  count++, //unique id
  getRndInteger(18, 23), //age
  "c", //position
  bad(), //scoring
  ok(), //passing
  ok(), //dribbling
  good(), //rebounding
  ok(), //stealing
  ok(), //blocking
  ok(), //defense
  "happy", //emotion
  99 //durability
);

export let c2 = new Player(
  "Anfonmy Jesperson-Alita", //name
  count++, //unique id
  getRndInteger(18, 23), //age
  "c", //position
  ok(), //scoring
  ok(), //passing
  ok(), //dribbling
  good(), //rebounding
  ok(), //stealing
  good(), //blocking
  good(), //defense
  "happy", //emotion
  99 //durability
);

export let c3 = new Player(
  "Helluva Hundley", //name
  count++, //unique id
  getRndInteger(18, 23), //age
  "c", //position
  good(), //scoring
  ok(), //passing
  ok(), //dribbling
  excellent(), //rebounding
  ok(), //stealing
  excellent(), //blocking
  good(), //defense
  "happy", //emotion
  99 //durability
);

export let c4 = new Player(
  "Jamico Sprithe", //name
  count++, //unique id
  getRndInteger(24, 36), //age
  "c", //position
  ok(), //scoring
  ok(), //passing
  ok(), //dribbling
  good(), //rebounding
  ok(), //stealing
  good(), //blocking
  good(), //defense
  "happy", //emotion
  79 //durability
);

export let c5 = new Player(
  "Onati Blush", //name
  count++, //unique id
  getRndInteger(24, 36), //age
  "c", //position
  ok(), //scoring
  good(), //passing
  ok(), //dribbling
  good(), //rebounding
  good(), //stealing
  good(), //blocking
  good(), //defense
  "happy", //emotion
  79 //durability
);

export let c6 = new Player(
  "Wesley Turrico", //name
  count++, //unique id
  getRndInteger(24, 36), //age
  "c", //position
  excellent(), //scoring
  excellent(), //passing
  good(), //dribbling
  excellent(), //rebounding
  excellent(), //stealing
  excellent(), //blocking
  excellent(), //defense
  "happy", //emotion
  79 //durability
);
//end player templates
