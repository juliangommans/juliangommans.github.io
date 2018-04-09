const fs = require('fs')
const https = require('https')
const typeTotal = 18
let types = [],
	typeCount = 13,//0,
	currentType,
	pokemUrls,
	pokemon ,
	retries,
	retryCount = 0

function fetch (url, obj, callback){
	
	https.get(url, res => {
	  res.setEncoding('utf8')
	  let body = ''
	  res.on('data', data => {
	    body += data
	  })
	  res.on('end', () => {
	    if (body[0] !== "<"){
	    	body = JSON.parse(body)
		    callback(body)
	    } else {
	    	retries.push(obj)
	    	callback(body)
	    }
	  })
	  res.on('error', (e) =>{
		console.log("ERROR => " + e)
	  })
	})
}

function getTypes() {
	typeCount += 1
	pokemUrls = []
	pokemon = []
	retries = []
	const url = 'https://pokeapi.co/api/v2/type/'
   	fetch(url + typeCount + '/', null, handleTypeResponse)
}

function handleTypeResponse(response) {
	if (typeof response === "object"){
		currentType = response['name']
		console.log("=== Extracting " + currentType + " pokemon ===")
		types.push(response)
		extractPokemon(response)
		loadEVERYPokemon()
	}
}

function extractPokemon (data) {
	if (data.pokemon){
		data.pokemon.forEach((item) => {
		  	const p = item.pokemon
		  	if(!pokemUrls.find((i) => {i.name == p.name})){
		  		pokemUrls.push(p)
		  	}
		})
	}
}

function loadEVERYPokemon () {
	for (i=0; i<pokemUrls.length; i++){ 
		fetch(pokemUrls[i].url, pokemUrls[i], handlePokemonResponse)
	}
}

function handlePokemonResponse (response) {
	if (typeof response === "object" && response.forms){
		if (response.moves){
			response.moves.forEach((move) => { delete move["version_group_details"] })
		}
		pokemon.push(response)
	} else {
	}
	if (pokemon.length >= pokemUrls.length){
		console.log("~~~ Successfully fetched all data, writing the file ~~~")
		const file = { data: pokemon }
		fs.writeFile('./data/' + currentType + '-pokemon.json', JSON.stringify(file), (err) => {
			if(err) {
				console.log("~~~ ERROR FILE WRITTE " + err + " ~~~")
			} else {
				console.log("+++ Finished type " + currentType + "(" + typeCount + ") +++")
				if (typeCount < typeTotal) {
					console.log(" ------- ")
					console.log(" ------- ")
					getTypes()	
				} else {
					console.log("+@# FINALLY %%% DONE #@+")
				}
			}
		})
	} else {
		if ((pokemon.length + retries.length) >= pokemUrls.length && retryCount < 4*typeTotal) {
			retryCount += 1
			const holder = JSON.parse(JSON.stringify(retries))
			retries = []
			console.log("--- There have been " + pokemon.length + " successes ---")
			console.log("~~~ We've had " + holder.length + " errors/timeouts for " + currentType + "(" + typeCount + "), retrying, attempt: " + retryCount + " ~~~")
			for (i=0; i<holder.length; i++){ 
				const p = holder[i]
				fetch(p.url, p, handlePokemonResponse)
			}
		}
	}
}

getTypes()