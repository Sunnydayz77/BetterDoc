import React from 'react'

// export default class ProviderSearch extends Component {
//   render() {
//     return (
//       <div>
//         <h1>Provider Search</h1>
//       </div>
//     )
//   }
// }


const ProviderSearch = ({ onChange, onSubmit, name, value }) => {
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
export default ProviderSearch
