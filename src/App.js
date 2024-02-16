import './App.css'
import data from './games'
import Project from './components/Project'
import PixelText from './components/pixelText'
import React from 'react'

function App() {

  React.useEffect(() => {
    const welcomeTxt = document.getElementById('welcomeText');
    const paraTxt = document.getElementById('paraText');
    if(welcomeTxt && paraTxt) {
      welcomeTxt.classList.add('slideDown');
      paraTxt.classList.add('slideUp');
    }
    setTimeout(()=>{
      welcomeTxt.classList.remove('slideDown')
      paraTxt.classList.remove('slideUp')
    } , 300)
  }, []);


  return (
    <div className="App">
    <div className='hero'>

      <div className='bg'></div>
      <div className='bg bg1'></div>
      <div className='bg bg2'></div>

      <div className='maintext'>
        <h1 id="welcomeText">Welcome to</h1>
        <PixelText/>
        <p id="paraText">Explore a collection of fun and engaging 2D games.</p>
      </div>
    </div>
    <div className='allGames'>
      <h1 class="rainbowText">Explore 2D playground</h1>
      {data.map((p,index) => {
        return (
        <Project
          index={index}
          title={p.title}
          des={p.description}
          image={p.image}
          playLink={p.play}
          codeLink={p.code}
         />
        )
      })} 
    </div>
    <div className='contact'>
    <h2 className='rainbowText'>Get in Touch</h2>
    <p><span>Have questions, feedback, or just want to say hello?</span>Feel free to reach out using the contact form below. I'm always eager to connect with fellow developers.<br></br> Let's start a conversation and create something amazing together!</p>
    <div className='socials'>
    <a href="mailto:andivyy@gmail.com"><i class="fa-regular fa-envelope"></i></a>
    <a href="https://www.linkedin.com/in/anuradhasingh12/"><i class="fa-brands fa-linkedin"></i></a>
    <a href="https://github.com/Andivyy11"><i class="fa-brands fa-github"></i></a>
    </div>
    <div>
      <p style={{textAlign:'center'}}>Copyright (c) 2024 Anuradha</p>
    </div>
    </div>
    
    </div>
  );
}
export default App;
