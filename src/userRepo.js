class UserRepo {
  constructor(data) {
    this.userData = data
  }

  getUserData(id) {
    return this.userData.find(user => user.id === id)
  }

  getUserName(id) {
    return this.getUserData(id).name
  }

  getUserId(name) {
    return this.userData.find(user => {
      user.name.toUpperCase() === name.toUpperCase()
    })
  }


  getStepGoalAverage() {
    let totalSteps = 0
    const average = this.userData.forEach(user => {
      totalSteps += user.dailyStepGoal
    })
    return Math.ceil(totalSteps / this.userData.length)
  }

  getAllUserNames() {
    return this.userData.reduce((acc, user) => {
      acc.push(user.name.toUpperCase())
      return acc;
    }, []);
  }
}

if (typeof module !== 'undefined') {
  module.exports = UserRepo
}
