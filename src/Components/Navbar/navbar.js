import "./navbar.css"

const Navbar =()=>(
    <nav className="navbar navbar-expand-lg">
  <div className="container-fluid  d-flex justify-content-between">
    <img src="https://assets-global.website-files.com/636dd759d71287e8ac7e6280/643439bd94363f4d30f385c1_Primary%20Logo%20-%20Black.svg" alt="" className="nav-logo" />
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse d-lg-flex justify-content-lg-end" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link"  href="#">Discover</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">For job seekers</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">For companies</a>
        </li>
        <li className="nav-item">
          {/* <div className="nav-btns"> */}
        <button type="button" class="login">
            Login
        </button>        
        <button type="button" className="signup-btn">
            SignUp
        </button>
        </li>
        
        
      </ul>
    </div>
  </div>
</nav>
)
export default Navbar