const testData = require('./test-data')
const chai = require('chai')
const expect = chai.expect
const assert = chai.assert

const SleepRepo = require('../src/sleepRepo')
const UserSleep = require('../src/userSleep')

describe('SleepRepo and UserSleep', () => {
  let sleepData;
  let userSleep;
  let sleepRepo;

  beforeEach('Should create instance of SleepRepo and UserSleep, and provide sleep data', () => {
    sleepData = testData['sleepData']
    userSleep = new UserSleep(id)
    sleepRepo = new SleepRepo(sleepData);
  })

  it('', () => {
    
  })
})
