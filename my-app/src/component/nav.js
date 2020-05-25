import react from "react";

class Navbar extends React.Component{
    constructor(props){
        super(props);
    }
}

function componentDidMount() {
}

function navEffect() {
window.addEventListener("scroll", ()=>{
    var navBar = document.getElementById("navbar");
     var domRect = navBar.getBoundingClientRect();
     var background = document.getElementById("background");
     var domBackground = background.getBoundingClientRect();

     if (domRect.y <= -domRect.height){
         navBar.classList.add("fade-in-nav");
     }
     if (-domRect.height < domBackground.top){
         navBar.classList.remove("fade-in-nav");
     }
});
}