//-----------------------------------------------------------------------------
// src/components/navbar.js
//-----------------------------------------------------------------------------
import React        from 'react'
import PropTypes    from 'prop-types'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand" href="#">CHECKBOOK</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <a className="nav-item nav-link active" href="#">Home 
            <span className="sr-only">(current)</span>
          </a>
          <a className="nav-item nav-link" href="#">About</a>
          <a className="nav-item nav-link" href="#">Help</a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
