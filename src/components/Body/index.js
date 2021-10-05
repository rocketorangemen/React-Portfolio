import React from 'react';
import "../Portfolio.css";
import "../images/iCamp1.png";

function Body () {
    return (
<div class="grid-container">
    <div class="grid-header">
      <h2>Work</h2>
    </div>
        <div class="main-grid">
  <div class="work-item work-item-1">
    <div>
    <h3>My Life Project</h3>
    <p>Full Stack Application</p>
  </div>
  <a href="/">
    <img></img>
  </a>
    <a href="https://dragoonkite.github.io/iCamp/">
        <img src={require('../images/iCamp1.png')} alt="icamp"/>
        </a>
  </div>
  <div class="work-item work-item-2">
    <div>
    <h3>Beer Me</h3>
    <p>MERN App/Group Project</p>
  </div>
  <a href="https://github.com/blueink38/beer-me">
      <img src="../images/generator.png" alt="Beer-Me">
          </img>
      </a>
  </div>
  <div class="work-item work-item-3">
    <div>
    <h3>Eat Out, Austin</h3>
    <p>MongoDB/Group Project</p>
  </div>
  <a href="https://github.com/DragoonKite/eat-out-austin">
      <img src="" alt="">
          </img>
      </a>
  </div>
  <div class="work-item work-item-4">
    <div>
    <h3>My Life Project</h3>
    <p>Full stack React app/Solo Project</p>
  </div>
  <a href="https://github.com/DragoonKite/eat-out-austin"><img src="../images/screenshot.png" alt="Eat-Out-Austin"></img></a>
  </div>
  <div class="work-item work-item-5">
    <div>
    <h3>RUN Buddy</h3>
    <p>HTML/CSS</p>
  </div>
  <a href="https://github.com/rocketorangemen/run-buddy"><img src="./images/item-55.jpg" alt="Run Buddy Website"></img></a>
  </div>
  </div>
  </div>

);
}

export default Body;