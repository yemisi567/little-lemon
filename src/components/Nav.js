import React from 'react';
import Logo from "../assets/img/logo.png";
import '../css/nav.css';

function Nav() {
  return (
    <nav className="nav">
      <img src={Logo} alt="Logo" className="logo" />
      <ul>
        <li>
          <>Home</>
        </li>
        <li>
          <>About</>
        </li>
        <li>
          <>Reservations</>
        </li>
        <li>
          <>Order online</>
        </li>
        <li>
          <>Login</>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;