import React from 'react'
import Rainbow from '../hoc/Rainbow'

const About = () =>{
    return(
        <div className="container">
            <h1 className="center">About</h1>
            <p className="center">Refresh this page and my colour will change, I am using the hrigher order component featuer to do this.</p>
        </div>
    )
}

export default Rainbow(About);