
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

	var click = document.getElementById('click');

	if(click.innerText == "?") {
		click.innerText = "??";
		document.getElementById('txt2').style.display = "block"
		document.getElementById('clickbox').style.padding = "0px 300px"
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


	else if(click.innerText == "??") {
		click.innerText = "???";
		document.getElementById('txt3').style.display = "block"
		document.getElementById('clickbox').style.padding = "0px 120px"
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

	else if(click.innerText == "???") {
		click.innerText = "????";
		document.getElementById('txt4').style.display = "block"
		document.getElementById('clickbox').style.padding = "0px 600px"
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

	else if (click.innerText == "????") {
		location.href="file:///Users/lyuchaeeun/Desktop/1.%20VD3/03_%E1%84%91%E1%85%A7%E1%86%AB%E1%84%8C%E1%85%B5%E1%86%B8%E1%84%90%E1%85%A1%E1%84%8B%E1%85%B5%E1%84%91%E1%85%A9%E1%84%80%E1%85%B3%E1%84%85%E1%85%A2%E1%84%91%E1%85%B5/0422_Week%208/web/2/index2.html"
	}
}

