import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { FaSearch } from 'react-icons/fa';

const Wrapper = styled.form`
  position: relative;
  display: flex;
  height: 3.5rem;
  width: 60%;
`;

const Input = styled.input`
  width: 100%;
  background-color: #f7f7f7;
  border: none;
  border: 0px;
  padding-left: 3.6rem;
  font-size: 1.2rem;
`;

const ClearButton = styled.button`
  position: absolute;
  right: 0;
  height: 100%;
  padding: 0 23px;
  border: 0;
  background-color: #202e5c;
  color: white;
  font-weight: 500;
  font-size: 1.4rem;

  :hover {
    cursor: pointer;
  }
`;

const SearchIcon = styled.button`
  position: absolute;
  top: 0px;
  left: 20px;
  height: 100%;
  border: 0;
  color: var(--primary);
  background-color: transparent;
  font-weight: 500;
  font-size: 1.4rem;

  :hover {
    cursor: pointer;
  }
`;

const SearchBox = () => {
  const [searchKeyword, setSearchKeyword] = useState('');

  useEffect(() => {}, [searchKeyword]);

  const clearInput = () => {
    setSearchKeyword('');
  };

  return (
    <Wrapper>
      <SearchIcon>
        <FaSearch></FaSearch>
      </SearchIcon>
      <Input
        type="text"
        onChange={(e) => {
          setSearchKeyword(e.target.value);
        }}
        value={searchKeyword}
        placeholder="Search "
      />
      {searchKeyword.length > 0 && (
        <ClearButton type="button" onClick={clearInput}>
          X
        </ClearButton>
      )}
    </Wrapper>
  );
};

export default SearchBox;
