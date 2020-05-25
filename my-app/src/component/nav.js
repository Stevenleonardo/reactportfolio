import react from "react";

class Navbar extends React.Component{
    constructor(props){
        super(props);
    }


 componentDidMount() {
}

navEffect() {
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
scrolling(instance) {
    let node = document.getElementById(instance.current.props.id);
    window.scrollTo({
        top: node.offsetTop,
        behavior: "smooth"
    });
}

render() {
    return (
        <div>
            <Background
                ref={this.navEffect}
                id="my-background"
                aboutRef={this.about}
                bounceIn={"wow bounceIn"}
            />
            <nav
                id="navbar"
                className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <a
                        className="home-style navbar-brand"
                        onClick={() => {
                            window.scrollTo({
                                top: 0,
                                behavior: "smooth"
                            });
                        }}>
                        Back to Space
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarNavAltMarkup"
                        aria-controls="navbarNavAltMarkup"
                        aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div
                        className="collapse navbar-collapse"
                        id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <a
                                onClick={() => {
                                    this.scrolling(this.about);
                                }}
                                className="btn-style nav-item nav-link">
                                About
                            </a>
                            <a
                                onClick={() => {
                                    this.scrolling(this.projects);
                                }}
                                className="btn-style nav-item nav-link">
                                Projects
                            </a>
                            <a
                                onClick={() => {
                                    this.scrolling(this.contact);
                                }}
                                className="btn-style nav-item nav-link">
                                Contact
                            </a>
                        </div>
                    </div>
                </div>
            </nav>

            <About
                ref={this.about}
                id="about-container"
                bounceLeft={"wow bounceInLeft"}
                fadeInLeft={"wow fadeInLeft"}
                fadeInRight={"wow fadeInRight"}
                fadeIn={"wow fadeIn"}
                tada={"wow fadeIn"}
            />
            <Projects
                ref={this.projects}
                id="my-projects"
                fadeInRight={"wow fadeInRight"}
                fadeIn={"wow fadeIn"}
            />
            <Contact
                ref={this.contact}
                id="my-contact"
                fadeInLeft={"wow fadeInLeft"}
                shake={"wow pulse"}
            />
        </div>
    );
}
}

export default Navbar;