let input = document.querySelector('#input');
let output = document.querySelector('#output');

function convertBinToDec(str) {
	let result = 0;
	let previousValue = 0;
	for (let i = 0; i < str.length; i++) {
		result = previousValue * 2 + parseInt(str[i]);
		previousValue = result;
	}
	return result;
}

function convert() {
	let isValid = true;
	for (let i = 0; i < input.value.length; i++) {
		if (parseInt(input.value[i]) !== 0 && parseInt(input.value[i]) !== 1) {
			isValid = false;
		} else {
			isValid = true;
		}
	}
	if (input.value.length >= 8) {
		alert('Binary number has to have up to 8 digits');
		input.value = '';
	} else if (!isValid) {
		alert(`Binary number only has 0's and 1's`);
		input.value = '';
	}
	if (isValid) {
		output.value = convertBinToDec(input.value);
	}
}
addEventListener('keyup', convert);
