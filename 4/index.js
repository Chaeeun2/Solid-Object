
const content = "근데 나는 물 좋아해.       "
const text = document.querySelector("#text1")
let index = 0;

function typing(){
	text.textContent += content[index++]
	if(index > content.length){
		text.textContent = "근데 나는 걔 좋아해."
	}
}
setInterval(typing, 170)



function typing1(){
	document.getElementById('txt2').style.display = "block"
	document.getElementById('click1').style.border = '0.1em solid transparent'
	document.getElementById('click2').style.border = '0.1em solid white'
	const content = "크다가, 작다가, 뾰족하다가, 동그랗다가.       "
	const text = document.querySelector("#text2")
	let index = 0;

	function typing(){
		text.textContent += content[index++]
		if(index > content.length){
			text.textContent = "까칠하다가, 유하다가, 나서다가, 조용하다가."
		}
	}
	setInterval(typing, 170)

}


function typing2(){
	document.getElementById('txt3').style.display = "block"
	document.getElementById('click2').style.border = '0.1em solid transparent'
	document.getElementById('click3').style.border = '0.1em solid white'
	const content = "제멋대로긴 한데, 그릇에 맞게 형태를 잘 맞추잖아.       "
	const text = document.querySelector("#text3")
	let index = 0;

	function typing(){
		text.textContent += content[index++]
		if(index > content.length){
			text.textContent = "제멋대로긴 한데, 상황에 맞게 성격을 잘 맞추잖아."
		}
	}
	setInterval(typing, 170)
}

function typing3(){
	document.getElementById('txt4').style.display = "block"
	document.getElementById('click3').style.border = '0.1em solid transparent'
	document.getElementById('click4').style.border = '0.1em solid white'
	const content = "그게 다 성질이 명확하니까 가능한 거지.       "
	const text = document.querySelector("#text4")
	let index = 0;

	function typing(){
		text.textContent += content[index++]
		if(index > content.length){
			text.textContent = "그게 다 내면이 단단하니까 가능한 거지."
		}
	}
	setInterval(typing, 170)
}

function typing4(){
	location.href="file:///Users/lyuchaeeun/Desktop/1.%20VD3/03_%E1%84%91%E1%85%A7%E1%86%AB%E1%84%8C%E1%85%B5%E1%86%B8%E1%84%90%E1%85%A1%E1%84%8B%E1%85%B5%E1%84%91%E1%85%A9%E1%84%80%E1%85%B3%E1%84%85%E1%85%A2%E1%84%91%E1%85%B5/0422_Week%208/web/5/index5.html"
}