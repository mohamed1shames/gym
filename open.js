$("#navbar a, btn").on("click" , function(event) {

    if(this.hash !== "") {
        event.preventDefault();
        const hash = this.hash;

        $("html, body").animate({screenTop: $(hash).offset().top - 100}, 800);
    }
    });
    
    
    
    


window.addEventListener("scroll", function() {
if(window.scrollY > 150){
    document.querySelector("#navbar").style.opacity = 0.9;
} else {

    document.querySelector("#navbar").style.opacity = 1;



}




});