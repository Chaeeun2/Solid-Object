	const content = "물 조심해야 돼.       "
	const text = document.querySelector("#text1")
	let index = 0;

	function typing(){
		text.textContent += content[index++]
		if(index > content.length){
			text.textContent = "걔 조심해야 돼."
		}
	}
	setInterval(typing, 170)

function typing1(){

	document.getElementById('body').style.background = "#c70013"
	document.getElementById('text2').style.display = "inline"
	document.getElementById('click1').style.display = "none"
	document.getElementById('click2').style.display = "inline"
	const content = "물은 열 받으면 부글부글 끓어. 그게 눈으로도 보여.       "
	const text = document.querySelector("#text2")
	let index = 0;

	function typing(){
		text.textContent += content[index++]
		if(index > content.length){
			text.textContent = " 걔는 열 받으면 부글부글 끓어. 그게 얼굴에서도 보여."
		}
	}
	setInterval(typing, 170)

}


function typing2(){

	document.getElementById('body').style.background = "#de969d"
	document.getElementById('text3').style.display = "inline"
	document.getElementById('click2').style.display = "none"
	document.getElementById('click3').style.display = "inline"
	document.getElementById('text1').style.background = "rgba(255,255,255,0.15)"
	document.getElementById('text2').style.background = "rgba(255,255,255,0.15)"
	document.getElementById('click4').style.border = "0.1em solid rgba(255,255,255,0.15)"
	const content = "근데 계속 열 받으면 오히려 형체가 없어지더라고.       "
	const text = document.querySelector("#text3")
	let index = 0;

	function typing(){
		text.textContent += content[index++]
		if(index > content.length){
			text.textContent = "근데 계속 열 받으면 오히려 자리를 피하더라고."
		}
	}
	setInterval(typing, 170)

}


function typing3(){

	document.getElementById('body').style.background = "#dadada"
	document.getElementById('text4').style.display = "inline"
	document.getElementById('click3').style.display = "none"
	document.getElementById('click4').style.display = "inline"
	document.getElementById('text1').style.background = "rgba(255,255,255,0.01)"
	document.getElementById('text2').style.background = "rgba(255,255,255,0.01)"
	document.getElementById('text3').style.background = "rgba(255,255,255,0.01)"
	document.getElementById('text4').style.background = "rgba(255,255,255,0.1)"
	document.getElementById('click4').style.border = "0.1em solid rgba(255,255,255,0.1)"
	const content = "방 온도를 그렇게 만들어놓고 홀랑 사라진다니까.       "
	const text = document.querySelector("#text4")
	let index = 0;

	function typing(){
		text.textContent += content[index++]
		if(index > content.length){
			text.textContent = "분위기를 그렇게 만들어놓고 홀랑 사라진다니까."
		}
	}
	setInterval(typing, 170)

}


function typing4(){

location.href="file:///Users/lyuchaeeun/Desktop/1.%20VD3/03_%E1%84%91%E1%85%A7%E1%86%AB%E1%84%8C%E1%85%B5%E1%86%B8%E1%84%90%E1%85%A1%E1%84%8B%E1%85%B5%E1%84%91%E1%85%A9%E1%84%80%E1%85%B3%E1%84%85%E1%85%A2%E1%84%91%E1%85%B5/0422_Week%208/web/3/index3.html"

}

