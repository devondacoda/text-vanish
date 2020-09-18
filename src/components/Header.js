import React from 'react';

export default function Header () {
  return(
    <div className="header">
      <div id="title">
        <h1>Text <span id="title-vanish">Vanish</span></h1>
        <h5>for writers</h5>
      </div>
      <div id="logo">
          <img id="img-smoke" src="text-vnsh.png" alt='vanish' />
      </div>
    </div>
  );
}
