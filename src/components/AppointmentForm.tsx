"use client";

import { useActionState } from "react";
import { submitAppointmentRequest } from "@/lib/actions";

export default function AppointmentForm() {
  const [state, formAction, pending] = useActionState(
    submitAppointmentRequest,
    null
  );

  return (
    <form className="text-left space-y-8" action={formAction}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-2">
          <label className="text-label-sm uppercase text-primary block">
            Full Name
          </label>
          <input
            className="w-full bg-transparent border-0 border-b border-outline-variant focus:ring-0 focus:border-secondary transition-all py-4 px-0 placeholder:text-outline/50"
            name="fullName"
            placeholder="Chidi Okeke"
            type="text"
          />
        </div>
        <div className="space-y-2">
          <label className="text-label-sm uppercase text-primary block">
            Email Address
          </label>
          <input
            className="w-full bg-transparent border-0 border-b border-outline-variant focus:ring-0 focus:border-secondary transition-all py-4 px-0 placeholder:text-outline/50"
            name="email"
            placeholder="chidi@example.com"
            type="email"
          />
        </div>
      </div>
      <div className="space-y-2">
        <label className="text-label-sm uppercase text-primary block">
          Service of Interest
        </label>
        <select
          className="w-full bg-transparent border-0 border-b border-outline-variant focus:ring-0 focus:border-secondary transition-all py-4 px-0"
          name="service"
          defaultValue="Bespoke Suiting"
        >
          <option>Bespoke Suiting</option>
          <option>Traditional Ceremonial Wear</option>
          <option>Bridal / Wedding Atelier</option>
          <option>The Heritage Coat Commission</option>
        </select>
      </div>
      <div className="space-y-2">
        <label className="text-label-sm uppercase text-primary block">
          Preferred Location
        </label>
        <div className="flex flex-wrap gap-4 pt-2">
          <label className="flex items-center gap-2 cursor-pointer group">
            <input
              className="text-secondary focus:ring-secondary border-outline-variant"
              name="location"
              type="radio"
              value="Lagos"
              defaultChecked
            />
            <span className="text-on-surface-variant group-hover:text-primary transition-colors">
              Lagos
            </span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer group">
            <input
              className="text-secondary focus:ring-secondary border-outline-variant"
              name="location"
              type="radio"
              value="Abuja"
            />
            <span className="text-on-surface-variant group-hover:text-primary transition-colors">
              Abuja
            </span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer group">
            <input
              className="text-secondary focus:ring-secondary border-outline-variant"
              name="location"
              type="radio"
              value="International"
            />
            <span className="text-on-surface-variant group-hover:text-primary transition-colors">
              International
            </span>
          </label>
        </div>
      </div>
      <div className="pt-8 text-center">
        <button
          className="bg-primary text-on-primary px-16 py-6 text-label-sm uppercase tracking-[0.2em] hover:bg-secondary hover:text-white transition-all shadow-xl disabled:opacity-70"
          type="submit"
          disabled={pending}
        >
          {pending ? "Requesting..." : "Submit Request"}
        </button>
        {state?.success && (
          <p className="mt-6 text-label-sm uppercase text-secondary">
            Thank you &mdash; we&rsquo;ll be in touch shortly.
          </p>
        )}
        {state?.error && (
          <p className="mt-6 text-label-sm uppercase text-error">
            {state.error}
          </p>
        )}
      </div>
    </form>
  );
}
