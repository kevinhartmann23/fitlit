const testData = require('./test-data')
const chai = require('chai')
const expect = chai.expect
const assert = chai.assert


const UserRepo = require('../src/userRepo')
const User = require('../src/user')

describe('UserRepo', () => {
  let userData;
  // let activityData;
  // let sleepData;
  // let hydrationData;
  let userRepo;
  let user1;
  let user2;
  let user3;

  beforeEach('Should create instance of UserRepo and User, and provide user data', () => {
    userData = testData['userData']
    // activityData = testData['activityData']
    // sleepData = testData['sleepData']
    // hydrationData = testData['hydrationData']
    userRepo = new UserRepo(userData)
    user1 = new User(userRepo.getUserData(1));
    user2 = new User(userRepo.getUserData(2));
    user3 = new User(userRepo.getUserData(3));
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

  it('Should instantiate a new User object', () => {
    expect(user1).to.be.an.instanceof(User);
  })

  it('Should store a specific users id', () => {
    expect(user1.id).to.equal(1);
  })

  it('Should store a specific users name', () => {
    expect(user1.name).to.equal('Luisa Hane');
  })

  it('Should store a specific users name', () => {
    expect(user1.address).to.equal('15195 Nakia Tunnel, Erdmanport VA 19901-1697');
  })

  it('Should store a specific users name', () => {
    expect(user2.email).to.equal('Dimitri.Bechtelar11@gmail.com');
  })

  it('Should store a specific users name', () => {
    expect(user2.strideLength).to.equal(4.5);
  })

  it('Should store a specific users name', () => {
    expect(user3.dailyStepGoal).to.equal(5000);
  })

  it('Should store a specific users name', () => {
    expect(user3.friends).to.deep.equal([19, 11, 42, 33]);
  })

  it('Should return a users first name', () => {
    expect(user1.getUserFirstName()).to.equal('Luisa');
    expect(user2.getUserFirstName()).to.equal('Jarvis');
    expect(user3.getUserFirstName()).to.equal('Herminia');
  })

})
