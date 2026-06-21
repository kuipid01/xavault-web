import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  BanknoteArrowDown,
  CalendarDays,
  Check,
  ChevronRight,
  CircleDollarSign,
  Fingerprint,
  FolderLock,
  Landmark,
  LockKeyhole,
  MoveRight,
  PiggyBank,
  Quote,
  ReceiptText,
  ShieldCheck,
  Sparkles,
  WalletCards,
} from "lucide-react";
import { ApiStatus } from "@/components/api-status";
import { MobileMenu } from "@/components/mobile-menu";
import { WaitlistForm } from "@/components/waitlist-form";

const features = [
  {
    icon: CalendarDays,
    title: "Salary plans",
    copy: "Give every pay cycle a start date, an end date, and a job before you spend a naira.",
  },
  {
    icon: FolderLock,
    title: "Smart envelopes",
    copy: "Split one plan into rent, food, family and goals—with smaller envelopes inside each one.",
  },
  {
    icon: WalletCards,
    title: "One clear wallet",
    copy: "See what is available, what is committed, and what is safely locked at a glance.",
  },
  {
    icon: ShieldCheck,
    title: "Rules that protect you",
    copy: "Flexible or locked funds. You choose the guardrails that make your plan easier to keep.",
  },
];

const steps = [
  {
    number: "01",
    title: "Fund your Xavault wallet",
    copy: "Move your salary or any amount into one secure balance. Your money stays visible and accounted for.",
  },
  {
    number: "02",
    title: "Build a plan that fits real life",
    copy: "Choose your dates, create envelopes, and preview every allocation before you commit a kobo.",
  },
  {
    number: "03",
    title: "Spend with calm, not guesswork",
    copy: "Follow the plan, see what remains, and withdraw from eligible envelopes when you need to.",
  },
];

function Logo({ inverse = false }: { inverse?: boolean }) {
  return (
    <span className="inline-flex items-center gap-2.5" aria-label="Xavault home">
      <span
        className={`grid size-8 place-items-center rounded-[10px] ${inverse ? "bg-mint text-ink" : "bg-ink text-mint"
          }`}
      >
        <Landmark size={16} strokeWidth={2.4} />
      </span>
      <span className={`text-lg font-semibold tracking-[-0.03em] ${inverse ? "text-white" : "text-ink"}`}>
        xavault
      </span>
    </span>
  );
}

function ProductPreview() {
  return (
    <div className="product-stage" aria-label="Xavault product dashboard preview">
      <div className="hero-float hero-float-one"><BanknoteArrowDown size={25} /></div>
      <div className="hero-float hero-float-two"><PiggyBank size={24} /></div>
      <div className="hero-float hero-float-three"><WalletCards size={24} /></div>

      <Image
        className="hero-product-image"
        src="/images/xavault-hero-phones.png"
        alt="Three Xavault screens showing salary activity, wallet balance, and envelope allocation"
        width={1536}
        height={1024}
        priority
        sizes="(max-width: 640px) 760px, 940px"
      />

      <div className="phone-shell phone-side phone-left">
        <div className="phone-speaker" />
        <div className="pt-8">
          <p className="text-[9px] text-slate">June plan</p>
          <h3 className="mt-1 text-[15px] font-semibold text-ink">Plan activity</h3>
        </div>
        <div className="mt-5 flex rounded-xl bg-soft p-1 text-[8px]">
          <span className="flex-1 rounded-lg bg-white py-2 text-center font-semibold">Income</span>
          <span className="flex-1 py-2 text-center text-slate">Spending</span>
        </div>
        <p className="mt-5 text-[9px] font-semibold text-ink">Recent movement</p>
        <div className="mt-2 space-y-1">
          {[
            ["Salary funded", "+₦450,000", "SF"],
            ["Rent envelope", "₦120,000", "RE"],
            ["Food & living", "₦45,000", "FL"],
            ["Emergency fund", "₦30,000", "EF"],
            ["Transport", "₦25,000", "TR"],
          ].map(([label, amount, initials]) => (
            <div key={label} className="flex items-center gap-2.5 border-b border-line/70 py-3">
              <span className="grid size-7 shrink-0 place-items-center rounded-full bg-soft text-[7px] font-bold text-teal">{initials}</span>
              <span className="min-w-0 flex-1"><strong className="block truncate text-[9px] text-ink">{label}</strong><small className="text-[7px] text-slate">Today</small></span>
              <span className="text-[8px] font-semibold text-ink">{amount}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="phone-shell phone-main">
        <div className="phone-speaker" />
        <div className="flex items-start justify-between pt-7">
          <div>
            <p className="text-[10px] text-slate">Good morning, Dami</p>
            <h3 className="mt-1 text-[15px] font-semibold tracking-tight text-ink">Your money plan</h3>
          </div>
          <div className="grid size-8 place-items-center rounded-full bg-soft text-[10px] font-bold text-ink">DO</div>
        </div>
        <div className="balance-card mt-5">
          <div className="flex items-center justify-between text-[9px] text-white/60">
            <span>Available balance</span><LockKeyhole size={11} />
          </div>
          <p className="mt-2 text-[27px] font-semibold tracking-[-0.06em] text-white">₦184,500</p>
          <div className="mt-5 flex gap-2">
            <span className="rounded-full bg-white px-3 py-1.5 text-[8px] font-semibold text-ink">Add money</span>
            <span className="rounded-full border border-white/20 px-3 py-1.5 text-[8px] font-semibold text-white">Withdraw</span>
          </div>
        </div>
        <div className="mt-5 flex items-center justify-between">
          <p className="text-[11px] font-semibold text-ink">Active envelopes</p>
          <p className="text-[9px] font-medium text-teal">See all</p>
        </div>
        <div className="mt-3 grid grid-cols-2 gap-2.5">
          <div className="envelope-card bg-[#eff7e8]">
            <span className="grid size-6 place-items-center rounded-full bg-white text-ink"><Landmark size={11} /></span>
            <p>Rent</p><strong>₦120,000</strong>
            <i><b style={{ width: "84%" }} /></i><small>84% funded</small>
          </div>
          <div className="envelope-card bg-[#f5eee4]">
            <span className="grid size-6 place-items-center rounded-full bg-white text-ink"><ReceiptText size={11} /></span>
            <p>Living</p><strong>₦45,000</strong>
            <i><b style={{ width: "62%" }} /></i><small>62% remaining</small>
          </div>
        </div>
      </div>

      <div className="phone-shell phone-side phone-right">
        <div className="phone-speaker" />
        <div className="flex items-center justify-between pt-8">
          <div><p className="text-[9px] text-slate">Smart envelopes</p><h3 className="mt-1 text-[15px] font-semibold text-ink">Allocate money</h3></div>
          <span className="grid size-7 place-items-center rounded-full bg-soft text-teal"><FolderLock size={13} /></span>
        </div>
        <div className="mt-6 rounded-2xl border border-line bg-paper p-4 text-center">
          <p className="text-[8px] text-slate">Amount to allocate</p>
          <strong className="mt-2 block text-[27px] tracking-[-0.05em] text-ink">₦80,000</strong>
        </div>
        <div className="mt-3 grid grid-cols-3 gap-2">
          {["₦10k", "₦25k", "₦50k"].map((amount) => <span key={amount} className="rounded-full bg-soft py-2 text-center text-[8px] font-semibold text-teal">{amount}</span>)}
        </div>
        <div className="mt-4 grid grid-cols-3 gap-2 text-center text-[12px] font-semibold text-ink">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, "·", 0, "←"].map((key) => <span key={String(key)} className="py-2.5">{key}</span>)}
        </div>
        <div className="mt-2 rounded-full bg-ink py-3 text-center text-[9px] font-semibold text-white">Add to envelope</div>
      </div>

      <div className="stage-status">
        <span className="grid size-7 place-items-center rounded-full bg-mint text-ink"><Check size={14} /></span>
        <span><strong>June is 82% funded</strong><small>Everything has a place</small></span>
      </div>
    </div>
  );
}

function HeroNav() {
  return (
    <nav className="hero-nav relative z-20 mx-auto flex max-w-[1240px] items-center justify-between px-1 py-3 sm:px-4">
      <Link href="#top"><Logo inverse /></Link>
      <div className="hidden items-center gap-8 text-sm font-medium text-white/55 md:flex">
        <Link className="transition hover:text-white" href="#features">Features</Link>
        <Link className="transition hover:text-white" href="#how-it-works">How it works</Link>
        <Link className="transition hover:text-white" href="#security">Security</Link>
        <Link className="transition hover:text-white" href="#about">About</Link>
      </div>
      <div className="flex items-center gap-2 text-white">
        <Link className="hidden rounded-full px-4 py-2 text-sm font-semibold sm:block" href="#">Sign in</Link>
        <Link className="button-mint" href="/waitlist">Join waitlist <ArrowRight size={15} /></Link>
        <MobileMenu />
      </div>
    </nav>
  );
}

export default function Home() {
  return (
    <main className="overflow-hidden bg-paper text-ink">
      <section className="hero-shell relative overflow-hidden px-5 pt-5 sm:px-8 lg:px-12">
        <div className="hero-grid" />
        <HeroNav />

        <div id="top" className="relative z-10 mx-auto max-w-[1180px] pt-16 text-center sm:pt-20">
          <div className="eyebrow eyebrow-dark mx-auto"><Sparkles size={13} /> Your salary, organized</div>
          <h1 className="mx-auto mt-6 max-w-5xl text-balance text-[clamp(3.4rem,7.2vw,6.9rem)] font-medium leading-[0.93] tracking-[-0.068em] text-white">
            Your earnings, simplified.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-balance text-base leading-7 text-white/60 sm:text-lg">
            Turn payday into a plan you can actually keep. Fund your wallet, create smart envelopes, and know exactly where every naira is going.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link className="button-mint h-12 px-6 text-[15px]" href="/waitlist">Get early access <MoveRight size={17} /></Link>
            <Link className="button-ghost h-12 px-6 text-[15px]" href="#how-it-works">See how it works</Link>
          </div>
          <ProductPreview />
        </div>
      </section>

      <section id="features" className="section-grid px-5 py-24 sm:px-8 lg:py-32">
        <div className="mx-auto max-w-[1120px]">
          <div className="mx-auto max-w-2xl text-center">
            <div className="eyebrow mx-auto">Core features</div>
            <h2 className="section-title mt-5">One salary. Every priority.<br />Nothing left to guess.</h2>
            <p className="section-copy mx-auto mt-5">A calmer way to plan your pay, protect what matters, and spend without second-guessing yourself.</p>
          </div>
          <div className="mt-14 grid gap-4 md:grid-cols-2">
            {features.map(({ icon: Icon, title, copy }, index) => (
              <article key={title} className={`feature-card ${index === 0 || index === 3 ? "feature-dark" : ""}`}>
                <div className="feature-icon"><Icon size={20} strokeWidth={1.8} /></div>
                <div>
                  <h3 className="text-xl font-semibold tracking-[-0.035em]">{title}</h3>
                  <p className="mt-2 max-w-md text-sm leading-6 opacity-65">{copy}</p>
                </div>
                <ChevronRight className="ml-auto shrink-0 opacity-50" size={20} />
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="how-it-works" className="bg-white px-5 py-24 sm:px-8 lg:py-32">
        <div className="mx-auto grid max-w-[1120px] gap-14 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <div className="eyebrow">How it works</div>
            <h2 className="section-title mt-5">From payday<br />to a clear plan.</h2>
            <p className="section-copy mt-5 max-w-md">Xavault handles the structure so you can focus on living—not constantly recalculating your account balance.</p>
            <div className="mt-10 inline-flex items-center gap-3 rounded-2xl border border-line bg-paper p-3 pr-5">
              <span className="grid size-10 place-items-center rounded-xl bg-ink text-mint"><BanknoteArrowDown size={19} /></span>
              <span><small className="block text-[10px] uppercase tracking-[0.16em] text-slate">Designed around</small><strong className="text-sm">real monthly income</strong></span>
            </div>
          </div>
          <div className="step-list">
            {steps.map((step) => (
              <article key={step.number} className="step-card">
                <span className="step-number">{step.number}</span>
                <div>
                  <h3 className="text-xl font-semibold tracking-[-0.035em]">{step.title}</h3>
                  <p className="mt-2 max-w-lg text-sm leading-6 text-slate">{step.copy}</p>
                </div>
                <ArrowRight className="ml-auto hidden text-teal sm:block" size={19} />
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="security" className="security-section px-5 py-24 text-white sm:px-8 lg:py-32">
        <div className="security-glow" />
        <div className="relative z-10 mx-auto max-w-[1120px]">
          <div className="mx-auto max-w-2xl text-center">
            <div className="eyebrow eyebrow-dark mx-auto">Safe by design</div>
            <h2 className="section-title mt-5 text-white">Your plan is personal.<br />We keep it that way.</h2>
            <p className="mx-auto mt-5 max-w-xl text-sm leading-6 text-white/55 sm:text-base">Secure authentication and clear transaction records give your money the protection—and the paper trail—it deserves.</p>
          </div>
          <div className="mx-auto mt-16 grid max-w-4xl items-center gap-8 lg:grid-cols-[1fr_1.3fr_1fr]">
            <div className="security-pill lg:translate-y-[-46px]"><LockKeyhole size={17} /> Secure access</div>
            <div className="vault-visual">
              <div className="vault-ring vault-ring-one" />
              <div className="vault-ring vault-ring-two" />
              <Fingerprint size={105} strokeWidth={0.8} className="text-mint" />
              <span>VAULT PROTECTED</span>
            </div>
            <div className="security-pill lg:translate-y-[38px]"><ReceiptText size={17} /> Traceable ledger</div>
            <div className="security-pill lg:col-start-1 lg:row-start-2 lg:justify-self-end"><ShieldCheck size={17} /> Protected sessions</div>
            <div className="security-pill lg:col-start-3 lg:row-start-2"><CircleDollarSign size={17} /> Wallet separation</div>
          </div>
        </div>
      </section>

      <section id="about" className="bg-paper px-5 py-24 sm:px-8 lg:py-32">
        <div className="mx-auto max-w-[1000px]">
          <Quote size={30} className="text-teal" />
          <blockquote className="mt-8 text-balance text-[clamp(2rem,5vw,4.6rem)] font-medium leading-[1.07] tracking-[-0.06em]">
            “A budget tells you what you cannot do. Xavault shows you what your salary <span className="text-teal">can do.</span>”
          </blockquote>
          <div className="mt-10 flex items-center gap-3 border-t border-line pt-6">
            <span className="grid size-11 place-items-center rounded-full bg-ink font-semibold text-mint">X</span>
            <span><strong className="block text-sm">The Xavault idea</strong><small className="text-slate">Built for people who want payday to feel lighter.</small></span>
          </div>
        </div>
      </section>

      <section id="waitlist" className="px-5 pb-5 sm:px-8 sm:pb-8">
        <div className="cta-panel mx-auto max-w-[1240px] px-6 py-16 sm:px-12 lg:px-20 lg:py-20">
          <div className="relative z-10 max-w-2xl">
            <div className="eyebrow eyebrow-dark">Early access</div>
            <h2 className="mt-5 text-[clamp(2.6rem,6vw,5.4rem)] font-semibold leading-[0.93] tracking-[-0.07em] text-white">Make your next<br />salary feel different.</h2>
            <p className="mt-5 max-w-lg text-sm leading-6 text-white/60 sm:text-base">Join the early list for product updates and first access when Xavault opens its doors.</p>
            <WaitlistForm />
          </div>
        </div>
      </section>

      <footer className="bg-ink px-5 pb-8 pt-16 text-white sm:px-8">
        <div className="mx-auto max-w-[1120px]">
          <div className="grid gap-12 border-b border-white/10 pb-14 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
            <div><Logo inverse /><p className="mt-5 max-w-xs text-sm leading-6 text-white/45">A safer, simpler home for your salary plans.</p></div>
            <div><p className="footer-label">Product</p><Link href="#features">Features</Link><Link href="#how-it-works">How it works</Link><Link href="#security">Security</Link></div>
            <div><p className="footer-label">Company</p><Link href="#about">About</Link><Link href="mailto:hello@xavault.app">Contact</Link><Link href="/waitlist">Early access</Link></div>
            <div><p className="footer-label">Legal</p><Link href="#">Privacy</Link><Link href="#">Terms</Link><Link href="#">Cookies</Link></div>
          </div>
          <div className="flex flex-col gap-3 pt-6 text-xs text-white/35 sm:flex-row sm:items-center sm:justify-between">
            <p>© {new Date().getFullYear()} Xavault. All rights reserved.</p>
            <ApiStatus />
          </div>
        </div>
      </footer>
    </main>
  );
}
