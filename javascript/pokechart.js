$( document ).ready(function() {

	const buildTypes = () => {
		return _.pluck(POKEMON, 'type')
	}

	const buildColors = () => {
		let color = {background: [], border: []}
		POKEMON.forEach((type) => {
			color.background.push(type.colors.backgroundColor)
			color.border.push(type.colors.borderColor)
		})
		return color
	}

	const buildMainInitialData = () => {
		return POKEMON.map((type)=>{
			return type.pokemon.data.length
		})
	}

	const buildStats = () => {
		let allStats = []
		POKEMON.forEach((item) => {
			item.pokemon.data.forEach((pokemon) => {
				let pokeStats =  {
					type: item.type,
					stats: []
				}
				pokeStats.name = pokemon.name
				pokemon.stats.forEach((stat) => {
					pokeStats.stats.push({
						value: stat.base_stat,
						name: stat.stat.name
					})
				})
				pokeStats.total = pokeStats.stats.reduce((a,b)=> ({value: a.value + b.value })).value
				pokeStats.average = pokeStats.total/pokeStats.stats.length
				allStats.push(pokeStats)
			})
		})
		return allStats
	}

	const mainChartEl = document.getElementById('main-bar-chart'),
		smallBarChartEl = document.getElementById('small-bar-chart'),
		types = buildTypes(),
		colors = buildColors(),
		stats = buildStats(),
		mainInitialData = buildMainInitialData()


	// MAIN BAR CHART SETUP


	console.log("POKEMON", POKEMON) 
	console.log("stats", stats)

	const mainChart = new Chart(mainChartEl, {
		type: 'bar',
		data: {
			labels: types,
			datasets: [{
				label: "Number of Pokemon by Type",
				data: mainInitialData,
				backgroundColor: colors.background,
				borderColor: colors.border,
				borderWidth: 2
			}]
		},
	    options: {
	        scales: {
	            yAxes: [{
	                ticks: {
	                    beginAtZero:true
	                }
	            }]
	        }
    	}
	})

	const renderChart = (lbl, data) => {
		mainChart.data.datasets[0].label = lbl
		mainChart.data.datasets[0].data = data

		mainChart.update()
	}

	const statTypeAverages = (x) => {
		return avgTotal = types.map((type)=>{
			let typeStats = stats.filter((p)=>{
				return p.type === type
			})
			let count = typeStats.reduce((a,b)=>({[x]: a[x] + b[x]}))[x]/typeStats.length
			return Math.round(count * 10)/10
		})
	}

	const buildStatChart = (statType) => {
		const statAvg = statTypeAverages(statType),
			lbl = statType === 'total' ? 'Average Total' : 'Average Individual'
		renderChart(lbl, statAvg)
	}


	$('.nav-buttons select.main-bar-chart').on('change', (e) => {
		const val = $(e.target).find(":selected").val()
		renderMainChart(val)
	})

	const renderMainChart = (val) => {
		switch(val){
			case 'total-avg':
				buildStatChart('total')
				break
			case 'ndiv-avg':
				buildStatChart('average')
				break
			default:
				renderChart('Number of Pokemon', mainInitialData)
		}
	}


	// SMALL BAR CHART SETUP


	const fetchTypeStats = () => {
		const collectAllStats = {}
		for(let i = 0; i < types.length; i++ ){
			const type = types[i]

			let typeStatValues = [
				{ stat: 'hp' },
				{ stat: 'attack' },
				{ stat: 'defense' },
				{ stat: 'special-attack' },
				{ stat: 'special-defense' },
				{ stat: 'speed' }
			]

			let typeGroup = stats.filter((x) => {
				return x.type === type
			})

			for(let i = 0; i < typeStatValues.length; i++ ){
				const s = typeStatValues[i]

				let statAry = typeGroup.map((p) => {
					return p.stats.find((stat)=>{
						return stat.name === s.stat
					}).value
				})

				let total = statAry.reduce((a,b) => { return a+b })

				s.max = Math.max.apply(null, statAry)
				s.min = Math.min.apply(null, statAry)
				s.average = Math.round(total/typeGroup.length * 10)/10
				s.total = total
			}

			collectAllStats[type] = typeStatValues
		}
		return collectAllStats
	}

	const allTypeStats = fetchTypeStats()
	console.log("allT", allTypeStats)

	const smallBarChart = new Chart(smallBarChartEl, {
		type: 'bar',
		data: {
			labels: ['Hp', 'Attack', 'Defence', 'Special Attack', 'Special Defense', 'Speed'],
			datasets: [{
				label: "Minimum",
				data: _.pluck(allTypeStats.electric, 'min'),
				backgroundColor: 'red',
				borderColor: allTypeStats.electric.border,
				borderWidth: 2
			},
			{
				label: "Average",
				data: _.pluck(allTypeStats.electric, 'average'),
				backgroundColor: 'yellow',
				borderColor: allTypeStats.electric.border,
				borderWidth: 2
			},
			{
				label: "Max",
				data: _.pluck(allTypeStats.electric, 'max'),
				backgroundColor: 'green',
				borderColor: allTypeStats.electric.border,
				borderWidth: 2
			}]
		},
	    options: {
	        scales: {
	            yAxes: [{
	                ticks: {
	                    beginAtZero:true
	                }
	            }]
	        }
    	}
	})

	$('.nav-buttons select.small-bar-chart').on('change', (e) => {
		const val = $(e.target).find(":selected").val()
		console.log(val + " stats ", allTypeStats[val])
		smallBarChart.data.datasets[0].data = _.pluck(allTypeStats[val], 'min')
		smallBarChart.data.datasets[1].data = _.pluck(allTypeStats[val], 'average')
		smallBarChart.data.datasets[2].data = _.pluck(allTypeStats[val], 'max')
		smallBarChart.update()
	})


	// Rendering extra options on the page


	$('.nav-buttons select.small-bar-chart').append( () => {
		return types.map((type)=>{
			let capitalWords = type.charAt(0).toUpperCase() + type.slice(1)
			return "<option value=" + type + ">" + capitalWords + " Stats</option>"
		}).join("")
	})


})