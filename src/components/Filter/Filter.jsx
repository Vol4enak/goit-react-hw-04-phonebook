import React from 'react';

export function Filter({ onChange }) {
  const trowValue = e => {
    const value = e.currentTarget.value;
    onChange(value);
  };
  return (
    <>
      <p>Find contacts by name</p>
      <input type="text" onChange={trowValue} />
    </>
  );
}
export default Filter;
