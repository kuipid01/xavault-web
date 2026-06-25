"use client";

import { useEffect, useRef } from "react";
import { useMutation } from "@tanstack/react-query";
import { api, ApiError } from "@/lib/api/client";
import { AlertCircle, Landmark, ExternalLink, Loader2, Home } from "lucide-react";
import Link from "next/link";

interface VerifyEmailClientProps {
  token: string | null;
}

interface ApiResponse<T = unknown> {
  success: boolean;
  message: string;
  data: T;
}

export function VerifyEmailClient({ token }: VerifyEmailClientProps) {
  const verifiedRef = useRef(false);
  const mutation = useMutation({
    mutationFn: (tokenValue: string) =>
      api.post<ApiResponse>("/api/v1/auth/validate-mail", {
        token: tokenValue,
      }),
  });

  useEffect(() => {
    // Run exactly once on mount to avoid double verification requests
    if (verifiedRef.current) return;
    if (token) {
      verifiedRef.current = true;
      mutation.mutate(token);
    }
  }, [token]);

  // Handle mobile app redirection / launch helper
  const handleOpenApp = () => {
    if (!token) return;
    // Attempt deep link scheme launch
    const deepLinkUrl = `xavault://verify-email?token=${encodeURIComponent(token)}`;
    window.location.href = deepLinkUrl;
  };

  const isPending = mutation.isPending || (!token && !mutation.isError);
  const isSuccess = mutation.isSuccess;
  const isError = mutation.isError || !token;

  const errorMessage = !token
    ? "No verification token provided. Please check the link in your email."
    : mutation.error instanceof ApiError
      ? mutation.error.message
      : "We could not verify your email address. The link may have expired or is invalid.";

  return (
    <div className="relative z-10 w-full max-w-md p-0.5 animate-scale-up">
      <div className="verify-card p-8 sm:p-10 flex flex-col items-center text-center">
        {/* Logo/Brand header */}
        <div className="mb-8 flex items-center gap-2.5">
          <span className="grid size-9 place-items-center rounded-xl bg-mint text-ink">
            <Landmark size={17} />
          </span>
          <span className="text-lg font-semibold tracking-[-0.03em] text-white">xavault</span>
        </div>

        {/* LOADING STATE */}
        {isPending && (
          <div className="flex flex-col items-center">
            <div className="relative flex size-20 items-center justify-center rounded-full border border-white/5 bg-white/[0.02]">
              <div className="absolute inset-0 rounded-full border border-t-mint border-r-transparent border-b-transparent border-l-transparent animate-spin-slow" />
              <Loader2 className="animate-spin text-mint" size={28} />
            </div>
            <h1 className="mt-8 text-2xl font-semibold tracking-[-0.03em] text-white">
              Verifying your email
            </h1>
            <p className="mt-3 text-sm leading-6 text-white/50 max-w-xs">
              Please wait while we secure your account credentials with the vault.
            </p>
          </div>
        )}

        {/* SUCCESS STATE */}
        {isSuccess && (
          <div className="flex flex-col items-center">
            {/* Animated SVG Checkmark */}
            <div className="relative flex size-20 items-center justify-center rounded-full bg-mint text-ink">
              <svg className="size-12" viewBox="0 0 52 52">
                <circle className="checkmark-circle" cx="26" cy="26" r="25" />
                <path className="checkmark-check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" />
              </svg>
            </div>
            <h1 className="mt-8 text-2xl font-semibold tracking-[-0.03em] text-white">
              Email verified!
            </h1>
            <p className="mt-3 text-sm leading-6 text-white/60 max-w-xs">
              Your security credentials have been validated. You're ready to get started.
            </p>

            <div className="mt-8 flex flex-col gap-3 w-full">
              <button
                onClick={handleOpenApp}
                className="button-mint w-full py-3 text-sm font-semibold flex items-center justify-center gap-2 cursor-pointer"
              >
                Open in Mobile App
                <ExternalLink size={15} />
              </button>
              <Link
                href="/"
                className="button-ghost w-full py-3 text-sm font-semibold flex items-center justify-center gap-2"
              >
                Go to Homepage
              </Link>
            </div>
          </div>
        )}

        {/* ERROR STATE */}
        {isError && (
          <div className="flex flex-col items-center">
            <div className="flex size-20 items-center justify-center rounded-full border border-red-500/20 bg-red-500/5 text-red-400">
              <AlertCircle size={32} />
            </div>
            <h1 className="mt-8 text-2xl font-semibold tracking-[-0.03em] text-white">
              Verification Failed
            </h1>
            <p className="mt-3 text-sm leading-6 text-red-200/50 max-w-xs">
              {errorMessage}
            </p>

            <div className="mt-8 flex flex-col gap-3 w-full">
              <Link
                href="/"
                className="button-mint w-full py-3 text-sm font-semibold flex items-center justify-center gap-2"
              >
                <Home size={15} />
                Back to Homepage
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
