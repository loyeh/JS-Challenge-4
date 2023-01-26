class MyDate {
  constructor(year, month, dayOfMonth, dayOfWeek) {
    (this.year = year), (this.month = month), (this.dayOfMonth = dayOfMonth), (this.dayOfWeek = dayOfWeek);
  }
}
class DeliveryTime {
  constructor(hour, minute, secound) {
    (this.hour = hour), (this.minute = minute), (this.secound = secound);
  }
}

function deliveryTimeCalculator(year) {
  // 5 hours            (5×60×60) +
  // 48 minutes            (48×60) +
  // 46 seconds                46
  //                     --------
  //                        20926
  // difference between to years in seconds
  let DeliveryTimeSecond = ((year - 1400) * 20926) % (24 * 60 * 60);
  let hours = Math.floor((Math.floor(DeliveryTimeSecond / 3600) + 13) % 24);
  let minutes = Math.floor((Math.floor((DeliveryTimeSecond % 3600) / 60) + 7) % 60);
  let seconds = Math.floor(((DeliveryTimeSecond % 60) + 28) % 60);
  const deliveryTime = new DeliveryTime(hours, minutes, seconds);
  return deliveryTime;
}

function isLeapYear(year) {
  if (deliveryTimeCalculator(year).hour < 12 && deliveryTimeCalculator(year + 1).hour >= 12) {
    return true;
  } else {
    return false;
  }
}

function maxDays(month, year) {
  if (month < 6) {
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
  if (dayOfMonth === maxDays(month, year)) {
    if (month === 12) {
      year++;
      month = 1;
      dayOfMonth = 1;
    } else {
      dayOfMonth = 1;
      month++;
    }
  } else {
    dayOfMonth++;
  }
  const tomarrow = new MyDate(year, month, dayOfMonth, dayOfWeek);
  return tomarrow;
}

let startDate = new MyDate(1400, 1, 1, 1);
let counter = 0;

console.log(tommarowCalculator(startDate));
while (startDate.year < 1500) {
  startDate = tommarowCalculator(startDate);

  if (startDate.dayOfMonth === 1 && startDate.dayOfWeek === 0) {
    counter++;
  }
}
console.log(startDate, counter);
