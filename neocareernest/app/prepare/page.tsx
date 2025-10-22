export default function PreparePage() {
  const sections = [
    {
      title: "Career Guidance",
      desc: "Structured paths, role roadmaps, and curated learning resources.",
    },
    {
      title: "Expert Speak",
      desc: "Insights from industry experts across engineering and product.",
    },
    {
      title: "Resume Maker",
      desc: "ATS-friendly templates and real-time suggestions.",
    },
    {
      title: "Interview Experiences",
      desc: "Real candidate stories and company-specific tips.",
    },
    {
      title: "Personalised Q/A",
      desc: "Role-based interview questions with feedback.",
    },
  ];

  return (
    <div>
      <h1 className="text-3xl font-semibold mb-6">Prepare</h1>
      <div className="grid md:grid-cols-2 gap-6">
        {sections.map((s) => (
          <div key={s.title} className="card">
            <h3 className="text-xl font-medium">{s.title}</h3>
            <p className="text-slate-300 mt-2">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
