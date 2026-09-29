const body=document.body,themeToggle=document.getElementById("themeToggle"),nav=document.getElementById("navMenu");
function setTheme(dark){body.classList.toggle("dark",dark);themeToggle.textContent=dark?"☀️ Light":"🌙 Dark";localStorage.setItem("portfolioTheme",dark?"dark":"light")}
setTheme(localStorage.getItem("portfolioTheme")==="dark");
themeToggle.addEventListener("click",()=>setTheme(!body.classList.contains("dark")));
document.getElementById("menuBtn").addEventListener("click",()=>nav.classList.toggle("open"));
nav.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>nav.classList.remove("open")));

document.querySelectorAll(".skill").forEach(btn=>btn.addEventListener("click",()=>document.getElementById("skillMessage").textContent=`${btn.dataset.skill} selected — keep practicing and building projects!`));

const projectInfo={"NexoraAI":"AI website builder concept using React.js, Node.js, Express, MySQL and API integration.","Food Delivery Web App":"Full-stack food delivery project focused on dynamic interaction and database integration.","Quick Show":"Group web project focused on movie browsing and a simple booking experience."};
document.querySelectorAll(".details-btn").forEach(btn=>btn.addEventListener("click",()=>document.getElementById("projectDetails").textContent=projectInfo[btn.dataset.project]));

const slides=[["images/slide-1.svg","Portfolio home slide"],["images/slide-2.svg","Portfolio skills slide"],["images/slide-3.svg","Portfolio projects slide"]];let current=0;
function showSlide(i){current=(i+slides.length)%slides.length;document.getElementById("slideImage").src=slides[current][0];document.getElementById("slideImage").alt=slides[current][1];document.getElementById("slideCounter").textContent=`${current+1} / ${slides.length}`}
document.getElementById("prevSlide").addEventListener("click",()=>showSlide(current-1));document.getElementById("nextSlide").addEventListener("click",()=>showSlide(current+1));

function error(id,msg){document.getElementById(id).textContent=msg}function clearErrors(){error("nameError","");error("emailError","");error("messageError","")}function validEmail(e){return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)}
document.getElementById("contactForm").addEventListener("submit",e=>{e.preventDefault();clearErrors();let valid=true;const name=document.getElementById("name").value.trim(),email=document.getElementById("email").value.trim(),message=document.getElementById("message").value.trim();if(name.length<2){error("nameError","Please enter your name.");valid=false}if(!validEmail(email)){error("emailError","Please enter a valid email address.");valid=false}if(message.length<10){error("messageError","Message must be at least 10 characters.");valid=false}const s=document.getElementById("formStatus");if(!valid){s.textContent="Please fix the errors above.";s.style.color="#e11d48";return}s.textContent="Message validated successfully!";s.style.color="#16a34a";e.target.reset()});
document.getElementById("topBtn").addEventListener("click",()=>window.scrollTo({top:0,behavior:"smooth"}));