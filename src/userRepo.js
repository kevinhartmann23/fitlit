class UserRepo {
  constructor(data) {
    this.userData = data
  }

  getUserData(id) {
    //change parameter to name, access name - return id
    return this.userData.find(user => user.id === id)
  }

  getStepGoalAverage() {
    let totalSteps = 0
    const average = this.userData.forEach(user => {
      totalSteps += user.dailyStepGoal
    })
    return Math.ceil(totalSteps/this.userData.length)
  }

  // getUserByName(name){
  //   this.userData.find(user => {
  //     if(user.name === name){
  //       return this.getUserData(user.id)
  //     }
  //     });
  // }
}

if (typeof module !== 'undefined') {
  module.exports = UserRepo
}
