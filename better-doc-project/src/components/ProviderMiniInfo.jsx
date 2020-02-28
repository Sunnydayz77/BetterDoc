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

            <h4 className="name">{doc.profile.first_name} {doc.profile.middle_name} {doc.profile.last_name}, {doc.profile.title}</h4>
            
            <h5>NPI: {doc.npi}</h5>

            
            {doc.practices &&
              <div className="location">
              <h5>Practice Locations: </h5>
                {doc.practices.map(practice =>
                  <h5>{practice.visit_address.city}, {practice.visit_address.state} {practice.visit_address.zip}</h5>
                )}
              </div>
            }

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
  }
    </>
)}
  
  
  
export default ProviderMiniInfo

