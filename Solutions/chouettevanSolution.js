const identity = x => x;
const addb = (a,b) => a + b;
const subb = (a,b) => a - b;
const mulb = (a,b) => a * b;
const minb = (a,b) => a < b ? a : b;
const maxb = (a,b) => a > b ? a : b;
const add = (...numbers) => numbers.reduce((acc,value) => acc + value,0);
const sub = (...numbers) => numbers.reduce((acc,value) => acc - value,numbers[0]*2);
const mul = (...numbers) => numbers.reduce((acc,value) => acc * value,0);
const min = (...numbers) => numbers.reduce((acc,value) => acc < value ? acc : value);
const max = (...numbers) => numbers.reduce((acc,value) => acc > value ? acc : value);
const addRecurse = (...numbers) => {
	if (numbers.length === 1) {
		return numbers[0];
	} else {
		let a = numbers[0];
		numbers.shift();
		return a + addRecurse(...numbers);
	}
};
const mulRecurse = (...numbers) => {
	if (numbers.length === 1) {
		return numbers[0];
	} else {
		let a = numbers[0];
		numbers.shift();
		return a * mulRecurse(...numbers);
	}
};
const minRecurse = (...numbers) => {
	if (numbers.length === 1) {
		return numbers[0];
	} else {
		let a = numbers[0];
		numbers.shift();
		return a < minRecurse(...numbers) ? a : minRecurse(...numbers);
	}
};
const maxRecurse = (...numbers) => {
	if (numbers.length === 1) {
		return numbers[0];
	} else {
		let a = numbers[0];
		numbers.shift();
		return a > maxRecurse(...numbers) ? a : maxRecurse(...numbers);
	}
};
const not = func => {
	const func2 =  arg => {
		return func(arg) ? false : true;
	};
	return func2;
};
const acc = (func,initial) => {
	const answer = (...args) => args.reduce(func,initial);
	return answer;
};
const accPartial = (func,start,end) => {
	const answer = (array) => {
		const newArray = array.filter((item,index) => {
			if (index >= start && index < end) {
				return true;
			}
			return false;
		});
		return newArray.reduce(func);
	}; 
	return answer;
};
const fill = num => {
	let array = [];
	for (let i=0;i < num;i++) {
		array.push(num);
	}
	return array;
};


