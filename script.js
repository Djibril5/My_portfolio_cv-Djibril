const header=document.getElementById("header");
const menuToggle=document.getElementById("menuToggle");
const nav=document.getElementById("nav");
const backTop=document.getElementById("backTop");
const year=document.getElementById("year");

year.textContent=new Date().getFullYear();

menuToggle.addEventListener("click",()=>nav.classList.toggle("open"));
document.querySelectorAll(".nav a").forEach(link=>link.addEventListener("click",()=>nav.classList.remove("open")));

window.addEventListener("scroll",()=>{
  header.classList.toggle("scrolled",window.scrollY>30);
  backTop.classList.toggle("show",window.scrollY>500);
});

backTop.addEventListener("click",()=>window.scrollTo({top:0,behavior:"smooth"}));

const observer=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
},{threshold:.12});

document.querySelectorAll(".reveal").forEach(el=>observer.observe(el));

const filters=document.querySelectorAll(".filter");
const projects=document.querySelectorAll(".project-card");

filters.forEach(filter=>{
  filter.addEventListener("click",()=>{
    filters.forEach(item=>item.classList.remove("active"));
    filter.classList.add("active");
    const selected=filter.dataset.filter;
    projects.forEach(project=>{
      project.classList.toggle("hidden",selected!=="all" && project.dataset.category!==selected);
    });
  });
});
