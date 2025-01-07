// RazorpayPayment.jsx

import React, { useEffect, useRef } from 'react';
import { loadScript } from '@paypal/paypal-js';

const RazorpayPayment = ({ amount }) => {
  const ref = useRef(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.async = true;
    document.body.appendChild(script);

    script.onload = function() {
      var options = {
        "key": "YOUR_RAZORPAY_KEY_ID", // Replace with your Razorpay Key ID
        "amount": amount * 100, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
        "currency": "INR",
        "name": "Acme Corp",
        "description": "Test Transaction",
        "image": "https://example.com/your_logo",
        "handler": function(response){
            alert(response.razorpay_payment_id);
        },
        "prefill": {
            "name": "Gaurav Kumar",
            "email": "gaurav.kumar@example.com"
        },
        "notes": {
            "address": "Razorpay Corporate Office"
        },
        "theme": {
            "color": "#3399cc"
        }
      };
      var rzp = new Razorpay(options);
      rzp.open();
    };

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return <div ref={ref} />;
};

export default RazorpayPayment;