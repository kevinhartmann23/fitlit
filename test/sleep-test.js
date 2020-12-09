const testData = require('./test-data')
const chai = require('chai')
const expect = chai.expect
const assert = chai.assert

const SleepRepo = require('../src/sleepRepo')
const UserSleep = require('../src/userSleep')

describe('SleepRepo and UserSleep', () => {
  let sleepData;
  let user1Data;
  let userSleep;
  let sleepRepo;

  beforeEach('Should create instance of SleepRepo and UserSleep, and provide sleep data', () => {
    sleepData = testData['sleepData']
    user1Data = [
      {
        "userID": 1,
        "date": "2019/06/15",
        "hoursSlept": 6.1,
        "sleepQuality": 2.2
      },
      {
          "userID": 1,
          "date": "2019/06/16",
          "hoursSlept": 4.1,
          "sleepQuality": 3.8
        },
        {
          "userID": 1,
          "date": "2019/06/17",
          "hoursSlept": 8,
          "sleepQuality": 2.6
        },
        {
          "userID": 1,
          "date": "2019/06/18",
          "hoursSlept": 10.4,
          "sleepQuality": 3.1
        },
        {
          "userID": 1,
          "date": "2019/06/19",
          "hoursSlept": 10.7,
          "sleepQuality": 1.2
        },
        {
          "userID": 1,
          "date": "2019/06/20",
          "hoursSlept": 9.3,
          "sleepQuality": 1.2
        },
        {
          "userID": 1,
          "date": "2019/06/21",
          "hoursSlept": 8.9,
          "sleepQuality": 4.2
        }]
    userSleep = new UserSleep(user1Data)
    sleepRepo = new SleepRepo(sleepData);
  })

  it('Should be an instance of SleepRepo', () => {
    expect(sleepRepo).to.be.an.instanceof(SleepRepo);
  })

  it('Should store all users data', () => {
    expect(sleepRepo.data).to.deep.equal(sleepData);
  })

  it('Should be able to return a specific users data by id', () => {
    expect(sleepRepo.getSleepData(1)).to.deep.equal(user1Data)
  })

  it('Should be able to return the average sleep quality of all users', () => {
    expect(sleepRepo.getAverageQuality()).to.equal(3.2)
  })

  it('Should return all users sleep quality that is greater than 3 in a given week', () => {
    expect(sleepRepo.getSleepQualityOver3("2019/06/15")).to.deep.equal([])
    //revist with hard data, how to get week and what to output
  })

  it('Should return a user who slept the most hours on a given day', () => {
    expect(sleepRepo.getMostSleptHours("2019/06/21")).to.deep.equal([1, 3])
    expect(sleepRepo.getMostSleptHours("2019/06/16")).to.deep.equal([3])
    //does an object of the userID make sense in this case?
  })

  it('Should be an instance of Sleep', () => {
    expect(userSleep).to.be.an.instanceof(UserSleep);
  })

  it('Should store a single users data', () => {
    expect(userSleep.data).to.deep.equal(user1Data);
  })

  it('Should return a single users average number of hours slept per day', () => {
    // expect(userSleep.averageHours()).to.equal(8.1)
    expect(userSleep.getAverage('hoursSlept')).to.equal(8.2)
  })

  it('Should return a single users average all time sleep quality', () => {
    // expect(userSleep.averageQuality()).to.equal(2.6)
    expect(userSleep.getAverage('sleepQuality')).to.equal(2.6)
  })

  it('Should return how many hours a single user has slept in a specified day', () => {
    // expect(userSleep.getHoursByDay("2019/06/16")).to.equal(4.1)
    // expect(userSleep.getHoursByDay("2019/06/17")).to.equal(8)
    expect(userSleep.getTotalByDay("2019/06/16", 'hoursSlept')).to.equal(4.1)
    expect(userSleep.getTotalByDay("2019/06/17", 'hoursSlept')).to.equal(8)
  })

  it('Should return a single users sleep quality by a specified day', () => {
    // expect(userSleep.getQualityByDay("2019/06/16")).to.equal(3.8)
    // expect(userSleep.getQualityByDay("2019/06/17")).to.equal(2.6)
    expect(userSleep.getTotalByDay("2019/06/16", 'sleepQuality')).to.equal(3.8)
    expect(userSleep.getTotalByDay("2019/06/17", 'sleepQuality')).to.equal(2.6)
  })

  it('Should return a single users total hours slept in a given week', () => {
    user1Data.push({
        "userID": 1,
        "date": "2019/06/22",
        "hoursSlept": 7.8,
        "sleepQuality": 4.2
      });

    expect(userSleep.getHoursTotalByWeek("2019/06/15")).to.equal(57.5)
  })

  it('Should return a single users sleep quality for any given week span', () => {
    user1Data.push({
        "userID": 1,
        "date": "2019/06/22",
        "hoursSlept": 7.8,
        "sleepQuality": 4.2
      });

    expect(userSleep.getWeekQuality("2019/06/16")).to.deep.equal({
        '2019/06/16': 3.8,
        '2019/06/17': 2.6,
        '2019/06/18': 3.1,
        '2019/06/19': 1.2,
        '2019/06/20': 1.2,
        '2019/06/21': 4.2,
        '2019/06/22': 4.2,
      });
  })
})
