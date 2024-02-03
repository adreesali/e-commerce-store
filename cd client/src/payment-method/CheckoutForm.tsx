



import React, { FC, FormEvent, useState } from 'react';
import { CardElement, useStripe, useElements, StripeCardElementOptions } from '@stripe/react-stripe-js';

interface CheckoutFormProps {
  onSuccess: (message: string) => void;
  onError: (error: string) => void;
}

const CheckoutForm: FC<CheckoutFormProps> = ({ onSuccess, onError }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState<boolean>(false);

  const handleCheckout = async (event: FormEvent) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setLoading(true);

    try {
      const { token, error } = await stripe.createToken(elements.getElement(CardElement));

      if (error) {
        throw new Error(error.message || 'An error occurred while creating the token.');
      }

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
      if (response.ok) {
        onSuccess('Payment successful!');
      } else {
        const result = await response.json();
        onError(result.error || 'An error occurred during payment processing.');
      }
    } catch (error) {
      onError(error.message || 'An unexpected error occurred.');
    } finally {
      setLoading(false);
    }
  };

  const cardElementOptions: StripeCardElementOptions = {
    style: {
      base: {
        fontSize: '16px',
        color: '#32325d',
        fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
        '::placeholder': {
          color: '#aab7c4',
        },
      },
      invalid: {
        color: '#fa755a',
        iconColor: '#fa755a',
      },
    },
  };

  return (
    <form onSubmit={handleCheckout} className="container-fluid h-100 d-flex align-items-center justify-content-center">
      <div className="card p-4" style={{ width: '90%', maxWidth: '600px' }}>
        <h3 className="mb-4 text-center">Secure Payment</h3>
        <div className="mb-3">
          <label htmlFor="cardElement" className="form-label">
            Card Details
          </label>
          <CardElement
            id="cardElement"
            options={cardElementOptions}
          />
        </div>
        <div className="text-center">
          <button
            type="submit"
            disabled={!stripe || loading}
            className="btn btn-primary btn-lg"
            style={{ width: '100%' }}
          >
            {loading ? 'Processing...' : 'Checkout'}
          </button>
        </div>
      </div>
    </form>
  );
};

export default CheckoutForm;






