const CHARACTERS = [
 {
   id: 1,
   status: 'alive',
   description: 'The short hand of the (dragon) Queen',
   name: 'Tyrion Lannister'
 },
 {
   id: 2,
   status: 'alive',
   description: 'The honorable, one handed, knighter of Women',
   name: 'Jaime Lannister'
 },
 {
   id: 3,
   status: 'n/a',
   description: 'The cold hearted ruler of Kings Landing',
   name: 'Cersei Lannister'
 },
 {
   id: 4,
   status: 'alive',
   description: 'Dragon Queen (you might have heard of her)',
   name: 'Daenerys Targaryen'
 },
 {
   id: 5,
   status: 'alive',
   description: 'Aegon Targaryen',
   name: 'Jon Snow'
 },
 {
   id: 6,
   status: 'alive',
   description: 'The smartest, fireiest person in westeros',
   name: 'Sansa Stark'
 },
 {
   id: 7,
   status: 'alive',
   description: 'No one',
   name: 'Arya Stark'
 },
 {
   id: 8,
   status: 'alive',
   description: 'Old Onion Knight (misses shireen, hates Missandei)',
   name: 'Davos Seaworth'
 },
 {
   id: 9,
   status: 'alive',
   description: 'From the butterfly Islands, Greyworms... lover?',
   name: 'Missandei'
 },
 {
   id: 10,
   status: 'dead',
   description: 'Eunich who grew some balls to win back sister',
   name: 'Theon Greyjoy'
 },
 {
   id: 11,
   status: 'alive',
   description: 'The Slayer and stealer of books',
   name: 'Samwell Tarly'
 },
 {
   id: 12,
   status: 'alive',
   description: 'Android',
   name: 'Bran Stark'
 },
 {
   id: 13,
   status: 'alive',
   description: 'That\'s SER Brienne to you',
   name: 'Brienne of Tarth'
 },
 {
   id: 14,
   status: 'alive',
   description: 'Baldy mcEunich face',
   name: 'Varys'
 },
 {
   id: 15,
   status: 'alive',
   description: 'Hates fire, brothers, and fucking gingers',
   name: 'Sandor "The Hound" Clegane'
 },
 {
   id: 16,
   status: 'n/a',
   description: 'SellSword, but will he SellCrossbow?',
   name: 'Bronn'
 },
 {
   id: 17,
   status: 'alive',
   description: 'Giants milk...',
   name: 'Tormund Giantsbane'
 },
 {
   id: 18,
   status: 'alive',
   description: 'Prince Barathean, Arya\'s beau, forger of weapons',
   name: 'Gendry'
 },
 {
   id: 19,
   status: 'alive',
   description: 'Diversity Eunich, loves Missandei, somehow...',
   name: 'Grey Worm'
 },
 {
   id: 20,
   status: 'dead',
   description: 'Ser Friendzone',
   name: 'Jorah Mormont'
 },
 {
   id: 21,
   status: 'alive',
   description: 'Wildling woman, lover of sam, raiser of children.',
   name: 'Gilly'
 },
 {
   id: 22,
   status: 'dead',
   description: 'Fire Woman (brought john back from the dead)',
   name: 'Melisandre'
 },
 {
   id: 23,
   status: 'dead',
   description: 'Eyepatch Mc"raised from the dead 7 times"',
   name: 'Beric Dondarrion'
 },
 {
   id: 24,
   status: 'dead',
   description: 'Nights watch friend, reminesced with John and Sam last episode',
   name: 'Eddison Tollett' // 3rd nights watch guy (sam/johns friend)
 },
 {
   id: 25,
   status: 'alive',
   description: 'Tri-pod, singer of songs, squire of Ser Brienne',
   name: 'Podrick Payne'
 },
 {
   id: 26,
   status: 'n/a',
   description: 'Armoured old dude who protects the vale/robin',
   name: 'Yohn Royce'
 },
 {
   id: 27,
   status: 'dead',
   description: 'Small tough bear island girl',
   name: 'Lyanna Mormont'
 },
 {
   id: 28,
   status: 'dead',
   description: 'The only named or recognizable dothraki',
   name: 'Qhono'
 },
 {
   id: 29,
   status: 'dead',
   description: 'Some old dead guy',
   name: 'The Night King'
 },
 {
   id: 30,
   status: 'n/a',
   description: 'Smart allec pirate, "seducer" of queens',
   name: 'Euron Greyjoy'
 },
 {
   id: 31,
   status: 'n/a',
   description: 'Old Necromancer, maester for Cersei',
   name: 'Qyburn'
 },
 {
   id: 32,
   status: 'n/a',
   description: 'Rightful Queen of the Iron Islands',
   name: 'Yara Greyjoy'
 },
 {
   id: 33,
   status: 'n/a',
   description: 'Big Bad Zombie dude',
   name: 'Gregor "The Mountain" Clegane'
 },
 {
   id: 34,
   status: 'n/a',
   description: 'Leader of the Golden Company',
   name: 'Harry Strickland' // golden company fullah
 },
 {
   id: 35,
   status: 'n/a',
   description: 'Small cripple boy, ruler of the vale',
   name: 'Robin Arryn'
 },
 {
   id: 36,
   status: 'n/a',
   description: 'The stark kids uncle, been mia for a while',
   name: 'Edmure Tully'
 },
 {
   id: 37,
   status: 'n/a',
   description: 'Danny\'s main dragon',
   name: 'Drogon' // Dannys main dragon
 },
 {
   id: 38,
   status: 'n/a',
   description: 'Danny\'s other dragon (John\'s now?)',
   name: 'Rhaegal' // the other dragon (johns?)
 },
 {
   id: 39,
   status: 'dead',
   description: 'The Night King\'s dragon',
   name: 'Viserion' // The Night Kings dragon
 },
 {
   id: 40,
   status: 'n/a',
   description: 'John\'s Direwolf',
   name: 'Ghost' // Johns Direwolf
 },
 {
   id: 41,
   status: 'n/a',
   description: 'Arya\'s Direwolf',
   name: 'Nimeria' // Arias Direwolf
 }
]
