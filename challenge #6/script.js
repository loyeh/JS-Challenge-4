class MyDate {
  constructor(year, month, dayOfMonth, dayOfWeek, hour, minute, secound) {
    (this.year = year), (this.month = month), (this.dayOfMonth = dayOfMonth), (this.dayOfWeek = dayOfWeek), (this.hour = hour), (this.minute = minute), (this.secound = secound);
  }
}
const referenceYear = new MyDate(1399, 12, 30, 0, 13, 7, 28);
//a compelete full day has 24 hours wich has 60 minutes wich also has 60 secounds
const fullDaySecounds = 24 * 60 * 60;

//the difference has been calculated in secounds
const yearDifference = 5 * 60 * 60 + 48 * 60 + 46;

function deliveryTimeCalculator(year) {
  let difference = year - 1399;
  let secounds = (28 + difference * 46) % 60;
  let minutes = (7 + difference * 48 + Math.trunc((28 + difference * 46) / 60)) % 60;
  let hours = (13 + difference * 5 + Math.trunc((7 + 48 + Math.trunc((28 + difference * 46) / 60)) / 60)) % 24;

  return hours * 60 * 60 + minutes * 60 + secounds;
}

function isLeapYear(year) {
  if (deliveryTimeCalculator(year) < fullDaySecounds / 2 && deliveryTimeCalculator(year + 1) > fullDaySecounds / 2) {
    return true;
  } else {
    return false;
  }
}
function maxDays(year, month) {
  if (month <= 6) {
    return 31;
  } else if (month < 12) {
    return 30;
  } else if (!isLeapYear(year)) {
    return 29;
  } else {
    return 30;
  }
}

function yesterdayCalculator(today) {
  let year = today.year;
  let month = today.month;
  let dayOfMonth = today.dayOfMonth - 1;
  let dayOfWeek = (today.dayOfWeek - 1 + 7) % 7;
  if (dayOfMonth < 1) {
    if (month == 1) {
      year--;
      month = 12;
      dayOfMonth = maxDays(year, month);
    } else {
      month--;
      dayOfMonth = maxDays(year, month);
    }
  }
  const yesterday = new MyDate(year, month, dayOfMonth, dayOfWeek, 0, 0, 0);
  return yesterday;
}

let startDate = referenceYear;

while (startDate.year > 1354) {
  startDate = yesterdayCalculator(startDate);
}
while (startDate.month > 12) {
  startDate = yesterdayCalculator(startDate);
}
while (startDate.dayOfMonth > 31) {
  startDate = yesterdayCalculator(startDate);
}
console.log(startDate);
