import "./smallblog.css"
import "../Blogs/blog.css"


const SmallBlog = () => (
    <div className="smallblog">
        <div className="small-blog-headings">
            <h1>Wellfound's </h1>
            <h1>
            <span>10</span> of <span>10</span> in <span>2022</span>
            </h1>
            <p>10 groundbreaking teams across 10 trending industries</p>
            <button type="button" className="signup-now-btn" style={{paddingInline:"31px",paddingBlock:"14px"}}>Discover our 10 of 10</button>
        </div>
        <div className="small-blogs">
            <div className="small-blogs-top">
                <h1>From the blog</h1>
                <button type="button" className="learn-more-btn">
                    More posts
                </button>
            </div>
            <div>
                <div className="smallblog-card-containers">
                <div className="smallblog-card">
                    <div className="smallblog-img-card">
                    <img src="https://assets-global.website-files.com/636dd759d7128716627e62a9/636dd759d712872b067e635c_Frame%2520292-min-p-800.jpeg" 
                    alt=""
                    />
                    </div>
                    <div className="smallblog-content">
                        <h5>BLOG POST</h5>
                        <h2>The Truth About Finding Your First Engineering Job</h2>
                        <p>Even for senior engineers, job searches can be confusing, frustrating affairs. When you're a junior engineer looking for your first job...</p>
                        <button type="button" className="learn-more-btn">
                            Read More
                        </button>
                    </div>
                </div>

                <div className="smallblog-card">
                    <div className="smallblog-img-card">
                    <img src="https://assets-global.website-files.com/636dd759d7128716627e62a9/636dd759d71287d71a7e6361_Frame%2520297-min-p-800.jpeg" 
                    alt=""
                    />
                    </div>
                    <div className="smallblog-content">
                        <h5>JOB COLLECTION</h5>
                        <h2>20 Women-Led Startups Expanding Their Remote Teams in 2022</h2>
                        <p>It is no surprise by now that women make great leaders. In the US alone, women-led businesses generated more than 1.8 trillion dollars...</p>
                        <button type="button" className="learn-more-btn">
                            Calculate your salary
                        </button>
                    </div>
                </div>
                
                <div className="smallblog-card">
                    <div className="smallblog-img-card">
                    <img src="https://assets-global.website-files.com/636dd759d7128716627e62a9/636dd759d71287a9897e635e_Frame%2520294-min-p-800.jpeg" 
                    alt=""
                    />
                    </div>
                    <div className="smallblog-content">
                        <h5>JOB COLLECTION</h5>
                        <h2>18 Innovative Space Startups Hiring Now</h2>
                        <p>Few tech sectors are capturing the public’s collective imagination as much as space. Privatized spaceflight, or “NewSpace,” is attracting...</p>
                        <button type="button" className="learn-more-btn">
                            Calculate your salary
                        </button>
                    </div>
                </div>
                <div className="smallblog-card">
                    <div className="smallblog-img-card">
                    <img src="https://assets-global.website-files.com/636dd759d7128716627e62a9/636dd759d712875bf67e635d_Frame%2520293-min-p-800.jpeg" 
                    alt=""
                    />
                    </div>
                    <div className="smallblog-content">
                        <h5>BLOG POST</h5>
                        <h2>Why Naval Ravikant Thinks Remote Work Is The Future</h2>
                        <p>It feels like the rise of remote works has been a top conversation in tech for years, but despite the enthusiasm and attention...</p>
                        <button type="button" className="learn-more-btn">
                            Calculate your salary
                        </button>
                    </div>
                </div>
                <div className="smallblog-card">
                    <div className="smallblog-img-card">
                    <img src="https://assets-global.website-files.com/636dd759d7128716627e62a9/636dd759d7128724317e635f_Frame%2520295-min-p-800.jpeg" 
                    alt=""
                    />
                    </div>
                    <div className="smallblog-content">
                        <h5>JOB COLLECTION</h5>
                        <h2>19 Hot Crypto Startups Hiring Remotely in 2022</h2>
                        <p>Either Crypto has a great PR team, or the internet-based medium of exchange is truly taking the world by storm...</p>
                        <button type="button" className="learn-more-btn">
                            Calculate your salary
                        </button>
                    </div>
                </div>           
                <div className="smallblog-card">
                    <div className="smallblog-img-card">
                    <img src="https://assets-global.website-files.com/636dd759d7128716627e62a9/636dd759d7128719aa7e6360_Frame%2520296-min-p-800.jpeg" 
                    alt=""
                    />
                    </div>
                    <div className="smallblog-content">
                        <h5>BLOG POST</h5>
                        <h2>30 Questions to Ask Before Joining a Startup</h2>
                        <p>You're trying to evaluate the company while still impressing your interviewers, and that balance can be tricky...</p>
                        <button type="button" className="learn-more-btn">
                            Calculate your salary
                        </button>
                    </div>
                </div>
                </div>
            </div>
        </div>
    <div className="dropdowns">
        <div class="dropdown  mb-3">
        <button class="btn border mx-3 px-4 border-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
           Job Collections
        </button>
        <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Remote First Future Jobs</a></li>
            <li><a class="dropdown-item" href="#">Jobs for Bootcamp Grads</a></li>
            <li><a class="dropdown-item" href="#">Junior Software Engineer Jobs</a></li>
        </ul>
    </div>
    <div class="dropdown">
        <button class="btn border mx-3 px-4 border-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
           Remote Jobs
        </button>
        <ul class="dropdown-menu mb-3">
            <li><a class="dropdown-item" href="#">Remote First Future Jobs</a></li>
            <li><a class="dropdown-item" href="#">Jobs for Bootcamp Grads</a></li>
            <li><a class="dropdown-item" href="#">Junior Software Engineer Jobs</a></li>
        </ul>
    </div>
    <div class="dropdown mb-3">
        <button class="btn border mx-3 px-4 border-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
           Job by Location
        </button>
        <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Remote First Future Jobs</a></li>
            <li><a class="dropdown-item" href="#">Jobs for Bootcamp Grads</a></li>
            <li><a class="dropdown-item" href="#">Junior Software Engineer Jobs</a></li>
        </ul>
    </div>
    <div class="dropdown mb-3">
        <button class="btn border mx-3 px-4  border-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
           Job by Role
        </button>
        <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Remote First Future Jobs</a></li>
            <li><a class="dropdown-item" href="#">Jobs for Bootcamp Grads</a></li>
            <li><a class="dropdown-item" href="#">Junior Software Engineer Jobs</a></li>
        </ul>
    </div>
    <div class="dropdown mb-3">
        <button class="btn border mx-3 px-4 border-secondary  dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
           Job by Role & Location
        </button>
        <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Remote First Future Jobs</a></li>
            <li><a class="dropdown-item" href="#">Jobs for Bootcamp Grads</a></li>
            <li><a class="dropdown-item" href="#">Junior Software Engineer Jobs</a></li>
        </ul>
    </div>
    </div>
    </div>
)
export default SmallBlog;