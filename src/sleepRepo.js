class SleepRepo {
  constructor(userData){
    this.data = userData;
  }

  getSleepData(id){
    return this.data.filter(info => info.userID === id)
  }

  getAverageQuality(){
    let total = 0
    this.data.forEach(day => total += day.sleepQuality)
    let avg = total/this.data.length
    return Math.round(avg * 10) / 10;
  }

  getSleepQualityOver3(date) {
    const startDate = Date.parse(date) - 604800000
    const stopDate = Date.parse(date)
      let weeklyQuality = {}
      this.data.forEach(day => {
        let currentDay = Date.parse(day['date'])
        if ((startDate < currentDay) && (currentDay <= stopDate)) {
          if(!weeklyQuality[day.userID]){
            weeklyQuality[day.userID] = {'total' : day.sleepQuality};
          } else {
            weeklyQuality[day.userID].total += day.sleepQuality
          }
        }
      })
      const usersAbove3 = Object.keys(weeklyQuality).filter(user => {
        return (weeklyQuality[user].total / 7) > 3
      }).map(i => parseInt(i))

      return usersAbove3;
    }

  getMostSleptHours(date) {
    const sortedDay = this.data.filter(day => day.date === date)
      .sort((a, b) => b.hoursSlept - a.hoursSlept)
    let topHours = sortedDay[0].hoursSlept;
    const result = sortedDay.map(day => {
      let topHours = sortedDay[0].hoursSlept;
      if(day.hoursSlept === topHours){
        topHours = day.hoursSlept
        return day.userID
      }
    })
      .filter(e => e != undefined)
    return result;
  }
}

if (typeof module !== 'undefined') {
  module.exports = SleepRepo
}
