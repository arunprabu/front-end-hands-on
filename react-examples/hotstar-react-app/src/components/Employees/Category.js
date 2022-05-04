import React from 'react'
import {
  generatePath,
  useLocation,
  useNavigate
} from "react-router-dom";

const useNavigateParams = () => {
  const navigate = useNavigate();

  return (url, params) => {
    const path = generatePath(":url?:queryString", {
      url,
      queryString: params
    });
    navigate(path);
  };
};

const Category = () => {
  const navigate = useNavigateParams();
  const { search } = useLocation();

  const setIdHandler = () => {
    navigate("", `id=${Math.floor(Math.random() * 1000)}`);
  };

  const applyDiscountHandler = () => {
    if(search){
      const existingQuery = search.substring(1, search.length);
      navigate("", `${existingQuery}&disc=20`);
    }
    
  };

  return (
    <div>
      <p>Category</p>
      <button type="button" onClick={setIdHandler}>
        Set Id
      </button>

      <button type="button" onClick={applyDiscountHandler}>
        Appy Discount
      </button>

    </div>
    
  )
}

export default Category