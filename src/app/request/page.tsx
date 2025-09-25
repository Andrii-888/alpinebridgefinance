"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";


/** Схема валидации формы заявки */
const RequestSchema = z.object({
  name: z.string().min(2, "Enter your full name"),
  email: z.string().email("Enter a valid email"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type RequestData = z.infer<typeof RequestSchema>;

export default function RequestPage() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
  } = useForm<RequestData>({
    resolver: zodResolver(RequestSchema),
    mode: "onChange",
  });

  const onSubmit = async (data: RequestData) => {
    await new Promise((r) => setTimeout(r, 600));
    alert(`Request submitted: ${data.name}, ${data.email}, ${data.message}`);
  };

  return (
    <main className="flex min-h-[80vh] items-center justify-center bg-white px-4">
      <div className="w-full max-w-md rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
        <h1 className="mb-2 text-2xl font-semibold text-gray-900">Request</h1>
        <p className="mb-6 text-sm text-gray-500">
          Fill out the form and we’ll get back to you shortly.
        </p>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-4"
          noValidate
        >
          {/* Name */}
          <div className="flex flex-col gap-1">
            <input
              type="text"
              placeholder="Your Name"
              aria-invalid={!!errors.name}
              className={`w-full rounded-xl border px-4 py-3 text-sm outline-none transition ${
                errors.name
                  ? "border-red-400 focus:border-red-500 focus:ring-1 focus:ring-red-500"
                  : "border-gray-300 focus:border-black focus:ring-1 focus:ring-black"
              }`}
              {...register("name")}
            />
            {errors.name && (
              <span className="text-xs text-red-500">
                {errors.name.message}
              </span>
            )}
          </div>

          {/* Email */}
          <div className="flex flex-col gap-1">
            <input
              type="email"
              placeholder="Email"
              aria-invalid={!!errors.email}
              className={`w-full rounded-xl border px-4 py-3 text-sm outline-none transition ${
                errors.email
                  ? "border-red-400 focus:border-red-500 focus:ring-1 focus:ring-red-500"
                  : "border-gray-300 focus:border-black focus:ring-1 focus:ring-black"
              }`}
              {...register("email")}
            />
            {errors.email && (
              <span className="text-xs text-red-500">
                {errors.email.message}
              </span>
            )}
          </div>

          {/* Message */}
          <div className="flex flex-col gap-1">
            <textarea
              placeholder="Your request"
              rows={4}
              aria-invalid={!!errors.message}
              className={`w-full rounded-xl border px-4 py-3 text-sm outline-none transition ${
                errors.message
                  ? "border-red-400 focus:border-red-500 focus:ring-1 focus:ring-red-500"
                  : "border-gray-300 focus:border-black focus:ring-1 focus:ring-black"
              }`}
              {...register("message")}
            />
            {errors.message && (
              <span className="text-xs text-red-500">
                {errors.message.message}
              </span>
            )}
          </div>

          <button
            type="submit"
            className="mt-2 w-full rounded-xl px-5 py-3 text-sm font-medium !text-white transition active:scale-95 disabled:opacity-50
             !bg-[#0088ff] hover:!bg-[#007aff]"
          >
            {isSubmitting ? "Sending…" : "Submit Request"}
          </button>
        </form>
      </div>
    </main>
  );
}
