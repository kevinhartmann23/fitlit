let user;
let date = '2019/09/22'
let htmlData;
const allUserData = new UserRepo(userData)


const loginBtn = document.querySelector('.submit-button')
const userInput = document.querySelector('.username-input')
const loginPage = document.querySelector('.welcome-page')
const pageDisplay = document.querySelector('.display-page')

loginBtn.addEventListener('click', userLogin)

function userLogin () {
  user = allUserData.getUserId(userInput.value)
  user = new User(user)
  loginPage.classList.toggle('hidden')
}

function populatePage(type) {
  let page = generatePage(type)
  console.log(page)
  console.log(pageDisplay)
  pageDisplay.innerHTML = page
}
