// CheckoutForm.tsx

import React from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

const CheckoutForm: React.FC = () => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const { token, error } = await stripe.createToken(elements.getElement(CardElement));

    if (error) {
      console.error(error);
      // Handle errors
    } else {
      // Send the token to your backend for payment processing
      const response = await fetch('/api/payment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          token: token.id,
          // Add any additional data you need for payment processing
        }),
      });

      // Handle response from the backend
      const result = await response.json();
      console.log(result);
      // Handle success/failure based on the response
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement />
      <button type="submit" disabled={!stripe}>
        Pay
      </button>
    </form>
  );
};

export default CheckoutForm;
