function getDataRepos (id) {
  let hydroRepo = new HydrationRepo(hydrationData)
  let activityRepo = new ActivityRepo(activityData)
  let sleepRepo = new SleepRepo(sleepData)
  let currentUserHydro = new UserHydration(hydroRepo.getHydrationData(id))
  let currentUserSleep = new UserSleep  (sleepRepo.getSleepData(id))
  let currentUserActivity = new UserActivity  (activityRepo.getActivityData(id))
  return { 'hydration' : currentUserHydro, 'sleep' : currentUserSleep, 'activity' : currentUserActivity }
}

function getFriendRepos (friends) {
  let hydroRepo = new HydrationRepo(hydrationData)
  let activityRepo = new ActivityRepo(activityData)
  let sleepRepo = new SleepRepo(sleepData)
  let friendsList = []
  friends.forEach(friend => {
    let friendName = allUserData.getUserName(friend)
    let newFriend = new Friend(friend)
    let newFriendHydro = new UserHydration(hydroRepo.getHydrationData(friend))
    let newFriendSleep = new UserSleep(sleepRepo.getSleepData(friend))
    let newFriendActivity = new UserActivity(activityRepo.getActivityData(friend))
    friendsList.push({'id' : friend, 'name' : friendName, 'hydration' : newFriendHydro, 'sleep' : newFriendSleep, 'activity' : newFriendActivity })
  })
  return friendsList
}

function getFriendWeeklyData (date, type) {
  friendTotals = []
  currentUser.friendData.forEach(friend => {
    let name = friend.name.split(' ')[0]
    let total = friend[type].getWeeklyTotal(date)
    friendTotals.push({'name' : name, 'total' : total})
  })
  friendTotals.sort((a,b) => b.total - a.total)
  return friendTotals
}

function getPageData() {
  htmlData = [
    {'type' : 'hydration',
     'class' : 'hydration-page',
     'infoDataOne' : `${currentUser.dataSets.hydration.getTotalAverage()}`,
     'labelOne' : 'Water Consumed',
     'timeOne' : 'ALL TIME AVERAGE',
     'infoDataTwo' : `${currentUser.dataSets.hydration.getWeeklyTotal(date)}`,
     'labelTwo' : 'Water Consumed',
     'timeTwo' : 'LAST 7 DAYS',
     'infoDataThree' : `${currentUser.dataSets.hydration.getDailyHydration(date)}`,
     'labelThree' : 'Water Consumer',
     'timeThree' : 'Today',
     'imgSource' : '../assets/imgs/man-hydra.png'
   },
   {'type' : 'sleep',
    'class' : 'sleep-page',
    'infoDataOne' : `${currentUser.dataSets.sleep.getAverage('hoursSlept')} | ${currentUser.dataSets.sleep.getAverage('sleepQuality')}`,
    'labelOne' : 'Hours | Quality',
    'timeOne' : 'ALL TIME AVERAGE',
    'infoDataTwo' : `${currentUser.dataSets.sleep.getWeeklyTotal(date)}`,
    'labelTwo' : 'Hours slept',
    'timeTwo' : 'LAST 7 DAYS',
    'infoDataThree' : `${currentUser.dataSets.sleep.getTotalByDay(date, 'hoursSlept')}`,
    'labelThree' : 'Hours slept',
    'timeThree' : 'Today',
    'imgSource' : '../assets/imgs/man-sleep.png'
  },
  {'type' : 'activity',
   'class' : 'activity-page',
   'infoDataOne' : `${currentUser.dataSets.activity.getTotalAverage()}`,
   'labelOne' : 'Number of steps',
   'timeOne' : 'ALL TIME AVERAGE',
   'infoDataTwo' : `${currentUser.dataSets.activity.getWeeklyTotal(date)}`,
   'labelTwo' : 'Number of steps',
   'timeTwo' : 'LAST 7 DAYS',
   'infoDataThree' : `${currentUser.dataSets.activity.getDailyMiles(date, currentUser)}`,
   'labelThree' : 'Number of miles',
   'timeThree' : 'Today',
   'imgSource' : '../assets/imgs/man-act.png'
  }]
}














// function populateFriend () {
//   <img class="icons user" src="../assets/imgs/user-icon.png" alt="user"/>
//   <p class="friend-name">friend 1</p>
//   <p class="friend-infoÒ">water consumed this week: 1000oz</p>
// }
