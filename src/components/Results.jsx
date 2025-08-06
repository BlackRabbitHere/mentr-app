import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import mentorData from "../data/mentorData";
import MentorBookingModal from "./mentor/MentorBookingModal";
import TrendingSearches from "./mentor/TrendingSearches";

function Results() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("query")?.toLowerCase() || "";

  const [selectedMentor, setSelectedMentor] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("Experts");

  const filteredMentors = mentorData.filter((mentor) =>
    mentor.expertise.toLowerCase().includes(query)
  );

  const handleCallClick = (mentor) => {
    setSelectedMentor(mentor);
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#2e3440] p-6 text-white">
      <h2 className="mb-4 text-center text-2xl font-semibold">
        Here are the {activeTab.toLowerCase()} on{" "}
        <span className="text-cyan-400">"{query}"</span>
      </h2>

      {/* Tabs */}
      <div className="mx-auto mb-6 w-fit">
        <div className="grid w-64 grid-cols-3 overflow-hidden rounded-lg border border-gray-500 bg-gray-800 text-center text-sm sm:w-72 sm:text-base md:w-80">
          {["Experts", "Videos", "Live"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`border-x border-gray-600 py-2 transition-colors ${
                activeTab === tab
                  ? "bg-sky-500 text-white"
                  : "hover:bg-blue-400"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Mentor Cards */}
      {filteredMentors.length > 0 && (
        <div className="grid grid-cols-1 gap-6 p-4 sm:grid-cols-2 md:grid-cols-3">
          {filteredMentors.map((mentor, index) => (
            <div
              key={index}
              className="relative flex flex-col items-center rounded-xl bg-gray-100 p-4 text-black shadow-lg"
            >
              {/* Image with Status */}
              <div className="relative">
                <img
                  src={`https://i.pravatar.cc/150?img=${index + 10}`}
                  alt={mentor.name}
                  className="h-20 w-20 rounded-full object-cover"
                />
                <span
                  className={`absolute bottom-1 right-1 h-4 w-4 rounded-full border-2 border-white ${
                    mentor.online ? "bg-green-500" : "bg-gray-400"
                  }`}
                ></span>
              </div>

              {/* Info */}
              <p className="mt-1 text-sm text-gray-600">
                {mentor.followers || "Xk"} Followers
              </p>
              <h3 className="text-lg font-semibold">{mentor.name}</h3>
              <p className="text-sm">{mentor.expertise}</p>
              <p className="text-yellow-500">Ratings: ⭐ 4.5 (12 Reviews)</p>
              <p className="text-sm">${mentor.price} / 30 mins</p>

              {/* Call Button */}
              <button
                className="mt-2 cursor-pointer rounded bg-indigo-500 px-4 py-1 text-white hover:bg-indigo-800"
                onClick={() => handleCallClick(mentor)}
              >
                Call
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Empty State */}
      {filteredMentors.length === 0 && (
        <p className="mt-10 text-center text-gray-400">
          No mentors found for "{query}".
        </p>
      )}

      {/* Extra Suggestions */}
      {filteredMentors.length > 0 && <TrendingSearches />}

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