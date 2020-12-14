let currentUser;
let date = '2019/09/22'
let htmlData;
const allUserData = new UserRepo(userData)


const loginBtn = document.querySelector('.submit-button')
const hydrationBtn = document.querySelector('.water')
const activityBtn = document.querySelector('.sneaker')
const sleepBtn = document.querySelector('.bed')
const userInput = document.querySelector('.username-input')
const loginPage = document.querySelector('.welcome-page')
const pageDisplay = document.querySelector('.display-page')

loginBtn.addEventListener('click', userLogin)
hydrationBtn.addEventListener('click', populatePage)
activityBtn.addEventListener('click', populatePage)
sleepBtn.addEventListener('click', populatePage)

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

function test() {
  console.log('test')
}
