import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import mentorData from "../data/mentorData";
import MentorBookingModal from "../components/MentorBookingModal";

function Results() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("query")?.toLowerCase() || "";

  const [selectedMentor, setSelectedMentor] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredMentors = mentorData.filter((mentor) =>
    mentor.expertise.toLowerCase().includes(query)
  );

  const handleCallClick = (mentor) => {
    setSelectedMentor(mentor);
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#2e3440] text-white p-6">
      <h2 className="text-2xl font-semibold text-center mb-4">
        Here are the experts on <span className="text-cyan-400">"{query}"</span>
      </h2>

      {/* Tabs */}
      <div className="mx-auto w-fit mb-6">
        <div className="grid grid-cols-3 divide-x-2 border border-gray-500 rounded-lg overflow-hidden w-64 sm:w-72 md:w-80 text-center text-sm sm:text-base bg-gray-800">
          <button className="py-2 hover:bg-blue-400 transition-colors">Experts</button>
          <button className="py-2 hover:bg-blue-400 transition-colors">Videos</button>
          <button className="py-2 hover:bg-blue-400 transition-colors">Live</button>
        </div>
      </div>

      {/* Mentor Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4">
        {filteredMentors.map((mentor, index) => (
          <div
            key={index}
            className="bg-gray-100 rounded-xl p-4 text-black shadow-lg flex flex-col items-center relative"
          >
            {/* Image with Status */}
            <div className="relative">
              <img
                src={`https://i.pravatar.cc/150?img=${index + 10}`}
                alt="mentor"
                className="rounded-full w-20 h-20 object-cover"
              />
              <span
                className={`absolute bottom-1 right-1 h-4 w-4 rounded-full border-2 border-white ${
                  mentor.online ? "bg-green-500" : "bg-gray-400"
                }`}
              ></span>
            </div>

            {/* Info */}
            <p className="text-sm text-gray-600 mt-1">
              {mentor.followers || "Xk"} Followers
            </p>
            <h3 className="text-lg font-semibold">{mentor.name}</h3>
            <p className="text-sm">{mentor.expertise}</p>
            <p className="text-yellow-500">Ratings: ⭐ 4.5 (12 Reviews)</p>
            <p className="text-sm">${mentor.price} / 30 mins</p>

            {/* Call Button */}
            <button
              className="mt-2 px-4 py-1 rounded bg-indigo-500 text-white cursor-pointer hover:bg-indigo-800"
              onClick={() => handleCallClick(mentor)}
            >
              Call
            </button>
          </div>
        ))}
      </div>

      {filteredMentors.length === 0 && (
        <p className="text-center text-gray-400 mt-10">
          No mentors found for "{query}".
        </p>
      )}

      {/* Booking Modal */}
      {isModalOpen && selectedMentor && (
        <MentorBookingModal
          mentor={selectedMentor}
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </div>
  );
}

export default Results;
