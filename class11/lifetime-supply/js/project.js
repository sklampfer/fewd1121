// grab all interactive elements
var age = document.getElementById('age');
var max_age = document.getElementById('max-age');
var item = document.getElementById('item');
var num_per_day = document.getElementById('num-per-day');
var click_me = document.getElementById('click-me');
var solution = document.getElementById('solution');
var drink = document.getElementById('drink')

// grab all stored data
var myAge;
var myMaxAge;
var mySolution;
var myDrink;
var myNumPerDay

//set up trigger and what happens when trigger is fired
click_me.onclick = function(){
		//what happens
		//assign values
		myAge = age.value;
		myMaxAge = max_age.value;
		myNumPerDay = num_per_day.value;
		mySolution = (myMaxAge - myAge) * 365 * myNumPerDay;
		myDrink = item.value;
		// console.log(mySolution)
		solution.innerHTML = mySolution;
		drink.innerHTML = myDrink;
}
