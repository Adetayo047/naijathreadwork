"use client";

import { useActionState } from "react";
import { submitWholesaleInquiry } from "@/lib/actions";

export default function WholesaleInquiryForm() {
  const [state, formAction, pending] = useActionState(
    submitWholesaleInquiry,
    null
  );

  return (
    <form className="space-y-6" action={formAction}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="relative">
          <label className="block text-label-sm text-on-surface-variant mb-1 uppercase text-[10px]">
            Business Name
          </label>
          <input
            className="w-full border-0 border-b border-outline-variant focus:ring-0 focus:border-secondary py-3 px-0 bg-transparent transition-all placeholder:text-outline/40"
            name="businessName"
            placeholder="Your Boutique Name"
            type="text"
          />
        </div>
        <div className="relative">
          <label className="block text-label-sm text-on-surface-variant mb-1 uppercase text-[10px]">
            Location (City/Country)
          </label>
          <input
            className="w-full border-0 border-b border-outline-variant focus:ring-0 focus:border-secondary py-3 px-0 bg-transparent transition-all placeholder:text-outline/40"
            name="location"
            placeholder="London, UK"
            type="text"
          />
        </div>
      </div>
      <div className="relative">
        <label className="block text-label-sm text-on-surface-variant mb-1 uppercase text-[10px]">
          Contact Email
        </label>
        <input
          className="w-full border-0 border-b border-outline-variant focus:ring-0 focus:border-secondary py-3 px-0 bg-transparent transition-all placeholder:text-outline/40"
          name="email"
          placeholder="partnerships@brand.com"
          type="email"
        />
      </div>
      <div className="relative">
        <label className="block text-label-sm text-on-surface-variant mb-1 uppercase text-[10px]">
          Estimated Order Value
        </label>
        <select
          className="w-full border-0 border-b border-outline-variant focus:ring-0 focus:border-secondary py-3 px-0 bg-transparent transition-all text-on-surface"
          name="orderValue"
          defaultValue="£1,000 - £5,000"
        >
          <option>£1,000 - £5,000</option>
          <option>£5,000 - £15,000</option>
          <option>£15,000+</option>
        </select>
      </div>
      <div className="relative">
        <label className="block text-label-sm text-on-surface-variant mb-1 uppercase text-[10px]">
          Message / Requirements
        </label>
        <textarea
          className="w-full border-0 border-b border-outline-variant focus:ring-0 focus:border-secondary py-3 px-0 bg-transparent transition-all placeholder:text-outline/40"
          name="message"
          placeholder="Tell us about your boutique and specific collection interests..."
          rows={4}
        />
      </div>
      <button
        className="w-full border border-secondary text-secondary hover:bg-secondary hover:text-on-secondary text-label-sm uppercase py-5 transition-all duration-300 disabled:opacity-70"
        type="submit"
        disabled={pending}
      >
        {pending ? "Submitting..." : "Submit Partnership Request"}
      </button>
      {state?.success && (
        <p className="text-label-sm uppercase text-secondary text-center">
          Thank you &mdash; we&rsquo;ll be in touch shortly.
        </p>
      )}
      {state?.error && (
        <p className="text-label-sm uppercase text-error text-center">
          {state.error}
        </p>
      )}
    </form>
  );
}
