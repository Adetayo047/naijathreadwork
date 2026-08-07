"use server";

import { Resend } from "resend";

const resend = process.env.RESEND_API_KEY
  ? new Resend(process.env.RESEND_API_KEY)
  : null;

const TO_EMAIL = process.env.CONTACT_TO_EMAIL || "ebunoluwanimiii@gmail.com";
const FROM_EMAIL =
  process.env.CONTACT_FROM_EMAIL || "Naija Threadworks <onboarding@resend.dev>";

const SEND_ERROR =
  "Something went wrong sending your message. Please try again or reach us directly.";

export type FormActionState = {
  success: boolean;
  error?: string;
};

async function deliverEmail(opts: {
  subject: string;
  replyTo: string;
  lines: Record<string, string>;
  logTag: string;
}) {
  if (!resend) {
    console.log(`[${opts.logTag}] RESEND_API_KEY not set — logging only`, opts.lines);
    return;
  }

  const text = Object.entries(opts.lines)
    .map(([key, value]) => `${key}: ${value}`)
    .join("\n");

  await resend.emails.send({
    from: FROM_EMAIL,
    to: TO_EMAIL,
    replyTo: opts.replyTo,
    subject: opts.subject,
    text,
  });
}

export async function submitContactForm(
  prevState: FormActionState | null,
  formData: FormData
): Promise<FormActionState> {
  const name = formData.get("name")?.toString().trim() ?? "";
  const email = formData.get("email")?.toString().trim() ?? "";
  const message = formData.get("message")?.toString().trim() ?? "";
  const type = formData.get("type")?.toString().trim() ?? "";

  if (!name || !email || !message) {
    return {
      success: false,
      error: "Please fill in your name, email, and message before sending.",
    };
  }

  try {
    await deliverEmail({
      subject: `New contact inquiry from ${name}`,
      replyTo: email,
      logTag: "contact-form",
      lines: { Name: name, Email: email, Type: type || "General", Message: message },
    });
  } catch (err) {
    console.error("[contact-form] email send failed", err);
    return { success: false, error: SEND_ERROR };
  }

  return { success: true };
}

export async function submitWholesaleInquiry(
  prevState: FormActionState | null,
  formData: FormData
): Promise<FormActionState> {
  const businessName = formData.get("businessName")?.toString().trim() ?? "";
  const location = formData.get("location")?.toString().trim() ?? "";
  const email = formData.get("email")?.toString().trim() ?? "";
  const orderValue = formData.get("orderValue")?.toString().trim() ?? "";
  const message = formData.get("message")?.toString().trim() ?? "";

  if (!businessName || !location || !email) {
    return {
      success: false,
      error: "Please fill in your boutique name, location, and email.",
    };
  }

  try {
    await deliverEmail({
      subject: `New wholesale inquiry from ${businessName}`,
      replyTo: email,
      logTag: "wholesale-inquiry",
      lines: {
        Business: businessName,
        Location: location,
        Email: email,
        "Estimated order value": orderValue || "Not specified",
        Message: message || "(none)",
      },
    });
  } catch (err) {
    console.error("[wholesale-inquiry] email send failed", err);
    return { success: false, error: SEND_ERROR };
  }

  return { success: true };
}

export async function submitAppointmentRequest(
  prevState: FormActionState | null,
  formData: FormData
): Promise<FormActionState> {
  const fullName = formData.get("fullName")?.toString().trim() ?? "";
  const email = formData.get("email")?.toString().trim() ?? "";
  const service = formData.get("service")?.toString().trim() ?? "";
  const location = formData.get("location")?.toString().trim() ?? "";

  if (!fullName || !email || !location) {
    return {
      success: false,
      error: "Please share your name, email, and preferred location.",
    };
  }

  try {
    await deliverEmail({
      subject: `New atelier appointment request from ${fullName}`,
      replyTo: email,
      logTag: "appointment-request",
      lines: {
        Name: fullName,
        Email: email,
        Service: service || "Not specified",
        Location: location,
      },
    });
  } catch (err) {
    console.error("[appointment-request] email send failed", err);
    return { success: false, error: SEND_ERROR };
  }

  return { success: true };
}
