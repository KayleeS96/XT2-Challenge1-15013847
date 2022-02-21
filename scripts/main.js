// Clock config

function startClock() {
  var today = new Date();
  var hr = today.getHours();
  var min = today.getMinutes();
  var sec = today.getSeconds();
  hr = checkTime(hr);
  min = checkTime(min);
  sec = checkTime(sec);
  document.getElementById("clockWork").innerHTML = hr + " : " + min + " : " + sec;

  var time = setTimeout(function(){ startClock() }, 500);
}

function checkTime(i) {
  if (i < 10) {
      i = "0" + i;
  }
  return i;

}

// Doughnut chart config

var ctx = document.getElementById('doughnutChart').getContext('2d');

Chart.defaults.global.defaultFontFamily = 'Orbitron';
Chart.defaults.global.defaultFontSize = 14;
Chart.defaults.global.defaultFontColor = '#FFFFFF';

var chart = new Chart(ctx, {

    type: 'doughnut',

    data: {
        labels: ['Left', 'Used'],
        datasets: [{
            label: 'Fuel Level',
            data: [75, 25],
            backgroundColor: ['rgb(127, 255, 0)', 'rgb(143, 188, 143)'],
        }]
    },

    options: {
      responsive: false,
      title: {
        display: true,
        text: 'Fuel Tank',
        fontSize: 20
      },

      legend: {
        display: true,
      },
    }
});

// Pie chart config

var ctx = document.getElementById('pieChart').getContext('2d');

Chart.defaults.global.defaultFontFamily = 'Orbitron';
Chart.defaults.global.defaultFontSize = 14;
Chart.defaults.global.defaultFontColor = '#FFFFFF';

var chart = new Chart(ctx, {

    type: 'pie',

    data: {
        labels: ['To Go', 'Travelled'],
        datasets: [{
            label: 'Distance',
            data: [60, 40],
            backgroundColor: ['rgb(225, 127, 80)', 'rgb(255, 228, 225)'],
        }]
    },

    options: {
      responsive: false,
      title: {
        display: true,
        text: 'Travelled Distance',
        fontSize: 20
      },

      legend: {
        display: true,
      },
    }
});

// bar chart config

var ctx = document.getElementById('barChart').getContext('2d');

Chart.defaults.global.defaultFontFamily = 'Orbitron';
Chart.defaults.global.defaultFontSize = 14;
Chart.defaults.global.defaultFontColor = '#FFFFFF';

var barChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [{
            label: 'Monthly Fuel Usage',
            data: [55, 79, 93, 85, 72, 63],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
      responsive: false,
      title: {
        display: true,
        text: 'Fuel Usage',
        fontSize: 20
    },
    },
});