class HydrationRepo {
  constructor(data) {
    this.data = data;
  }

  getHydrationData(id) {
    return this.data.filter(info => info.userID === id)
  }
}


if (typeof module !== 'undefined') {
  module.exports = HydrationRepo
}
