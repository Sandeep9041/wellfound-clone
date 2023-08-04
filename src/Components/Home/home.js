import Fade from "react-reveal";
import "./home.css"

const Home = () => (
    <div>
        <div className="home-banners">
            <div className="home-banners-left">
                <h1>AngelList Talent<br/> is now<br/> Wellfound</h1>
                <p>Where startups and job seekers connect.</p>
                <div>
                    <button type="button" className="border btn text-white button-secondary hire-btn">Find your next hire</button>
                    <button type="button" className="border btn bg-transparent button-secondary">Find your next job</button>
                </div>
            </div>
            <div className="home-banners-right">

                <div className="first">
                    <Fade top >
                    <p className="circle"></p></Fade>
                    <Fade right>
                    <p className="rectangle"></p></Fade>
                </div>
                <div className="sec">
                    <Fade left>
                    <p className="square"></p></Fade>
                    <Fade right>
                    <div className="sec-sec">
                        <h1>W</h1>
                        <div className="small-circles">
                            <p className="small-circle"></p>
                            <p className="small-circle"></p>
                        </div>
                    </div></Fade>
                </div>
                <div className="third">
                    <Fade left>
                    <p className="third-rectangle"></p></Fade>
                    <Fade bottom >
                    <p className="third-circle"></p></Fade>
                </div>

            </div>

               
            <div></div>
        </div>
    </div>
)
export default Home