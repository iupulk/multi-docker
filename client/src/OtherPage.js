import React from 'react';
import { Link } from 'react-router-dom';

const OtherPage = () => {
    return (
      <div>
        Im some other pag!
        <Link to="/"> Go back home</Link>
      </div>  
    );
};

export default OtherPage;