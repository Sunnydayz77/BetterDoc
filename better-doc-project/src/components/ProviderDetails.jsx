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
  const currentDoc = props.doc.find(
    doc => doc.profile === props.doc.profile
  );

  return (
    <div className="detail">
      <h4 className="title">{currentDoc.profile.first_name}</h4>
    </div>
  );
};

export default ProviderDetails;

