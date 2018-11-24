import React from 'react';
import styled from 'styled-components';
import DropdownComposite from './DropdownComposite';
import { SearchCircularIcon, SearchBlockDropdown } from './Search';

const DropdownSearch = () => {
  return (
    <DropdownComposite className="DropdownSearch" 
    trigger={trigger} dropdown={dropdown} 
    marginLeft={marginLeft}
    marginRight={marginRight} 
    positionRight={positionRight} />
  );
}

export default DropdownSearch;

const trigger = () => {
  return (
    <SearchCircularIcon />
  );
}

const dropdown = () => {
  return (
    <SearchBlockDropdown />
  );
}
const positionRight = '-50px';
const marginLeft = 'auto';
const marginRight = '1em';