<script setup>
    import jsPDF from 'jspdf';

    const generatePDF = () => {
       // Create a new jsPDF instance
       const doc = new jsPDF();

       const invoiceHTML = `
        <div style="font-family: Arial, sans-serif;">
          <h2 class="text-red-500">Invoice</h2>
          <div>
            <strong>Invoice Number:</strong> INV-001<br>
            <strong>Date:</strong> ${new Date().toLocaleDateString()}<br>
            <strong>Customer:</strong> John Doe<br>
            <strong>Email:</strong> john@example.com<br>
          </div>
          <hr>
          <table style="width: 100%; border-collapse: collapse;">
            <thead>
              <tr>
                <th style="border: 1px solid #000; padding: 8px;">Item</th>
                <th style="border: 1px solid #000; padding: 8px;">Description</th>
                <th style="border: 1px solid #000; padding: 8px;">Quantity</th>
                <th style="border: 1px solid #000; padding: 8px;">Unit Price</th>
                <th style="border: 1px solid #000; padding: 8px;">Total</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style="border: 1px solid #000; padding: 8px;">Item 1</td>
                <td style="border: 1px solid #000; padding: 8px;">Description 1</td>
                <td style="border: 1px solid #000; padding: 8px;">2</td>
                <td style="border: 1px solid #000; padding: 8px;">$10</td>
                <td style="border: 1px solid #000; padding: 8px;">$20</td>
              </tr>
              <tr>
                <td style="border: 1px solid #000; padding: 8px;">Item 2</td>
                <td style="border: 1px solid #000; padding: 8px;">Description 2</td>
                <td style="border: 1px solid #000; padding: 8px;">3</td>
                <td style="border: 1px solid #000; padding: 8px;">$15</td>
                <td style="border: 1px solid #000; padding: 8px;">$45</td>
              </tr>
            </tbody>
          </table>
          <hr>
          <div>
            <strong>Total:</strong> $65
          </div>
        </div>
      `;
       doc.html(invoiceHTML, {
           callback: function (doc) {
               doc.save('invoice.pdf');
           },
       },10, 10);

       // Add content to the PDF
       // doc.text(invoiceHTML, 10, 10);

       // Save or download the PDF
       // doc.save('example.pdf');
   }

</script>
<template>
    <div>
        <button class="text-black relative z-10" @click="generatePDF">Generate PDF</button>
    </div>
</template>

