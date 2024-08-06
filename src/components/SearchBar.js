// src/components/SearchBar.js
import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const SearchBarWrapper = styled.div`
  display: flex;
  justify-content: flex-start; /* Align to the left */
  margin-bottom: 16px;
`;

const SearchBarContainer = styled.div`
  width: 30%; /* Adjusted width to be smaller */
  padding: 4px;
  border: 1px solid #333; /* Black border */
  border-radius: 4px;
  background-color: #000; /* Black background */
  display: flex;
  align-items: center; /* Center icon and text vertically */
`;

const SearchInput = styled.input`
  border: none;
  outline: none;
  padding: 8px;
  width: 100%;
  color: #fff; /* White text */
  background-color: #000; /* Black background */
`;

const SearchIcon = styled(FontAwesomeIcon)`
  color: #fff; /* White icon color */
  margin: 0 8px; /* Space between icon and text */
`;

const SearchBar = () => {
  return (
    <SearchBarWrapper>
      <SearchBarContainer>
        <SearchIcon icon={faSearch} />
        <SearchInput type="text" placeholder="Search..." />
      </SearchBarContainer>
    </SearchBarWrapper>
  );
};

export default SearchBar;
