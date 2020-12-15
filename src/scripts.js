const loginBtn = document.querySelector('.submit-button')
const hydrationBtn = document.querySelector('#hydration')
const activityBtn = document.querySelector('#activity')
const sleepBtn = document.querySelector('#sleep')
const hydrationMainBtn = document.querySelector('#hydration2')
const activityMainBtn = document.querySelector('#activity2')
const sleepMainBtn = document.querySelector('#sleep2')
const userInput = document.querySelector('.username-input')
const loginPage = document.querySelector('.welcome-page')
const pageDisplay = document.querySelector('.display-page')
const calendar = document.querySelector('#date')
const infoCard = document.querySelector('.info-card')
const infoCardBtn = document.querySelector('#user-info')
const infoCardDisplay = document.querySelector('.user-info')
const exitMenuBtn = document.querySelector('.exit-menu')
const logoutBtn = document.querySelector('#logout')
const navigationBar = document.querySelector('.navigation-bar')
const navigationIcons = document.querySelector('.nav-icons')
const mainPage = document.querySelector('.main-page')
const mainPageMessage = document.querySelector('.main-message')

loginBtn.addEventListener('click', userLogin)
hydrationBtn.addEventListener('click', populatePage)
activityBtn.addEventListener('click', populatePage)
sleepBtn.addEventListener('click', populatePage)
hydrationMainBtn.addEventListener('click', populatePage)
activityMainBtn.addEventListener('click', populatePage)
sleepMainBtn.addEventListener('click', populatePage)
infoCardBtn.addEventListener('click', populateInfoCard)
exitMenuBtn.addEventListener('click', hideInfoCard)
logoutBtn.addEventListener('click', logOut)


let date = calendar.value.split('-').join('/')
let currentUser;
let htmlData;
const allUserData = new UserRepo(userData)

function userLogin () {
  user = allUserData.getUserId(userInput.value)
  currentUser = new User(user)
  navigationIcons.classList.toggle('hidden')
  userInput.value = ''
  loginPage.classList.toggle('hidden')
  mainPage.classList.toggle('hidden')
  mainPageMessage.innerText = `Welcome to fitZen, ${currentUser.getUserFirstName()}!`
}

function populatePage(event) {
  console.log('test')
  type = event.target.classList[1]
  let page = generatePage(type)
  mainPage.classList.add('hidden')
  pageDisplay.innerHTML = page
  createWeeklyChart(type, date)
}

function updateDate(event) {
  currentPage = pageDisplay.firstElementChild.id
  console.log('CURRENT PAGE', currentPage)
  date = calendar.value.split('-').join('/')
  let page = generatePage(currentPage)
  pageDisplay.innerHTML = page
  createWeeklyChart(currentPage, date)
}

function populateInfoCard() {
  infoCard.classList.toggle('hidden')
  blurBackground()
  infoCardDisplay.innerText = `
    fitZen ID Number: ${currentUser.id}
    Full Name: ${currentUser.name}
    Address: ${currentUser.address}
    Email Address: ${currentUser.email}
    Stride Length: ${currentUser.strideLength}
    Daily Step Goals: ${currentUser.dailyStepGoal}
  `
}

function hideInfoCard() {
  infoCard.classList.toggle('hidden')
  blurBackground()
}

function logOut() {
  currentUser = ''
  pageDisplay.innerHTML = ''
  loginPage.classList.toggle('hidden')
  navigationIcons.classList.toggle('hidden')
}

function blurBackground() {
  navigationBar.classList.toggle('blur')
  pageDisplay.classList.toggle('blur')
}
