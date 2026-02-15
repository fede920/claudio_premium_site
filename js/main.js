function acceptCookies(){
document.getElementById('cookie-banner').style.display='none';
localStorage.setItem('cookieAccepted','true');
}
if(localStorage.getItem('cookieAccepted')){
document.getElementById('cookie-banner').style.display='none';
}
const observer=new IntersectionObserver(entries=>{
entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');}});
});
document.querySelectorAll('.fade-in').forEach(el=>observer.observe(el));
