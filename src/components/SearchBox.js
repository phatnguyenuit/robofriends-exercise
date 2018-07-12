import React from 'react';

const SearchBox = ({ searchValue, onChange }) => {
  return (
    <div className='pa2'>
      <input
        className='pa3 ba b--green bg-lightest-blue'
        type='search'
        placeholder='search robots'
        value={searchValue}
        onChange={onChange}
      />
    </div>
  );
}

export default SearchBox;