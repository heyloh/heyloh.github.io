import React from 'react';
/* import { Link } from 'react-router-dom'; */

import { FiLinkedin, FiMail, FiGithub } from 'react-icons/fi';

import Header from '../../components/Header';

import './styles.css';

function Portfolio() {
  return(
    <div className="container">
      <Header />
      <main>
        <div className="all">
          <div className="buttons-container">
            <a href="https://www.linkedin.com/in/heyloh/">
              <FiLinkedin size={26} color="#EFF0F6"/>
            </a>
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=lt.leopoldo@gmail.com">
              <FiMail size={26} color="#EFF0F6"/>
            </a>
            <a href="https://github.com/heyloh">
              <FiGithub size={26} color="#EFF0F6"/>
            </a>
          </div>
          <div className="me-container">
            <h1>Olá, me chamo <span className="loh">Lohana Torres</span></h1>
            <p>
              Sou estudante de Informática do Médio Integrado ao Técnico e 
              desenvolvedora Front-end e Back-end autodidata. Este portfolio está 
              em desenvolvimento, utilizando em ReactJS.
            </p>
          </div>
        </div>
      </main>
      <footer>
        <p align="center">Copyright © 2020 Lohana Torres</p>
      </footer>
    </div>
  );
}

export default Portfolio;