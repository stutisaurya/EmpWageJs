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
