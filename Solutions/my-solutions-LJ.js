//my solutions

//identity solution
const identity = (x) => x;
console.log(identity(3));

//addb
const addb = (a, b) => a + b;
console.log(addb(3, 4));

//subb
const subb = (a, b) => a - b;
console.log(subb(3, 4));

//minb
const minb = (a ,b) => {
	if(a > b){
		return b;
	} else {
		return a;
	}
}
console.log(minb(3, 4));
///
