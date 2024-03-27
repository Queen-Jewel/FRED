// Moving to other pages
const dash = document.getElementById('dash');
const stud = document.getElementById('stud');
const atte = document.getElementById('atte');
const prem = document.getElementById('prem');
const feed = document.getElementById('feed');
const chat = document.getElementById('chat');


dash.addEventListener('click', ()=> {
    window.location.href = 'index.html'
})
stud.addEventListener('click', ()=> {
    window.location.href = 'student.html'
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