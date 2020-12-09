class UserSleep {
  constructor(data){
    this.data = data;
  }

  getAverage(prop){
    let total = 0
    this.data.forEach(day => total += day[prop])
    let avg = total/this.data.length
    return Math.round(avg * 10) / 10;
  }

  getTotalByDay(date, prop){
    let dailyTotal = 0;
    this.data.forEach(day => {
      if (day.date === date){
        return dailyTotal = day[prop];
      }
    })
    return dailyTotal;
  }

  getHoursTotalByWeek(date) {
    const startDate = Date.parse(date)
    const endDate = startDate + 604800000
    let weeklySleep = 0;
    this.data.forEach(day => {
      let currentDay = Date.parse(day['date'])
      let currentWeekday = day.date.split('/')
      if ((startDate <= currentDay) && (currentDay < endDate)) {
        weeklySleep += day.hoursSlept;
      }
    })
    return Math.round(weeklySleep * 100) / 100;
  }

  getWeekQuality(date) {
    const startDate = Date.parse(date)
    const endDate = startDate + 604800000
    let weeklyQuality = {}
    this.data.forEach(day => {
      let currentDay = Date.parse(day['date'])
      let currentWeekday = day.date.split('/')
      if ((startDate <= currentDay) && (currentDay < endDate)) {
        weeklyQuality[day.date] = day.sleepQuality;
      }
    })
    return weeklyQuality;
  }
  // averageHours(prop) {
  //   let total = 0
  //   this.data.forEach(day => total += day.hoursSlept)
  //   let avg = total/this.data.length
  //   return Math.round(avg * 10) / 10;
  // }
  //
  // averageQuality() {
  //   let total = 0
  //   this.data.forEach(day => total += day.sleepQuality)
  //   let avg = total/this.data.length
  //   return Math.round(avg * 10) / 10;
  // }

  // getHoursByDay(date) {
  //   let dailyHours = 0;
  //   this.data.forEach(day => {
  //     if (day.date === date){
  //       return dailyHours = day.hoursSlept;
  //     }
  //   })
  //   return dailyHours;
  // }
  //
  // getQualityByDay(date) {
  //   let dailyQuality = 0;
  //   this.data.forEach(day => {
  //     if (day.date === date){
  //       return dailyQuality = day.sleepQuality;
  //     }
  //   })
  //   return dailyQuality;
  // }
}

if (typeof module !== 'undefined') {
  module.exports = UserSleep
}
