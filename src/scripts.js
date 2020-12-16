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
const logoIcon = document.querySelector('#logo')

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
logoIcon.addEventListener('click', backToMain)


let date = calendar.value.split('-').join('/')
let currentUser;
let htmlData;
const allUserData = new UserRepo(userData)

function usernameNotFound(input) {
  if(!allUserData.getAllUserNames().includes(input.toUpperCase())){
    userInput.value = ''
    return alert(`username: ${input} does not exist, please try again!`)
  }
}

function userLogin () {
  user = allUserData.getUserId(userInput.value.toUpperCase())
  usernameNotFound(userInput.value)
  currentUser = new User(user)
  navigationIcons.classList.toggle('hidden')
  userInput.value = ''
  loginPage.classList.toggle('hidden')
  mainPage.classList.remove('hidden')
  logoIcon.classList.add('hidden')
  mainPageMessage.innerText = `Welcome to fitZen, ${currentUser.getUserFirstName()}!`
}

function backToMain () {
  pageDisplay.classList.add('hidden')
  mainPage.classList.remove('hidden')
  logoIcon.classList.add('hidden')
}

function populatePage(event) {
  console.log('test')
  type = event.target.classList[1]
  let page = generatePage(type)
  mainPage.classList.add('hidden')
  pageDisplay.classList.remove('hidden')
  pageDisplay.innerHTML = page
  logoIcon.classList.remove('hidden')
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
  pageDisplay.classList.add('hidden')
  logoIcon.classList.add('hidden')
  mainPage.classList.add('hidden')
}

function blurBackground() {
  navigationBar.classList.toggle('blur')
  pageDisplay.classList.toggle('blur')
  mainPage.classList.toggle('blur')
}
