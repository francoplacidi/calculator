console.log("Calculator App");

function sum(){
	const shape = document.getElementById('shape');	
	let operatingA = shape['operatingA'];
	let operatingB = shape['operatingB'];
	let result = parseInt(operatingA.value) + parseInt(operatingB.value);
		if(isNaN(result)){
			result = 'The operation does not include numbers';
		}
	document.getElementById('result').innerHTML = `Result: ${result}`;
	console.log(`Result: ${result}`);
}
