//History
function getHistory(){
	return document.getElementById("history-value").innerText;
}
function printHistory(num){
	document.getElementById("history-value").innerText=num;
}

//Output
function getOutput(){
	return document.getElementById("output-value").innerText;
}
function printOutput(num){
	if(num===""){
		document.getElementById("output-value").innerText=num;
	}
	else{
		document.getElementById("output-value").innerText=getFormattedNumber(num);
	}	
}

//Format Number
function getFormattedNumber(num){
	if(num==="-"){
		return "";
	}
	const n = Number(num);
	const value = n.toLocaleString("en");
	return value;
}
function reverseNumberFormat(num){
	return Number(num.replace(/,/g,''));
}


// On operator clicked
const operator = document.getElementsByClassName("operator");
for(let i =0;i<operator.length;i++){
	operator[i].addEventListener('click',function(){
		if(this.id==="all-clear"){
			printHistory("");
			printOutput("");
		}
		else if(this.id==="clear-entry"){
			let output=reverseNumberFormat(getOutput()).toString();
			if(output){
				output= output.substr(0,output.length-1);
				printOutput(output);
			}
		}
		else{
			let output=getOutput();
			let history=getHistory();
			if(output===""&&history!==""){
				if(isNaN(history[history.length-1])){
					history= history.substr(0,history.length-1);
				}
			}
			if(output!=="" || history!==""){
				output= output===""?output:reverseNumberFormat(output);
				history=history+output;
				if(this.id==="="){
					const result=eval(history);
					printOutput(result);
					printHistory("");
				}
				else{
					history=history+this.id;
					printHistory(history);
					printOutput("");
				}
			}
		}
		
	});
}

//On number clicked
const number = document.getElementsByClassName("number");
for(let i =0;i<number.length;i++){
	number[i].addEventListener('click',function(){
		let output=reverseNumberFormat(getOutput());
		if(output!=NaN){
			output=output+this.id;
			printOutput(output);
		}
	});
}
