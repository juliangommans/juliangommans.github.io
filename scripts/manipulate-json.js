const fs = require('fs'),
dir = './data/types'

let json = [],
    type

fs.readdir(dir, (err,files)=>{
	console.log("files = " + files.length)

	files.forEach((file) => {

		fs.readFile(dir+'/' + file, 'utf8', (err, data) => {
			if (err){
				console.log("you wat? " + err)
			} else {
				type = file.match(/^([a-z])+/)[0]
				console.log("loading type => " + type)
				const obj = {
						type: type,
						colors: colors[type],
						pokemon: JSON.parse(data)
					}
				json.push(obj)
				if (json.length >= files.length){
					console.log("Finished yay " + json)
					savePokemon()
				}
			}
		})
	})
})

const savePokemon = () => {
	fs.writeFile('./data/pokemon.js', "const POKEMON = " + JSON.stringify(json), (err) => {
		if(err) {
			console.log("~~~ ERROR FILE WRITTE " + err + " ~~~")
		} else {
			console.log("+++ Saved file successfully +++")
		}
	})
}

const colors = {
	normal: {
		borderColor: "#79794e",
		backgroundColor: "#8a8a59"
	},
	fire: {
		borderColor: "#b4530d",
		backgroundColor: "#f08030"
	},
	water: {
		borderColor: "#1753e3",
		backgroundColor: "#6890f0"
	},
	electric: {
		borderColor: "#c19b07",
		backgroundColor: "#f8d030"
	},
	grass: {
		borderColor: "#4a892b",
		backgroundColor: "#78c850"
	},
	ice: {
		borderColor: "#45b6b6",
		backgroundColor: "#98d8d8"
	},
	fighting: {
		borderColor: "#82211b",
		backgroundColor: "#c03028"
	},
	poison: {
		borderColor: "#662966",
		backgroundColor: "#a040a0"
	},
	ground: {
		borderColor: "#aa8623",
		backgroundColor: "#e0c068"
	},
	flying: {
		borderColor: "#7762b6",
		backgroundColor: "#a890f0"
	},
	psychic: {
		borderColor: "#ba083d",
		backgroundColor: "#f85888"
	},
	bug: {
		borderColor: "#616b13",
		backgroundColor: "#a8b820"
	},
	rock: {
		borderColor: "#746523",
		backgroundColor: "#b8a038"
	},
	ghost: {
		borderColor: "#413359",
		backgroundColor: "#705898"
	},
	dragon: {
		borderColor: "#3d07c0",
		backgroundColor: "#7038f8"
	},
	dark: {
		borderColor: "#362a23",
		backgroundColor: "#705848"
	},
	steel: {
		borderColor: "#7a7aa7",
		backgroundColor: "#b8b8d0"
	},
	fairy: {
		borderColor: "#d547d5",
		backgroundColor: "#e898e8"
	}
}