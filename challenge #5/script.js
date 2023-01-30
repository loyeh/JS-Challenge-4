class MyDate {
  constructor(year, month, dayOfMonth, dayOfWeek) {
    (this.year = year), (this.month = month), (this.dayOfMonth = dayOfMonth), (this.dayOfWeek = dayOfWeek);
  }
}

class DeliveryTime {
  constructor(year, hour, minute, secound) {
    (this.year = year), (this.hour = hour), (this.minute = minute), (this.secound = secound);
  }
}

const referenceYear = new MyDate(1400, 1, 1, 1);

const referenceYearDelivery = new DeliveryTime(1400, 13, 7, 28);

const fullDayLength = 24 * 60 * 60;

const yearDeliveryDifference = 5 * 3600 + 48 * 60 + 46;

function deliveryTimeCalculator(year) {
  let yearsDifference = year - referenceYearDelivery.year;
  let referenceDeliverySecound = referenceYearDelivery.hour * 3600 + referenceYearDelivery.minute * 60 + referenceYearDelivery.secound;
  return (yearsDifference * yearDeliveryDifference + referenceDeliverySecound) % fullDayLength;
}

function isLeapYear(year) {
  return deliveryTimeCalculator(year) < fullDayLength / 2 && deliveryTimeCalculator(year + 1) > fullDayLength / 2;
}

function maxDaysOfMonth(year, month) {
  if (month <= 6) {
    return 31;
  } else if (month < 12 || isLeapYear(year)) {
    return 30;
  } else {
    return 29;
  }
}
let today = new MyDate(1400, 1, 1, 1);
function tomorrowCalc(today) {
  let year = today.year;
  let month = today.month;
  let dayOfMonth = today.dayOfMonth;
  let dayOfWeek = today.dayOfWeek;
  dayOfMonth++;
  dayOfWeek++;
  if (dayOfMonth > maxDaysOfMonth(year, month)) {
    if (month == 12) {
      year++;
      month = 1;
    } else {
      month++;
    }
    dayOfMonth = 1;
  }
  tomorrow = new MyDate(year, month, dayOfMonth, dayOfWeek % 7);
  return tomorrow;
}
let counter = 0;
while (today.year < 1500) {
  let tomorrow = tomorrowCalc(today);
  if (tomorrow.dayOfMonth == 1 && tomorrow.dayOfWeek == 0) {
    counter++;
  }
  today = tomorrow;
}
let dayOfWeek = "";
switch (today.dayOfWeek) {
  case 0:
    dayOfWeek = "Saturday";
  case 1:
    dayOfWeek = "Sunday";
  case 2:
    dayOfWeek = "Monday";
  case 3:
    dayOfWeek = "Tuesday";
  case 4:
    dayOfWeek = "Wednesday";
  case 5:
    dayOfWeek = "Thursday";
  case 6:
    dayOfWeek = "Friday";
}
let text1 = `The number of first day of the month wich is saturday is ${counter} days.`;
let text2 = `The day of the week at ${today.year}/${today.month}/${today.dayOfMonth} is ${dayOfWeek}`;
console.log(text1);
console.log(text2);
