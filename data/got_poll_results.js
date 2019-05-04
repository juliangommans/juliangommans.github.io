const RESULTS = [
  {
    "Timestamp": "2019/04/28 2:54:03 PM GMT+12",
    "Name": "Louisa",
    "Tyrion Lannister": "Probably Dies (2)",
    "Jaime Lannister": "Definitely Dies (4)",
    "Cersei Lannister": "Survives (0)",
    "Daenerys Targaryen": "Maybe Dies (1)",
    "Jon Snow": "Survives (0)",
    "Sansa Stark": "Survives (0)",
    "Arya Stark": "Probably Dies (2)",
    "Davos Seaworth": "Definitely Dies (4)",
    "Missandei": "Definitely Dies (4)",
    "Theon Greyjoy": "Definitely Dies (4)",
    "Samwell Tarly": "Survives (0)",
    "Bran Stark": "Probably Dies (2)",
    "Brienne of Tarth": "Definitely Dies (4)",
    "Varys": "Definitely Dies (4)",
    "Sandor \"The Hound\" Clegane": "Definitely Dies (4)",
    "Bronn": "Definitely Dies (4)",
    "Tormund Giantsbane": "Definitely Dies (4)",
    "Gendry": "Definitely Dies (4)",
    "Grey Worm": "Definitely Dies (4)",
    "Jorah Mormont": "Definitely Dies (4)",
    "Gilly": "Maybe Dies (1)",
    "Melisandre": "Survives (0)",
    "Beric Dondarrion": "Maybe Dies (1)",
    "Eddison Tollett": "Definitely Dies (4)",
    "Podrick Payne": "Definitely Dies (4)",
    "Yohn Royce": "Maybe Dies (1)",
    "Lyanna Mormont": "Definitely Dies (4)",
    "Qhono": "Probably Dies (2)",
    "The Night King": "Probably Dies (2)",
    "Euron Greyjoy": "Survives (0)",
    "Qyburn": "Survives (0)",
    "Yara Greyjoy": "Survives (0)",
    "Gregor \"The Mountain\" Clegane": "Survives (0)",
    "Harry Strickland": "Survives (0)",
    "Robin Arryn": "Survives (0)",
    "Edmure Tully": "Maybe Dies (1)",
    "Drogon": "Maybe Dies (1)",
    "Rhaegal": "Survives (0)",
    "Viserion": "Probably Dies (2)",
    "Ghost": "Survives (0)",
    "Nimeria": "Probably Dies (2)"
  },
  {
    "Timestamp": "2019/04/28 3:42:39 PM GMT+12",
    "Name": "Sophie",
    "Tyrion Lannister": "Survives (0)",
    "Jaime Lannister": "Probably Dies (2)",
    "Cersei Lannister": "Survives (0)",
    "Daenerys Targaryen": "Survives (0)",
    "Jon Snow": "Survives (0)",
    "Sansa Stark": "Probably Dies (2)",
    "Arya Stark": "Maybe Dies (1)",
    "Davos Seaworth": "Maybe Dies (1)",
    "Missandei": "Definitely Dies (4)",
    "Theon Greyjoy": "Definitely Dies (4)",
    "Samwell Tarly": "Survives (0)",
    "Bran Stark": "Probably Dies (2)",
    "Brienne of Tarth": "Probably Dies (2)",
    "Varys": "Maybe Dies (1)",
    "Sandor \"The Hound\" Clegane": "Probably Dies (2)",
    "Bronn": "Probably Dies (2)",
    "Tormund Giantsbane": "Definitely Dies (4)",
    "Gendry": "Maybe Dies (1)",
    "Grey Worm": "Probably Dies (2)",
    "Jorah Mormont": "Definitely Dies (4)",
    "Gilly": "Definitely Dies (4)",
    "Melisandre": "Maybe Dies (1)",
    "Beric Dondarrion": "Definitely Dies (4)",
    "Eddison Tollett": "Definitely Dies (4)",
    "Podrick Payne": "Definitely Dies (4)",
    "Yohn Royce": "Definitely Dies (4)",
    "Lyanna Mormont": "Survives (0)",
    "Qhono": "Maybe Dies (1)",
    "The Night King": "Definitely Dies (4)",
    "Euron Greyjoy": "Survives (0)",
    "Qyburn": "Survives (0)",
    "Yara Greyjoy": "Survives (0)",
    "Gregor \"The Mountain\" Clegane": "Survives (0)",
    "Harry Strickland": "Survives (0)",
    "Robin Arryn": "Survives (0)",
    "Edmure Tully": "Survives (0)",
    "Drogon": "Maybe Dies (1)",
    "Rhaegal": "Survives (0)",
    "Viserion": "Probably Dies (2)",
    "Ghost": "Survives (0)",
    "Nimeria": "Survives (0)"
  },
  {
    "Timestamp": "2019/04/28 11:49:05 PM GMT+12",
    "Name": "Veerle",
    "Tyrion Lannister": "Survives (0)",
    "Jaime Lannister": "Probably Dies (2)",
    "Cersei Lannister": "Maybe Dies (1)",
    "Daenerys Targaryen": "Maybe Dies (1)",
    "Jon Snow": "Survives (0)",
    "Sansa Stark": "Probably Dies (2)",
    "Arya Stark": "Survives (0)",
    "Davos Seaworth": "Definitely Dies (4)",
    "Missandei": "Definitely Dies (4)",
    "Theon Greyjoy": "Definitely Dies (4)",
    "Samwell Tarly": "Survives (0)",
    "Bran Stark": "Survives (0)",
    "Brienne of Tarth": "Probably Dies (2)",
    "Varys": "Probably Dies (2)",
    "Sandor \"The Hound\" Clegane": "Definitely Dies (4)",
    "Bronn": "Maybe Dies (1)",
    "Tormund Giantsbane": "Survives (0)",
    "Gendry": "Survives (0)",
    "Grey Worm": "Maybe Dies (1)",
    "Jorah Mormont": "Definitely Dies (4)",
    "Gilly": "Probably Dies (2)",
    "Melisandre": "Maybe Dies (1)",
    "Beric Dondarrion": "Survives (0)",
    "Eddison Tollett": "Probably Dies (2)",
    "Podrick Payne": "Survives (0)",
    "Yohn Royce": "Definitely Dies (4)",
    "Lyanna Mormont": "Definitely Dies (4)",
    "Qhono": "Definitely Dies (4)",
    "The Night King": "Survives (0)",
    "Euron Greyjoy": "Survives (0)",
    "Qyburn": "Survives (0)",
    "Yara Greyjoy": "Survives (0)",
    "Gregor \"The Mountain\" Clegane": "Survives (0)",
    "Harry Strickland": "Survives (0)",
    "Robin Arryn": "Maybe Dies (1)",
    "Edmure Tully": "Survives (0)",
    "Drogon": "Probably Dies (2)",
    "Rhaegal": "Survives (0)",
    "Viserion": "Survives (0)",
    "Ghost": "Survives (0)",
    "Nimeria": "Probably Dies (2)"
  },
  {
    "Timestamp": "2019/04/28 11:55:16 PM GMT+12",
    "Name": "Lydia",
    "Tyrion Lannister": "Probably Dies (2)",
    "Jaime Lannister": "Survives (0)",
    "Cersei Lannister": "Survives (0)",
    "Daenerys Targaryen": "Maybe Dies (1)",
    "Jon Snow": "Survives (0)",
    "Sansa Stark": "Survives (0)",
    "Arya Stark": "Survives (0)",
    "Davos Seaworth": "Probably Dies (2)",
    "Missandei": "Definitely Dies (4)",
    "Theon Greyjoy": "Probably Dies (2)",
    "Samwell Tarly": "Survives (0)",
    "Bran Stark": "Probably Dies (2)",
    "Brienne of Tarth": "Maybe Dies (1)",
    "Varys": "Definitely Dies (4)",
    "Sandor \"The Hound\" Clegane": "Definitely Dies (4)",
    "Bronn": "Survives (0)",
    "Tormund Giantsbane": "Definitely Dies (4)",
    "Gendry": "Survives (0)",
    "Grey Worm": "Definitely Dies (4)",
    "Jorah Mormont": "Maybe Dies (1)",
    "Gilly": "Probably Dies (2)",
    "Melisandre": "Survives (0)",
    "Beric Dondarrion": "Maybe Dies (1)",
    "Eddison Tollett": "Probably Dies (2)",
    "Podrick Payne": "Probably Dies (2)",
    "Yohn Royce": "Survives (0)",
    "Lyanna Mormont": "Probably Dies (2)",
    "Qhono": "Survives (0)",
    "The Night King": "Survives (0)",
    "Euron Greyjoy": "Survives (0)",
    "Qyburn": "Maybe Dies (1)",
    "Yara Greyjoy": "Survives (0)",
    "Gregor \"The Mountain\" Clegane": "Survives (0)",
    "Harry Strickland": "Survives (0)",
    "Robin Arryn": "Survives (0)",
    "Edmure Tully": "Maybe Dies (1)",
    "Drogon": "Maybe Dies (1)",
    "Rhaegal": "Survives (0)",
    "Viserion": "Probably Dies (2)",
    "Ghost": "Survives (0)",
    "Nimeria": "Survives (0)"
  },
  {
    "Timestamp": "2019/04/29 12:24:01 PM GMT+12",
    "Name": "Jules",
    "Tyrion Lannister": "Survives (0)",
    "Jaime Lannister": "Survives (0)",
    "Cersei Lannister": "Survives (0)",
    "Daenerys Targaryen": "Survives (0)",
    "Jon Snow": "Survives (0)",
    "Sansa Stark": "Survives (0)",
    "Arya Stark": "Survives (0)",
    "Davos Seaworth": "Maybe Dies (1)",
    "Missandei": "Maybe Dies (1)",
    "Theon Greyjoy": "Probably Dies (2)",
    "Samwell Tarly": "Survives (0)",
    "Bran Stark": "Survives (0)",
    "Brienne of Tarth": "Maybe Dies (1)",
    "Varys": "Survives (0)",
    "Sandor \"The Hound\" Clegane": "Survives (0)",
    "Bronn": "Survives (0)",
    "Tormund Giantsbane": "Definitely Dies (4)",
    "Gendry": "Probably Dies (2)",
    "Grey Worm": "Definitely Dies (4)",
    "Jorah Mormont": "Definitely Dies (4)",
    "Gilly": "Maybe Dies (1)",
    "Melisandre": "Survives (0)",
    "Beric Dondarrion": "Probably Dies (2)",
    "Eddison Tollett": "Definitely Dies (4)",
    "Podrick Payne": "Maybe Dies (1)",
    "Yohn Royce": "Survives (0)",
    "Lyanna Mormont": "Survives (0)",
    "Qhono": "Maybe Dies (1)",
    "The Night King": "Probably Dies (2)",
    "Euron Greyjoy": "Survives (0)",
    "Qyburn": "Survives (0)",
    "Yara Greyjoy": "Survives (0)",
    "Gregor \"The Mountain\" Clegane": "Survives (0)",
    "Harry Strickland": "Survives (0)",
    "Robin Arryn": "Survives (0)",
    "Edmure Tully": "Survives (0)",
    "Drogon": "Survives (0)",
    "Rhaegal": "Probably Dies (2)",
    "Viserion": "Probably Dies (2)",
    "Ghost": "Probably Dies (2)",
    "Nimeria": "Survives (0)"
  }
]