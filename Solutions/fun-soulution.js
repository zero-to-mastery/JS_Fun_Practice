//Write a function identity that takes an argument and returns that argument
	const identity = (x) => { return x };
	identity(5); //returns 5 

//Write a binary function addb that takes two numbers and returns their sum	
	const addb = (x,y) =>{ return x + y };
	addb(5,6); //return 11
//Write a binary function subb that takes two numbers and returns their difference	
	const subb = (x,y) =>{ return x - y };
	subb(11,3) //return 8

//Write a binary function mulb that takes two numbers and returns their product
	const mulb = (x,y) =>{ return x * y };

//Write a binary function minb that takes two numbers and returns the smaller one
	const minb = (x,y) =>{ 
		if (x>y) {
			return y;
		}else{
			return x;
		}
	};

//Write a binary function maxb that takes two numbers and returns the larger one
	const maxb = (x,y) =>{ 
		if (x > y) {
			return x;
		}else{
			return y;
		}
	};