const squares = 36
const rows = 6
const columns = 6


console.log($(".red-cross-puzzle"))

$(document).ready(function(){
	$(".red-cross-puzzle").click(function(e) {
		e.preventDefault()
		console.log("a thing ", e)
		debugger
	})
})