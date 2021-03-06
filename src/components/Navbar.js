import React from 'react'
// import { Link } from 'react-router-dom'

export default function Navbar(props) {
    return (
<nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container fixed-top">
    <a className="navbar-brand" href="#">{props.title} </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        {/* removing about for git hub  because router doesnt work on git hub */}
        {/* <li className="nav-item">
        <Link className="nav-link" to="/about">{props.about}</Link>
        </li> */}
          {/* <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            contact us 
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="/">email</a></li>
            <li><a className="dropdown-item" href="/">phone/telephone </a></li>
            <li><hr className="dropdown-divider" /></li>
            <li><a className="dropdown-item" href="/">address</a></li>
          </ul>
        </li> */}

      </ul>
      <div class={`form-check form-switch text-${props.mode=== 'light'?'dark':'light'}`}>
  <input className="form-check-input" type="checkbox" onClick={props.togmode} role="switch" id="flexSwitchCheckChecked" />
  <label className="form-check-label" for="flexSwitchCheckChecked">dark mode</label>
</div>
      {/* <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form> */}
    </div>
  </div>
</nav>
    )
}
