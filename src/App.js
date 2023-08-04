import './App.css';
import Blogs from './Components/Blogs/blog';
import Bottom from './Components/Bottom/bottom';
import Home from './Components/Home/home';
import Login from './Components/Login/login';
import  Navbar  from './Components/Navbar/navbar.js';
import SmallBlog from './Components/SmallBlogs/smallblog';

function App() {
  return (
    <div className='app'>
      <div className="app-card">
          <Navbar />
          <Home />
          <Login />
          <Blogs />
          <SmallBlog />
      </div>
      <hr className="border border-1 border-secondary"/>
      <div className='app-card'>
        <Bottom />
      </div>
    </div>
  );
}

export default App;
