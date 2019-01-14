let d = document.getElementById('display');
let na = 0;

function appendNum(e){
   let n = e.innerHTML;
   d.value += n; 
}

function optr(e){
	let n1 = parseInt(d.value);
	let op1;
	let op = e.innerHTML;
	switch(op){
		case "+":
				na = na+parseInt(d.value);
				d.value="";	
				op1="+"
				break;
		case "-":
				na = na-parseInt(d.value);
				d.value="";	
				op1="-"
				break;
		case "*":
				na = na*parseInt(d.value);
				d.value="";	
				op1="*"
				break;
		case "/":
				na = na/parseInt(d.value);
				d.value="";	
				op1="/"
				break;
		case "=":
				if(op1 =="+"){
					na = na+parseInt(d.value);
					d.value="";	

				}
				else if(op1 =="-")
		default:
				console.log('no operator defined');
				break
	}
	d.value = "";
}