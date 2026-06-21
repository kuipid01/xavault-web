import Link from "next/link";
import { ArrowLeft, Check, Landmark, Sparkles } from "lucide-react";
import { WaitlistForm } from "@/components/waitlist-form";

export const metadata = {
  title: "Join the waitlist — Xavault",
  description: "Get early access to Xavault and make your next salary feel different.",
};

export default function WaitlistPage() {
  return (
    <main className="waitlist-page relative grid min-h-screen overflow-hidden bg-ink px-5 py-6 text-white sm:px-8">
      <div className="hero-grid opacity-30" />
      <nav className="relative z-10 mx-auto flex w-full max-w-[1120px] items-center justify-between self-start">
        <Link href="/" className="inline-flex items-center gap-2.5">
          <span className="grid size-9 place-items-center rounded-xl bg-mint text-ink"><Landmark size={17} /></span>
          <span className="text-lg font-semibold tracking-[-0.03em]">xavault</span>
        </Link>
        <Link href="/" className="inline-flex items-center gap-2 text-sm text-white/60 transition hover:text-white"><ArrowLeft size={15} /> Back home</Link>
      </nav>

      <section className="relative z-10 mx-auto grid w-full max-w-[1120px] items-center gap-14 py-16 lg:grid-cols-[1fr_0.8fr]">
        <div>
          <div className="eyebrow eyebrow-dark"><Sparkles size={13} /> Early access</div>
          <h1 className="mt-7 max-w-3xl text-[clamp(3.7rem,8vw,7.6rem)] font-semibold leading-[0.86] tracking-[-0.075em]">
            Be first into<br /><span className="text-mint">the vault.</span>
          </h1>
          <p className="mt-7 max-w-xl text-base leading-7 text-white/55 sm:text-lg">Xavault is being built for people who want their salary to feel clear, protected, and purposeful from day one.</p>
          <WaitlistForm source="waitlist_page" />
        </div>

        <aside className="rounded-[28px] border border-white/10 bg-white/[0.055] p-7 backdrop-blur sm:p-9">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-mint">Early members get</p>
          <div className="mt-7 space-y-6">
            {[
              "First access when private beta opens",
              "A direct line for shaping the product",
              "Launch updates—useful ones, not inbox clutter",
            ].map((benefit) => (
              <div key={benefit} className="flex gap-3 border-b border-white/10 pb-6 last:border-0 last:pb-0">
                <span className="grid size-7 shrink-0 place-items-center rounded-full bg-mint/10 text-mint"><Check size={14} /></span>
                <p className="text-sm leading-6 text-white/68">{benefit}</p>
              </div>
            ))}
          </div>
        </aside>
      </section>
    </main>
  );
}
