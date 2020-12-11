import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

function Header() {
  return(
    <header>
      <div className="container">
        <h1>heyloh</h1>
        <div className="links">
          <Link to="#Home">Home</Link>
          <Link to="#Skills">Skills</Link>
          <Link to="#Projects">Projetos</Link>
        </div>
      </div>
    </header>
  );
}

export default Header;