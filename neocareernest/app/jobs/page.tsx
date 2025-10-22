import Link from "next/link";

const roles = [
  { id: 1, title: "Software Engineer", openings: 5, salary: "₹10-18 LPA" },
  { id: 2, title: "Frontend Developer", openings: 3, salary: "₹8-14 LPA" },
  { id: 3, title: "Backend Developer", openings: 4, salary: "₹9-16 LPA" },
  { id: 4, title: "Data Analyst", openings: 2, salary: "₹7-12 LPA" },
  { id: 5, title: "DevOps Engineer", openings: 2, salary: "₹10-17 LPA" },
  { id: 6, title: "QA Engineer", openings: 3, salary: "₹6-10 LPA" },
  { id: 7, title: "Product Manager", openings: 1, salary: "₹18-28 LPA" },
  { id: 8, title: "UX/UI Designer", openings: 2, salary: "₹7-12 LPA" },
];

export default function JobsPage() {
  return (
    <div>
      <h1 className="text-3xl font-semibold mb-6">Open Roles at Neo Organizations</h1>
      <div className="grid md:grid-cols-2 gap-6">
        {roles.map((role) => (
          <div key={role.id} className="card">
            <h3 className="text-xl font-medium">{role.title}</h3>
            <p className="text-slate-300 mt-2">Openings: {role.openings}</p>
            <p className="text-slate-300">Salary: {role.salary}</p>
            <div className="mt-4">
              <Link className="btn-primary" href={`/jobs/${role.id}/apply`}>
                Apply
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
