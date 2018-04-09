$( document ).ready(function() {

    const typeTotal = 18
    let types = [],
    	successes = []

    // Loading spinne (chart.js)
    const canvas = document.getElementById('myChart');
	const data = {
	  labels: [], 
	  datasets: [
	    {	
	      label: "type spinner",
	      data: [1],
	      backgroundColor: ["rgba(0, 0, 0, 0.1)"],
	      borderColor: ["white"]
	    }
	  ]};
	const options = { legend: { display: false }};
	const myChart = new Chart(canvas,{
		type: 'pie',
	    data: data,
	    options: options
	});
	function adddata(data){
		const length = types.length <= 1 ? 0 : myChart.data.datasets[0].data.length
		myChart.data.datasets[0].data[length] = 1;
		myChart.data.datasets[0].backgroundColor[length] = colors[data.name].backgroundColor;
		myChart.data.datasets[0].borderColor[length] = colors[data.name].borderColor;
		myChart.data.labels[myChart.data.labels.length] = data.name;
		myChart.update();
	}

	// Ajax type fetches
    for (i=0; i<typeTotal; i++){
    	const currentType = i+1
	    $.get('https://pokeapi.co/api/v2/type/' + currentType, function( data, response, xhr ) {
			if (response === "success"){
				successes.push(response)
				types.push(data)
				handleResponse(data)
			}
			if (successes.length >= typeTotal){
				loadIsotope()
			}
		})
    }

    const handleResponse = (data) => {
    	const navButton = $('.nav-buttons').append("<a class='button " + data.name + " " + data.name + "-color' data-filter='." + data.name + "'>" + data.name + "</a>")
    	adddata(data)
    	data.pokemon.forEach( (item) => {
	    	const p = item.pokemon
	    	const $el = $('.pokemon-dump').find("." + p.name)
	    	if($el.length < 1){
	    		$('.pokemon-dump').append("<a data-link='" + p.url + "' class='pokemon " + data.name + " " + p.name + "'><div class='color-box'><div class='first-type " + data.name + "-color'></div></div><span class='name'>" + p.name + "</span></a>")
	    	} else {
	    		$($el).addClass(data.name)
	    		$($el.find('.color-box')).append("<div class='second-type " + data.name + "-color'></div>")
	    	}
    	})
    }

    // Isotope filtering logic
    const loadIsotope = () => {

    	var $grid = $('.pokemon-dump').isotope({
		  itemSelector: '.pokemon',
		  layoutMode: 'fitRows',
		  getSortData: {
		    name: '.name',
		    symbol: '.symbol',
		    number: '.number parseInt',
		    category: '[data-category]',
		    weight: function( itemElem ) {
		      var weight = $( itemElem ).find('.weight').text()
		      return parseFloat( weight.replace( /[\(\)]/g, '') )
		    }
		  }
		})

		// filter functions
		var filterFns = {
		  // show if number is greater than 50
		  numberGreaterThan50: function() {
		    var number = $(this).find('.number').text()
		    return parseInt( number, 10 ) > 50
		  },
		  // show if name ends with -ium
		  ium: function() {
		    var name = $(this).find('.name').text()
		    return name.match( /ium$/ )
		  }
		}

		// bind filter button click
		$('.nav-buttons').on( 'click', '.button', function() {
		  var filterValue = $( this ).attr('data-filter')
		  // use filterFn if matches value
		  filterValue = filterFns[ filterValue ] || filterValue
		  $grid.isotope({ filter: filterValue })
		  if (filterValue === '*'){
		  	$grid.isotope({ sortBy: 'name' })
		  }
		})

		// // bind sort button click
		// $('#sorts').on( 'click', 'button', function() {
		//   var sortByValue = $(this).attr('data-sort-by');
		//   $grid.isotope({ sortBy: sortByValue });
		// });

		// change is-checked class on buttons
		$('.nav-buttons').each( function( i, buttonGroup ) {
		  var $buttonGroup = $( buttonGroup );
		  $buttonGroup.on( 'click', '.button', function() {
		    $buttonGroup.find('.is-checked').removeClass('is-checked');
		    $( this ).addClass('is-checked');
		    $( this ).animate({
		    	color: $( this ).css('background-color'),
		    	backgroundColor: $( this ).css('color')
		    },
		    500,
		    	() => {
			    	$( this ).animate({
				    	color: $( this ).css('background-color'),
				    	backgroundColor: $( this ).css('color')
				    },
				    500
			    )}
		    )
		  })
		})

		$grid.isotope({ sortBy: 'name' })

		setTimeout(() => {
			$('.page-cover').hide()
		}, 1500)
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
})