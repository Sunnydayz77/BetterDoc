
import React from 'react'
import { Link } from 'react-router-dom'
import ProviderDetails from './ProviderDetails'

const ProviderMiniInfo = ({ docs }) => {
 
  console.log(docs)
  return (
    <>
    { docs.length>0 &&
        docs.map((doc, index) => {
      return(
      <Link key={index} to={`ProviderDetails/${doc.uid}`} className="details">
        <div className="doc-card">
          <h4 className="name">{doc.profile.first_name} {doc.profile.last_name}</h4>
          <p>{doc.profile.bio}</p>
        </div>
      </Link>
      )
      })
      }
      </>
    )}
  
  
  
export default ProviderMiniInfo