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

  getWeeklyHydration(date) {
    const startDate = Date.parse(date)
    const endDate = startDate + 604800000
    let weeklyHydration = {}
    this.data.forEach(day => {
      let currentDay = Date.parse(day['date'])
      let currentWeekday = day.date.split('/')
      let newWeekday = new Date(currentWeekday[0], currentWeekday[1] - 1, currentWeekday[2])
      if ((startDate <= currentDay) && (currentDay < endDate)) {
        weeklyHydration[day.date] = day.numOunces
      }
    })
    return weeklyHydration;
  }

}

if (typeof module !== 'undefined') {
  module.exports = UserHydration
}
