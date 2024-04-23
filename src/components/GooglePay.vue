environment="TEST" <!-- or "PRODUCTION" for production -->
<script setup>
</script>
<template>
    <google-pay-button
  environment="TEST"
  button-type="buy"
  button-color="black"
  v-bind:paymentRequest.prop="{
    apiVersion: 2,
    apiVersionMinor: 0,
    allowedPaymentMethods: [
      {
        type: 'CARD',
        parameters: {
          allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
          allowedCardNetworks: ['AMEX', 'VISA', 'MASTERCARD']
        },
        tokenizationSpecification: {
          type: 'PAYMENT_GATEWAY',
          parameters: {
            gateway: 'example',
            gatewayMerchantId: 'exampleGatewayMerchantId'
          }
        }
      }
    ],
    transactionInfo: {
      totalPriceStatus: 'FINAL',
      totalPriceLabel: 'Total',
      totalPrice: '100.00',
      currencyCode: 'USD',
      countryCode: 'US'
    }
  }"
  v-on:loadpaymentdata="loadpaymentdata"
  v-on:error="onError"
></google-pay-button>
  </template>
  
