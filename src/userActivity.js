class UserActivity {
  constructor(data) {
    this.data = data
  }


  getTotalAverage() {
    let total = 0
    this.data.forEach(day => total += day.numOunces)
    return Math.round(total/this.data.length)
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
    const startDate = Date.parse(date)
    const endDate = startDate + 604800000
    let weeklyActivity = 0
    let numDays = 0
    this.data.forEach(day => {
      let currentDay = Date.parse(day['date'])
      let currentWeekday = day.date.split('/')
      numDays++
      if ((startDate <= currentDay) && (currentDay <= endDate)) {
        weeklyActivity += day.minutesActive
      }
    })
    return weeklyActivity/numDays
  }

  getGoalAchievement(date, user) {
    let day = this.data.find(day => day.date === date)
    return day.numSteps >= user.dailyStepGoal
  }

  getStairRecord() {
    let record = (this.data.sort((a,b) => {return b.flightsOfStairs - a.flightsOfStairs}))
    return record[0].flightsOfStairs
  }

  // getWeeklyActivity(date) {
  //   const startDate = Date.parse(date)
  //   const endDate = startDate + 604800000
  //   let weeklyActivity = {}
  //   this.data.forEach(day => {
  //     let currentDay = Date.parse(day['date'])
  //     let currentWeekday = day.date.split('/')
  //     if ((startDate <= currentDay) && (currentDay <= endDate)) {
  //       weeklyActivity[day.date] = day.minutesActive
  //     }
  //   })
  //   console.log(weeklyActivity)
  //   return weeklyActivity
  // }

}

if (typeof module !== 'undefined') {
  module.exports = UserActivity
}
