const WORKING_DAYS_IN_MONTH = 20;
const MAX_HOURS_IN_MONTH = 160;
let empDailyWageMap = new Map();
let empDailyHrsMap = new Map();
let empDailyWageArr = new Array();
let totalEmpHours = 0;
let totalWorkingDays = 0;
function totalWages(totalWage, dailyWage) {
    return totalWage + dailyWage;
}
	const findTotal = (totalVal, dailyVal) => {
		return totalVal + dailyVal;
	}

	let totalHours = Array.from(empDailyHrsMap.values()).reduce(findTotal, 0);
	let totalSalary = empDailyWageArr
		.filter(dailyWage => dailyWage > 0)
		.reduce(findTotal, 0);
	console.log('UC-9 Employee Wage with Arrow. : ' + 'Total Hours: ' + totalHours + ' Total Wages: ' + totalSalary);

	let nonWorkingDays = new Array();
	let partWorkingDays = new Array();
	let fullWorkingDays = new Array();
	empDailyHrsMap.forEach((value, key, map) => {
		if (value == 8) {
			fullWorkingDays.push(key);
		} else if (value == 4) {
			partWorkingDays.push(key);
		} else {
			nonWorkingDays.push(key);
		}
	});

	console.log(' FullTime Working Days: ' + fullWorkingDays);
	console.log(' PartTime Working Days: ' + partWorkingDays);
	console.log(' Non Working Days: ' + nonWorkingDays);

