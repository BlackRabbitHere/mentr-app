import { useEffect, useRef, useState } from "react";
import { FiSearch } from "react-icons/fi";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import TrendingMentors from "./home/TrendingMentors";
import mentorData from "../data/mentorData";
import GlitchText from "./home/GlitchText";



function Home() {
   const [searchTerm, setSearchTerm] = useState("");
    const navigate = useNavigate();
   const handleKeyPress = (e) => {
        if (e.key === "Enter" && searchTerm.trim() !== "") {
        navigate(`/results?query=${encodeURIComponent(searchTerm.trim())}`);
        }
    }


  return (
    <div className="min-h-screen bg-[#2e3440] text-white flex flex-col justify-center items-center px-4">
      
      {/* Headings */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-2 h-20">
        <GlitchText phrases={[
            "Talk with Experts",
            "Learn from Leaders",
            "Get Real Help",
            "Master New Skills",
            "Accelerate Growth"
        ]} />{" "}
        <span className="text-white">in Seconds.</span>
        </h1>

      <p className="text-lg text-gray-300 text-center mb-6">
        Real Experienced People, Real Guidance, Real Results
      </p>

      {/* Feature Tags */}
      <div className="flex flex-wrap gap-3 justify-center items-center text-sm sm:text-base text-gray-300 mb-6">
        <span>🎓 Career Advice</span> |
        <span>📚 Exam Prep</span> |
        <span>💼 Job Switch</span> |
        <span>🧠 Motivation & Clarity</span> |
        <span>⚖️ Any Help</span>
      </div>

      {/* Search Bar */}
      <div className="relative w-full max-w-xl">
        <input
          type="text"
          placeholder="What guidance do you need today?"
          className="w-full pl-10 pr-4 py-3 rounded-md text-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
            onKeyDown={handleKeyPress}
        />
        <FiSearch className="absolute left-3 top-3.5 text-gray-400" size={24} />
      </div>

      {/* Optional Call-to-action */}
      <p className="text-sm text-gray-400 mt-4">
        “Want to share your expertise instead?” –{" "}
        <span className="font-semibold text-white cursor-pointer underline">
          Become a Mentor
        </span>
      </p>
      <TrendingMentors mentors={mentorData.slice(0, 4)} />
    </div>
  );
}

export default Home;
