import React from "react" 
import ReactDOM from "react-dom"
import Headers from "/component/Headers.js"
import Main from "/component/Main.js"
import Footer from "/component/Footer.js"

function Render(){
    return(
        <>
            <Headers />
            <Main />
            <Footer />
        </>
    )
}
ReactDOM.render(<Render />, document.getElementById("root"))