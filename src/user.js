class User {
  constructor(data) {
    this.id = data.id;
    this.name = data.name;
    this.address = data.address;
    this.email = data.email;
    this.strideLength = data.strideLength;
    this.dailyStepGoal = data.dailyStepGoal;
    this.friends = data.friends;
    this.dataSets = getDataRepos(this.id)
    this.friendData = getFriendRepos(this.friends)
  }

  getUserFirstName() {
    let firstName = this.name.split(' ')
    return firstName[0];
  }
}

if (typeof module !== 'undefined') {
  module.exports = User
}
