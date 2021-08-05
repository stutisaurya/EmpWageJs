const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;
const NUM_OF_WORKING_DAYS = 20;
const MAX_HRS_IN_MONTH = 160;
let empDailyWageArray = new Array();
let empDailyWageMap = new Map();
let empDailyHrsMap = new Map();
let empDailyHrsAndWageArr = new Array();

function calcDailyWage(empHrs){
    return empHrs * WAGE_PER_HOUR;
}

function getWorkingHours(empCheck){
switch (empCheck) {
    case IS_PART_TIME:
        return PART_TIME_HOURS;
        break;
    case IS_FULL_TIME:
        return FULL_TIME_HOURS;
        break;
    default:
        return 0;
}
}
const WORKING_DAYS_IN_MONTH = 20;
const MAX_HOURS_IN_MONTH = 160;
let empDailyHoursAndWageArr = new Array();
let totalEmpHours = 0;
let totalWorkingDays = 0;
function totalWages(totalWage, dailyWage) {
    return totalWage + dailyWage;
}
while ((totalWorkingDays < WORKING_DAYS_IN_MONTH) && empHours <= MAX_HOURS_IN_MONTH) {
    totalWorkingDays++;
    let employeeCheck = Math.floor(Math.random() * 10 % 3);
    let empHours = getWorkingHours(employeeCheck);
    totalEmpHours += empHours;
    empDailyHoursAndWageArr.push(
        {
            dayNum: totalWorkingDays,
            dailyHours: empHours,
            dailyWage: calculateDailyWage(empHours),
            toString() {
                return '\nDay' + this.dayNum + ' => Working Hours is ' + this.dailyHours +
                    ' and Wage Earned = ' + this.dailyWage
            }
        });
}

// UC10 - Objects 
console.log('UC- 10 Showing the Daily Hours Worked and Wage Earned: ' + empDailyHoursAndWageArr)

