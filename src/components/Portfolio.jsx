import Contact from "./Contact"
import GithubStats from "./GithubStats"
import Intro from "./Intro"
import Navbar from "./Navbar"
import Project from "./Project"
import Skills from "./Skill"
import Tools from "./Tools"

function Portfolio(){
    return(
        <div>
            <Navbar/>
            <Intro/>
            <Skills/>
            <Tools/>
            <Project/>
            <GithubStats/>
            <Contact/>
        </div>
    )
}
export default Portfolio