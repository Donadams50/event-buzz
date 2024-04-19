// app/Index.js

import React from 'react';
import { Redirect } from 'expo-router';
import { initStripe } from '@stripe/stripe-react-native';

// Initialize Stripe with your publishable key
initStripe({
  publishableKey: 'pk_test_51P3SPa08fEVJMGb9L1Y5zUbY4w0Kq8az4QdNGbXYbFLFm9scIMSKcRSfWHrKXcG6MJdLwK0Fxzc4g6vHvRc30X1F00qHQEpnIO',
});
 
export default function Index() {
    return (
        <Redirect href="/home" />
    );
}
