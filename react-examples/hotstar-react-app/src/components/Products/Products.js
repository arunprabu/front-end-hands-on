import React from 'react'
import { CartState } from '../../context/Context'

const Products = () => {

  const {
    cartDispatch,
  } = CartState();

  const pdtList = [
    {
      id: 1,
      productName: "Apple-iPhone-13-pro-smartphone",
      productDescription: "15 cm (6.1-inch) Super Retina XDR display with ProMotion for a faster, more responsive feel.\n      Cinematic mode adds shallow depth of field and shifts focus automatically in your videos.",
      price: 84900,
      quantity: 30,
    },
    {
      id: 2,
      productName: "Samsung Galaxys S21 FE 5G",
      productDescription: "Samsung Galaxy S21 5G supports frequency bands GSM , CDMA , HSPA , EVDO , LTE , 5G. Official\n      announcement date is January 14 2021.",
      price: 54600,
      quantity: 20,
    }
  ]

  let products = null
  products = pdtList.map((pdt) => {
    return (
      <div className='col-md-3' key={pdt.id}>
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{pdt.productName}</h5>
            <p className="card-text">
              {pdt.productDescription}
            </p>
            <p>{pdt.price}</p>
            <button className="btn btn-primary" onClick={() =>
                cartDispatch({
                  type: "ADD_TO_CART",
                  payload: pdt,
                })
              }>
              Add to Cart
            </button>
          </div>
        </div>

      </div>
    )
  })


  return (
    <div className='row'>

      {products}

    </div>
  )
}

export default Products