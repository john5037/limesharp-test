
/*
     This function is used to repeat 3 times the content of array
	 @param numbers array 
     @result array	 
*/

const NUM_REPEAT = 3;

function repeat(array=[], repeat=NUM_REPEAT) {
	let val = Array(repeat).fill(array).flat()
	console.log(typeof val)
	console.log(val)
	return val
}

/*
     This function is used to remove Vowels except First Letter
	 @param  String 
     @result String	 
*/
function reformat(str="") {
	return str.charAt(0).toUpperCase()+str.slice(1).toLowerCase().replace(/[aeiou]/ig,'');
}

