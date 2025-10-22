import Link from "next/link";

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center text-center py-24">
      <h1 className="text-4xl md:text-6xl font-bold mb-6">Build your career at Neo Organizations</h1>
      <p className="text-slate-300 max-w-2xl mb-10">
        Explore jobs, internships, contests, and career resources tailored for you.
      </p>
      <Link href="/jobs" className="btn-primary text-lg">Apply for Job</Link>
    </div>
  );
}
