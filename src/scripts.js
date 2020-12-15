const loginBtn = document.querySelector('.submit-button')
const hydrationBtn = document.querySelector('.water')
const activityBtn = document.querySelector('.sneaker')
const sleepBtn = document.querySelector('.bed')
const userInput = document.querySelector('.username-input')
const loginPage = document.querySelector('.welcome-page')
const pageDisplay = document.querySelector('.display-page')
const calendar = document.querySelector('#date')
const infoCard = document.querySelector('.info-card')
const infoCardBtn = document.querySelector('#user-info')
const infoCardDisplay = document.querySelector('.user-info')
const exitMenuBtn = document.querySelector('.exit-menu')
const logoutBtn = document.querySelector('#logout')



loginBtn.addEventListener('click', userLogin)
hydrationBtn.addEventListener('click', populatePage)
activityBtn.addEventListener('click', populatePage)
sleepBtn.addEventListener('click', populatePage)
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
  userInput.value = ''
  loginPage.classList.toggle('hidden')
  populatePage('hydration')

}

function populatePage(event) {
  type = event.target.id
  let page = generatePage(type)
  console.log(page)
  console.log(pageDisplay)
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
}

function logOut() {
  currentUser = ''
  pageDisplay.innerHTML = ''
  loginPage.classList.toggle('hidden')
}
