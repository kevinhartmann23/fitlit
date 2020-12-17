class UserActivity {
  constructor(data) {
    this.data = data
  }


  getTotalAverage() {
    let total = 0
    this.data.forEach(day => total += day.numSteps)
    return Math.round(total / this.data.length)
  }

  getDailyMinutes(date) {
    let foundDay = this.data.find(day => day.date === date)
    return foundDay.minutesActive
  }

  getDailyMiles(date, user) {
  let foundDay = this.data.find(day => day.date === date)
  let steps = foundDay['numSteps']
  let stride = user.strideLength
  return Math.round((steps * stride / 5280) * 100) / 100
  }

  getWeeklyAverage(date) {
    const startDate = Date.parse(date) - 604800000
    const stopDate = Date.parse(date)
    let weeklyActivity = 0
    let numDays = 0
    this.data.forEach(day => {
      let currentDay = Date.parse(day['date'])
      numDays++
      if ((startDate < currentDay) && (currentDay <= stopDate)) {
        weeklyActivity += day.minutesActive
      }
    })
    return weeklyActivity / numDays
  }

  getWeekly(date) {
    const startDate = Date.parse(date) - 604800000
    const stopDate = Date.parse(date)
    let weeklyHydration = {}
    this.data.forEach(day => {
      let currentDay = Date.parse(day['date'])
      if ((startDate < currentDay) && (currentDay <= stopDate)) {
        weeklyHydration[day.date] = day.numSteps
      }
    })
    return weeklyHydration;
  }

  getGoalAchievement(date, user) {
    let day = this.data.find(day => day.date === date)
    return day.numSteps >= user.dailyStepGoal
  }

  getStairRecord() {
    let record = (this.data.sort((a,b) => {
      return b.flightsOfStairs - a.flightsOfStairs
    }))
    return record[0].flightsOfStairs
  }

  getWeeklyTotal(date) {
    const startDate = Date.parse(date) - 604800000
    const stopDate = Date.parse(date)
    let weeklyTotal = 0
    this.data.forEach(day => {
      let currentDay = Date.parse(day['date'])
      if ((startDate < currentDay) && (currentDay <= stopDate)) {
        weeklyTotal += day.numSteps
      }
    })
    return weeklyTotal;
  }
}

if (typeof module !== 'undefined') {
  module.exports = UserActivity
}
