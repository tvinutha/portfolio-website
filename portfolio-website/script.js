const text =
"Full Stack Developer | Data Analytics Enthusiast | AI Learner";

let index = 0;

function typeWriter() {

    if(index < text.length){

        document.getElementById("typing-text").innerHTML += text.charAt(index);

        index++;

        setTimeout(typeWriter, 60);
    }
}

window.onload = typeWriter;document.querySelectorAll('.nav-links a').forEach(link => {

    link.addEventListener('click', () => {

        setTimeout(() => {
            AOS.refresh();
        }, 500);

    });

});
let topBtn = document.getElementById("topBtn");

window.onscroll = function() {

    if(document.documentElement.scrollTop > 300){
        topBtn.style.display = "block";
    }
    else{
        topBtn.style.display = "none";
    }

};

topBtn.onclick = function(){
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
};