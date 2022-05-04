import React, { useState } from 'react'

const Company = (props) => {

  const [favCompany, setFavCompany] = useState('');

  const handleChange = (event) => {
    setFavCompany(event.target.value);
  }

  return (
    <div>
      <h2>Welcome to My Company's Official Webpage</h2>

      <input placeholder='Company Name' />

      <div data-testid="companyNameEl">
        {props.companyName}
      </div>

      <hr />

      <input
        data-testid="favCompanyNameInput"
        value={favCompany}
        onChange={handleChange} />
    </div>
  )
}

export default Company