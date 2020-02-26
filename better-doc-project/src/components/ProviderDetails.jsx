// export default class ProviderDetails extends Component {
//   render() {
//     return (
//       <div>
//         <h1>Provider Details</h1>
//       </div>
//     )
//   }
// }


import React from "react";

const ProviderDetails = props => {
  const currentDoc = props.docs.find(
    doc => doc.uid === props.doc.uid
  );

  return (
    <div className="doc-card">
      <h4 className="name">{currentDoc.profile.first_name} {currentDoc.profile.middle_name} {currentDoc.profile.last_name}, {currentDoc.profile.title}</h4>
      <p>{currentDoc.profile.bio}</p>
    </div>
  );
};

export default ProviderDetails;

