import React from 'react'
import { Link } from 'react-router-dom'
import ProviderDetails from './ProviderDetails'

const ProviderMiniInfo = ({ docs }) => {
  function addDefaultSource(event) {
    event.target.src = 'https://i.ya-webdesign.com/images/caring-clipart-primary-care-physician-15.png'
  }
  return (
  <>  
    {
      docs.length > 0 ?
  
    (docs.map((doc, index) => {
      return (
        <>
          <div key={index} className="doc-card">
            
            <img src={doc.profile.image_url} alt="provider picture" onError={addDefaultSource} /> 

            <h4 className="name">{doc.profile.first_name} {doc.profile.middle_name} {doc.profile.last_name}, {doc.profile.title}</h4>
            
            <h5>NPI: {doc.npi}</h5>

            <div className="specialties">
              <h5>Specialties:</h5>
              {doc.specialties.map(specialty =>
                <h5>{specialty.name}</h5>
                )}
            </div>
            
            <Link to={`/ProviderContainer/details/${doc.uid}`}>
              <button>More Information</button>
            </Link>
          </div>
        </>
      )
    })
    )
   
  : 
  (< img src = 'https://media.giphy.com/media/5h7dW8ceuJX5C/giphy.gif' alt = "loading spinner"/>)
  }
    </>
)}
  
  
  
export default ProviderMiniInfo


{/* 
{docs.length >= 1 ?
  (docs.map((character, index) => {
      return(
          <div key = {index}>
              {character.name}
          </div>
      )
  }))
  : 
  (< img src = 'https://cdn.dribbble.com/users/361263/screenshots/3051905/imperial_emblem.gif' alt = "loading spinner"/>)
  } */}