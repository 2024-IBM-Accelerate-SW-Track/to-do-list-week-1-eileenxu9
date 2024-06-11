import React, { Component } from 'react';
import "./About.css";
import pic from "../assets/eileen_pic.png";
  
export default class About extends Component {
  render() {
    return (
      <div>
        <div>
          <div className="split left">
            <div className="centered">
            <img 
            className="profile_image"
            src={pic}
            alt="Profile Pic"
            ></img>
            </div>
          </div>
          <div className="split right">
            <div className="centered">
              <div className="name_title">Eileen Xu</div>
                <div className="brief_description">
                  <p>
                    Hi, my name is Eileen. I am a computer science student at
                    New York University, where I'm also pursuing a minor in
                    cybersecurity and mathematics. I'm passionate about emerging
                    technologies and I've recently started learning about machine 
                    learning and large language models. I am from Dublin, CA and 
                    I love playing soccer. My favorite team is Man City!
                  </p>
                </div>
              </div>
            </div>
          </div>
      </div>
    )
  }
}