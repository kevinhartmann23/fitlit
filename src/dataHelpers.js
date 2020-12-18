function getDataRepos (id) {
  let hydroRepo = new HydrationRepo(hydrationData)
  let activityRepo = new ActivityRepo(activityData)
  let sleepRepo = new SleepRepo(sleepData)
  let currentUserHydro = new UserHydration(hydroRepo.getHydrationData(id))
  let currentUserSleep = new UserSleep  (sleepRepo.getSleepData(id))
  let currentUserActivity = new UserActivity  (activityRepo.getActivityData(id))
  return {'hydration': currentUserHydro, 'sleep': currentUserSleep, 'activity': currentUserActivity}
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
    friendsList.push({'id': friend, 'name': friendName, 'hydration': newFriendHydro, 'sleep': newFriendSleep, 'activity': newFriendActivity})
  })
  return friendsList
}

function getFriendWeeklyData (date, type) {
  friendTotals = []
  currentUser.friendData.forEach(friend => {
    let name = friend.name.split(' ')[0]
    let total = friend[type].getWeeklyTotal(date)
    friendTotals.push({'name': name, 'total': total})
  })
  friendTotals.sort((a, b) => b.total - a.total)
  return friendTotals
}

function getPageData() {
  htmlData = [
    {
      'type': 'hydration',
      'class': 'hydration-page',
      'widget': 'hydration-widget',
      'infoDataOne': `${currentUser.dataSets.hydration.getTotalAverage()}`,
      'labelOne': 'water consumed',
      'timeOne': 'ALL TIME AVERAGE',
      'infoDataTwo': `${currentUser.dataSets.hydration.getWeeklyTotal(date)}`,
      'labelTwo': 'water consumed',
      'timeTwo': 'LAST 7 DAYS',
      'infoDataThree': `${currentUser.dataSets.hydration.getDailyHydration(date)}`,
      'labelThree': 'water consumed',
      'timeThree': 'TODAY',
      'imgSource': '../assets/imgs/man-hydra.png'
    },
    {
      'type': 'sleep',
      'class': 'sleep-page',
      'widget': 'sleep-widget',
      'infoDataOne': `${currentUser.dataSets.sleep.getAverage('hoursSlept')} - ${currentUser.dataSets.sleep.getAverage('sleepQuality')}`,
      'labelOne': 'hours - quality',
      'timeOne': 'ALL TIME AVERAGE',
      'infoDataTwo': `${currentUser.dataSets.sleep.getWeeklyTotal(date)}`,
      'labelTwo': 'hours slept',
      'timeTwo': 'LAST 7 DAYS',
      'infoDataThree': `${currentUser.dataSets.sleep.getTotalByDay(date, 'hoursSlept')}`,
      'labelThree': 'hours slept',
      'timeThree': 'TODAY',
      'imgSource': '../assets/imgs/man-sleep.png'
    },
    {
      'type': 'activity',
      'class': 'activity-page',
      'widget': 'activity-widget',
      'infoDataOne': `${currentUser.dataSets.activity.getTotalAverage()}`,
      'labelOne': 'number of steps',
      'timeOne': 'ALL TIME AVERAGE',
      'infoDataTwo': `${currentUser.dataSets.activity.getWeeklyTotal(date)}`,
      'labelTwo': 'number of steps',
      'timeTwo': 'LAST 7 DAYS',
      'infoDataThree': `${currentUser.dataSets.activity.getDailyMiles(date, currentUser)}`,
      'labelThree': 'number of miles',
      'timeThree': 'TODAY',
      'imgSource': '../assets/imgs/man-act.png'
    }]
}
