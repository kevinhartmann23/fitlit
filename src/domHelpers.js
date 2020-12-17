function generatePage(type) {
  getPageData()
  let dataObject = htmlData.filter(page => page.type === type)
  let data = dataObject[0]
  return `
  <section class="${data.class}" id="${data.type}">
    <section class="friends-sidebar ${data.widget}">
      <h2 class="friends-title">Friends</h2>
      ${generateFriendList(type)}
    </section>
    <div class="chart-container">
      <canvas class="weekly-chart" id="weekly"></canvas>
    </div>
    <div class="circle-wrapper weekly">
      <div class="circle-display ${data.widget}">
        <h1 class="info-text">${data.infoDataOne}</h1>
        <p>${data.labelOne}</p>
        <h4>${data.timeOne}</h4>
      </div>
      <div class="circle-display ${data.widget}">
        <h1 class="info-text">${data.infoDataTwo}</h1>
        <p>${data.labelTwo}</p>
        <h4>${data.timeTwo}</h4>
      </div>
    </div>
    <div class="circle-wrapper daily">
      <div class="circle-display ${data.widget}">
        <h1 class="info-text">${data.infoDataThree}</h1>
        <p>${data.labelThree}</p>
        <h4>${data.timeThree}</h4>
      </div>
    </div>
    <img class="logo-man" src="${data.imgSource}" alt="logo hyrdation"/>
  </div>`
}

function generateFriendList(type) {
  let friendHtml = [];
  let friendData = getFriendWeeklyData(date, type)
  let friendDataDisplay = getFriendDataInfo(type)
  friendData.forEach(friend => {
    friendHtml.push(
      `<section class="friend-section">
        <img class="user-icon" src="../assets/imgs/user-icon.png" alt="user"/>
        <p class="friend-name">${friend.name}</p>
        <p class="friend-info">${friendDataDisplay} ${friend.total}</p>
      </section>`
    )
  })
  return friendHtml.join('')
}

function getFriendDataInfo(type) {
  switch (type) {
  case 'hydration':
    return 'Water consumed this week:'
  case 'sleep':
    return 'Hours slept this week:'
  case 'activity':
    return 'Total steps this week:'
  }
}
