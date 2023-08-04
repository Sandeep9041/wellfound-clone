import Reviews from "./Reviews";
import "./blog.css"

const Blogs = () => (
    <div>
        <div>
            <div className="blog">
                <div className="img-card">
                <img className="blog-img" src="https://assets-global.website-files.com/636dd759d71287e8ac7e6280/636dd759d7128701db7e63c6_Frame%2520283-min-p-800.png" alt="" />
                </div>
                
                <div className="blog-content">
                <h6>GOT TALENT?</h6>
                <h1>Why job seekers love us</h1>
                <ul>
                    <li>
                        <img src="https://assets-global.website-files.com/636dd759d71287e8ac7e6280/636dd759d71287fab77e63b3_Star.svg" alt="" />
                        <p>
                        Unique jobs at <span>startups</span> and <span>tech companies</span> you can't find anywhere else
                        </p>
                    </li>
                    <li>
                        <img src="https://assets-global.website-files.com/636dd759d71287e8ac7e6280/636dd759d7128775587e63ec_Click.svg" alt="" />
                        <p>
                        Say goodbye to cover letters - your profile is all you need. <span>One click to apply</span> and you're done.                        </p>
                    </li>
                    <li>
                        <img src="https://assets-global.website-files.com/636dd759d71287e8ac7e6280/636dd759d71287515d7e63b2_List.svg" alt="" />
                        <p>
                        Everything you need to know to job search - including seeing <span>salary</span> and <span>stock options</span> upfront when looking                        </p>
                    </li>
                    <li>
                        <img src="https://assets-global.website-files.com/636dd759d71287e8ac7e6280/636dd759d71287b6b07e63ed_Connect.svg" alt="" />
                        <p>
                        Connect directly with <span>founders</span> at top startups - no third party recruiters allowed                        </p>
                    </li>
                </ul>
                <div>
                    <button type="button" className="learn-more-btn">
                        Learn more
                    </button>
                    <button type="button" className="signup-now-btn">
                        Sign up now
                    </button>
                </div>
                </div>   
            </div>
            <div className="blog">
                <div className="blog-content2">
                <div>
                <h6>NEED TALENT?</h6>
                <h1>Why recruiters love us</h1>
                </div>
                <ul>
                    <li>
                        <img src="https://assets-global.website-files.com/636dd759d71287e8ac7e6280/636dd759d7128716b37e63bb_Team.svg" alt="" />
                        <p>
                        <span>8 million</span> responsive and startup-ready candidates, with all the information you need to vet them
                        </p>
                    </li>
                    <li>
                        <img src="https://assets-global.website-files.com/636dd759d71287e8ac7e6280/636dd759d7128708fd7e63b6_Settings.svg" alt="" />
                        <p>
                        Everything you need to kickstart your recruiting - get job posts, company branding, and HR tools set up within <span>10 minutes, for free</span></p>
                    </li>
                    <li>
                        <img src="https://assets-global.website-files.com/636dd759d71287e8ac7e6280/636dd759d71287316a7e63c1_Template.svg" alt="" />
                        <p>
                        A free <span>applicant tracking system,</span> or free integration with any ATS you may already use</p>                    </li>
                </ul>
                <div>
                    <button type="button" className="learn-more-btn">
                        Learn more
                    </button>
                    <button type="button" className="signup-now-btn">
                        Sign up now
                    </button>
                </div>
                </div>  
                <div className="img-card2">
                <img className="blog-img" src="https://assets-global.website-files.com/636dd759d71287e8ac7e6280/636dd759d712879f567e63c5_Frame%2520284-min-p-800.png" alt="" />
                </div> 
            </div>
        </div>
        <Reviews/> 
    </div>
)
export default Blogs;