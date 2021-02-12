
const identity = (x) => {
	return x;
}

const addb = (a,b) => {
	return a+b;
} 

function subb(a,b) {
	return a-b;
}

const mulb = (a,b) => {
	return a*b;
}

const min = (a,b) => {
	if (a<b) {
		return a;
	} else return b;
}

const max = (a,b) => {
	if (a>b) {
		return a;
	} else return b;
}

const add = (...arguments) => {
	let sum = 0;
	for (let i=0; i<arguments.length; i++) {
		sum+= arguments[i];
	}
	return sum;
}

const sub = (...arguments) => {
	let diff = 0;
	for (let i=0; i<arguments.length; i++) {
		diff-= arguments[i];
	}
	return diff;
}

const mul = (...arguments) => {
	let prod = 0;
	for (let i=0; i<arguments.length; i++) {
		prod*= arguments[i];
	}
	return prod;
}

const min = (...arguments) => {
	let num = arguments[0];
	for (let i=0; i<arguments.length; i++) {
		if (num<arguments[i]) {
			num = arguments{i};
		}

	}
	return num;
}

const max = (...arguments) => {
	let num = arguments[0];
	for (let i=0; i<arguments.length; i++) {
		if (num>arguments[i]) {
			num = arguments{i};
		}

	}
	return num;
};

const addRecurse = (...args) => {
	if (args.length === 1)
		return Number(args[0]);
	else
		return Number(args[args.length-1]) + addRecurse(...args.slice(0,-1));
};

const mulRecurse = (...args) => {
	if (args.length === 1)
		return Number(args[0]);
	else
		return Number(args[args.length-1]) * addRecurse(...args.slice(0,-1));
};

const minRecurse = (...args) => {
	if (args.length === 1)
		return Number(args[0]);
	else
		return Number(args[args.length-1]) < addRecurse(...args.slice(0,-1)) ? Number(args[args.length-1]) : addRecurse(...args.slice(0,-1));
}

const maxRecurse = (...args) => {
	if (args.length === 1)
		return Number(args[0]);
	else
		return Number(args[args.length-1]) > addRecurse(...args.slice(0,-1)) ? Number(args[args.length-1]) : addRecurse(...args.slice(0,-1));
}


const not = (func) => {
	func = false;
	return func;
}