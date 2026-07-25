import { useState } from "react";
import { useForm } from "react-hook-form";
import { CheckCircle2, CalendarCheck } from "lucide-react";
import { practiceAreas } from "../../data/practiceAreas";

const inputClasses =
  "w-full rounded-md border border-hairline-light bg-white px-4 py-3 text-sm text-ink placeholder:text-slate-light focus:outline-none focus:border-brass focus:ring-1 focus:ring-brass transition-colors";

const CONSULTATION_TYPES = ["In-Person", "Virtual (Video Call)", "Phone Call"];

export default function BookingForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = async () => {
    // Future-ready for Calendly integration — for now this confirms receipt and
    // a team member follows up manually to lock in the exact slot.
    await new Promise((r) => setTimeout(r, 700));
    setSubmitted(true);
    reset();
  };

  if (submitted) {
    return (
      <div className="rounded-lg border border-hairline-light bg-white p-8 sm:p-10 text-center">
        <CheckCircle2 size={28} className="text-brass mx-auto" />
        <h3 className="font-display text-xl text-ink mt-4">
          Consultation request received.
        </h3>
        <p className="text-slate text-sm mt-2 max-w-sm mx-auto">
          We'll confirm your preferred date and time within one business day.
          Keep an eye on your inbox for a calendar invite.
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="citation text-brass mt-6 hover:text-ink transition-colors"
        >
          Book another consultation
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="rounded-lg border border-hairline-light bg-white p-8 sm:p-10"
    >
      <div className="flex items-center gap-3">
        <CalendarCheck size={22} className="text-brass" />
        <h3 className="font-display text-xl text-ink">Book a Consultation</h3>
      </div>
      <p className="text-slate text-sm mt-2">
        Tell us about your matter and preferred timing — a member of the
        relevant practice team will confirm.
      </p>

      <div className="mt-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
        <Field label="Full Name" error={errors.name}>
          <input
            {...register("name", { required: "Required" })}
            placeholder="Jane Doe"
            className={inputClasses}
          />
        </Field>

        <Field label="Company (optional)">
          <input
            {...register("company")}
            placeholder="Company name"
            className={inputClasses}
          />
        </Field>

        <Field label="Email" error={errors.email}>
          <input
            type="email"
            {...register("email", {
              required: "Required",
              pattern: {
                value: /^\S+@\S+\.\S+$/,
                message: "Enter a valid email",
              },
            })}
            placeholder="you@company.com"
            className={inputClasses}
          />
        </Field>

        <Field label="Phone" error={errors.phone}>
          <input
            {...register("phone", { required: "Required" })}
            placeholder="+234"
            className={inputClasses}
          />
        </Field>

        <Field label="Preferred Date" error={errors.date}>
          <input
            type="date"
            {...register("date", { required: "Required" })}
            className={inputClasses}
          />
        </Field>

        <Field label="Preferred Time" error={errors.time}>
          <input
            type="time"
            {...register("time", { required: "Required" })}
            className={inputClasses}
          />
        </Field>

        <Field label="Practice Area">
          <select {...register("practiceArea")} className={inputClasses}>
            <option value="">Select a practice area</option>
            {practiceAreas.map((area) => (
              <option key={area.slug} value={area.name}>
                {area.name}
              </option>
            ))}
          </select>
        </Field>

        <Field label="Consultation Type">
          <select {...register("consultationType")} className={inputClasses}>
            <option value="">Select a format</option>
            {CONSULTATION_TYPES.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </Field>

        <div className="sm:col-span-2">
          <Field label="Message" error={errors.message}>
            <textarea
              {...register("message", {
                required: "Please briefly describe your matter",
              })}
              placeholder="Briefly describe what you need help with"
              rows={4}
              className={`${inputClasses} resize-none`}
            />
          </Field>
        </div>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="mt-7 inline-flex items-center justify-center gap-2 rounded-full bg-brass px-8 py-3.5 text-sm text-ink font-medium hover:bg-brass-light transition-colors disabled:opacity-60"
      >
        {isSubmitting ? "Submitting..." : "Request Consultation"}
      </button>
    </form>
  );
}

function Field({ label, error, children }) {
  return (
    <div>
      <label className="citation text-slate-light block mb-2">{label}</label>
      {children}
      {error && <p className="text-xs text-red-600 mt-1.5">{error.message}</p>}
    </div>
  );
}
