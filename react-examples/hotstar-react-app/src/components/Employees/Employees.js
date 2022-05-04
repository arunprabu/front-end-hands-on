import React, { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import Category from './Category'

const Employees = () => {
  const { search } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // hit the backend the variable search 
    console.log('changed');

  }, [search])

  return (
    <div>
      <h1>Employees</h1>
      <div>Query search: {search}</div>
      <button type="button" onClick={() => navigate("/employees")}>
        Back
      </button>
      <aside>
        <Category />
        {/* Discount should come */}
      </aside>

    </div>
  )
}

export default Employees