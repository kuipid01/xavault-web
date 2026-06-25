import { VerifyEmailClient } from "@/components/verify-email-client";

export const metadata = {
  title: "Verify your email — Xavault",
  description: "Securely verify your Xavault account and get started with your financial plans.",
};

interface PageProps {
  searchParams: Promise<{ token?: string }>;
}

export default async function VerifyEmailPage({ searchParams }: PageProps) {
  const params = await searchParams;
  const token = params.token ?? null;

  return (
    <main className="verify-page relative grid min-h-screen place-items-center bg-ink px-5 py-12 text-white sm:px-8 overflow-hidden">
      <div className="hero-grid opacity-30 animate-pulse" style={{ animationDuration: '6s' }} />
      <VerifyEmailClient token={token} />
    </main>
  );
}
