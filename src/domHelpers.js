function generatePage(type) {
  getPageData()
  let dataObject = htmlData.filter(page => page.type === type)
  let data = dataObject[0]
  return `
  <div class="${data.class}">
    <section class="friends-sidebar">
      <h3 class="friends-title">friends</h3>
      <div class="friend-section">
        <img class="user-icon" src="../assets/imgs/user-icon.png" alt="user"/>
        <p class="friend-name">friend 1</p>
        <p class="friend-info">water consumed this week: 1000oz</p>
      </div>
    </section>
    <div class="chart-container">
      <canvas class="weekly" id="weekly"></canvas>
    </div>
    <div class="circle-wrapper weekly">
      <div class="circle-display">
        <h1 class="info-text">${data.infoDataOne}</h1>
        <p>${data.labelOne}</p>
        <h4>${data.timeOne}</h4>
      </div>
      <div class="circle-display">
        <h1 class="info-text">${data.infoDataTwo}</h1>
        <p>${data.labelTwo}</p>
        <h4>${data.timeTwo}</h4>
      </div>
    </div>
    <div class="circle-wrapper daily">
      <div class="circle-display">
        <h1 class="info-text">${data.infoDataThree}</h1>
        <p>${data.labelThree}</p>
        <h4>${data.timeThree}</h4>
      </div>
    </div>
    <img class="logo-man" src="${data.imgSource}" alt="logo hyrdation"/>
  </div>`
}
