"use client";

import { useActionState } from "react";
import { submitContactForm } from "@/lib/actions";

export default function ContactForm() {
  const [state, formAction, pending] = useActionState(submitContactForm, null);

  return (
    <form className="space-y-10" action={formAction}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="relative group">
          <input
            className="peer w-full bg-transparent border-0 border-b border-outline-variant py-3 px-0 focus:ring-0 focus:border-secondary transition-colors"
            id="name"
            name="name"
            placeholder=" "
            required
            type="text"
          />
          <label
            className="absolute left-0 top-3 text-on-surface-variant/60 text-label-sm uppercase pointer-events-none transition-all peer-focus:-top-4 peer-focus:text-secondary peer-focus:text-[10px] peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-[10px]"
            htmlFor="name"
          >
            Your Full Name
          </label>
        </div>
        <div className="relative group">
          <input
            className="peer w-full bg-transparent border-0 border-b border-outline-variant py-3 px-0 focus:ring-0 focus:border-secondary transition-colors"
            id="email"
            name="email"
            placeholder=" "
            required
            type="email"
          />
          <label
            className="absolute left-0 top-3 text-on-surface-variant/60 text-label-sm uppercase pointer-events-none transition-all peer-focus:-top-4 peer-focus:text-secondary peer-focus:text-[10px] peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-[10px]"
            htmlFor="email"
          >
            Email Address
          </label>
        </div>
      </div>
      <div className="space-y-4">
        <span className="text-label-sm uppercase text-on-surface-variant/60 block">
          Inquiry Type
        </span>
        <div className="grid grid-cols-3 gap-4">
          <label className="cursor-pointer group">
            <input className="hidden peer" name="type" type="radio" value="Retail" />
            <div className="py-4 text-center border border-outline-variant peer-checked:border-secondary peer-checked:bg-secondary-container/10 peer-checked:text-secondary transition-all text-label-sm uppercase group-hover:bg-surface-container-low">
              Retail
            </div>
          </label>
          <label className="cursor-pointer group">
            <input className="hidden peer" name="type" type="radio" value="Wholesale" />
            <div className="py-4 text-center border border-outline-variant peer-checked:border-secondary peer-checked:bg-secondary-container/10 peer-checked:text-secondary transition-all text-label-sm uppercase group-hover:bg-surface-container-low">
              Wholesale
            </div>
          </label>
          <label className="cursor-pointer group">
            <input
              defaultChecked
              className="hidden peer"
              name="type"
              type="radio"
              value="Bespoke"
            />
            <div className="py-4 text-center border border-outline-variant peer-checked:border-secondary peer-checked:bg-secondary-container/10 peer-checked:text-secondary transition-all text-label-sm uppercase group-hover:bg-surface-container-low">
              Bespoke
            </div>
          </label>
        </div>
      </div>
      <div className="relative group">
        <textarea
          className="peer w-full bg-transparent border-0 border-b border-outline-variant py-3 px-0 focus:ring-0 focus:border-secondary transition-colors resize-none"
          id="message"
          name="message"
          placeholder=" "
          required
          rows={4}
        />
        <label
          className="absolute left-0 top-3 text-on-surface-variant/60 text-label-sm uppercase pointer-events-none transition-all peer-focus:-top-4 peer-focus:text-secondary peer-focus:text-[10px] peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-[10px]"
          htmlFor="message"
        >
          Describe your requirements
        </label>
      </div>
      <div className="pt-6">
        <button
          className="w-full bg-primary text-on-primary py-5 text-label-sm uppercase tracking-widest hover:bg-primary/90 transition-all flex items-center justify-center gap-3 group active:scale-[0.98] disabled:opacity-70"
          type="submit"
          disabled={pending}
        >
          <span>{pending ? "Sending..." : "Send Inquiry"}</span>
          {!pending && (
            <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">
              arrow_right_alt
            </span>
          )}
        </button>
        {state?.success && (
          <p className="mt-4 text-label-sm uppercase text-secondary text-center">
            Thank you &mdash; we&rsquo;ll be in touch shortly.
          </p>
        )}
        {state?.error && (
          <p className="mt-4 text-label-sm uppercase text-error text-center">
            {state.error}
          </p>
        )}
        <p className="mt-6 text-[11px] text-on-surface-variant/40 leading-relaxed text-center">
          By submitting this form, you agree to our privacy policy and terms
          of service. We respect your data as we respect our fabrics.
        </p>
      </div>
    </form>
  );
}
