import React from 'react';
import './Search.css';
import PropTypes from 'prop-types'

const Search = ({ handleInputChange }) => (
  <div>
    <input onChange={ handleInputChange } type="text" placeholder="search YouTube..." />
  </div>
)

Search.propTypes = {
  handleInputChange: PropTypes.func
}

export default Search;
