function creation(input){
	console.log("The architect " + input[0] +" will need " + input[1] * 3 +" hours to complete " + input[1] +" project/s.");
}

function petShop(input){
	console.log(input[0]*2.5 + input[1]*4 +"lv.");
}

function yardGreening(input){
	let num = Number(input);
	let result = input * 7.61;
	let discount = 0.18 * result;
	let finalPrice = result - discount;
	console.log("The final price is: " + finalPrice + " lv.");
	console.log("The discount is: " + discount + " lv.");
}


function converter(input){
	let usd = Number(input[0]);
	let bgn = usd * 1.79549;
	console.log(bgn);
}

function radiansToDegrees(input){
	let radians = Number(input[0]);
	let degrees = radians * 180 / Math.PI;
	console.log(degrees.toFixed(0));
}

function depositCalc(input){
	let sum = Number(input[0]);
	let depositLenght = Number(input[1]);
	let annualInterest = Number(input[2]);
	let interest = (sum * annualInterest)*0.01;
	let monthlyInterest = interest / 12;
	let totalSum = sum + (depositLenght * monthlyInterest);

	console.log(totalSum);
}

function vacationBookList(input){
	let numPages = Number(input[0]);
	let pagesPerHour = Number(input[1]);
	let numDays = Number(input[2]);

	let hoursToRead = numPages / pagesPerHour;
	let totalDays = hoursToRead / numDays;

	console.log(totalDays);
} 

function birthdayParty (input){
	let hallRent = Number(input[0]);
	let cakePrice = hallRent * 0.2;
	let drinkPrice = cakePrice - (cakePrice * 0.45);
	let animatorPrice = hallRent / 3;
	let totalSum = hallRent + cakePrice + drinkPrice + animatorPrice;
	console.log(totalSum);
}

function charityCampaign(input){
	let numDays = Number(input[0]);
	let numBakers = Number(input[1]);
	let numCakes = Number(input[2]);
	let numWaffles = Number(input[3]);
	let numCrepes = Number(input[4]);

	let cakesPerBaker = numCakes * 45;
	let wafflesPerBaker = numWaffles * 5.8;
	let crepesPerBaker = numCrepes * 3.2;

	let totalPerDay = (cakesPerBaker + wafflesPerBaker + crepesPerBaker) * numBakers;
	let totalCampaignSum = totalPerDay * numDays;
	let totalAfterExpenses =  totalCampaignSum - (totalCampaignSum / 8);

	console.log(totalAfterExpenses);
}



