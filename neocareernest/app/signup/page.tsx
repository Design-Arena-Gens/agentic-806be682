"use client";
import { useState } from "react";
import Link from "next/link";

export default function SignupPage() {
  const [role, setRole] = useState<"seeker" | "hr">("seeker");

  return (
    <div className="max-w-md">
      <h1 className="text-3xl font-semibold mb-4">Signup</h1>
      <form className="card space-y-4">
        <div className="flex gap-3">
          <button type="button" className={`px-4 py-2 rounded-md border ${role === "seeker" ? "bg-brand text-white border-brand" : "border-slate-600"}`} onClick={() => setRole("seeker")}>Job Seeker</button>
          <button type="button" className={`px-4 py-2 rounded-md border ${role === "hr" ? "bg-brand text-white border-brand" : "border-slate-600"}`} onClick={() => setRole("hr")}>HR</button>
        </div>
        <div>
          <label className="block text-sm mb-1">Full Name</label>
          <input className="w-full rounded-md bg-slate-800 border border-slate-700 p-2" required />
        </div>
        <div>
          <label className="block text-sm mb-1">Email</label>
          <input type="email" className="w-full rounded-md bg-slate-800 border border-slate-700 p-2" required />
        </div>
        <div>
          <label className="block text-sm mb-1">Password</label>
          <input type="password" className="w-full rounded-md bg-slate-800 border border-slate-700 p-2" required />
        </div>
        <button className="btn-primary w-full">Create {role === "seeker" ? "Job Seeker" : "HR"} Account</button>
        <p className="text-sm text-slate-400">Already have an account? <Link className="underline" href="/login">Login</Link></p>
      </form>
    </div>
  );
}
