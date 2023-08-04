import {BsTwitter,BsInstagram} from "react-icons/bs"
import "./bottom.css";

const Bottom = () => (
    <div className="bottom">
        <div className="bottom-card">
        <div>
        <img src="https://assets-global.website-files.com/636dd759d71287e8ac7e6280/643439bd94363f4d30f385c1_Primary%20Logo%20-%20Black.svg" alt="" className="nav-logo" />
        <div>
            <BsTwitter className="icons"/>
            <BsInstagram className="icons"/>
        </div>
        </div>
        <div className="lists">
            <ul>
            For Candidates
                <li>
                    Overview
                </li>
                <li>
                    Startup Jobs
                </li>
                <li>
                Web3 Jobs
                </li>
                <li>
                Featured
                </li>
                <li>
                Salary Calculator
                </li>
                <li>
                Startup Hiring Data
                </li>
                <li>
                Tech Startups
                </li>
                <li>
                Remote
                </li>
            </ul>
            <ul>
            For Recruiters
                <li>
                    Overview
                </li>
                <li>
                Recruit Pro
                </li>
                <li>
                Curated
                </li>
                <li>
                RecruiterCloud
                </li>
                <li>
                Hire Developers
                </li>
                <li>
                Pricing
                </li>
            </ul>
            <ul>
            Company
                <li>
                About
                </li>
                <li>
                AngelList Venture
                </li>
                <li>
                Help
                </li>
                <li>
                Blog
                </li>
                <li>
                Terms & Risks
                </li>
                <li>
                Privacy & Cookies
                </li>
            </ul>
        </div>
        </div>   
        <div className="copyright text-secondary">
        <p>Copyright © 2023 Wellfound (formerly AngelList Talent). All rights reserved.</p>
        <p>Browse by: <span>Jobs, Remote Jobs, Locations, Startups, Industries, Tech Hubs</span></p>
        </div> 
    </div>
)
export default Bottom;