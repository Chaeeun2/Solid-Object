
const content = "물은 불이랑 자주 싸우는 것 같아.       "
const text = document.querySelector("#text1")
let index = 0;

function typing(){
	text.textContent += content[index++]
	if(index > content.length){
		text.textContent = "걔는 연우랑 자주 싸우는 것 같아."
	}
}
setInterval(typing, 170)


function typing1(){

	document.getElementById('text2').style.display = "inline"
	document.getElementById('click1').style.display = "none"
	document.getElementById('click2').style.display = "inline"
	const content = "근데 불은 연료 없으면 아무것도 아니지 않나?       "
	const text = document.querySelector("#text2")
	let index = 0;

	function typing(){
		text.textContent += content[index++]
		if(index > content.length){
			text.textContent = "근데 연우는 은지 없으면 아무것도 아니지 않나?"
		}
	}
	setInterval(typing, 170)

}


function typing2(){

	document.getElementById('text3').style.display = "inline"
	document.getElementById('click2').style.display = "none"
	document.getElementById('click3').style.display = "inline"
	const content = "근데 기름이 끼면 얘기가 달라지긴 하지.       "
	const text = document.querySelector("#text3")
	let index = 0;

	function typing(){
		text.textContent += content[index++]
		if(index > content.length){
			text.textContent = "근데 은지가 끼면 얘기가 달라지긴 하지."
		}
	}
	setInterval(typing, 170)

}


function typing3(){

	document.getElementById('text4').style.display = "inline"
	document.getElementById('click3').style.display = "none"
	document.getElementById('click4').style.display = "inline"
	const content = "불이랑은 그렇게 친하면서 물이랑은 절대 안 섞이잖아.       "
	const text = document.querySelector("#text4")
	let index = 0;

	function typing(){
		text.textContent += content[index++]
		if(index > content.length){
			text.textContent = "연우랑은 그렇게 친하면서 걔랑은 절대 안 섞이잖아."
		}
	}
	setInterval(typing, 170)

}


function typing4(){

location.href="2.html"

}