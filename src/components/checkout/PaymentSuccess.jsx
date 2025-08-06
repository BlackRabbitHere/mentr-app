import { useLocation, useNavigate } from "react-router-dom";
import { FaCcVisa, FaCheckCircle } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import jsPDF from "jspdf";

function PaymentSuccess() {
  const location = useLocation();
  const navigate = useNavigate();
  const {
    mentor,
    cardLast4,
    subtotal,
    tax,
    total,
    date,
    time
  } = location.state || {};

  const handleDownloadReceipt = () => {
    const doc = new jsPDF();
    doc.setFontSize(16);
    doc.text("Receipt - Mentor Booking", 20, 20);
    doc.setFontSize(12);
    doc.text(`Mentor: ${mentor?.name}`, 20, 30);
    doc.text(`Date: ${date}`, 20, 40);
    doc.text(`Time: ${time}`, 20, 50);
    doc.text(`Subtotal: $${subtotal}`, 20, 60);
    doc.text(`Tax: $${tax}`, 20, 70);
    doc.text(`Total: $${total}`, 20, 80);
    doc.text(`Paid via: VISA •••• ${cardLast4}`, 20, 90);
    doc.save("mentor-receipt.pdf");
  };

  return (
    <div className="min-h-screen bg-[#1a1c22] text-white flex flex-col items-center p-8">
      <div className="bg-[#2c2f36] p-8 rounded-xl shadow-lg w-full max-w-md border border-purple-300">
        <div className="flex justify-center mb-4">
        <FaCheckCircle className="text-green-500 text-5xl" />
        </div>

        <h2 className="text-center text-xl font-bold mb-2 text-green-300">
          Order placed successfully
        </h2>
        <p className="text-center text-gray-400 mb-4 text-sm">
          The best way to learn faster is from an experienced mentor.
        </p>

        <div className="bg-white text-black rounded-lg p-4 space-y-2 text-sm">
          <div className="flex justify-between">
            <span>Subtotal</span>
            <span>${subtotal} USD</span>
          </div>
          <div className="flex justify-between">
            <span>Tax (10%)</span>
            <span>${tax} USD</span>
          </div>
          <div className="flex justify-between">
            <span>Fees</span>
            <span>$0 USD</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="flex items-center gap-1">
              Card <FaCcVisa className="text-blue-600" />
            </span>
            <span>•••• {cardLast4}</span>
          </div>
          <div className="flex justify-between font-bold mt-2">
            <span>Total</span>
            <span className="text-green-500">${total} USD</span>
          </div>
        </div>

        <p className="text-center text-sm mt-4 text-gray-400">How was your experience?</p>
        <div className="flex justify-center gap-1 my-2 text-yellow-400">
          {Array.from({ length: 5 }).map((_, i) => (
            <FaStar key={i} className={`${i < 4 ? "text-yellow-400" : "text-gray-400"}`} />
          ))}
        </div>

        <button
          className="w-full bg-purple-600 text-white py-2 rounded mt-2 hover:bg-purple-700"
          onClick={() => window.open("https://meet.jit.si/MentrTestCallRoom", "_blank")}
        >
          Continue with Call
        </button>
      </div>

      <div className="mt-6 space-x-4 flex flex-col sm:flex-row items-center">
        <button
          onClick={() => navigate("/")}
          className="bg-blue-600 px-4 py-2 rounded text-white hover:bg-blue-700"
        >
          Return to Your Dashboard
        </button>
        <button
          onClick={handleDownloadReceipt}
          className="bg-red-600 px-4 py-2 rounded text-white hover:bg-red-700 mt-2 sm:mt-0"
        >
          Download Receipt
        </button>
      </div>
    </div>
  );
}

export default PaymentSuccess;
