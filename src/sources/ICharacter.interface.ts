export default interface ICharacter {
  id: string,
  name: string,
  // "powerstats":{
  //    "intelligence":"88",
  //    "strength":"11",
  //    "speed":"33",
  //    "durability":"28",
  //    "power":"36",
  //    "combat":"100"
  // },
  // "biography":{
  //    "full-name":"Dick Grayson",
  //    "alter-egos":"Nightwing, Robin",
  //    "aliases":[
  //       "Dick Grayson"
  //    ],
  //    "place-of-birth":"-",
  //    "first-appearance":"-",
  //    "publisher":"Nightwing",
  //    "alignment":"good"
  // },
  // "appearance":{
  //    "gender":"Male",
  //    "race":"Human",
  //    "height":[
  //       "5'10",
  //       "178 cm"
  //    ],
  //    "weight":[
  //       "175 lb",
  //       "79 kg"
  //    ],
  //    "eye-color":"Blue",
  //    "hair-color":"Black"
  // },
  // "work":{
  //    "occupation":"-",
  //    "base":"Gotham City; formerly Bludhaven, New York City"
  // },
  // "connections":{
  //    "group-affiliation":"Justice League Of America, Batman Family",
  //    "relatives":"John Grayson (father, deceased), Mary Grayson (mother, deceased), Bruce Wayne \/ Batman (adoptive father), Damian Wayne \/ Robin (foster brother), Jason Todd \/ Red Hood (adoptive brother), Tim Drake \/ Red Robin (adoptive brother), Cassandra Cain \/ Batgirl IV (adoptive sister)"
  // },
  image: Record<string, string>
}