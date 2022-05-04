import React from 'react';
import './Subscription.scss'; // comp-specific styles

const Subscription = (props) => {
  // internal styles
  const myStyles = {
    renewStyle: {
      color: 'white', 
      backgroundColor: 'red'
    },
    btnStyle:  {
      border: 'solid 5px red',
      backgroundColor: 'red',
      color: 'white'
    }  
  }

  return (
    <div>
      <h4 className="info">You are an Active Subscriber</h4>

      {/*  Inline Styling */}
      <p style={ {color: 'red', backgroundColor: 'yellow'} }>Your Subscription Ends: {props.endsOn}</p>

      {/* Internal Styling */}
      <p style={myStyles.renewStyle }>Renew now to get 50% offer. Apply coupon: DISCOUNT50</p>
      <button type='button' style={myStyles.btnStyle}>RENEW NOW</button>

    </div>
  )
}

export default Subscription