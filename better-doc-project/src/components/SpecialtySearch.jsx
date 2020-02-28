import React from 'react'


const SpecialtySearch = ({ onChange, onSubmit, name, value }) => {
  return (
    <form onSubmit={e => onSubmit(e)}>
      <input
        value={value}
        onChange={e => onChange(e)}
        name={name}
        type="text"
      />
      <button type="submit">Search</button>
    </form>
  )
}
export default SpecialtySearch
