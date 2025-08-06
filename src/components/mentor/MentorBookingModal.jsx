import { Dialog, DialogBackdrop } from "@headlessui/react";
import { MdOnlinePrediction } from "react-icons/md";
import { HiOutlineStatusOffline } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function MentorBookingModal({ mentor, isOpen, onClose }) {
  const navigate = useNavigate();

  const today = new Date();
  const localDate = today.toISOString().split("T")[0]; // yyyy-mm-dd
  const localTime = today.toTimeString().slice(0, 5); // HH:MM

  const [selectedDate, setSelectedDate] = useState(localDate);
  const [selectedTime, setSelectedTime] = useState(localTime);

  const handleBooking = () => {
    navigate("/payment", {
      state: {
        mentor,
        date: selectedDate,
        time: selectedTime,
      },
    });
  };

  const handleTalkNow = () => {
    const now = new Date();
    const date = now.toISOString().split("T")[0];
    const time = now.toTimeString().slice(0, 5);

    navigate("/payment", {
      state: {
        mentor,
        date,
        time,
      },
    });
  };

  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-50">
      <DialogBackdrop className="fixed inset-0 bg-gray-500/75 transition-opacity" />
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="w-full max-w-md rounded bg-white p-6">
          <Dialog.Title className="text-lg font-bold mb-4 text-black">
            Book a session with {mentor.name}
          </Dialog.Title>

          <div className="text-slate-700 space-y-3">
            <h2 className="flex items-center gap-2 text-lg font-semibold">
              Live Status: Mentor is{" "}
              {mentor.online ? (
                <span className="flex items-center gap-1 text-green-600">
                  Online <MdOnlinePrediction className="text-green-500" size={20} />
                </span>
              ) : (
                <span className="flex items-center gap-1 text-gray-500">
                  Offline <HiOutlineStatusOffline size={20} />
                </span>
              )}
            </h2>

            {mentor.online && (
              <button
                onClick={handleTalkNow}
                className="w-full flex items-center justify-center gap-2 px-6 py-2 bg-green-500 text-white rounded-md shadow hover:bg-green-600 focus:ring-2 focus:ring-green-300"
              >
                <MdOnlinePrediction size={20} />
                Talk Now
              </button>
            )}
          </div>

          <p className="text-gray-700 mt-4 mb-2">
            Expertise: {mentor.expertise}<br />
            Price: ${mentor.price} / 30 mins
          </p>

          <label className="text-sm font-medium text-gray-700">Select Date</label>
          <input
            type="date"
            min={localDate}
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            className="border px-3 py-2 mb-4 w-full rounded text-gray-900"
          />

          <label className="text-sm font-medium text-gray-700">Select Time</label>
          <input
            type="time"
            min={localTime}
            value={selectedTime}
            onChange={(e) => setSelectedTime(e.target.value)}
            className="border px-3 py-2 mb-4 w-full rounded text-gray-900"
          />

          <div className="flex justify-end gap-2">
            <button onClick={onClose} className="px-4 py-1 bg-gray-300 rounded">Cancel</button>
            <button onClick={handleBooking} className="px-4 py-1 bg-blue-600 text-white rounded">
              Book Call
            </button>
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
}

export default MentorBookingModal;
