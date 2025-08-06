import React from "react";

function TrendingMentors({ mentors }) {
  return (
    <section className="mx-auto mt-10 w-full max-w-5xl px-4">
      <h2 className="mb-6 text-center text-xl font-semibold text-white sm:text-2xl">
        Trending Mentors 🔥
      </h2>

      {/* Mentor Cards Grid */}
      <div className="flex flex-wrap justify-center gap-6">
        {mentors.map((mentor, index) => (
          <div
            key={index}
            className="flex w-32 transform flex-col items-center rounded-2xl bg-[#3b4252] p-4 text-center shadow-md transition-transform hover:scale-105 sm:w-36 md:w-40"
          >
            <div className="relative mb-2 h-16 w-16 sm:h-20 sm:w-20">
              <img
                src={`https://i.pravatar.cc/150?img=${index + 10}`}
                alt={mentor.name}
                className="h-full w-full rounded-full object-cover"
              />
              <span
                className={`absolute bottom-1 right-1 h-4 w-4 rounded-full border-2 border-white ${
                  mentor.online ? "bg-green-400" : "bg-gray-400"
                }`}
              />
            </div>
            <p className="font-medium text-white sm:text-base">{mentor.title}</p>
          </div>
        ))}
      </div>

      {/* Feature Highlights */}
      <div className="mt-6 flex flex-wrap justify-around text-center text-xs text-white sm:text-sm">
        <p>
          <strong>Live or On-Demand</strong> <br />
          Video Calls ⚡
        </p>
        <p>
          <strong>100% Refund</strong> <br />
          💸 Guarantee!
        </p>
        <p>
          <strong>Stay Anonymous</strong> <br />
          for privacy 🛡️
        </p>
      </div>
    </section>
  );
}

export default TrendingMentors;