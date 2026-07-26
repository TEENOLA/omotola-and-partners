import { useState } from "react";
import { useForm } from "react-hook-form";
import { CheckCircle2, UploadCloud, Send } from "lucide-react";
import { openPositions } from "../../data/careers";

const inputClasses =
  "w-full rounded-md border border-hairline-light bg-white px-4 py-3 text-sm text-ink placeholder:text-slate-light focus:outline-none focus:border-brass focus:ring-1 focus:ring-brass transition-colors";

const ROLE_OPTIONS = [
  ...openPositions.map((p) => p.title),
  "Graduate Programme",
  "Internship Programme",
  "General Application",
];

export default function ApplicationForm({ presetRole }) {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors, isSubmitting },
  } = useForm({ defaultValues: { role: presetRole || "" } });
  const [submitted, setSubmitted] = useState(false);
  const resumeFile = watch("resume");

  const onSubmit = async () => {
    // No backend wired yet — simulates submission so the flow can be reviewed end to end.
    await new Promise((r) => setTimeout(r, 700));
    setSubmitted(true);
    reset();
  };

  if (submitted) {
    return (
      <div className="rounded-lg border border-hairline-light bg-white p-8 sm:p-10 text-center">
        <CheckCircle2 size={28} className="text-brass mx-auto" />
        <h3 className="font-display text-xl text-ink mt-4">
          Application received.
        </h3>
        <p className="text-slate text-sm mt-2 max-w-sm mx-auto">
          Thank you for applying. Our recruitment team reviews every application
          and will follow up if there's a fit for the current role or a future
          one.
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="citation text-brass mt-6 hover:text-ink transition-colors"
        >
          Submit another application
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      id="apply"
      className="rounded-lg border border-hairline-light bg-white p-8 sm:p-10"
    >
      <h3 className="font-display text-xl text-ink">Apply</h3>
      <p className="text-slate text-sm mt-2">
        Tell us a bit about yourself and attach your CV — we review every
        application personally.
      </p>

      <div className="mt-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
        <Field label="Full Name" error={errors.name}>
          <input
            {...register("name", { required: "Required" })}
            placeholder="Jane Doe"
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
            placeholder="you@email.com"
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

        <Field label="Role Applying For">
          <select {...register("role")} className={inputClasses}>
            <option value="">Select a role</option>
            {ROLE_OPTIONS.map((role) => (
              <option key={role} value={role}>
                {role}
              </option>
            ))}
          </select>
        </Field>

        <div className="sm:col-span-2">
          <Field label="Resume / CV" error={errors.resume}>
            <label
              htmlFor="resume-upload"
              className="flex items-center gap-3 rounded-md border border-dashed border-hairline-light bg-parchment-2 px-4 py-4 text-sm text-slate cursor-pointer hover:border-brass/60 transition-colors"
            >
              <UploadCloud size={18} className="text-brass shrink-0" />
              <span className="truncate">
                {resumeFile?.[0]?.name ??
                  "Click to upload PDF or Word document (max 5MB)"}
              </span>
            </label>
            <input
              id="resume-upload"
              type="file"
              accept=".pdf,.doc,.docx"
              className="sr-only"
              {...register("resume", { required: "Please attach your resume" })}
            />
          </Field>
        </div>

        <div className="sm:col-span-2">
          <Field label="Cover Note (optional)">
            <textarea
              {...register("note")}
              placeholder="Anything you'd like us to know"
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
        {isSubmitting ? "Submitting..." : "Submit Application"}{" "}
        <Send size={15} />
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
