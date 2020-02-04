import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

//
const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_jFpHL9suVlzXT4E0dGYSCGA300gEZ0xxx9';

  const onToken = token => {
    // send request to process payment
    axios({
      url: 'payments',
      method: 'post',
      data: {
        amount: priceForStripe,
        token
      }
    })
      .then(res => {
        alert('payment successful');
      })
      .catch(err => {
        console.log('Payment error', JSON.parse(err));
        alert('payment unsuccessful');
      });
  };

  return (
    <StripeCheckout
      name='Ecommerce'
      label='Pay now'
      image='https://sendeyo.com/up/d/f3eb2117da'
      stripeKey={publishableKey}
      token={onToken}
      billingAddress
      shippingAddress
      description={`Your total is $${price}`}
      amount={priceForStripe}
    />
  );
};

export default StripeCheckoutButton;
