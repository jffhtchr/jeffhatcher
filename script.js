const projectsContainer = document.getElementById("projects-container");
const jeffContainer = document.getElementsByClassName('jeff-container')[0];
const textContainer = document.getElementById('text-container');
const reveal = document.getElementById("reveal");
const jeff = document.getElementById('jeff');
const cursor = document.getElementById('cursor');
const dev = document.getElementsByClassName("dev");

let open = false;

reveal.onclick = function(evt){
    if(open === false){
        projectsContainer.style.height = "40vh"; 
        textContainer.style.paddingTop = "50px";
    }else{
        projectsContainer.style.height = "0vh";
        textContainer.style.paddingTop = "0px";
    }
    open = !open;
}

jeff.onclick = function(evt){
    jeffContainer.classList.remove('horizLeft');
    jeffContainer.classList.add('horizRight');
    setTimeout(function(){
        jeffContainer.classList.add('horizLeft');
        jeffContainer.classList.remove('horizRight');
    },2000);
}

const projects = [ "projects-container", "projects", "projectLink", "reveal"]

window.onclick = function(evt){
    if(open && !projects.includes(evt.srcElement.id)){
        projectsContainer.style.height = "0vh";
        textContainer.style.paddingTop = "0px";
        open = !open;
    }
}

document.ontouchstart = function(evt){
    if(open && !projects.includes(evt.srcElement.id)){
        projectsContainer.style.height = "0vh";
        textContainer.style.paddingTop = "0px";
        open = !open;
    }
}

