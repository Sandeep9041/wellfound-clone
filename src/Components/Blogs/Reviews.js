import "./blog.css";

const Reviews = () => (
    <div className="review">
        <div className="headings">
            <p>DON'T JUST TAKE IT FROM US</p>
            <h1>From our users</h1>
        </div>
        <div>
            <ul>
                <li>
                    <img src="https://assets-global.website-files.com/636dd759d71287e8ac7e6280/636dd759d71287dcb67e6478_Quotes.svg"
                    alt="" className="review-img" />
                    <p>I got my tech job on Wellfound (AngelList Talent) 4 years ago and I'm still happy! Pays well, great culture, and unlimited PTO.</p>
                </li>
                <li>
                    <img src="https://assets-global.website-files.com/636dd759d71287e8ac7e6280/636dd759d71287dcb67e6478_Quotes.svg"
                    alt="" className="review-img" />
                    <p>I love Wellfound (AngelList Talent). I got my current job at a startup entirely through the site last year - it's super easy to use and I love the UI.</p>
                </li>
                <li>
                    <img src="https://assets-global.website-files.com/636dd759d71287e8ac7e6280/636dd759d71287dcb67e6478_Quotes.svg"
                    alt="" className="review-img" />
                    <p>I can't imagine my day to day without this platform. Life would be a lot more difficult.</p>
                </li>
                <li>
                    <img src="https://assets-global.website-files.com/636dd759d71287e8ac7e6280/636dd759d71287dcb67e6478_Quotes.svg"
                    alt="" className="review-img" />
                    <p>Half of the offers I give are sourced from Wellfound (AngelList Talent). It's the best product for anyone looking for startup talent.</p>
                </li>
            </ul>
            <div className="review-post">
                <div  className="review-post-card">
                    <div className="review-post-img-card1">
                    <img src="https://assets-global.website-files.com/636dd759d71287e8ac7e6280/636dd759d7128741f87e63e7_AGT%20-%20Featured.png" 
                    alt=""
                    />
                    </div>
                    <div className="review-post-content">
                        <h5>GET FEATURED</h5>
                        <h2>Let us show you off</h2>
                        <p>Apply to be featured and we'll highlight your profile to top recruiters and companies searching for your specific skills.</p>
                        <p>Oh, it's also 100% free.</p>
                        <button type="button" className="learn-more-btn">
                            Learn more
                        </button>
                    </div>
                </div>
                <div className="review-post-card">
                    <div className="review-post-img-card2">
                    <img src="https://assets-global.website-files.com/636dd759d71287e8ac7e6280/636dd759d71287f5ab7e63e6_AGT%20-%20Calculator%201.png" 
                    alt=""
                    />
                    </div>
                    <div className="review-post-content">
                        <h5>SALARY CALCULATOR</h5>
                        <h2>Know your worth</h2>
                        <p>We have the data. Research by job title, industry, and company size to find your salary range and be prepared to nail your negotiations.</p>
                        <button type="button" className="learn-more-btn">
                            Calculate your salary
                        </button>
                    </div>
                </div>
            </div>




        </div>
    
    
    
    
    </div>
)
export default Reviews;