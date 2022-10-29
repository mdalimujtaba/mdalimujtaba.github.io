import GithubStats from "./GithubStats"
import Intro from "./Intro"
import Navbar from "./Navbar"
import Project from "./Project"

function Portfolio(){
    return(
        <div>
            <Navbar/>
            <Intro/>
            <Project/>
            <GithubStats/>

        </div>
    )
}
export default Portfolio