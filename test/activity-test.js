const testData = require('./test-data')
const chai = require('chai')
const expect = chai.expect
const assert = chai.assert


const ActivityRepo = require('../src/activityRepo')
const UserActivity = require('../src/userActivity')

describe('HydrationRepo and UserHydration', () => {

  let data;
  let userActivity;
  let activityRepo;
  let user;
  let userActivityData;

  beforeEach('Should create instance of ActivityRepo and UserActivity, and provide user data', () => {
    data = testData['activityData']
    activityRepo = new ActivityRepo(data)
    userActivityData = [{"userID": 1, "date": "2019/06/15", "numSteps": 3577, "minutesActive": 140, "flightsOfStairs": 16}, {"userID": 1, "date": "2019/06/16", "numSteps": 317, "minutesActive": 144, "flightsOfStairs": 19}]
    userActivity = new UserActivity(userActivityData)
    user = {"strideLength": 4.3, "dailyStepGoal" : 5000}
    })

    it('Should be an instance of ActivityRepo', () => {
      expect(activityRepo).to.be.an.instanceof(ActivityRepo)
    })

    it('Should store given activity data', () => {
      expect(activityRepo.data).to.deep.equal(data)
    })

    it('Should return an average of user activities', () => {
      expect(activityRepo.getAverage('numSteps')).to.equal(4690)
      expect(activityRepo.getAverage('minutesActive')).to.equal(127)
      expect(activityRepo.getAverage('flightsOfStairs')).to.equal(23)
    })

    it('Should be an instance of userActivity', () => {
      expect(userActivity).to.be.an.instanceof(UserActivity)
    })

    it('Should return the number of miles travelled for a specific day', () => {
      expect(userActivity.getDailyMiles('2019/06/15', user)).to.equal(2.91)
    })

    it('Should return minutes active for a specified day', () => {
      expect(userActivity.getDailyMinutes('2019/06/15')).to.equal(140)
    })

    it('Should return a weekly average of activity', () => {
      expect(userActivity.getWeeklyAverage('2019/06/15')).to.equal(142)
    })

    it('Should return if a goal was achieved on a specified day', () => {
      expect(userActivity.getGoalAchievement('2019/06/15', user)).to.equal(false)
    })

    it('Should return all-time stair climbing record', () => {
      expect(userActivity.getStairRecord()).to.equal(19)
    })
})
