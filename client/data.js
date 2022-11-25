// json-server does not behave well with ES modules export syntax hence module.exports
module.exports = function () {
    return {
        "survey-list": [
          // Copy starting from below here to insertMany into your local MongoDB for testing
            {
                "_id": 1,
                "dateStart": new Date('2022-11-12'),
                "dateEnd": new Date('2022-12-23'),
                "title": "Why do people love React?",
                "type": "Technology",
                "author": "Benjamin Lefebvre",
                "user": "Bengee",
                "questionsBloc": [{
                    question: 'Why...?',
                    options: ['Option 1', 'Option 2', 'Option 3'],
                },
                {
                    question: 'How...?',
                    options: ['Option 1', 'Option 2', 'Option 3', 'Option 4'],
                }],
                "answerBloc": [],
                "isActive": true
            },
            {
              "_id": 2,
              "title": "Animal Survey 126",
              "dateStart": {"$date":"2022-11-15T00:00:00.000Z"},
              "dateEnd": {"$date":"2023-01-14T01:41:04.000Z"},
              "type": "Kids",
              "author": "Marna Renowden",
              "user": "mrenowden1",
              "questionsBloc": [
                {
                  "question": "Which animal do you like?",
                  "options": [
                    "Owl, white-browed",
                    "Grizzly bear",
                    "Puna ibis",
                    "Aardwolf"
                  ]
                },
                {
                  "question": "Which animal do you like?",
                  "options": [
                    "Desert spiny lizard",
                    "Long-tailed spotted cat",
                    "Sloth, hoffman's",
                    "White-cheeked pintail"
                  ]
                }
              ],
              "answerBloc": [
                {
                }
              ],
              "isActive": true
            }, {
              "_id": 3,
              "title": "Animal Survey 449",
              "dateStart": {"$date":"2022-11-15T00:00:00.000Z"},
              "dateEnd": {"$date":"2023-01-31T15:38:37.000Z"},
              "type": "Toys",
              "author": "Vonnie Praton",
              "user": "vpraton2",
              "questionsBloc": [
                {
                  "question": "Which animal do you like?",
                  "options": [
                    "Pampa gray fox",
                    "Black-winged stilt",
                    "Squirrel, malabar",
                    "Bat, madagascar fruit"
                  ]
                },
                {
                  "question": "Which animal do you like?",
                  "options": [
                    "Snowy egret",
                    "Heron, giant",
                    "Woodcock, american",
                    "American badger"
                  ]
                }
              ],
              "answerBloc": [
                {
                }
              ],
              "isActive": false
            }, {
              "_id": 4,
              "title": "Animal Survey 863",
              "dateStart": {"$date":"2022-11-15T00:00:00.000Z"},
              "dateEnd": {"$date":"2022-11-16T23:54:16.000Z"},
              "type": "Electronics",
              "author": "Robert Sicely",
              "user": "rsicely3",
              "questionsBloc": [
                {
                  "question": "Which animal do you like?",
                  "options": [
                    "Pigeon, wood",
                    "Openbill stork",
                    "White-nosed coatimundi",
                    "Field flicker"
                  ]
                },
                {
                  "question": "Which animal do you like?",
                  "options": [
                    "Lesser mouse lemur",
                    "Grebe, little",
                    "Otter, brazilian",
                    "African lynx"
                  ]
                }
              ],
              "answerBloc": [
                {
                }
              ],
              "isActive": true
            }, {
              "_id": 5,
              "title": "Animal Survey 639",
              "dateStart": {"$date":"2022-11-15T00:00:00.000Z"},
              "dateEnd": {"$date":"2023-01-04T17:38:35.000Z"},
              "type": "Books",
              "author": "Margalo Lerwill",
              "user": "mlerwill4",
              "questionsBloc": [
                {
                  "question": "Which animal do you like?",
                  "options": [
                    "Sandpiper, spotted wood",
                    "European wild cat",
                    "Wolf spider",
                    "Gecko, ring-tailed"
                  ]
                },
                {
                  "question": "Which animal do you like?",
                  "options": [
                    "Bandicoot, southern brown",
                    "Great egret",
                    "Zebra, common",
                    "Denham's bustard"
                  ]
                }
              ],
              "answerBloc": [
                {
                }
              ],
              "isActive": true
            }, {
              "_id": 6,
              "title": "Animal Survey 574",
              "dateStart": {"$date":"2022-11-15T00:00:00.000Z"},
              "dateEnd": {"$date":"2022-12-23T22:05:18.000Z"},
              "type": "Computers",
              "author": "Brittni Baudinot",
              "user": "bbaudinot5",
              "questionsBloc": [
                {
                  "question": "Which animal do you like?",
                  "options": [
                    "Mongoose, yellow",
                    "Coyote",
                    "Jackal, silver-backed",
                    "Snake, eastern indigo"
                  ]
                },
                {
                  "question": "Which animal do you like?",
                  "options": [
                    "Asian red fox",
                    "Collared lemming",
                    "Woylie",
                    "Platypus"
                  ]
                }
              ],
              "answerBloc": [
                {
                }
              ],
              "isActive": false
            }, {
              "_id": 7,
              "title": "Animal Survey 736",
              "dateStart": {"$date":"2022-11-15T00:00:00.000Z"},
              "dateEnd": {"$date":"2023-02-01T06:22:06.000Z"},
              "type": "Clothing",
              "author": "Sarene Orpyne",
              "user": "sorpyne6",
              "questionsBloc": [
                {
                  "question": "Which animal do you like?",
                  "options": [
                    "Owl, burrowing",
                    "Heron, green",
                    "Black-throated cardinal",
                    "Emerald green tree boa"
                  ]
                },
                {
                  "question": "Which animal do you like?",
                  "options": [
                    "Crowned eagle",
                    "Common mynah",
                    "Blackbuck",
                    "Sacred ibis"
                  ]
                }
              ],
              "answerBloc": [
                {
                }
              ],
              "isActive": false
            }, {
              "_id": 8,
              "title": "Animal Survey 202",
              "dateStart": {"$date":"2022-11-15T00:00:00.000Z"},
              "dateEnd": {"$date":"2022-12-01T17:30:14.000Z"},
              "type": "Shoes",
              "author": "Emmaline Besemer",
              "user": "ebesemer7",
              "questionsBloc": [
                {
                  "question": "Which animal do you like?",
                  "options": [
                    "Hare, arctic",
                    "Kongoni",
                    "Gull, pacific",
                    "Rainbow lory"
                  ]
                },
                {
                  "question": "Which animal do you like?",
                  "options": [
                    "Australian pelican",
                    "Blue-footed booby",
                    "Wallaby, euro",
                    "Darter, african"
                  ]
                }
              ],
              "answerBloc": [
                {
                }
              ],
              "isActive": true
            }, {
              "_id": 9,
              "title": "Animal Survey 168",
              "dateStart": {"$date":"2022-11-15T00:00:00.000Z"},
              "dateEnd": {"$date":"2023-02-26T01:40:36.000Z"},
              "type": "Automotive",
              "author": "Elonore Jarmyn",
              "user": "ejarmyn8",
              "questionsBloc": [
                {
                  "question": "Which animal do you like?",
                  "options": [
                    "Common eland",
                    "Salmon pink bird eater tarantula",
                    "Snake, western patch-nosed",
                    "Vulture, white-rumped"
                  ]
                },
                {
                  "question": "Which animal do you like?",
                  "options": [
                    "White-rumped vulture",
                    "White-eye, pale",
                    "Vulture, white-rumped",
                    "Magellanic penguin"
                  ]
                }
              ],
              "answerBloc": [
                {
                }
              ],
              "isActive": true
            }, {
              "_id": 10,
              "title": "Animal Survey 652",
              "dateStart": {"$date":"2022-11-15T00:00:00.000Z"},
              "dateEnd": {"$date":"2022-11-30T13:11:25.000Z"},
              "type": "Tools",
              "author": "Eolande Handes",
              "user": "ehandes9",
              "questionsBloc": [
                {
                  "question": "Which animal do you like?",
                  "options": [
                    "Feathertail glider",
                    "Sable antelope",
                    "Dove, ring",
                    "Spotted-tailed quoll"
                  ]
                },
                {
                  "question": "Which animal do you like?",
                  "options": [
                    "Admiral, indian red",
                    "Ant (unidentified)",
                    "Duck, white-faced whistling",
                    "Pelican, eastern white"
                  ]
                }
              ],
              "answerBloc": [
                {
                }
              ],
              "isActive": true
            }, {
              "_id": 11,
              "title": "Animal Survey 441",
              "dateStart": {"$date":"2022-11-15T00:00:00.000Z"},
              "dateEnd": {"$date":"2022-12-24T16:37:20.000Z"},
              "type": "Music",
              "author": "Roseanne Meletti",
              "user": "rmelettia",
              "questionsBloc": [
                {
                  "question": "Which animal do you like?",
                  "options": [
                    "Slender-billed cockatoo",
                    "Eurasian red squirrel",
                    "Russian dragonfly",
                    "Porcupine, north american"
                  ]
                },
                {
                  "question": "Which animal do you like?",
                  "options": [
                    "Greater adjutant stork",
                    "Southern brown bandicoot",
                    "Squirrel, golden-mantled ground",
                    "Bush dog"
                  ]
                }
              ],
              "answerBloc": [
                {
                }
              ],
              "isActive": true
            }, {
              "_id": 12,
              "title": "Animal Survey 796",
              "dateStart": {"$date":"2022-11-15T00:00:00.000Z"},
              "dateEnd": {"$date":"2023-02-26T16:21:01.000Z"},
              "type": "Beauty",
              "author": "Maurizia Gambrell",
              "user": "mgambrellb",
              "questionsBloc": [
                {
                  "question": "Which animal do you like?",
                  "options": [
                    "Kingfisher, white-throated",
                    "Fork-tailed drongo",
                    "Otter, oriental short-clawed",
                    "Cape Barren goose"
                  ]
                },
                {
                  "question": "Which animal do you like?",
                  "options": [
                    "Shrike, common boubou",
                    "Yellow-brown sungazer",
                    "Ringtail, common",
                    "Grison"
                  ]
                }
              ],
              "answerBloc": [
                {
                }
              ],
              "isActive": true
            }, {
              "_id": 13,
              "title": "Animal Survey 285",
              "dateStart": {"$date":"2022-11-15T00:00:00.000Z"},
              "dateEnd": {"$date":"2022-12-22T05:31:32.000Z"},
              "type": "Automotive",
              "author": "Shela Lynock",
              "user": "slynockc",
              "questionsBloc": [
                {
                  "question": "Which animal do you like?",
                  "options": [
                    "Baboon, chacma",
                    "Blue duck",
                    "Blackbuck",
                    "Bleu, blue-breasted cordon"
                  ]
                },
                {
                  "question": "Which animal do you like?",
                  "options": [
                    "Cereopsis goose",
                    "Cottonmouth",
                    "Scarlet macaw",
                    "Vine snake (unidentified)"
                  ]
                }
              ],
              "answerBloc": [
                {
                }
              ],
              "isActive": true
            }, {
              "_id": 14,
              "title": "Animal Survey 433",
              "dateStart": {"$date":"2022-11-15T00:00:00.000Z"},
              "dateEnd": {"$date":"2023-01-15T00:00:54.000Z"},
              "type": "Games",
              "author": "Wake Olivari",
              "user": "wolivarid",
              "questionsBloc": [
                {
                  "question": "Which animal do you like?",
                  "options": [
                    "Grouse, greater sage",
                    "Wallaby, river",
                    "Deer, black-tailed",
                    "Bird, black-throated butcher"
                  ]
                },
                {
                  "question": "Which animal do you like?",
                  "options": [
                    "Wattled crane",
                    "Squirrel, african bush",
                    "White-headed vulture",
                    "Bateleur eagle"
                  ]
                }
              ],
              "answerBloc": [
                {
                }
              ],
              "isActive": true
            }, {
              "_id": 15,
              "title": "Animal Survey 112",
              "dateStart": {"$date":"2022-11-15T00:00:00.000Z"},
              "dateEnd": {"$date":"2022-12-16T22:17:22.000Z"},
              "type": "Sports",
              "author": "Roselin Robertsson",
              "user": "rrobertssone",
              "questionsBloc": [
                {
                  "question": "Which animal do you like?",
                  "options": [
                    "Leopard",
                    "Blue catfish",
                    "Brown hyena",
                    "Marabou stork"
                  ]
                },
                {
                  "question": "Which animal do you like?",
                  "options": [
                    "Common eland",
                    "Toucan, white-throated",
                    "Jaeger, long-tailed",
                    "Vulture, bengal"
                  ]
                }
              ],
              "answerBloc": [
                {
                }
              ],
              "isActive": false
            }, {
              "_id": 16,
              "title": "Animal Survey 105",
              "dateStart": {"$date":"2022-11-15T00:00:00.000Z"},
              "dateEnd": {"$date":"2023-01-25T10:14:49.000Z"},
              "type": "Electronics",
              "author": "Doti Mowatt",
              "user": "dmowattf",
              "questionsBloc": [
                {
                  "question": "Which animal do you like?",
                  "options": [
                    "Agouti",
                    "Short-nosed bandicoot",
                    "Gambel's quail",
                    "American crow"
                  ]
                },
                {
                  "question": "Which animal do you like?",
                  "options": [
                    "Polar bear",
                    "American bison",
                    "Cow, scottish highland",
                    "Bunting, crested"
                  ]
                }
              ],
              "answerBloc": [
                {
                }
              ],
              "isActive": false
            }, {
              "_id": 17,
              "title": "Animal Survey 442",
              "dateStart": {"$date":"2022-11-15T00:00:00.000Z"},
              "dateEnd": {"$date":"2023-01-09T02:41:43.000Z"},
              "type": "Home",
              "author": "Malanie Lettuce",
              "user": "mlettuceg",
              "questionsBloc": [
                {
                  "question": "Which animal do you like?",
                  "options": [
                    "White spoonbill",
                    "Short-beaked echidna",
                    "Owl, white-browed",
                    "Goose, egyptian"
                  ]
                },
                {
                  "question": "Which animal do you like?",
                  "options": [
                    "Wallaroo, common",
                    "American bighorn sheep",
                    "Wallaby, river",
                    "Cat, tiger"
                  ]
                }
              ],
              "answerBloc": [
                {
                }
              ],
              "isActive": true
            }, {
              "_id": 18,
              "title": "Animal Survey 412",
              "dateStart": {"$date":"2022-11-15T00:00:00.000Z"},
              "dateEnd": {"$date":"2023-02-15T08:35:33.000Z"},
              "type": "Computers",
              "author": "Nollie Beadle",
              "user": "nbeadleh",
              "questionsBloc": [
                {
                  "question": "Which animal do you like?",
                  "options": [
                    "Great skua",
                    "Ibex",
                    "Lion, mountain",
                    "Ring-tailed possum"
                  ]
                },
                {
                  "question": "Which animal do you like?",
                  "options": [
                    "Goose, spur-winged",
                    "Stork, openbill",
                    "Turtle, eastern box",
                    "Skua, long-tailed"
                  ]
                }
              ],
              "answerBloc": [
                {
                }
              ],
              "isActive": true
            }, {
              "_id": 19,
              "title": "Animal Survey 482",
              "dateStart": {"$date":"2022-11-15T00:00:00.000Z"},
              "dateEnd": {"$date":"2022-11-27T12:33:08.000Z"},
              "type": "Grocery",
              "author": "Barry Presslee",
              "user": "bpressleei",
              "questionsBloc": [
                {
                  "question": "Which animal do you like?",
                  "options": [
                    "Timber wolf",
                    "Harbor seal",
                    "Three-banded plover",
                    "Crab (unidentified)"
                  ]
                },
                {
                  "question": "Which animal do you like?",
                  "options": [
                    "Sloth, two-toed tree",
                    "Egyptian goose",
                    "Beaver, north american",
                    "Northern fur seal"
                  ]
                }
              ],
              "answerBloc": [
                {
                }
              ],
              "isActive": false
            }, {
              "_id": 20,
              "title": "Animal Survey 4",
              "dateStart": {"$date":"2022-11-15T00:00:00.000Z"},
              "dateEnd": {"$date":"2022-12-22T00:58:24.000Z"},
              "type": "Industrial",
              "author": "Natala Sinkins",
              "user": "nsinkinsj",
              "questionsBloc": [
                {
                  "question": "Which animal do you like?",
                  "options": [
                    "Jungle kangaroo",
                    "Goose, cereopsis",
                    "Frogmouth, tawny",
                    "Flightless cormorant"
                  ]
                },
                {
                  "question": "Which animal do you like?",
                  "options": [
                    "Mountain lion",
                    "Raccoon, crab-eating",
                    "Iguana, common green",
                    "Common waterbuck"
                  ]
                }
              ],
              "answerBloc": [
                {
                }
              ],
              "isActive": true
            }

          // Stop copy for insertMany
        ]
    }
}
/*
(
    public dateStart?: Date,
    public dateEnd?: Date,
    public _id?: number,
    public title?: string,
    public type?: string,
    public author?: string,
    public user?: string,
    public questionsBloc?: {
      question?: string,
      options?: string[]
    }[],
    public answerBloc?: {
      answer?: number[];
    }[],
    public isActive?: boolean
  )

  new Survey(
      new Date('2022-11-12'),
      new Date('2022-12-23'),
      1,
      'Why do people love React',
      'Technology',
      'Benjamin Lefebvre',
      'Bengee',
      [
        {
          question: 'Why...?',
          options: ['Option 1', 'Option 2', 'Option 3'],
        },
        {
          question: 'How...?',
          options: ['Option 1', 'Option 2', 'Option 3', 'Option 4'],
        },
      ],
      [],
      true
    )
*/