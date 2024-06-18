import { loadStripe } from "@stripe/stripe-js";
import PageTitle from "../../Shared/PageTitle";
import SectionTitle from "../../Shared/SectionTitle";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_Pk);

const Payment = () => {
  return (
    <>
      <PageTitle title="Payment"></PageTitle>
      <SectionTitle subHeading="Please pay" heading="Payment"></SectionTitle>
      <div>
        <Elements stripe={stripePromise}>
          <CheckoutForm></CheckoutForm>
        </Elements>
      </div>
    </>
  );
};

export default Payment;
