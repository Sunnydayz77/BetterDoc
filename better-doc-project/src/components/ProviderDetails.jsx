
import React from "react";

const Docs = props => {
  let currentDoc = props.docs.find(
    doc => doc.uid === props.match.params.uid
  );

  return (
    <div className="doc-card">
      <h3 className="name">{currentDoc.profile.first_name} {currentDoc.profile.middle_name} {currentDoc.profile.last_name}, {currentDoc.profile.title}</h3>

      <h3>NPI: {currentDoc.npi}</h3>

      <h3>{currentDoc.profile.bio}</h3>

      {currentDoc.practices &&
        <div className="location">
          <h3>Practice Locations:</h3>
          {currentDoc.practices.map(practice =>
            <h5> {practice.visit_address.street}, {practice.visit_address.city}, {practice.visit_address.state} {practice.visit_address.zip} </h5>
          )}
        </div>
      }

      {currentDoc.insurances &&
        <div className="insurances">
          <h3>Insurances Accepted:</h3>
          {currentDoc.insurances.map(insurance =>
            <h5>{insurance.insurance_provider.name} {insurance.insurance_plan.name}</h5>
          )}
        </div>
      }
      
        <div className="specialties">
          <h3>Specialties:</h3>
          {currentDoc.specialties.map(specialty =>
            <h5>{specialty.name}</h5>
          )}
        </div>
    </div>
  );
};

export default Docs;


