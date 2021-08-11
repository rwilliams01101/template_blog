import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom"
import '../nav/Nav.css'
import Collapse from "../../utils/Collapse"
import Home from '../../routes/Home'
import About from '../../routes/About'
import Blogpost from "../../routes/Blogpost"

function Nav () {

    return(
        <>
            <Router>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container-fluid">
                        {/* SWAP_ME change brand to your name or logo */}
                        <Link className="navbar-brand" onClick={Collapse} to="/template_blog">💻TemplateBlog</Link> 
                        <button className="navbar-toggler" id="hamburger-toggle" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarText">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" onClick={Collapse} to="/template_blog">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" onClick={Collapse} to="/about">About</Link>
                            </li>
                        </ul>
                        <span className="navbar-text">
                            <a className="nav-link" href="mailto:SWAP_ME4youremail@gmail.com?subject=Just%20Saying%20Hi&amp;body=Let me know what's new with you! -SWAP_ME FOR YOUR NAME HERE">
                                Email Me                      
                            </a>
                        </span>
                        </div>
                    </div>
                </nav>

                <Switch>
                    <Route path="/about">
                        <About />
                    </Route>
                    <Route path="/blogpost">
                        <Blogpost />
                    </Route>
                    <Route path="/template_blog">
                        <Home />
                    </Route>
                </Switch>
            </Router>
        </>
    )
}

export default Nav

