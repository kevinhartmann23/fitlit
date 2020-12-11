class ActivityRepo {
  constructor(data) {
    this.data = data;
  }

  getDailyMiles(id, date, user) {
    let stride = user.strideLength
    return this.data.filter(info => info.userID === id)
  }

  getAverage(activity) {
    let total = 0
    const average = this.data.forEach(user => {
      total += user[activity]
    })
    return Math.ceil(total/this.data.length)
  }
}


if (typeof module !== 'undefined') {
  module.exports = ActivityRepo
}


let highestArray = this.data.filter(day => day.date === date)
.sort((a, b) => return b.hoursSlept - a.hoursSlept)
.map(day => {

})

let highestNum = highestArray[0].
