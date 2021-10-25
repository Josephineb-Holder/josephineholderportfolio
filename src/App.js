import React from "react"
// eslint-disable-next-line
import {BrowserRouter as Router, Route, Switch, useRouteMatch} from "react-router-dom"
import Home from "./components/Home"
import Skills from "./components/Skills"
import Resume from "./components/Resume"
import Contact from "./components/Contact"
import About from "./components/About"
import Navbar from "./components/Navbar/Navbar"
import Footer from "./components/Footer"
import "./App.css"

const FooterWrapper = () => {
    const match = useRouteMatch({path: '/', strict: true})
    return (match.isExact ? null : <Footer/>);
}

const App = () => {
    return (
        <Router>
            <div className="page-container">
                <div className="content-wrap">
                    <Navbar/>
                    <Switch>
                        <Route path="/" component={Home} exact>
                            <Home/>
                        </Route>
                        <Route path="/skills" component={Skills} exact>
                            <Skills/>
                        </Route>
                        <Route path="/resume" component={Resume} exact>
                            <Resume/>
                        </Route>
                        <Route path="/contact" component={Contact} exact>
                            <Contact/>
                        </Route>
                        <Route path="/about" component={About} exact>
                            <About/>
                        </Route>
                        <Route path="/Footer" component={Footer} exact>
                            <Footer/>
                        </Route>
                    </Switch>
                </div>
                <FooterWrapper/>
            </div>
        </Router>
    )
}

export default App
