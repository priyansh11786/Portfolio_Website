import React from 'react'
import { HashRouter, Route } from 'react-router-dom'
import About from '../about/About'
import Skills from '../skills/Skills'
import Projects from '../projects/Project'
import Contact from '../contacts/Contact'
import Home from '../Home/Home'

import './App.css'
import NavBar from '../NavBar/NavBar'
import GoHome from '../GoHome/GoHome'

const App = () => {

    return (
        <div>
            <HashRouter>
                <div>
                    <NavBar/>
                    <Route path="/" exact component={Home} />
                    <Route path="/about" exact component={About} />
                    <Route path="/skills" exact component={Skills} />
                    <Route path="/projects" exact component={Projects} />
                    <Route path="/contacts" exact component={Contact} />
                    <GoHome/>
                </div>
            </HashRouter>
        </div>
    )
}

export default App
