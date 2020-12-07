const testData = require('./test-data')
const chai = require('chai')
const expect = chai.expect
const assert = chai.assert


const UserRepo = require('../src/userRepo')
// const User = require('../src/user')

describe('UserRepo', () => {
  let userData;
  let activityData;
  let sleepData;
  let hydrationData;
  let userRepo;
  let user;
  beforeEach('Should create instance of UserRepo and User, and provide user data', () => {
    userData = testData['userData']
    activityData = testData['activityData']
    sleepData = testData['sleepData']
    hydrationData = testData['hydrationData']
    userRepo = new UserRepo(userData)
    // user = new User(id)
  })

  it('Should instantiate a new User Repo object', () => {
    expect(userRepo).to.be.an.instanceOf(UserRepo);
  })

  it('Should return user specific data by id', () => {
    expect(userRepo.getUserData(1)).to.deep.equal(userData[0])
  })

  it('Should return average step goal for all users', () => {
    expect(userRepo.getStepGoalAverage()).to.equal(6667)
  })
})
