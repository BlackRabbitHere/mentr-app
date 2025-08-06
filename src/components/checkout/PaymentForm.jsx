import { useLocation } from "react-router-dom";
import { useState } from "react";

function PaymentPage() {
  const location = useLocation();
  const { mentor, date, time } = location.state || {};

  const [cardNumber, setCardNumber] = useState("");
  const [cardHolder, setCardHolder] = useState("");
  const [expDate, setExpDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [selectedMethod, setSelectedMethod] = useState("Credit card");
  const [coupon, setCoupon] = useState("");
  const [couponApplied, setCouponApplied] = useState(false);

  const [errors, setErrors] = useState({});

  const validateCard = () => {
    const errs = {};

    if (!/^\d{16}$/.test(cardNumber)) errs.cardNumber = "Card number must be 16 digits";
    if (!/^[A-Za-z ]+$/.test(cardHolder.trim())) errs.cardHolder = "Name should contain only letters";
    if (!/^\d{3,4}$/.test(cvv)) errs.cvv = "CVV must be 3 or 4 digits";

    const [month, year] = expDate.split("/").map(v => parseInt(v));
    if (!month || !year || month < 1 || month > 12) {
      errs.expDate = "Invalid expiration format (MM/YY)";
    } else {
      const now = new Date();
      const exp = new Date(2000 + year, month - 1);
      if (exp <= now) errs.expDate = "Card is expired";
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleConfirmPay = () => {
    if (validateCard()) {
      alert("Payment Confirmed ✅ (Simulation)");
    }
  };

  if (!mentor) return <div className="text-white">No mentor selected.</div>;

  return (
    <div className="min-h-screen bg-[#121212] text-white p-6">
      <h1 className="text-xl sm:text-2xl font-semibold mb-2">
        You are just one step away from your live call with{" "}
        <span className="text-cyan-400">{mentor.name}</span>
      </h1>
      <h2 className="text-lg text-cyan-300 mb-6">Dialing... {mentor.name}</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left - Payment Methods */}
        <div className="bg-[#1f1f1f] p-6 rounded-lg shadow-md">
          <label className="block mb-2 font-semibold">Change Currency</label>
          <select className="w-full p-2 rounded bg-[#333] text-white mb-4">
            <option>USD</option>
            <option>INR</option>
            <option>EUR</option>
          </select>

          <h3 className="font-semibold mb-2">Pay with</h3>
          <div className="grid grid-cols-3 gap-2 mb-4 text-sm">
            {["Credit card", "Google Pay", "Paypal", "Debit card", "Internet Banking"].map(method => (
              <button
                key={method}
                onClick={() => setSelectedMethod(method)}
                className={`px-2 py-1 rounded ${
                  selectedMethod === method ? "bg-indigo-500 text-white" : "bg-gray-700 text-white hover:bg-indigo-500"
                }`}
              >
                {method}
              </button>
            ))}
          </div>

          {/* Card Number */}
          <input
            type="text"
            placeholder="Card number"
            maxLength="16"
            value={cardNumber}
            onChange={e => setCardNumber(e.target.value.replace(/\D/g, ""))}
            className="w-full p-2 mb-1 rounded bg-[#222]"
          />
          {errors.cardNumber && <p className="text-red-400 text-sm mb-2">{errors.cardNumber}</p>}

          {/* Card Holder */}
          <input
            type="text"
            placeholder="Card holder"
            value={cardHolder}
            onChange={e => setCardHolder(e.target.value)}
            className="w-full p-2 mb-1 rounded bg-[#222]"
          />
          {errors.cardHolder && <p className="text-red-400 text-sm mb-2">{errors.cardHolder}</p>}

          {/* Expiry + CVV */}
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="MM/YY"
              maxLength="5"
              value={expDate}
              onChange={e => setExpDate(e.target.value)}
              className="w-1/2 p-2 rounded bg-[#222]"
            />
            <input
              type="text"
              placeholder="CVV"
              maxLength="4"
              value={cvv}
              onChange={e => setCvv(e.target.value.replace(/\D/g, ""))}
              className="w-1/2 p-2 rounded bg-[#222]"
            />
          </div>
          {(errors.expDate || errors.cvv) && (
            <div className="mt-1">
              {errors.expDate && <p className="text-red-400 text-sm">{errors.expDate}</p>}
              {errors.cvv && <p className="text-red-400 text-sm">{errors.cvv}</p>}
            </div>
          )}

          <label className="block mt-3 text-sm">
            <input type="checkbox" className="mr-2" /> Save my card for future reservation
          </label>

          <button
            onClick={handleConfirmPay}
            className="mt-4 w-full bg-purple-600 py-2 rounded text-white hover:bg-purple-700"
          >
            Confirm and Pay
          </button>
        </div>

        {/* Right - Billing Details */}
        <div className="bg-[#1f1f1f] p-6 rounded-lg shadow-md">
          <label className="block mb-2 font-semibold">Discount Code:</label>
          <div className="flex gap-2 mb-4">
            <input
              type="text"
              placeholder="Enter coupon code."
              value={coupon}
              onChange={e => setCoupon(e.target.value)}
              className="flex-grow p-2 rounded bg-[#333]"
            />
            <button
              onClick={() => setCouponApplied(true)}
              className="px-4 py-1 bg-indigo-600 hover:bg-indigo-700 rounded"
            >
              Apply
            </button>
          </div>

          <h3 className="font-bold mb-2">Billing Details:</h3>
          <div className="text-sm space-y-1">
            <p>Mentor's Charges: ${mentor.price}</p>
            <p>Tax 1: $0.00</p>
            <p>Tax 2: $0.00</p>
            <p>Service Charges: $2.00</p>
            <p className="font-semibold mt-2">
              Total Bill: ${parseFloat(mentor.price) + 2} USD
              {couponApplied && <span className="text-green-400 ml-2">(Coupon Applied)</span>}
            </p>
            <p className="mt-2">Selected Date: {date}</p>
            <p>Selected Time: {time}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PaymentPage;
