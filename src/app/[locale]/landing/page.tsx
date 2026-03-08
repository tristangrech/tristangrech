'use client';

import { useSearchParams } from 'next/navigation';
import { Suspense, useState } from 'react';

const STRIPE_LINK = 'https://buy.stripe.com/9B69AS61beZL6P9h0W4c80r';

function SuccessPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#0A0A0A] px-4">
      <div className="max-w-lg text-center animate-[fadeUp_0.6s_ease-out]">
        <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-[#FACC15]/20">
          <svg className="h-10 w-10 text-[#FACC15]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h1 className="mb-4 text-3xl font-bold text-white">Payment Confirmed</h1>
        <p className="mb-6 text-lg text-neutral-400">
          You&apos;re in. Check your inbox for your booking link to schedule your private coaching session.
        </p>
        <p className="mb-8 text-sm text-neutral-500">
          Questions? WhatsApp me at +33 6 78 49 61 26
        </p>
        <a href="https://tristangrech.com" className="inline-block rounded-full bg-[#FACC15] px-8 py-3 font-semibold text-black transition hover:bg-[#EAB308]">
          Back to Home
        </a>
      </div>
    </div>
  );
}

function CheckIcon() {
  return (
    <svg className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#FACC15]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
}

function PaymentModal({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm animate-[fadeIn_0.2s_ease-out]" onClick={onClose}>
      <div className="relative w-full max-w-lg mx-4 animate-[fadeUp_0.3s_ease-out]" onClick={e => e.stopPropagation()}>
        <button
          onClick={onClose}
          className="absolute -top-3 -right-3 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-neutral-800 text-white transition hover:bg-neutral-700"
        >
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <div className="overflow-hidden rounded-2xl border border-neutral-700 bg-white shadow-2xl shadow-[#FACC15]/5">
          <iframe
            src={STRIPE_LINK}
            className="h-[600px] w-full border-0"
            title="Secure Checkout"
          />
        </div>
        <div className="mt-3 flex items-center justify-center gap-4 text-[11px] text-neutral-400">
          <span className="flex items-center gap-1">
            <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
            256 bit SSL encrypted
          </span>
          <span>Powered by Stripe</span>
        </div>
      </div>
    </div>
  );
}

function LandingContent() {
  const searchParams = useSearchParams();
  const success = searchParams.get('success');
  const [showPayment, setShowPayment] = useState(false);

  if (success) return <SuccessPage />;

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white">
      <style>{`
        @keyframes fadeUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        .fade-up { animation: fadeUp 0.7s ease-out both; }
        .fade-up-d1 { animation: fadeUp 0.7s ease-out 0.1s both; }
        .fade-up-d2 { animation: fadeUp 0.7s ease-out 0.2s both; }
        .fade-up-d3 { animation: fadeUp 0.7s ease-out 0.3s both; }
        .fade-up-d4 { animation: fadeUp 0.7s ease-out 0.4s both; }
      `}</style>

      {/* Sticky Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-neutral-800/50 bg-[#0A0A0A]/80 backdrop-blur-lg">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <span className="text-sm font-medium text-neutral-500">AI Voice Agent Course</span>
          <button onClick={() => setShowPayment(true)} className="rounded-full bg-[#FACC15] px-5 py-2 text-sm font-bold text-black transition hover:bg-[#EAB308]">
            Enroll Now
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative flex min-h-[100svh] items-center justify-center overflow-hidden px-4 pt-16">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_40%,rgba(250,204,21,0.06),transparent_60%)]" />
        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <div className="fade-up mb-8 inline-flex items-center gap-2 rounded-full border border-[#FACC15]/30 bg-[#FACC15]/10 px-4 py-1.5 text-sm font-medium text-[#FACC15]">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#FACC15] opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#FACC15]" />
            </span>
            Limited spots available
          </div>

          <h1 className="fade-up-d1 mb-6 text-[2.5rem] font-extrabold leading-[1.1] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            Learn to Build
            <br />
            <span className="bg-gradient-to-r from-[#FACC15] via-[#F59E0B] to-[#FACC15] bg-clip-text text-transparent">
              AI Voice Agents
            </span>
          </h1>

          <p className="fade-up-d2 mx-auto mb-10 max-w-2xl text-base text-neutral-400 sm:text-lg md:text-xl">
            A private 1 on 1 coaching session where you learn to build, deploy, and monetize
            AI voice agents that handle real phone calls autonomously.
          </p>

          <div className="fade-up-d3">
            <button
              onClick={() => setShowPayment(true)}
              className="group inline-flex items-center gap-3 rounded-full bg-[#FACC15] px-8 py-4 text-lg font-bold text-black transition-all duration-300 hover:bg-[#EAB308] hover:shadow-[0_0_40px_rgba(250,204,21,0.25)] active:scale-[0.98]"
            >
              Get Started for €367
              <svg className="h-5 w-5 transition group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
            <p className="mt-4 text-sm text-neutral-600">One payment. No subscription. 24h refund.</p>
          </div>

          {/* Trust bar */}
          <div className="fade-up-d4 mt-16 flex flex-wrap items-center justify-center gap-8 text-sm text-neutral-500">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold text-white">50+</span>
              AI systems deployed
            </div>
            <div className="hidden h-4 w-px bg-neutral-800 sm:block" />
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold text-white">44</span>
              countries served
            </div>
            <div className="hidden h-4 w-px bg-neutral-800 sm:block" />
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold text-white">1000+</span>
              AI calls handled
            </div>
          </div>
        </div>
      </section>

      {/* What You Learn */}
      <section className="border-t border-neutral-800 px-4 py-24">
        <div className="mx-auto max-w-4xl">
          <p className="mb-4 text-center text-sm font-semibold uppercase tracking-widest text-[#FACC15]">What You Get</p>
          <h2 className="mb-12 text-center text-3xl font-bold sm:text-4xl">
            Everything You Need to Start Making Money with AI Voice Agents
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              { num: '01', title: 'Build Your First AI Voice Agent', desc: 'We build a fully working voice agent together, live, using Vapi and ElevenLabs. You leave the session with something real.' },
              { num: '02', title: 'Smart Call Handling', desc: 'Your agent qualifies leads, books meetings, answers questions, and handles objections. All on autopilot, 24/7.' },
              { num: '03', title: 'Live Phone Number', desc: 'French or US number connected and ready. Your AI agent starts receiving real calls the same day.' },
              { num: '04', title: 'CRM and Automation Setup', desc: 'Every call logged, every lead captured. Plugs into your tools via n8n, Zapier, or Make.' },
              { num: '05', title: 'Full Session Recording', desc: 'Rewatch the entire 2 hour session anytime. Use it as a step by step guide to build more agents.' },
              { num: '06', title: 'Monetization Playbook', desc: 'Learn how to price, pitch, and close clients. Turn this skill into real recurring income.' },
            ].map((item, i) => (
              <div key={i} className="group rounded-2xl border border-neutral-800 bg-[#0D0D0D] p-6 transition-all duration-300 hover:border-[#FACC15]/30 hover:bg-[#111] hover:-translate-y-1">
                <div className="mb-3 text-xs font-extrabold tracking-[0.2em] text-[#FACC15]">{item.num}</div>
                <h3 className="mb-2 text-lg font-bold">{item.title}</h3>
                <p className="text-sm leading-relaxed text-neutral-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coach */}
      <section className="border-t border-neutral-800 px-4 py-24">
        <div className="mx-auto max-w-4xl">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div className="relative">
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-[#FACC15]/20 to-transparent blur-xl" />
              <img
                src="/images/tristan-homepage.jpg"
                alt="Tristan Grech"
                className="relative aspect-[3/4] w-full rounded-2xl object-cover object-top"
                loading="lazy"
              />
            </div>
            <div>
              <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-[#FACC15]">Your Coach</p>
              <h2 className="mb-4 text-3xl font-bold">Tristan Grech</h2>
              <p className="mb-4 text-neutral-400">
                Founder of <strong className="text-white">Fullhaura</strong>, a B2B AI agency based in Nice, France.
                I build AI voice systems that run in production every day, handling thousands of real calls
                for real businesses.
              </p>
              <ul className="space-y-3 text-sm">
                {[
                  '50+ AI systems deployed across 44 countries',
                  'Expert in Vapi, ElevenLabs, n8n, Claude AI',
                  'Clients in real estate, hospitality, SaaS',
                  'Building production AI since 2019',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-neutral-300">
                    <CheckIcon />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="checkout" className="border-t border-neutral-800 px-4 py-24">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl">
            One Session. One Price. Real Results.
          </h2>
          <p className="mx-auto mb-10 max-w-lg text-neutral-400">
            No upsells. No recurring fees. You get a working AI voice agent and the knowledge to build more.
          </p>

          <div className="mx-auto max-w-md overflow-hidden rounded-3xl border border-[#FACC15]/30 bg-[#111]">
            <div className="bg-gradient-to-r from-[#FACC15] to-[#F59E0B] px-8 py-5 text-center">
              <p className="text-sm font-bold uppercase tracking-wider text-black/70">1:1 Private Coaching</p>
              <div className="mt-1 flex items-end justify-center">
                <span className="text-5xl font-extrabold text-black">€367</span>
              </div>
              <p className="mt-1 text-xs font-medium text-black/60">One time payment</p>
            </div>

            <div className="px-8 py-6">
              <ul className="space-y-3 text-left text-sm text-neutral-300">
                {[
                  '2 hour private video session',
                  'Your own AI voice agent, built live',
                  'Dedicated phone number (FR or US)',
                  'CRM integration and call routing',
                  'Full session recording',
                  '30 days of WhatsApp support',
                  'Monetization playbook included',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckIcon />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="px-8 pb-8">
              <button
                onClick={() => setShowPayment(true)}
                className="block w-full rounded-xl bg-[#FACC15] py-4 text-center text-lg font-bold text-black transition-all duration-300 hover:bg-[#EAB308] hover:shadow-[0_0_30px_rgba(250,204,21,0.3)] active:scale-[0.98]"
              >
                Secure My Spot
              </button>
              <div className="mt-5 flex items-center justify-center gap-4 text-[11px] text-neutral-500">
                <span className="flex items-center gap-1.5">
                  <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                  256 bit SSL
                </span>
                <span className="flex items-center gap-1.5">
                  <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  Stripe Secured
                </span>
                <span className="flex items-center gap-1.5">
                  <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                  24h refund
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-neutral-800 px-4 py-24">
        <div className="mx-auto max-w-2xl">
          <h2 className="mb-12 text-center text-3xl font-bold">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {[
              { q: 'Do I need coding experience?', a: 'No. We use no code tools like Vapi, n8n, and Make. If you can use a computer, you can build a voice agent.' },
              { q: 'How is the session delivered?', a: 'Live 1 on 1 video call via Google Meet or Zoom. We build your agent together in real time. You get the full recording after.' },
              { q: 'What happens after payment?', a: 'You receive a booking link within 2 hours to schedule your session. Most sessions happen within 3 to 5 days.' },
              { q: 'Can I really make money with this?', a: 'Yes. The playbook covers how to price, pitch, and close clients. Several of my coaching students are already earning recurring income from AI voice agents.' },
              { q: 'What if it does not work for me?', a: 'Cancel within 24 hours of payment for a full refund, no questions asked.' },
            ].map((item, i) => (
              <details key={i} className="group rounded-xl border border-neutral-800 bg-[#0D0D0D] transition-all duration-300 hover:border-[#FACC15]/20">
                <summary className="flex cursor-pointer items-center justify-between px-6 py-4 font-medium text-white">
                  {item.q}
                  <svg className="h-4 w-4 flex-shrink-0 text-[#FACC15] transition-transform duration-300 group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <p className="px-6 pb-4 text-sm leading-relaxed text-neutral-400">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="border-t border-neutral-800 px-4 py-24">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mb-4 text-3xl font-bold">Ready to Build Your First AI Voice Agent?</h2>
          <p className="mb-8 text-neutral-400">
            Learn a high income skill. Build something real. Start earning from it.
          </p>
          <button
            onClick={() => setShowPayment(true)}
            className="inline-flex items-center gap-3 rounded-full bg-[#FACC15] px-10 py-4 text-lg font-bold text-black transition-all duration-300 hover:bg-[#EAB308] hover:shadow-[0_0_40px_rgba(250,204,21,0.25)] active:scale-[0.98]"
          >
            Enroll Now for €367
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-neutral-800 px-4 py-8">
        <div className="mx-auto max-w-4xl text-center text-xs text-neutral-600">
          <p>&copy; {new Date().getFullYear()} Tristan Grech. All rights reserved.</p>
        </div>
      </footer>

      {/* Payment Modal */}
      {showPayment && <PaymentModal onClose={() => setShowPayment(false)} />}
    </div>
  );
}

export default function LandingPage() {
  return (
    <Suspense fallback={<div className="flex min-h-screen items-center justify-center bg-[#0A0A0A] text-white">Loading...</div>}>
      <LandingContent />
    </Suspense>
  );
}
