import {FcGoogle} from "react-icons/fc";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import "./login.css";
const Login = () => {
    const settings = {
        dots:false,
        infinite: true,
        slidesToShow:5,
        slidesToScroll: 1,
        autoplay: true,
        speed: 7000,
        autoplaySpeed:1000,
        cssEase: "linear"
      };
return(
    <div>
        <div className="login-containers">
            <input type="email" placeholder="Your email" />
            <button type="button"  className="signup-now-btns">Sign up</button>
            <p>or</p>
            <button type="button" className="learn-more-btns">
                <FcGoogle className="icons"/> SignUp with Google
            </button>

        </div>
        <div className="login-details">
            <p>Looking to fund raise or invest in the next generation of great startups?<br/> AngelList Venture can now be found at <span>AngelList.com.</span></p>
            <p>Already have an account? <span>Log in</span></p>
        </div>
        <div className="comments">
            <div className="box one">
                <h1>130K +</h1>
                <h2>
                    Tech Jobs
                </h2>
            </div>
            <div className="box two">
                <h1>6,000,000</h1>
                <h2>
                    Matches Made
                </h2>
            </div>
            <div className="box three">
                <h1>8M +</h1>
                <h2>
                    Startup-ready candidates
                </h2>
            </div>
        </div>
        <div>

        <div className="sliders">
        <Slider {...settings}>
          <div>
          <img src="https://assets-global.website-files.com/636dd759d7128716627e62a9/636dd759d712873dc17e62ee_Vector-1.svg"
                alt="" />
          </div>
          <div>
          <img src="https://assets-global.website-files.com/636dd759d7128716627e62a9/636dd759d71287f2017e62db_Group.svg"
                alt="" />
          </div>
          <div>
          <img src="https://assets-global.website-files.com/636dd759d7128716627e62a9/636dd759d712877d277e62be_Group-1.svg"
                alt="" />
          </div>
          <div>
          <img src="https://assets-global.website-files.com/636dd759d7128716627e62a9/636dd759d71287cd407e62bd_Group%2047.svg"
                alt="" />
          </div>
          <div>
          <img src="https://assets-global.website-files.com/636dd759d7128716627e62a9/636dd759d712872b6c7e62ad_g3707.svg"
                alt="" />
          </div>
          <div>
          <img src="https://assets-global.website-files.com/636dd759d7128716627e62a9/636dd759d71287437a7e6343_Vector.svg"
                alt="" />
          </div>
          <div>
          <img src="https://assets-global.website-files.com/636dd759d7128716627e62a9/636dd759d712874df97e6332_Vector-5.svg"
                alt="" />
          </div>
          <div>
          <img src="https://assets-global.website-files.com/636dd759d7128716627e62a9/636dd759d71287f1797e6321_Vector-4.svg"
                alt="" />
          </div>
          <div>
          <img src="https://assets-global.website-files.com/636dd759d7128716627e62a9/636dd759d7128746107e6310_Vector-3.svg"
                alt="" />
          </div>
          <div>
          <img src="https://assets-global.website-files.com/636dd759d7128716627e62a9/636dd759d712878c8c7e62ff_Vector-2.svg"
                alt="" />
          </div>
        </Slider>
      </div>
    </div>
    </div>
)
}
export default Login;