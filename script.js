const reveal = document.getElementById("reveal");
const projectsContainer = document.getElementById("projects-container");
const jeff = document.getElementById('jeff');
const jeffContainer = document.getElementsByClassName('jeff-container')[0];
const cursor = document.getElementById('cursor');
const dev = document.getElementsByClassName("dev");

let open = false;

reveal.onclick = function(evt){
    if(open === false){
        projectsContainer.style.height = "40vh"; 
    }else{
        projectsContainer.style.height = "0vh";
    }
    open = !open;
}

jeff.onclick = function(evt){
    jeffContainer.classList.remove('horizLeft');
    jeffContainer.classList.add('horizRight');
    setTimeout(function(){
        jeffContainer.classList.add('horizLeft');
        jeffContainer.classList.remove('horizRight');
    },5000);
}

document.onclick = function(evt){
    if(open && evt.srcElement.id !== "reveal" && evt.srcElement.id !== "projects-container"){
        projectsContainer.style.height = "0vh";
        open = !open;
    }
}


