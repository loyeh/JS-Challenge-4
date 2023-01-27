class MyDate {
  constructor(year, month, dayOfMonth, dayOfWeek) {
    (this.year = year), (this.month = month), (this.dayOfMonth = dayOfMonth), (this.dayOfWeek = dayOfWeek);
  }
}
class DeliveryTime {
  constructor(isLeapYear, hour, minute, secound) {
    (this.isLeapYear = isLeapYear), (this.hour = hour), (this.minute = minute), (this.secound = secound);
  }
}

function deliveryTimeCalculator(year) {
  let difference = year - 1400;
  let secounds = (28 + difference * 46) % 60;
  let minutes = (7 + difference * 48 + Math.trunc((28 + difference * 46) / 60)) % 60;
  let hours = (13 + difference * 5 + Math.trunc((7 + 48 + Math.trunc((28 + difference * 46) / 60)) / 60)) % 24;
  let deliveryTime = new DeliveryTime(hours, minutes, secounds);
  return deliveryTime;
}

function isLeapYear(year) {
  let deliveryTime = deliveryTimeCalculator(year);
  let lastDeliveryTime = deliveryTimeCalculator(year - 1);
  if (deliveryTime.hour >= 12 && lastDeliveryTime.hour < 12) {
    return true;
  } else {
    return false;
  }
}

function maxDays(month, year) {
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

function tommarowCalculator(today) {
  let year = today.year;
  let month = today.month;
  let dayOfMonth = today.dayOfMonth;
  let dayOfWeek = (today.dayOfWeek + 1) % 7;
  dayOfMonth++;
  if (dayOfMonth > maxDays(month, year)) {
    if (month === 12) {
      year++;
      month = 1;
      dayOfMonth = 1;
    } else {
      dayOfMonth = 1;
      month++;
    }
  }
  const tomarrow = new MyDate(year, month, dayOfMonth, dayOfWeek);
  return tomarrow;
}

let startDate = new MyDate(1400, 1, 1, 1);
let counter = 0;

while (startDate.year < 1500) {
  startDate = tommarowCalculator(startDate);

  if (startDate.dayOfMonth === 1 && startDate.dayOfWeek === 0) {
    counter++;
  }
}
let text = "";
for (let year = 1400; year <= 1500; year++) {
  console.log(isLeapYear(year));
}
console.log(startDate, counter);
