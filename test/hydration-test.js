const testData = require('./test-data')
const chai = require('chai')
const expect = chai.expect


const HydrationRepo = require('../src/hydrationRepo')
const UserHydration = require('../src/userHydration')

describe('HydrationRepo and UserHydration', () => {
  let data;
  let userHydration;
  let hydrationRepo;
  let hydrationTestResults;
  let hydrationTestResultsWeekly;
  let userHydrationWeekly;

  beforeEach('Should create instance of HydrationRepo and UserHydration, and provide user data', () => {
    data = testData['hydrationData']
    hydrationRepo = new HydrationRepo(data)
    hydrationTestResults = [{"userID": 1, "date": "2019/06/15", "numOunces": 37}, {"userID": 1, "date": "2019/06/16", "numOunces": 69}, {"userID": 1, "date": "2019/06/17", "numOunces": 96}]
    hydrationTestResultsWeekly = [{"userID": 1, "date": "2019/06/15", "numOunces": 37}, {"userID": 1, "date": "2019/06/16", "numOunces": 69}, {"userID": 1, "date": "2019/06/17", "numOunces": 96}, {"userID": 1, "date": "2019/06/18", "numOunces": 86}, {"userID": 1, "date": "2019/06/19", "numOunces": 76}, {"userID": 1, "date": "2019/06/20", "numOunces": 66}, {"userID": 1, "date": "2019/06/21", "numOunces": 56} ]
    userHydration = new UserHydration(hydrationTestResults);
    userHydrationWeekly = new UserHydration(hydrationTestResultsWeekly);
  })

  it('Should be an instance of HydrationRepo', () => {
    expect(hydrationRepo).to.be.an.instanceof(HydrationRepo)
  })

  it('Should store given hydration data', () => {
    expect(hydrationRepo.data).to.deep.equal(data)
  })

  it('Should return user specific hydration data by id', () => {
    expect(hydrationRepo.getHydrationData(1)).to.deep.equal(hydrationTestResults)
  })

  it('Should be an instance of UserHydration', () => {
    expect(userHydration).to.be.an.instanceof(UserHydration)
  })

  it('Should return an average of a users ounces consumed per day', () => {
    expect(userHydration.getTotalAverage()).to.equal(67)
  })

  it('Should return ounces consumed by a specific day', () => {
    expect(userHydration.getDailyHydration("2019/06/16")).to.equal(69)
  })

  it('Should return ounces consumed in a specified week by given date', () => {
    expect(userHydrationWeekly.getWeekly("2019/06/21")).to.deep.equal({
      '2019/06/15': 37,
      '2019/06/16': 69,
      '2019/06/17': 96,
      '2019/06/18': 86,
      '2019/06/19': 76,
      '2019/06/20': 66,
      '2019/06/21': 56
    })
  })
})
