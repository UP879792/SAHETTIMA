"use server";

type FormState = {
  ok: boolean;
  message: string;
};

export async function submitContact(
  _: FormState,
  formData: FormData
): Promise<FormState> {
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const organization = String(formData.get("organization") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();
  const honeypot = String(formData.get("company") ?? "").trim();

  if (honeypot) {
    return {
      ok: false,
      message: "Submission blocked."
    };
  }

  if (!name || !email || !message) {
    return {
      ok: false,
      message: "Please complete the required fields."
    };
  }

  const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  if (!emailValid) {
    return {
      ok: false,
      message: "Please provide a valid email address."
    };
  }

  const payload = {
    name,
    email,
    organization,
    message,
    receivedAt: new Date().toISOString()
  };

  console.log("Contact form submission", payload);

  return {
    ok: true,
    message: "Thank you. Your enquiry has been received."
  };
}
