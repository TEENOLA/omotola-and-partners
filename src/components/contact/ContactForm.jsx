import { useState } from "react";
import { useForm } from "react-hook-form";
import { CheckCircle2, Send } from "lucide-react";

const inputClasses =
  "w-full rounded-md border border-hairline-light bg-white px-4 py-3 text-sm text-ink placeholder:text-slate-light focus:outline-none focus:border-brass focus:ring-1 focus:ring-brass transition-colors";

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = async () => {
    // No backend wired yet — this simulates a send so the flow can be reviewed end to end.
    await new Promise((r) => setTimeout(r, 600));
    setSubmitted(true);
    reset();
  };

  if (submitted) {
    return (
      <div className="rounded-lg border border-hairline-light bg-white p-8 text-center">
        <CheckCircle2 size={28} className="text-brass mx-auto" />
        <h3 className="font-display text-xl text-ink mt-4">Message sent.</h3>
        <p className="text-slate text-sm mt-2">
          Thank you for reaching out — a member of our team will respond within
          one business day.
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="citation text-brass mt-6 hover:text-ink transition-colors"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="rounded-lg border border-hairline-light bg-white p-8"
    >
      <h3 className="font-display text-xl text-ink">Quick Response Form</h3>
      <p className="text-slate text-sm mt-1.5">
        A short question or general inquiry — we'll get back to you fast.
      </p>

      <div className="mt-6 flex flex-col gap-4">
        <div>
          <input
            {...register("name", { required: "Please enter your name" })}
            placeholder="Full name"
            className={inputClasses}
          />
          {errors.name && (
            <p className="text-xs text-red-600 mt-1.5">{errors.name.message}</p>
          )}
        </div>

        <div>
          <input
            type="email"
            {...register("email", {
              required: "Please enter your email",
              pattern: {
                value: /^\S+@\S+\.\S+$/,
                message: "Enter a valid email",
              },
            })}
            placeholder="Email address"
            className={inputClasses}
          />
          {errors.email && (
            <p className="text-xs text-red-600 mt-1.5">
              {errors.email.message}
            </p>
          )}
        </div>

        <div>
          <textarea
            {...register("message", { required: "Please enter a message" })}
            placeholder="How can we help?"
            rows={4}
            className={`${inputClasses} resize-none`}
          />
          {errors.message && (
            <p className="text-xs text-red-600 mt-1.5">
              {errors.message.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex items-center justify-center gap-2 rounded-full bg-ink px-7 py-3.5 text-sm text-parchment font-medium hover:bg-brass hover:text-ink transition-colors disabled:opacity-60"
        >
          {isSubmitting ? "Sending..." : "Send Message"} <Send size={15} />
        </button>
      </div>
    </form>
  );
}
