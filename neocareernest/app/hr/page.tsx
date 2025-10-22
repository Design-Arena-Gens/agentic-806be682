export default function HRDashboardPage() {
  return (
    <div>
      <h1 className="text-3xl font-semibold mb-6">HR Dashboard</h1>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="card">
          <h3 className="text-xl font-medium">Jobs</h3>
          <p className="text-slate-300 mt-2">Create, update, and manage job postings.</p>
          <button className="btn-primary mt-4">Add Job</button>
        </div>
        <div className="card">
          <h3 className="text-xl font-medium">Internships</h3>
          <p className="text-slate-300 mt-2">Manage internship postings and details.</p>
          <button className="btn-primary mt-4">Add Internship</button>
        </div>
        <div className="card">
          <h3 className="text-xl font-medium">Applications</h3>
          <p className="text-slate-300 mt-2">Review and track applicants.</p>
          <button className="btn-primary mt-4">View Applications</button>
        </div>
        <div className="card">
          <h3 className="text-xl font-medium">Contests</h3>
          <p className="text-slate-300 mt-2">Create and manage contests and mock tests.</p>
          <button className="btn-primary mt-4">New Contest</button>
        </div>
      </div>
    </div>
  );
}
