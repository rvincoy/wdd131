    const paymentSelect = document.getElementById('paymentMethod');
    const creditFields = document.getElementById('creditFields');
    const paypalFields = document.getElementById('paypalFields');

    paymentSelect.addEventListener('change', function () {
      if (this.value === 'credit') {
        creditFields.style.display = 'block';
        paypalFields.style.display = 'none';
      } else if (this.value === 'paypal') {
        paypalFields.style.display = 'block';
        creditFields.style.display = 'none';
      } else {
        creditFields.style.display = 'none';
        paypalFields.style.display = 'none';
      }
    });

    document.getElementById('orderForm').addEventListener('submit', function (e) {
      e.preventDefault();
      alert('Order placed successfully!');
    });