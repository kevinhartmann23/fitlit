class ActivityRepo {
  constructor(data) {
    this.data = data;
  }

  getActivityData(id){
    return this.data.filter(info => info.userID === id)
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
