
import React from "react";

const Docs = props => {
  let currentDoc = props.docs.find(
    doc => doc.uid === props.match.params.uid
  );

  return (
    <div className="doc-card">
      <h4 className="name">{currentDoc.profile.first_name} {currentDoc.profile.middle_name} {currentDoc.profile.last_name}, {currentDoc.profile.title}</h4>

      <h5>NPI: {currentDoc.npi}</h5>

      <p>Bio: {currentDoc.profile.bio}</p>

      {currentDoc.practices &&
        <div className="location">
        <h5>Practice Locations:</h5>
          {currentDoc.practices.map(practice =>
            <h5> {practice.visit_address.street}, {practice.visit_address.city}, {practice.visit_address.state} {practice.visit_address.zip} <br></br>
            {/* Phone number: {practice.phones.number} */}
            </h5>
          )}
        </div>
      }
        
      {/* {currentDoc.practices &&
        <div className="location">
          {currentDoc.practices.map(practice =>
            <h5>Accepting New Patients? {practice.accepts_new_patients}</h5>
          )}
        </div>
      } */}

      
      {currentDoc.insurances &&
        <div className="insurances">
          <h5>Insurances Accepted:</h5>
          {currentDoc.insurances.map(insurance =>
            <h5>{insurance.insurance_provider.name} {insurance.insurance_plan.name}</h5>
          )}
        </div>
      }
      

        <div className="specialties">
          <h5>Specialties:</h5>
          {currentDoc.specialties.map(specialty =>
            <h5>{specialty.name}</h5>
          )}
        </div>
    </div>
  );
};

export default Docs;


