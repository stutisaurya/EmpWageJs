const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;
const MAX_HRS_IN_MONTH = 160;
const NUM_OF_WORKING_DAYS = 20;
let totalEmpHrs = 0;
let totalWorkingDays = 0
let empDailyWageArray = new Array();

{
	function calculateDailyWage(empHours) {
		return empHours * WAGE_PER_HOUR;
	}

	const WORKING_DAYS_IN_MONTH = 20;
	const MAX_HOURS_IN_MONTH = 160;
	let totalEmpHours = 0;
	let totalWorkingDays = 0;
	let empDailyWageArr = new Array();
	while ((totalWorkingDays < WORKING_DAYS_IN_MONTH) && empHours <= MAX_HOURS_IN_MONTH) {
		totalWorkingDays++;
		let employeeCheck = Math.floor(Math.random() * 10 % 3);
		let empHours = getWorkingHours(employeeCheck);
		totalEmpHours += empHours;
		empDailyWageArr.push(calculateDailyWage(empHours));
	}
	let empWage = calculateDailyWage(totalEmpHours);
	console.log('Total Working Days ' + totalWorkingDays + ' Total Emp Hours ' + totalEmpHours + ' Employee Monthly Wage ' + empWage);
	console.log(empDailyWageArr);
    	// UC7-A Calculate total wage using Array forEach Traversal reduce method
	let totEmpWage = 0;
	function sum(dailyWage) {
		totEmpWage += dailyWage;
	}
	empDailyWageArr.forEach(sum);
	console.log('Total Working Days ' + totalWorkingDays + ' Total Emp Hours ' + totalEmpHours + ' Employee Monthly Wage ' + totEmpWage);

	// reduce method
	function totalWages(totalWage, dailyWage) {
		return totalWage + dailyWage;
	}
	console.log('Employee Wage with reduce ' + empDailyWageArr.reduce(totalWages, 0));

	//UC7-B Show the day along with teh Daily wage using the array map helper function
	let dailyCntr = 0;
	function mapDayWithWage(dailyWage) {
		dailyCntr++;
		return dailyCntr + " = " + dailyWage;
	}
	let mapDayWithWageArr = empDailyWageArr.map(mapDayWithWage);
	console.log('Daily Wage Map');
	console.log(mapDayWithWageArr);

	// UC7-C Use the filter function to find the day Employee worked full time
	function fulltimeWage(dailyWage) {
		return dailyWage.includes('160');
		//return dailyWage == '160';
	}
	let fullDayWageArrayFilter = mapDayWithWageArr.filter(fulltimeWage);
	console.log('Daily age filter when FullTime wage earned');
	console.log(fullDayWageArrayFilter);

	// UC7-D Find the first occurence when full time age as earned using the find function
	function findFullTimeWage(dailyWage) {
		return dailyWage.includes('160');
	}
	console.log('UC7-D - FirstTime full time wage was earned in on day: ' + mapDayWithWageArr.find(findFullTimeWage));

	// UC7-E Check if Every Element of Full time wage is holding full time wage
	function isEveryFullTimeWage(dailyWage) {
		return dailyWage.includes('160');
	}
	console.log('UC7-E - Check Every Element have full time Wage: ' + fullDayWageArrayFilter.every(isEveryFullTimeWage));

	// UC7-F Check if All Element of Full time wage is holding full time wage
	function isAnyPartTimeWage(dailyWage) {
		return dailyWage.includes('160');
	}
	console.log('UC7-F - Check All Element have full time Wage: ' + mapDayWithWageArr.some(isAnyPartTimeWage));

	// UC7-G Find number of days Employee worked
	function totalDaysWorked(noOfDays, dailyWage) {
		if (dailyWage > 0) {
			return noOfDays + 1;
		}
		return noOfDays;
	}

	console.log('Number of days Employee Worked: ' + empDailyWageArr.reduce(totalDaysWorked, 0));
}


