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
     'infoDataOne' : `${user.dataSets.hydration.getTotalAverage()}`,
     'labelOne' : 'Water Consumed',
     'timeOne' : 'ALL TIME AVERAGE',
     'infoDataTwo' : `${user.dataSets.hydration.getWeeklyTotal(date)}`,
     'labelTwo' : 'Water Consumed',
     'timeTwo' : 'LAST 7 DAYS',
     'infoDataThree' : `${user.dataSets.hydration.getDailyHydration(date)}`,
     'labelThree' : 'Water Consumer',
     'timeThree' : 'Today',
     'imgSource' : '../assets/imgs/man-hydra.png'
   },
   {'type' : 'sleep',
    // 'infoDataOne' : `${}`,
    'labelOne' : 'Hours | Quality',
    'timeOne' : 'ALL TIME AVERAGE',
    // 'infoDataTwo' : `${}`,
    'labelTwo' : 'Water Consumed',
    'timeTwo' : 'LAST 7 DAYS',
    // 'infoDataThree' : `${}`,
    'labelThree' : 'Water Consumer',
    'timeThree' : 'Today',
    'imgSource' : '../assets/imgs/man-hydra.png'
  },
  {'type' : 'activity',
   // 'infoDataOne' : `${}`,
   'labelOne' : 'Hours | Quality',
   'timeOne' : 'ALL TIME AVERAGE',
   // 'infoDataTwo' : `${}`,
   'labelTwo' : 'Water Consumed',
   'timeTwo' : 'LAST 7 DAYS',
   // 'infoDataThree' : `${}`,
   'labelThree' : 'Water Consumer',
   'timeThree' : 'Today',
   'imgSource' : '../assets/imgs/man-hydra.png'
  }]
}














// function populateFriend () {
//   <img class="icons user" src="../assets/imgs/user-icon.png" alt="user"/>
//   <p class="friend-name">friend 1</p>
//   <p class="friend-infoÒ">water consumed this week: 1000oz</p>
// }
