"use client";

import { useFormState } from "react-dom";
import { submitContact } from "@/app/contact/actions";

const initialState = {
  ok: false,
  message: ""
};

export default function ContactForm() {
  const [state, formAction] = useFormState(submitContact, initialState);

  return (
    <form action={formAction} className="form">
      <input type="text" name="name" placeholder="Full name" required />
      <input type="email" name="email" placeholder="Work email" required />
      <input type="text" name="organization" placeholder="Organization" />
      <input
        type="text"
        name="company"
        tabIndex={-1}
        autoComplete="off"
        className="honeypot"
        aria-hidden="true"
      />
      <textarea
        name="message"
        placeholder="Tell us about your project or mandate"
        required
      />
      <button className="button" type="submit">
        Submit Enquiry
      </button>
      {state.message ? (
        <p className={`form-status ${state.ok ? "success" : "error"}`}>
          {state.message}
        </p>
      ) : null}
    </form>
  );
}
