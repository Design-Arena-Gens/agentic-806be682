import Link from "next/link";

export default function JobApplyPage({ params }: { params: { id: string } }) {
  const jobId = params.id;
  return (
    <div className="max-w-2xl">
      <h1 className="text-3xl font-semibold mb-4">Apply for Job #{jobId}</h1>
      <form className="card space-y-4">
        <div>
          <label className="block text-sm mb-1">Full Name</label>
          <input className="w-full rounded-md bg-slate-800 border border-slate-700 p-2" required />
        </div>
        <div>
          <label className="block text-sm mb-1">Email</label>
          <input type="email" className="w-full rounded-md bg-slate-800 border border-slate-700 p-2" required />
        </div>
        <div>
          <label className="block text-sm mb-1">Resume URL</label>
          <input className="w-full rounded-md bg-slate-800 border border-slate-700 p-2" placeholder="Link to your resume" />
        </div>
        <div>
          <label className="block text-sm mb-1">Cover Letter</label>
          <textarea className="w-full rounded-md bg-slate-800 border border-slate-700 p-2" rows={5} />
        </div>
        <div className="flex gap-3">
          <button type="submit" className="btn-primary">Submit Application</button>
          <Link href="/jobs" className="inline-flex items-center px-4 py-2 rounded-md border border-slate-600 hover:bg-slate-800">Cancel</Link>
        </div>
      </form>
    </div>
  );
}
