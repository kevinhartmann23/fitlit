let averageChart = document.getElementById('average').getContext('2d');


function createWeeklyChart(dataName, date) {
  let weeklyChart = document.getElementById('weekly').getContext('2d');
  let weeklyData = currentUser.dataSets[dataName].getWeekly(date)
  let newWeekly = new Chart(weeklyChart, {
    type: 'bar',
    options: {
      maintainAspectRatio: false,
    },
    data: {
      labels: Object.keys(weeklyData),
      datasets : [{
        label: `daily ${dataName} - week starting on: ${Object.keys(weeklyData)[0]}`,
        data : Object.values(weeklyData),
        backgroundColor: 'lightgrey',
      }]
    },
    options: {
      title : {
        text: `weekly ${dataName}`,
        display : true
      }
    }
  })
  Chart.defaults.global.defaultFontColor = 'black';
}

function createAverageSleepChart() {
  let averages = []
  averages.push(currentUser.dataSets.Sleep.getAverage('hoursSlept'))
  averages.push(currentUser.dataSets.Sleep.getAverage('sleepQuality'))
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
  averages.push(currentUser.dataSets.Activity.getAverage('numSteps'))
  averages.push(currentUser.dataSets.Activity.getAverage('minutesActive'))
  averages.push(currentUser.dataSets.Activity.getAverage('flightsOfStairs'))
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
