class UserSleep {
  constructor(data) {
    this.data = data;
  }

  getAverage(prop) {
    let total = 0
    this.data.forEach(day => total += day[prop])
    let avg = total / this.data.length
    return Math.round(avg * 10) / 10;
  }

  getTotalByDay(date, prop) {
    let dailyTotal = 0;
    this.data.forEach(day => {
      if (day.date === date) {
        return dailyTotal = day[prop];
      }
    })
    return dailyTotal;
  }

  getWeekQuality(date) {
    const startDate = Date.parse(date) - 604800000
    const stopDate = Date.parse(date)
    let weeklyQuality = {}
    this.data.forEach(day => {
      let currentDay = Date.parse(day['date'])
      if ((startDate < currentDay) && (currentDay <= stopDate)) {
        weeklyQuality[day.date] = day.sleepQuality;
      }
    })
    return weeklyQuality;
  }

  getWeeklyTotal(date) {
    const startDate = Date.parse(date) - 604800000
    const stopDate = Date.parse(date)
    let weeklyTotal = 0
    this.data.forEach(day => {
      let currentDay = Date.parse(day['date'])
      if ((startDate < currentDay) && (currentDay <= stopDate)) {
        weeklyTotal += day.hoursSlept
      }
    })
    return Math.round(weeklyTotal * 100) / 100;
  }

  getWeeklyTotalQuality(date) {
    const startDate = Date.parse(date) - 604800000
    const stopDate = Date.parse(date)
    let weeklyTotal = 0
    this.data.forEach(day => {
      let currentDay = Date.parse(day['date'])
      if ((startDate < currentDay) && (currentDay <= stopDate)) {
        weeklyTotal += day.sleepQuality
      }
    })
    return Math.round(weeklyTotal * 100) / 100;
  }
}

if (typeof module !== 'undefined') {
  module.exports = UserSleep
}
