import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = "pk_test_jFpHL9suVlzXT4E0dGYSCGA300gEZ0xxx9";

  const onToken = token => {
    console.log(token);
    alert("payment successful");
  };

  return (
    <StripeCheckout
      name="Ecommerce"
      label="Pay now"
      image="https://sendeyo.com/up/d/f3eb2117da"
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
