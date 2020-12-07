class UserRepo {
  constructor(userData) {
    this.userData = userData
  }

  getUserData(id) {
    return this.userData.find(user => user.id === id)
  }

  getStepGoalAverage() {
    let totalSteps = 0
    const average = this.userData.forEach(user => {
      totalSteps += user.dailyStepGoal
    })
    return Math.ceil(totalSteps/this.userData.length)
  }
}

if (typeof module !== 'undefined') {
  module.exports = UserRepo
}
