export default function ParticipatePage() {
  const items = [
    { title: "Coding Contest", desc: "Timed coding rounds with leaderboards." },
    { title: "Mock Tests", desc: "Topic-wise tests for DSA and system design." },
    { title: "Hackathons", desc: "Team-based problem solving with prizes." },
  ];

  return (
    <div>
      <h1 className="text-3xl font-semibold mb-6">Participate</h1>
      <div className="grid md:grid-cols-2 gap-6">
        {items.map((s) => (
          <div key={s.title} className="card">
            <h3 className="text-xl font-medium">{s.title}</h3>
            <p className="text-slate-300 mt-2">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
