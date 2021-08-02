const toggleSwitch=document.querySelector('input[type="checkbox"]');
const nav=document.getElementById("nav");
const toggleIcon=document.getElementById("toggle-icon");
const img1=document.getElementById("image1");
const img2=document.getElementById("image2");
const img3=document.getElementById("image3");
const textBox=document.getElementById("text-box");

function imageMode(color)
{
    img1.src=`./img/undraw_proud_coder_${color}.svg`;
    img2.src=`./img/undraw_feeling_proud_${color}.svg`;
    img3.src=`./img/undraw_conceptual_idea_${color}.svg`;
}

function darkMode()
{
    nav.style.backgroundColor="rgb(0 0 0/50%)";
    toggleIcon.children[0].textContent="Dark Mode";
    toggleIcon.children[1].classList.replace("fa-sun","fa-moon");
    imageMode("dark");
    textBox.style.backgroundColor="rgb(255 255 255/50%)";
}

function lightMode()
{
    nav.style.backgroundColor="rgb(255 255 255/50%)";
    toggleIcon.children[0].textContent="Light Mode";
    toggleIcon.children[1].classList.replace("fa-moon","fa-sun");
    imageMode("light");
    textBox.style.backgroundColor="rgb(0 0 0/50%)";
}

function switchTheme(event)
{
    if(event.target.checked)
    {
        document.documentElement.setAttribute("data-theme","dark");
        localStorage.setItem("theme","dark");
        darkMode();
    }
    else
    {
        document.documentElement.setAttribute("data-theme","light");
        localStorage.setItem("theme","light");
        lightMode();
    }
}

toggleSwitch.addEventListener("change",switchTheme);
const currentTheme=localStorage.getItem("theme");

if(currentTheme)
{
   if(currentTheme==="dark")
   {
        document.documentElement.setAttribute("data-theme","dark");
        darkMode();
        toggleSwitch.checked=true;
   }
}