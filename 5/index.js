
const content = "물처럼 살아보고 싶지 않아?     "
const text = document.querySelector("#text")
let index = 0;

function typing(){
	text.textContent += content[index++]
	if(index > content.length){
		text.textContent = "걔처럼 살아보고 싶지 않아?"
		document.getElementById('body').style.background = "#dcda00"
		document.getElementById('click').style.border = "0.1em solid #2224f4"
		document.getElementById('text').style.background = "#2224f4"
		document.getElementById('text').style.color = "#dcda00"

	}
}
setInterval(typing, 170)