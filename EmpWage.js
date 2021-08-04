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
while ((totalWorkingDays < WORKING_DAYS_IN_MONTH) && empHours <= MAX_HOURS_IN_MONTH) {
    totalWorkingDays++;
    let employeeCheck = Math.floor(Math.random() * 10 % 3);
    let empHours = getWorkingHours(employeeCheck);
    totalEmpHours += empHours;
    empDailyWageArr.push(calculateDailyWage(empHours));
    empDailyHrsMap.set(totalWorkingDays, empHours);
    empDailyWageMap.set(totalWorkingDays, calculateDailyWage(empHours));
}
console.log(empDailyWageMap);
console.log('UC8-A Emp Wage Map totalHours: ' + Array.from(empDailyWageMap.values()).reduce(totalWages, 0));
