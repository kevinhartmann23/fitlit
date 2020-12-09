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
    // const startDate = Date.parse(date)
    // const endDate = startDate + 604800000
    // let weeklyQuality = {}
    // this.data.forEach(day => {
    //   let currentDay = Date.parse(day['date'])
    //   if ((startDate <= currentDay) && (currentDay < endDate)) {
    //     console.log(day.sleepQuality)
    //     weeklyQuality[day.userID] = 0;
    //     // this.weeklyQuality.forEach(id => {
    //     //   weeklySleep[id] += day.sleepQuality;
    //     });
    //
    //   }
    })

    console.log(weeklyQuality)
    return weeklyQuality;
  }

  getMostSleptHours(date) {

  }

}

if (typeof module !== 'undefined') {
  module.exports = SleepRepo
}
