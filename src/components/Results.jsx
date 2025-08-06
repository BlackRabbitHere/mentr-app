import { useSearchParams } from "react-router-dom";
import mentorData from "../data/mentorData";

function Results() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("query")?.toLowerCase() || "";

  const filteredMentors = mentorData.filter((mentor) =>
    mentor.expertise.toLowerCase().includes(query)
  );

  return (
    <div className="min-h-screen bg-[#2e3440] text-white p-6">
      <h2 className="text-2xl font-semibold mb-4 justify-center items-center text-center">
        Here are the experts on <span className="text-cyan-400">"{query}"</span>
      </h2>
      <div className="mx-auto w-fit">
        <div className="grid grid-cols-3 divide-x-2 border border-gray-500 rounded-lg overflow-hidden w-64 sm:w-72 md:w-80 text-center text-sm sm:text-base bg-gray-800">
        <button className="py-2 hover:bg-blue-400 transition-colors">Experts</button>
        <button className="py-2 hover:bg-blue-400 transition-colors">Videos</button>
        <button className="py-2 hover:bg-blue-400 transition-colors">Live</button>
        </div>
      </div>

      {/* Mentor Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4">
        {filteredMentors.map((mentor, index) => (
          <div key={index} className="bg-gray-100 rounded-xl p-4 text-black shadow-lg">
            <div className="flex flex-col items-center">
              <img
                src={`https://i.pravatar.cc/150?img=${index + 10}`} // dummy images
                alt="mentor"
                className="rounded-full w-20 h-20 object-cover mb-2"
              />
              <p className="text-sm text-gray-600">{mentor.followers || "Xk"} Followers</p>
              <h3 className="text-lg font-semibold">{mentor.name}</h3>
              <p className="text-sm">{mentor.expertise}</p>
              <p className="text-yellow-500">Ratings: ⭐ 4.5 (12 Reviews)</p>
              <p className="text-sm">${mentor.price} / 30 mins</p>
              <button className="mt-2 px-4 py-1 rounded bg-indigo-500 text-white">Call</button>
            </div>
          </div>
        ))}
      </div>

      {filteredMentors.length === 0 && (
        <p className="text-center text-gray-400 mt-10">No mentors found for "{query}".</p>
      )}
    </div>
  );
}

export default Results;
