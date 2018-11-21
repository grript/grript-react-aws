import React from 'react';
import styled from 'styled-components';


// <style type="text/css">div.image {max-width: 256px;max-height: 256px;background-image: }</style>

const SearchForm = () => {
  return (
    <form  action="/search" className="search-form" role="search" aria-label="Search Form">
      <input name="q" type="text" placeholder="Search…" maxlength="240" />
      <input name="submit" type="submit" className="icon"/>
    </form>
  );
}

export default SearchForm;

export const SearchFormSidebar = () => {
  return (
    <StyledSearchForm className="search-bar-sidebar">
      <SearchForm />
    </StyledSearchForm>  
  );
}  

const StyledSearchForm = styled.div`
  padding: 15px 1em 8px 2em;
  form {
    white-space: nowrap;
    overflow: hidden;
    display: block;
    max-width: 222px;
  }
  input {
    border:0;
    border-radius: 4px;
    font-size: 14px;
  }
  input[type=text] {
    padding: 0 5px;
    height: 28px;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    line-height: 1;
    min-width: 180px;
  }
  input[type=submit] {
    height: 29px;
    width: 32px;
    line-height: 1;
    padding: 0 5px;
    background-color: #000;
    color: #fff;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;  
    background-image: url(data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDU2Ljk2NiA1Ni45NjYiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDU2Ljk2NiA1Ni45NjY7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iMTZweCIgaGVpZ2h0PSIxNnB4Ij4KPHBhdGggZD0iTTU1LjE0Niw1MS44ODdMNDEuNTg4LDM3Ljc4NmMzLjQ4Ni00LjE0NCw1LjM5Ni05LjM1OCw1LjM5Ni0xNC43ODZjMC0xMi42ODItMTAuMzE4LTIzLTIzLTIzcy0yMywxMC4zMTgtMjMsMjMgIHMxMC4zMTgsMjMsMjMsMjNjNC43NjEsMCw5LjI5OC0xLjQzNiwxMy4xNzctNC4xNjJsMTMuNjYxLDE0LjIwOGMwLjU3MSwwLjU5MywxLjMzOSwwLjkyLDIuMTYyLDAuOTIgIGMwLjc3OSwwLDEuNTE4LTAuMjk3LDIuMDc5LTAuODM3QzU2LjI1NSw1NC45ODIsNTYuMjkzLDUzLjA4LDU1LjE0Niw1MS44ODd6IE0yMy45ODQsNmM5LjM3NCwwLDE3LDcuNjI2LDE3LDE3cy03LjYyNiwxNy0xNywxNyAgcy0xNy03LjYyNi0xNy0xN1MxNC42MSw2LDIzLjk4NCw2eiIgZmlsbD0iI0ZGRkZGRiIvPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K);  
    background-size: 18px 18px;
    text-indent: -9999px;
  }
`;