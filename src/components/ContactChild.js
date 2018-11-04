import React from 'react';

const ContactChild = ({match}) => {
  return (
      <div className="contact-child-page">
          <h1 className="page-title">Contact Child</h1>
          <h3>URL ID parameter: {match.params.id}</h3>
      </div>
  );
}
export default ContactChild;