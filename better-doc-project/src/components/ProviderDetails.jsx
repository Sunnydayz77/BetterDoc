
import React from "react";

const Docs = props => {
  let currentDoc = props.docs.find(
    doc => doc.uid === props.match.params.uid
  );

  return (
    <div className="doc-card">
      <h4 className="name">{currentDoc.profile.first_name} {currentDoc.profile.middle_name} {currentDoc.profile.last_name}, {currentDoc.profile.title}</h4>
      <p>Bio: {currentDoc.profile.bio}</p>


      {currentDoc.insurances &&
        <div className="insurances">
          <h5>Insurances Accepted:</h5>
          {currentDoc.insurances.map(insurance =>
          <h5>{insurance.insurance_provider.name}</h5>
          )}
        </div>
      }
      
      {currentDoc.insurances &&
      <div>
        {currentDoc.insurances.map(insurance =>
        <h5>{insurance.insurance_plan.name}</h5>
        )}
      </div> 
      }
    </div>
  );
};

export default Docs;




// import React, { Component } from 'react'

// export default class ProviderDetails extends Component {
//   constructor() {
//     super()
//     this.state = {
//      docs: this.props.match.params
//     }
// }


//   render() {
//     return (
//       <div>
//         <h1>Provider Details</h1>
//         {/* <h4 className="name">{docs.profile.first_name} {docs.profile.middle_name} {docs.profile.last_name}, {docs.profile.title}</h4>
//         <h5>{docs.profile.bio}</h5> */}
//       </div>
//     )
//   }
// }
