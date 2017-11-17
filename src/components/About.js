import React from 'react';
import Navbar from './Navbar';

export default function About() {
  return(
    <div>
      <Navbar />
      <div className="about">
        <p>
          The reason for this app is simple. 
          <br />
          Your workflow: You write some words, make some typos, and type some more letters before realizing an error... Now you're mashing the left arrow key or worse - backspace - to correct the mistake. Now you're heading back to the end of your sentence, or retyping the whole thing ... aaaaannd ... you've lost your train of thought. 
        </p>

        <p> Text Vanish was made to allow you to keep typing, without the ability to fix or even see the errors, so you don't miss your train of thought.
        </p>
      </div>
    </div>
  )
}
