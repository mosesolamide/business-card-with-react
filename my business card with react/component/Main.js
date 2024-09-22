import React from "react"

export default function Main(){
    return(
        <main>
            <div className="box-one">
                <h2>Akintunde Moses</h2> 
                <h3>Frontend Developer</h3>
                <small>mosestech.website</small>
            </div>
            <div className="box-two">
                <a href="olamidemoses132@gmail.com" className="email"><i class="bi bi-envelope-fill"></i>Email</a> 
                <a href="www.linkedin.com/in/akintunde-moses-b17367309" className="linkedin"><i class="bi bi-linkedin" id="secondi"></i>linkedin</a>
            </div> 
            <div className="box-three">
                <div className="first">
                    <p className="second">About</p>
                    <article>
                        I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.
                    </article>
                </div>
                <div>
                    <p className="second">Interests</p>
                    <article>
                        Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.
                    </article>
                </div>
            </div>
        </main>   
    )
}