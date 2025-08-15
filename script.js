document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


var tablink = document.getElementsByClassName("tab-link");
var tabcontents = document.getElementsByClassName("tab-content");
        function opentab(tabname){
            for(tablin of tablink){
                    tablin.classList.remove("active-link");
            }
            for(tabcontent of tabcontents){
                    tabcontent.classList.remove("active-tab");
            }
            event.currentTarget.classList.add("active-link");
            document.getElementById(tabname).classList.add("active-tab")
}

 var sidemenu = document.getElementById("sidemenu");
 function openmenu(){
    sidemenu.style.right = "0";
 }
 function closemenu(){
    sidemenu.style.right = "-200px";
 }