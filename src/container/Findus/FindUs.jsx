import React from 'react';
import './FindUs.css'

const FindUs = () => (
  <>
  <h1 className='app__findus_tittle'>Find Us</h1>
  {/* <h1 style={{ color: 'var(--color-golden)', backgroundColor: 'var(--color-black)', textAlign: 'center' }}>Locations</h1> */}
  <h1 className='app__findus_locationText'>Locations</h1>
  <div className='app__findus section__padding_findus' id='findus'>
    <div className='app__findus_location'>
      <p>Järnvägsgatan</p>
      <p>828 32 Edsbyn</p>
      <p>Sweden</p>
    </div>
    <div className='app__findus_location'>
      <p>Spelmansvägen</p>
      <p>828 30 Edsbyn</p>
      <p>Sweden</p>
    </div>
  </div>
  </>
);

export default FindUs;
