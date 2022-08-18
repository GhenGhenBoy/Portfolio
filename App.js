
import './App.css';
import React from "react";



export default function App() {
  return (
    <div>

      <div class="topnav">
      <a class="active" href="#home">Home</a>
      <a href="#news">News</a>
      <a href="#contact">Contact</a>
      <a href="#about">About</a>
      </div>


      <div class="about-section">
  <h1>Portfolio</h1>
  <p>I am Christopher Resh.</p>
  <p>We Build, We create.</p>
</div>

<h2 className='go'>Our Team</h2>
<div class="row">
  <div class="column">
    <div class="card">
      <div class="container">
        <h2>Christopher Resh</h2>
        <p class="title">CEO & Founder</p>
        <p> Front end developer</p>
        <p>jane@example.com</p>
        <p><button class="button">Contact</button></p>
      </div>
    </div>
  </div>

  <div class="column">
    <div class="card">
      <div class="container">
        <h2>Mike Ross</h2>
        <p class="title">Art Director</p>
        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
        <p>mike@example.com</p>
        <p><button class="button">Contact</button></p>
      </div>
    </div>
  </div>

  <div class="column">
    <div class="card">
      <div class="container">
        <h2>John Doe</h2>
        <p class="title">Designer</p>
        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
        <p>john@example.com</p>
        <p><button class="button">Contact</button></p>
      </div>
    </div>
  </div>
</div>
    </div>

    
    
  ) ;
}
