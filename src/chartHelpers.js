let weeklyChart = document.getElementById('weekly').getContext('2d');
let averageChart = document.getElementById('average').getContext('2d');



function createWeeklyChart(data, dataName, date) {
  let weeklyData = currentUser.userDataSets[dataName].getWeekly(date)
  let newWeekly = new Chart(weeklyChart, {
    type: 'bar',
    data: {
      labels: Object.keys(weeklyData),
      datasets : [{
        label: `${dataName} for the week of ${Object.keys(weeklyData)[0]}`,
        data : Object.values(weeklyData),
        backgroundColor: '#7190B9'
      }]
    },
    options: {
      title : {
        text: `Weekly ${dataName}`,
        display : true
      }
    }
  })
}

function createAverageSleepChart() {
  let averages = []
  averages.push(currentUser.userDataSets.Sleep.getAverage('hoursSlept'))
  averages.push(currentUser.userDataSets.Sleep.getAverage('sleepQuality'))
  let newAverage = new Chart(averageChart, {
    type: 'bar',
    data: {
      labels: ['Hours Slept', 'Sleep Quality'],
      datasets : [{
        labels: false,
        data : averages,
        backgroundColor: '#7190B9'
      }]
    },
    options: {
      title : {
        display: false,
        text: `Average Sleep Data`,
        display : true,
      }
    },
    legend: {
      display : false
    }
  })
}

function createAverageActivityChart() {
  let averages = []
  averages.push(currentUser.userDataSets.Activity.getAverage('numSteps'))
  averages.push(currentUser.userDataSets.Activity.getAverage('minutesActive'))
  averages.push(currentUser.userDataSets.Activity.getAverage('flightsOfStairs'))
  let newAverage = new Chart(averageChart, {
    type: 'bar',
    data: {
      labels: Object.keys(averages),
      datasets : [{
        label: `${dataName} for the week of ${Object.keys(weeklyData)[0]}`,
        data : Object.values(averages),
        backgroundColor: '#7190B9'
      }]
    },
    options: {
      title : {
        text: `Average ${dataName}`,
        display : true
      }
    }
  })
}