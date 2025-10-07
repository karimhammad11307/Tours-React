import PaymentMethod from "../components/PaymentMethod";
function Payment() {
  const paymentMethods = [
    {
      id: "visa",
      name: "Visa",
      logo : '💳',
      description: "Pay with Your Visa Card",
    },
    {
      id: "vfcash",
      name: "VF Cash",
      logo: "📱",
      description: "Pay using VF Cash wallet",
    },
    {
      id: "cash",
      name: "Cash",
      logo: "💰",
      description: "Pay in cash in our branches",
    },
  ];
  const handlePayment = (method) => {
    alert(`You selected ${method.name} Payment method!`);
  };
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto">
        {/* Back button again */}
        <button
          onClick={() => window.history.back()}
          className="mb-6 text-600 hover:text-blue-800
        flex items-center"
        >
          Back to Your Details
        </button>
        {/* Payment Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Payment Methods
          </h1>
          <p className="text-xl text-gray-600">
            Choose your preferred payment method
          </p>
        </div>
        {/* Payment methods */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="space-y-4">
            {paymentMethods.map((method) => (
              <PaymentMethod
                key={method.id}
                method={method}
                onSelect={handlePayment}
              />
            ))}
          </div>
          <div className="mt-8 p-4 bg-gray-50 rounded-lg">
            <h3 className="font-semibold text-gray-800 mb-2"> Secure Payment </h3>
            <p className="text-sm text-gray-600">All payments are encrypted and secure.
               Your financial information is protected with industry-standard security measures.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
