class Friend {
  constructor(data) {
    this.id = data.id;
    this.name = data.name;
    this.strideLength = data.strideLength;
    this.dailyStepGoal = data.dailyStepGoal;
    this.dataSets = getDataRepos(this.id)
  }

  getUserFirstName() {
    let firstName = this.name.split(' ')
    return firstName[0];
  }

}

if (typeof module !== 'undefined') {
  module.exports = Friend
}
