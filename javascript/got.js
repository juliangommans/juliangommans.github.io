$( document ).ready(function() {

  const SCORE_MAP = {
    "Definitely Dies (4)": 4,
    "Probably Dies (2)": 2,
    "Maybe Dies (1)": 1,
    "Survives (0)": 0
  }

  const STATUS_CHECK = (status, score) => {
    switch(status){
      case 'alive':
        return score === 0 ? 0 : score * -1
      case 'dead':
        return score === 0 ? -1 : score
      case 'n/a':
        return 0
    }
  }

  const groomedResults = RESULTS.map((person)=>{
    const clonePerson = Object.assign({},person)
    delete clonePerson.Timestamp
    delete clonePerson.Name
    const arrayedResults = Object.keys(clonePerson)
      .map((name) => {
        const character = CHARACTERS.find((char)=>(char.name === name))
        const pick = clonePerson[name]
        const score = SCORE_MAP[pick]
        const calculatedScore = STATUS_CHECK(character.status, score)
        const successfullPick = calculatedScore < 0 ? false : true
        return {
          [name]: pick,
          calculatedScore,
          successfullPick
        }
      })
    const totalScore = arrayedResults.reduce((accumulator, obj)=> (obj.calculatedScore + accumulator),0)
    const totalSuccessfulPicks = arrayedResults.reduce((accumulator, obj)=> {
      const correctPick = obj.successfullPick ? 1 : -1
      return correctPick + accumulator
    },0)
    return {
      name: person.Name,
      results: arrayedResults,
      totalScore,
      totalSuccessfulPicks
    }
  })

  const buildResultsDisplay = (array, dataType, location) => {
    let string = ''
    const sortedArray = array.sort((a,b) => (b[dataType] - a[dataType]))
    for (let i = 0; i < sortedArray.length; i++){
      const item = sortedArray[i]
      if (item) {
        string += `
        <li>
          <div class="character row">
            <div class="character-header">${item.name}</div>
            <div>${item[dataType]}</div>
          </div>
        </li>
        `
      }
    }

    $('.'+location).append(string)
  }

  buildResultsDisplay(groomedResults, 'totalScore', 'overall-score')
  buildResultsDisplay(groomedResults, 'totalSuccessfulPicks', 'highest-accurate-picks')

  const expandGraphs = () => {
    CHARACTERS.forEach((char, index) => {
      $('.graph-section').append(`
        <div class='graph'>
          <canvas id="${char.id}"></canvas>
        </div>
        `)
      const options = [
          "Definitely Dies (4)",
          "Probably Dies (2)",
          "Maybe Dies (1)",
          "Survives (0)"
        ]
      const backgroundColor = [
        'red',
        'orange',
        'yellow',
        'green'
      ]
      const rawData = options.map((option)=>{
        return groomedResults.filter((person) => (
          person.results[index][char.name] === option
        )).length
      })
      console.log({rawData});
      const data = {
        datasets: [{
          data: rawData,
          backgroundColor
        }],
        labels: options.map((item) => (
          item.split('(')[0]
        ))
      }
      const canvas = document.getElementById(char.id)
      new Chart(canvas,{
    		type: 'pie',
    	    data: data,
    	    options: {
            title: {
              display: true,
              text: char.name
            }
          }
    	});
    })
  }
  expandGraphs()
})
