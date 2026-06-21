"use client";

import { useMutation } from "@tanstack/react-query";
import { AlertCircle, ArrowRight, CheckCircle2, LoaderCircle } from "lucide-react";
import { FormEvent, useState } from "react";
import { api, ApiError } from "@/lib/api/client";

interface ApiResponse<T> {
  success: boolean;
  message: string;
  data: T;
}

interface WaitlistResult {
  email: string;
  joined_at: string;
  already_joined: boolean;
}

export function WaitlistForm({ source = "landing_page" }: { source?: string }) {
  const [email, setEmail] = useState("");
  const mutation = useMutation({
    mutationFn: (submittedEmail: string) =>
      api.post<ApiResponse<WaitlistResult>>("/api/v1/waitlist", {
        email: submittedEmail,
        source,
      }),
  });

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const normalizedEmail = email.trim().toLowerCase();
    if (!normalizedEmail) return;
    mutation.mutate(normalizedEmail);
  }

  if (mutation.isSuccess) {
    return (
      <div className="mt-8 flex max-w-lg items-start gap-3 rounded-2xl bg-white p-4 text-ink" role="status">
        <CheckCircle2 className="mt-0.5 shrink-0 text-teal" size={21} />
        <div>
          <strong className="block text-sm">
            {mutation.data.data.already_joined ? "You’re already on the list." : "You’re on the list."}
          </strong>
          <p className="mt-1 text-xs leading-5 text-slate">We’ll send launch news to {mutation.data.data.email}.</p>
        </div>
      </div>
    );
  }

  const errorMessage = mutation.error instanceof ApiError
    ? mutation.error.message
    : mutation.isError
      ? "We couldn’t add you right now. Please try again."
      : null;

  return (
    <div className="max-w-lg">
      <form className="mt-8 flex flex-col gap-2 rounded-2xl bg-white p-2 sm:flex-row" onSubmit={handleSubmit}>
        <label className="sr-only" htmlFor={`waitlist-email-${source}`}>Email address</label>
        <input
          id={`waitlist-email-${source}`}
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="you@example.com"
          autoComplete="email"
          required
          disabled={mutation.isPending}
          className="min-w-0 flex-1 bg-transparent px-4 py-3 text-sm text-ink outline-none placeholder:text-slate/60 disabled:opacity-60"
        />
        <button className="button-dark h-11 justify-center px-5 disabled:cursor-not-allowed disabled:opacity-70" type="submit" disabled={mutation.isPending}>
          {mutation.isPending ? <><LoaderCircle className="animate-spin" size={15} /> Joining…</> : <>Join the waitlist <ArrowRight size={15} /></>}
        </button>
      </form>
      {errorMessage ? (
        <p className="mt-3 flex items-center gap-2 text-xs text-[#ffd1c7]" role="alert"><AlertCircle size={14} /> {errorMessage}</p>
      ) : null}
    </div>
  );
}
