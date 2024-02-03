import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe("pk_test_51OWQVvLoEKqVk1XX8uS7sevfQ8CF7zlL4rQirD8RdbYXohHmuuPInsO7NuCv7G6L5xkh66JLuQq2hfR9Cp8jJX1X006HpPi2Ep");

const App = () => {
  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm onSuccess={function (message: string): void {
              throw new Error("Function not implemented.");
          } } onError={function (): void {
              throw new Error("Function not implemented.");
          } } />
    </Elements>
  );
};

export default App;
