
document.getElementById("hambu").addEventListener('click', mostrarmenu)
document.getElementById("menu").addEventListener('click',olcultarmenu)
 nav  = document.getElementById("nav")
 background = document.getElementById("menu")

function mostrarmenu(){

    nav.style.right = "0px"
   background.style.display ="block"
}

function olcultarmenu(){

    nav.style.right = "-350px"
    background.style.display ="none"
}
