import React from "react";

const searchPhrases = [
"How to clear Prelims exam easily?",
"How to handle CSAT exams",
"How to improve CSAT math questions",
"CSAT mock question Advice",
"How to reduce negative marking in prelims",
"best advice to clear prelims",
"How to get maximum marks in CSAT",
"Get maximum marks in Prelims",
];

function TrendingSearches() {
return (
<div className="mt-8 border-t border-gray-500 pt-6">
<h3 className="text-center text-lg font-semibold mb-4 text-white">
People are also Searching for
</h3>
<div className="flex flex-wrap justify-center gap-2 px-4">
{searchPhrases.map((phrase, idx) => (
<span key={idx} className="bg-blue-600 hover:bg-blue-500 text-white px-3 py-1 text-sm rounded-full transition-all" >
{phrase}
</span>
))}
</div>
</div>
);
}

export default TrendingSearches;