class UserHydration {
  constructor(data) {
    this.data = data
  }


  getTotalAverage() {
    let total = 0
    this.data.forEach(day => total += day.numOunces)
    return Math.round(total/this.data.length)
  }

  getDailyHydration(date) {
    let foundDay = this.data.find(day => day.date === date)
    return foundDay.numOunces
  }

  getWeekly(date) {
    const startDate = Date.parse(date) - 604800000
    const stopDate = Date.parse(date)
    let weeklyHydration = {}
    this.data.forEach(day => {
      let currentDay = Date.parse(day['date'])
      let currentWeekday = day.date.split('/')
      let newWeekday = new Date(currentWeekday[0], currentWeekday[1] - 1, currentWeekday[2])
      if ((startDate < currentDay) && (currentDay <= stopDate)) {
        weeklyHydration[day.date] = day.numOunces
      }
    })
    return weeklyHydration;
  }

  getWeeklyTotal(date) {
    const startDate = Date.parse(date) - 604800000
    const stopDate = Date.parse(date)
    let weeklyTotal = 0
    this.data.forEach(day => {
      let currentDay = Date.parse(day['date'])
      let currentWeekday = day.date.split('/')
      let newWeekday = new Date(currentWeekday[0], currentWeekday[1] - 1, currentWeekday[2])
      if ((startDate < currentDay) && (currentDay <= stopDate)) {
        weeklyTotal += day.numOunces
      }
    })
    return weeklyTotal;
  }

}

if (typeof module !== 'undefined') {
  module.exports = UserHydration
}
