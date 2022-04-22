	const content = "물은 차갑게 얼 때 더 조심해야 돼.       "
	const text = document.querySelector("#text1")
	let index = 0;

	function typing(){
		text.textContent += content[index++]
		if(index > content.length){
			text.textContent = "걔는 차갑게 굴 때 더 조심해야 돼. "
		}
	}
	setInterval(typing, 170)


function typing1(){

	document.getElementById('body').style.background = "url('bg2.jpg')"
	document.getElementById('text2').style.display = "block"
	document.getElementById('click1').style.display = "none"
	document.getElementById('click2').style.display = "block"
	const content = "평소엔 되게 유해보이잖아.       "
	const text = document.querySelector("#text2")
	let index = 0;

	function typing(){
		text.textContent += content[index++]
		if(index > content.length){
			text.textContent = "평소엔 되게 착해보이잖아."
		}
	}
	setInterval(typing, 170)

}


function typing2(){

	document.getElementById('body').style.background = "url('bg3.jpg')"
	document.getElementById('text3').style.display = "block"
	document.getElementById('click2').style.display = "none"
	document.getElementById('click3').style.display = "block"
	const content = "근데 차가울 땐 진짜 딱딱하거든.       "
	const text = document.querySelector("#text3")
	let index = 0;

	function typing(){
		text.textContent += content[index++]
		if(index > content.length){
			text.textContent = "근데 차가울 땐 진짜 까칠하거든."
		}
	}
	setInterval(typing, 170)

}


function typing3(){

	document.getElementById('body').style.background = "url('bg4.jpg')"
	document.getElementById('text4').style.display = "block"
	document.getElementById('click3').style.display = "none"
	document.getElementById('click4').style.display = "block"
	const content = "그럴 땐 함부로 건드리지 말고, 그냥 가만히 둬.       "
	const text = document.querySelector("#text4")
	let index = 0;

	function typing(){
		text.textContent += content[index++]
		if(index > content.length){
			text.textContent = "그럴 땐 함부로 자극하지 말고, 그냥 혼자 냅둬."
		}
	}
	setInterval(typing, 170)

}


function typing4(){

	document.getElementById('body').style.background = "#2224f4"
	document.getElementById('text5').style.display = "block"
	document.getElementById('click4').style.display = "none"
	document.getElementById('click5').style.display = "block"
	const content = "가만히 두면 금방 원래대로 돌아오니까.       "
	const text = document.querySelector("#text5")
	let index = 0;

	function typing(){
		text.textContent += content[index++]
		if(index > content.length){
			text.textContent = "혼자 냅두면 금방 차분하게 돌아오니까."
		}
	}
	setInterval(typing, 170)

}



function typing5(){

location.href="file:///Users/lyuchaeeun/Desktop/1.%20VD3/03_%E1%84%91%E1%85%A7%E1%86%AB%E1%84%8C%E1%85%B5%E1%86%B8%E1%84%90%E1%85%A1%E1%84%8B%E1%85%B5%E1%84%91%E1%85%A9%E1%84%80%E1%85%B3%E1%84%85%E1%85%A2%E1%84%91%E1%85%B5/0422_Week%208/web/4/index4.html"

}

