


const loginBtn = document.querySelector('.submit-button')
const hydrationBtn = document.querySelector('.water')
const activityBtn = document.querySelector('.sneaker')
const sleepBtn = document.querySelector('.bed')
const userInput = document.querySelector('.username-input')
const loginPage = document.querySelector('.welcome-page')
const pageDisplay = document.querySelector('.display-page')
const calendar = document.querySelector('#date')

loginBtn.addEventListener('click', userLogin)
hydrationBtn.addEventListener('click', populatePage)
activityBtn.addEventListener('click', populatePage)
sleepBtn.addEventListener('click', populatePage)


let date = calendar.value.split('-').join('/')
let currentUser;
let htmlData;
const allUserData = new UserRepo(userData)

function userLogin () {
  user = allUserData.getUserId(userInput.value)
  currentUser = new User(user)
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
