// js/models/Day.js

var app = app || {};

// Day Model
// ----------
// The Day model contains a total of all the foods consumed in one day
// and the sum of their nutrients

app.Day = Backbone.Model.extend({

	model: Food,

	// The Day model has the following attributes

	// Year, e.g. 2015
	// Day_num, 1-365 (or 366 if it’s a leap year)
	// isLeapYear, true or false, this will change the value of num
	// Month_num - 1-12
	// Month_name, january, february, etc - I don't think I need this, as it's
	// redundant information if we have the month number
	// Day_name, e.g. monday, tuesday
	// Total calories
	// Total protein
	// Total carbs
	// Total fiber
	// Total Vitamin A
	// Total Vitamin C
	// Total Calcium
	// Total Iron
	// Food_ids - array of IDs corresponding to foods consumed in the FoodList

	defaults: {
		year: 2015,
		dayNumber: 1,
		isLeapYear: false,
		monthNumber: 1,
		dayName: "Thursday",
		calorieTotal: 0,
		proteinTotal: 0,
		carbTotal: 0,
		fiberTotal: 0,
		vitaminATotal: 0,
		vitaminCTotal: 0,
		calciumTotal: 0,
		ironTotal: 0
	},

	initialize: function() {
		// body...
	},

	getYear: function() {
		return this.get('year');
	},

	getDay: function() {
		return this.get('dayNumber');
	},

	getCalorieTotal: function() {
		return this.get('calorieTotal');
	},

	getProteinTotal: function() {
		return this.get('proteinTotal');
	},

	getCarbTotal: function() {
		return this.get('carbTotal');
	},

	getFiberTotal: function() {
		return this.get('fiberTotal');
	},

	getVitaminATotal: function() {
		return this.get('vitaminATotal');
	},

	getVitaminCTotal: function() {
		return this.get('vitaminCTotal');
	},

	getCalciumTotal: function() {
		return this.get('calciumTotal');
	},

	getIronTotal: function() {
		return this.get('ironTotal');
	}

});