import React from 'react';
import PropTypes from 'prop-types'
import './Nav.css';
import Search from '../Search/Search'

const Nav = ({ handleSearchInputChange }) => (
  <div className="navbar">
    <div className="col-md-6 col-md-offset-3">
      <Search handleInputChange={(e) => handleSearchInputChange(e.target.value)}/>
    </div>
  </div>
)

Nav.propTypes = {
  handleSearchInputChange: PropTypes.func
}

export default Nav;
