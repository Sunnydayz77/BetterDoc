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
      docs.length > 0 &&
  
        (docs.map((doc, index) => {
      
        return (
        <>
          <div key={index} className="doc-card">
            
            <img src={doc.profile.image_url} alt="provider picture" onError={addDefaultSource} className="providerPic"/> 

            <h3 className="name">{doc.profile.first_name} {doc.profile.middle_name} {doc.profile.last_name}, {doc.profile.title}</h3>
            
            <h3>NPI: {doc.npi}</h3>

            
            {doc.practices &&
              <div className="location">
              <h3>Practice Locations: </h3>
                {doc.practices.map(practice =>
                  <h5>{practice.visit_address.city}, {practice.visit_address.state} {practice.visit_address.zip}</h5>
                )}
              </div>
            }

            <div className="specialties">
            <h3>Specialties:</h3>
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
  }
</>
)}
  
  
  
export default ProviderMiniInfo

