let sidebar = document.querySelector(".sidebar-toggle");
let close = document.querySelector(".close-btn");
let sidebarToShow=document.querySelector('.sidebar');

sidebar.addEventListener("click", () => {
  sidebarToShow.classList.toggle("show-sidebar");
});

close.addEventListener("click",()=>{
    sidebarToShow.classList.remove("show-sidebar");
})