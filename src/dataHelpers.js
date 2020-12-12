let allUserData = new UserRepo(userData)
let currentUser = new User(allUserData.getUserData(1))


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
















// function populateFriend () {
//   <img class="icons user" src="../assets/imgs/user-icon.png" alt="user"/>
//   <p class="friend-name">friend 1</p>
//   <p class="friend-infoÒ">water consumed this week: 1000oz</p>
// }
