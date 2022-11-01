import GithubStats from "./GithubStats"
import Intro from "./Intro"
import Navbar from "./Navbar"
import Project from "./Project"
import Skills from "./Skill"

function Portfolio(){
    return(
        <div>
            <Navbar/>
            <Intro/>
            <Skills/>
            <Project/>
            <GithubStats/>

        </div>
    )
}
export default Portfolio