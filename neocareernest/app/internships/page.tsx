const internships = [
  { id: 1, title: "SDE Intern", duration: "6 months", stipend: "₹35,000" },
  { id: 2, title: "Frontend Intern", duration: "6 months", stipend: "₹25,000" },
  { id: 3, title: "Backend Intern", duration: "6 months", stipend: "₹28,000" },
  { id: 4, title: "Data Science Intern", duration: "6 months", stipend: "₹30,000" },
  { id: 5, title: "QA Intern", duration: "4 months", stipend: "₹18,000" },
  { id: 6, title: "DevOps Intern", duration: "6 months", stipend: "₹32,000" },
];

export default function InternshipsPage() {
  return (
    <div>
      <h1 className="text-3xl font-semibold mb-6">Internships at Neo Organizations</h1>
      <div className="grid md:grid-cols-2 gap-6">
        {internships.map((role) => (
          <div key={role.id} className="card">
            <h3 className="text-xl font-medium">{role.title}</h3>
            <p className="text-slate-300 mt-2">Duration: {role.duration}</p>
            <p className="text-slate-300">Stipend: {role.stipend}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
