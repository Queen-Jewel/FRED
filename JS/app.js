let bar = document.getElementById('barChart').getContext('2d');
let chart = new Chart(bar, {
    type: 'bar',
    data: {
        labels:['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets:[{
            label: 'Active Users',
            backgroundColor: '#25D366',
            data: [4000,8500,5500,9500,2500,7500,500,8000,6000,4500,8500,2500],
        }]
    },

    options:{
        plugins:{
        legend: {
            position: 'bottom',
            labels: {
                boxWidth: 10,
                boxHeight: 10
            }
        }
    },
    
    }
});

const pie = document.getElementById('pieChart').getContext('2d');
const chart2 = new Chart(pie, {
    type: 'pie',
    data: {
        labels: ['Students', 'Course Reps', 'Lecturers'],
        datasets: [{
            backgroundColor: ['#25D366', '#EF6820', '#F79009'],
            data: [52,28,20]
        }]
    },
    options:{
        plugins:{
        legend: {
            position: 'bottom',
            labels: {
                boxWidth: 10,
                boxHeight: 10
            }
        }
    }
    }
})

// Moving to other pages
const stud = document.getElementById('stud');
const lect = document.getElementById('lect');
const atte = document.getElementById('atte');
const prem = document.getElementById('prem');
const feed = document.getElementById('feed');
const chat = document.getElementById('chat');



stud.addEventListener('click', ()=> {
    window.location.href = 'student.html'
})
lect.addEventListener('click', ()=> {
    window.location.href = 'Lecturers.html'
})
atte.addEventListener('click', ()=> {
    window.location.href = 'Attend.html'
})
prem.addEventListener('click', ()=> {
    window.location.href = 'Premium.html'
})
feed.addEventListener('click', ()=> {
    window.location.href = 'Feedback.html'
})
chat.addEventListener('click', ()=> {
    window.location.href = 'Chat.html'
})

