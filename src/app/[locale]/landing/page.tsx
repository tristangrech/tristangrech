'use client';

import { useSearchParams } from 'next/navigation';
import { Suspense, useState, useEffect } from 'react';
import Script from 'next/script';

const STRIPE_LINK = 'https://buy.stripe.com/9B69AS61beZL6P9h0W4c80r';
const PRICE_ID = 'price_1T8b0cBgwLXt0QSH0w76bmV1';

function SuccessPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#0A0A0A] px-4">
      <div className="max-w-lg text-center">
        <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-[#FACC15]/20">
          <svg className="h-10 w-10 text-[#FACC15]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h1 className="mb-4 text-3xl font-bold text-white">Payment Confirmed</h1>
        <p className="mb-6 text-lg text-neutral-400">
          You&apos;re in. Check your inbox — you&apos;ll receive a booking link within 2 hours to schedule your private coaching session.
        </p>
        <p className="mb-8 text-sm text-neutral-500">
          Need help now? WhatsApp me directly at +33 6 78 49 61 26
        </p>
        <a href="https://tristangrech.com" className="inline-block rounded-full bg-[#FACC15] px-8 py-3 font-semibold text-black transition hover:bg-[#EAB308]">
          Back to Home
        </a>
      </div>
    </div>
  );
}

function PaymentSection() {
  const [showCheckout, setShowCheckout] = useState(false);

  return (
    <section id="checkout" className="relative border-t border-neutral-800 bg-gradient-to-b from-[#0A0A0A] to-[#111] px-4 py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(250,204,21,0.04),transparent_60%)]" />
      <div className="relative mx-auto max-w-2xl text-center">
        <div className="mb-3 text-sm font-semibold uppercase tracking-widest text-[#FACC15]">Enroll Now</div>
        <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl">
          One Session. Real Results.
        </h2>
        <p className="mx-auto mb-10 max-w-lg text-neutral-400">
          No upsells, no fluff, no recurring fees. Build a real AI voice agent in 2 hours and learn to sell it.
        </p>

        <div className="mx-auto max-w-md overflow-hidden rounded-3xl border border-[#FACC15]/30 bg-[#111]">
          {/* Header */}
          <div className="bg-gradient-to-r from-[#FACC15] to-[#F59E0B] px-8 py-5 text-center">
            <p className="text-sm font-bold uppercase tracking-wider text-black/70">1:1 Private Coaching</p>
            <div className="mt-1 flex items-end justify-center gap-1">
              <span className="text-5xl font-extrabold text-black">€367</span>
            </div>
            <p className="mt-1 text-xs font-medium text-black/60">One-time payment · Tax included</p>
          </div>

          {/* Features */}
          <div className="px-8 py-6">
            <ul className="space-y-3 text-left text-sm text-neutral-300">
              {[
                '2-hour private video session',
                'Custom AI voice agent — built live together',
                'Dedicated phone number (FR or US)',
                'CRM integration & smart call routing',
                'Full session recording to keep',
                '30 days WhatsApp support after',
                'Monetization playbook — sell agents for €500-2K/mo',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <svg className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#FACC15]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div className="px-8 pb-8">
            {!showCheckout ? (
              <>
                <a
                  href={STRIPE_LINK}
                  className="block w-full rounded-xl bg-[#FACC15] py-4 text-center text-lg font-bold text-black transition hover:bg-[#EAB308] hover:shadow-[0_0_30px_rgba(250,204,21,0.3)]"
                >
                  Secure My Spot
                </a>
                <div className="mt-4 flex items-center justify-center gap-3 text-[10px] text-neutral-500">
                  <span className="flex items-center gap-1">
                    <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                    Stripe Secure
                  </span>
                  <span>·</span>
                  <span>24h refund guarantee</span>
                  <span>·</span>
                  <span>Instant access</span>
                </div>
              </>
            ) : (
              <div className="rounded-lg bg-white p-4">
                <p className="text-center text-sm text-neutral-600">Loading checkout...</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function LandingContent() {
  const searchParams = useSearchParams();
  const success = searchParams.get('success');

  if (success) return <SuccessPage />;

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white">
      {/* Sticky Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-neutral-800/50 bg-[#0A0A0A]/80 backdrop-blur-lg">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <span className="text-sm font-medium text-neutral-500">AI Voice Agent Coaching</span>
          <a href="#checkout" className="rounded-full bg-[#FACC15] px-5 py-2 text-sm font-bold text-black transition hover:bg-[#EAB308]">
            Enroll — €367
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative flex min-h-[100svh] items-center justify-center overflow-hidden px-4 pt-16">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_40%,rgba(250,204,21,0.06),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_80%,rgba(250,204,21,0.03),transparent_50%)]" />
        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-[#FACC15]/30 bg-[#FACC15]/10 px-4 py-1.5 text-sm font-medium text-[#FACC15]">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#FACC15] opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#FACC15]" />
            </span>
            3 spots left this month
          </div>

          <h1 className="mb-6 text-[2.5rem] font-extrabold leading-[1.1] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            Build & Sell Your Own
            <br />
            <span className="bg-gradient-to-r from-[#FACC15] via-[#F59E0B] to-[#FACC15] bg-clip-text text-transparent">
              AI Voice Agent
            </span>
          </h1>

          <p className="mx-auto mb-10 max-w-2xl text-base text-neutral-400 sm:text-lg md:text-xl">
            2-hour private coaching with Tristan Grech. Walk away with a deployed AI agent that
            handles calls, qualifies leads, and books meetings — then learn to sell it for
            €500-2,000/month per client.
          </p>

          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href="#checkout"
              className="group inline-flex items-center gap-3 rounded-full bg-[#FACC15] px-8 py-4 text-lg font-bold text-black transition hover:bg-[#EAB308] hover:shadow-[0_0_40px_rgba(250,204,21,0.25)]"
            >
              Get Started — €367
              <svg className="h-5 w-5 transition group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <span className="text-sm text-neutral-600">One payment · No subscription · 24h refund</span>
          </div>

          {/* Social proof */}
          <div className="mt-16 flex flex-wrap items-center justify-center gap-8 text-sm text-neutral-500">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold text-white">50+</span>
              AI systems deployed
            </div>
            <div className="h-4 w-px bg-neutral-800" />
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold text-white">4</span>
              countries served
            </div>
            <div className="h-4 w-px bg-neutral-800" />
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold text-white">1000+</span>
              AI calls handled
            </div>
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="border-t border-neutral-800 px-4 py-24">
        <div className="mx-auto max-w-4xl">
          <p className="mb-4 text-center text-sm font-semibold uppercase tracking-widest text-[#FACC15]">The Problem</p>
          <h2 className="mb-12 text-center text-3xl font-bold sm:text-4xl">
            You&apos;re Losing Deals While You Sleep
          </h2>
          <div className="grid gap-5 sm:grid-cols-3">
            {[
              { icon: '📵', title: 'Missed Calls = Lost Revenue', desc: '80% of callers won\'t leave a voicemail. Every missed call is a customer going to your competitor.' },
              { icon: '⏳', title: 'Manual Follow-ups Kill Time', desc: 'You spend hours calling back leads who\'ve already gone cold. AI handles it in seconds, 24/7.' },
              { icon: '🔥', title: 'Hiring SDRs Burns Cash', desc: 'A junior SDR costs €3-5K/month. An AI voice agent costs €50/month and never takes breaks.' },
            ].map((item, i) => (
              <div key={i} className="rounded-2xl border border-neutral-800 bg-[#111] p-6 transition hover:border-[#FACC15]/20">
                <div className="mb-4 text-3xl">{item.icon}</div>
                <h3 className="mb-2 text-lg font-bold text-white">{item.title}</h3>
                <p className="text-sm leading-relaxed text-neutral-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What You Build */}
      <section className="border-t border-neutral-800 px-4 py-24">
        <div className="mx-auto max-w-4xl">
          <p className="mb-4 text-center text-sm font-semibold uppercase tracking-widest text-[#FACC15]">The Session</p>
          <h2 className="mb-4 text-center text-3xl font-bold sm:text-4xl">
            What You Walk Away With
          </h2>
          <p className="mx-auto mb-12 max-w-xl text-center text-neutral-400">
            Not theory. Not slides. A real, working AI voice agent — deployed and taking calls before the session ends.
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              { num: '01', title: 'Your AI Voice Agent', desc: 'Custom-built on Vapi + ElevenLabs. Natural voice, your brand personality, handles objections like a human.' },
              { num: '02', title: 'Smart Call Logic', desc: 'Qualifies leads, books meetings, answers FAQs, transfers hot leads — all on autopilot.' },
              { num: '03', title: 'Live Phone Number', desc: 'French or US number, connected and working. Start receiving calls the same day.' },
              { num: '04', title: 'CRM & Automation', desc: 'Every call logged, every lead captured. Connects to your tools via n8n, Zapier, or Make.' },
              { num: '05', title: 'The Recording', desc: 'Full 2-hour session recorded. Rewatch anytime. Build more agents on your own.' },
              { num: '06', title: 'Monetization Playbook', desc: 'Exact pricing, pitch deck, and sales script to sell voice agents to clients for €500-2K/month.' },
            ].map((item, i) => (
              <div key={i} className="group rounded-2xl border border-neutral-800 bg-[#0D0D0D] p-6 transition hover:border-[#FACC15]/30 hover:bg-[#111]">
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
                alt="Tristan Grech — AI Voice Agent Expert"
                className="relative aspect-[3/4] w-full rounded-2xl object-cover object-top"
                loading="lazy"
              />
            </div>
            <div>
              <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-[#FACC15]">Your Coach</p>
              <h2 className="mb-4 text-3xl font-bold">Tristan Grech</h2>
              <p className="mb-4 text-neutral-400">
                Founder of <strong className="text-white">Fullhaura</strong> — a B2B AI agency based in Nice, France.
                I don&apos;t teach AI theory. I build AI systems that are running in production right now,
                handling thousands of real calls for real businesses.
              </p>
              <p className="mb-6 text-neutral-400">
                My voice agents work across real estate, hospitality, SaaS, and professional services — in
                French, English, Thai, and Arabic.
              </p>
              <ul className="space-y-3 text-sm">
                {[
                  '50+ AI systems deployed across 4 countries',
                  'Clients include restaurants, agencies, SaaS companies',
                  'Expert in Vapi, ElevenLabs, n8n, Claude AI',
                  'Building production AI since 2019',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-neutral-300">
                    <svg className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#FACC15]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial / Result */}
      <section className="border-t border-neutral-800 bg-[#111] px-4 py-16">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-4 flex justify-center gap-1">
            {[1,2,3,4,5].map(i => (
              <svg key={i} className="h-5 w-5 text-[#FACC15]" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <blockquote className="mb-4 text-lg italic text-neutral-300">
            &ldquo;In 2 hours, I went from zero to having a working voice agent answering calls for
            my real estate agency. Tristan doesn&apos;t just show you — he builds it with you. The
            monetization playbook alone was worth 10x the price.&rdquo;
          </blockquote>
          <p className="text-sm text-neutral-500">— AI Voice Agent Coaching Client</p>
        </div>
      </section>

      {/* Payment Section */}
      <PaymentSection />

      {/* FAQ */}
      <section className="border-t border-neutral-800 px-4 py-24">
        <div className="mx-auto max-w-2xl">
          <h2 className="mb-12 text-center text-3xl font-bold">FAQ</h2>
          <div className="space-y-4">
            {[
              { q: 'Do I need to know how to code?', a: 'No. We use no-code tools (Vapi, n8n, Make). If you can follow instructions and click buttons, you can build a voice agent.' },
              { q: 'What tech stack do you teach?', a: 'Vapi for voice orchestration, ElevenLabs for voice synthesis, n8n/Make for automation, Claude or GPT for the AI brain. All best-in-class tools.' },
              { q: 'How is the session delivered?', a: 'Live 1-on-1 video call via Google Meet or Zoom. We screen-share and build your agent together. You get the full recording after.' },
              { q: 'Can I really sell voice agents as a service?', a: 'Yes. The playbook covers exactly how — pricing (€500-2K/month), pitching, onboarding clients, and scaling. Several coaching clients already sell agents.' },
              { q: 'What if it doesn\'t work for me?', a: 'Cancel within 24 hours of payment for a full refund. But honestly — if you show up and follow along, you will have a working agent.' },
              { q: 'When can I schedule my session?', a: 'After payment, you receive a booking link within 2 hours. Most sessions happen within 3-5 days.' },
            ].map((item, i) => (
              <details key={i} className="group rounded-xl border border-neutral-800 bg-[#0D0D0D] transition hover:border-[#FACC15]/20">
                <summary className="flex cursor-pointer items-center justify-between px-6 py-4 font-medium text-white transition">
                  {item.q}
                  <svg className="h-4 w-4 flex-shrink-0 text-[#FACC15] transition group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
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
      <section className="border-t border-neutral-800 bg-gradient-to-t from-[#111] to-[#0A0A0A] px-4 py-24">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mb-4 text-3xl font-bold">Stop Losing Leads to Voicemail</h2>
          <p className="mb-8 text-neutral-400">
            Your competitors are already using AI. Don&apos;t be the one still dialing manually.
          </p>
          <a
            href="#checkout"
            className="inline-flex items-center gap-3 rounded-full bg-[#FACC15] px-10 py-4 text-lg font-bold text-black transition hover:bg-[#EAB308] hover:shadow-[0_0_40px_rgba(250,204,21,0.25)]"
          >
            Build Your AI Agent — €367
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-xs text-neutral-500">
            <span className="flex items-center gap-1">
              <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              Stripe Secure Payment
            </span>
            <span>One-time · No subscription</span>
            <span>24h refund guarantee</span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-neutral-800 px-4 py-8">
        <div className="mx-auto max-w-4xl text-center text-xs text-neutral-600">
          <p>&copy; {new Date().getFullYear()} Tristan Grech — Fullhaura SARL. All rights reserved.</p>
          <p className="mt-1">Nice, France · contact@fullhaura.com</p>
        </div>
      </footer>
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
