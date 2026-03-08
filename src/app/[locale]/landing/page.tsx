'use client';

import { useSearchParams } from 'next/navigation';
import { Suspense, useState, FormEvent } from 'react';

const STRIPE_LINK = 'https://buy.stripe.com/9B69AS61beZL6P9h0W4c80r';
const LEAD_API = 'https://engine.tristangrech.com/stripe/capture-lead';

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

function CheckoutForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [sending, setSending] = useState(false);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!email || !phone) return;
    setSending(true);
    try {
      await fetch(LEAD_API, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, phone }),
      });
    } catch {}
    const params = new URLSearchParams({ prefilled_email: email });
    window.location.href = STRIPE_LINK + '?' + params.toString();
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3 text-left">
      <div>
        <label className="mb-1 block text-xs font-medium text-neutral-400">Full Name</label>
        <input
          type="text"
          required
          placeholder="John Doe"
          value={name}
          onChange={e => setName(e.target.value)}
          className="w-full rounded-lg border border-neutral-700 bg-[#0A0A0A] px-4 py-3 text-sm text-white placeholder-neutral-500 outline-none transition focus:border-[#FACC15]/50 focus:ring-1 focus:ring-[#FACC15]/30"
        />
      </div>
      <div>
        <label className="mb-1 block text-xs font-medium text-neutral-400">Email</label>
        <input
          type="email"
          required
          placeholder="john@example.com"
          value={email}
          onChange={e => setEmail(e.target.value)}
          className="w-full rounded-lg border border-neutral-700 bg-[#0A0A0A] px-4 py-3 text-sm text-white placeholder-neutral-500 outline-none transition focus:border-[#FACC15]/50 focus:ring-1 focus:ring-[#FACC15]/30"
        />
      </div>
      <div>
        <label className="mb-1 block text-xs font-medium text-neutral-400">WhatsApp Number</label>
        <input
          type="tel"
          required
          placeholder="+33 6 12 34 56 78"
          value={phone}
          onChange={e => setPhone(e.target.value)}
          className="w-full rounded-lg border border-neutral-700 bg-[#0A0A0A] px-4 py-3 text-sm text-white placeholder-neutral-500 outline-none transition focus:border-[#FACC15]/50 focus:ring-1 focus:ring-[#FACC15]/30"
        />
      </div>
      <button
        type="submit"
        disabled={sending}
        className="mt-2 block w-full rounded-xl bg-[#FACC15] py-4 text-center text-lg font-bold text-black transition-all duration-300 hover:bg-[#EAB308] hover:shadow-[0_0_30px_rgba(250,204,21,0.3)] active:scale-[0.98] disabled:opacity-60"
      >
        {sending ? 'Redirecting to payment...' : 'Continue to Payment'}
      </button>
    </form>
  );
}

function LandingContent() {
  const searchParams = useSearchParams();
  const success = searchParams.get('success');
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
          <a href="https://tristangrech.com" className="flex items-center gap-2 transition hover:opacity-80">
            <img src="/favicon-32x32.png" alt="TG" className="h-6 w-6 rounded" />
            <span className="text-sm font-medium text-neutral-500">Tristan Grech</span>
          </a>
          <a href="#checkout" className="rounded-full bg-[#FACC15] px-5 py-2 text-sm font-bold text-black transition hover:bg-[#EAB308]">
            Enroll Now
          </a>
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
            A private one on one coaching session where you learn to build, deploy, and monetize
            AI voice agents that handle real phone calls autonomously.
          </p>

          <div className="fade-up-d3">
            <a
              href="#checkout"
              className="group inline-flex items-center gap-3 rounded-full bg-[#FACC15] px-8 py-4 text-lg font-bold text-black transition-all duration-300 hover:bg-[#EAB308] hover:shadow-[0_0_40px_rgba(250,204,21,0.25)] active:scale-[0.98]"
            >
              Get Started for €367
              <svg className="h-5 w-5 transition group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <p className="mt-4 text-sm text-neutral-600">One payment. No subscription. 24h refund.</p>
          </div>

          {/* Trust bar */}
          <div className="fade-up-d4 mt-16 flex flex-wrap items-center justify-center gap-8 text-sm text-neutral-500">
            <div className="flex items-center gap-3">
              <svg className="h-5 w-5 text-[#FACC15]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
              </svg>
              <div><span className="text-2xl font-bold text-white">50+</span> AI systems deployed</div>
            </div>
            <div className="hidden h-4 w-px bg-neutral-800 sm:block" />
            <div className="flex items-center gap-3">
              <svg className="h-5 w-5 text-[#FACC15]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
              </svg>
              <div><span className="text-2xl font-bold text-white">44</span> countries served</div>
            </div>
            <div className="hidden h-4 w-px bg-neutral-800 sm:block" />
            <div className="flex items-center gap-3">
              <svg className="h-5 w-5 text-[#FACC15]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
              <div><span className="text-2xl font-bold text-white">1000+</span> AI calls handled</div>
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
              { icon: <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" /></svg>, title: 'Build Your First AI Voice Agent', desc: 'We build a fully working voice agent together, live, using Vapi and ElevenLabs. You leave the session with something real.' },
              { icon: <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" /></svg>, title: 'Smart Call Handling', desc: 'Your agent qualifies leads, books meetings, answers questions, and handles objections. All on autopilot, 24/7.' },
              { icon: <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" /></svg>, title: 'Live Phone Number', desc: 'European or US number connected and ready. Your AI agent starts receiving real calls the same day.' },
              { icon: <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" /></svg>, title: 'CRM and Automation Setup', desc: 'Every call logged, every lead captured. Plugs into your tools via n8n, Zapier, or Make.' },
              { icon: <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" /></svg>, title: 'Full Session Recording', desc: 'Rewatch the entire 3 hour session anytime. Use it as a step by step guide to build more agents.' },
              { icon: <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>, title: 'Monetization Playbook', desc: 'Learn how to price, pitch, and close clients. Turn this skill into real recurring income.' },
            ].map((item, i) => (
              <div key={i} className="group rounded-2xl border border-neutral-800 bg-[#0D0D0D] p-6 transition-all duration-300 hover:border-[#FACC15]/30 hover:bg-[#111] hover:-translate-y-1">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-[#FACC15]/10 text-[#FACC15] transition-colors group-hover:bg-[#FACC15]/20">{item.icon}</div>
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
              <ul className="space-y-4 text-sm">
                {[
                  { icon: <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" /></svg>, text: '50+ AI systems deployed across 44 countries' },
                  { icon: <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17l-5.1-5.1m0 0L12 4.37m-5.68 5.7h15.36" /></svg>, text: 'Expert in Vapi, ElevenLabs, n8n, Claude AI' },
                  { icon: <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" /></svg>, text: 'Clients in real estate, hospitality, SaaS' },
                  { icon: <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" /></svg>, text: 'Building production AI since 2019' },
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-neutral-300">
                    <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-lg bg-[#FACC15]/10 text-[#FACC15]">{item.icon}</span>
                    {item.text}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing with Lead Form */}
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
              <ul className="space-y-3.5 text-left text-sm text-neutral-300">
                {[
                  { icon: <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z" /></svg>, text: '3 hour private video session' },
                  { icon: <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" /></svg>, text: 'Your own AI voice agent, built live' },
                  { icon: <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" /></svg>, text: 'Dedicated phone number (EU or US)' },
                  { icon: <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" /></svg>, text: 'Check up call +7 days after enrollment' },
                  { icon: <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" /></svg>, text: 'Full session recording' },
                  { icon: <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" /></svg>, text: '30 days of WhatsApp support' },
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-lg bg-[#FACC15]/10 text-[#FACC15]">{item.icon}</span>
                    {item.text}
                  </li>
                ))}
              </ul>
            </div>

            <div className="px-8 pb-8">
              <CheckoutForm />
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
          <a
            href="#checkout"
            className="inline-flex items-center gap-3 rounded-full bg-[#FACC15] px-10 py-4 text-lg font-bold text-black transition-all duration-300 hover:bg-[#EAB308] hover:shadow-[0_0_40px_rgba(250,204,21,0.25)] active:scale-[0.98]"
          >
            Enroll Now for €367
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-neutral-800 px-4 py-8">
        <div className="mx-auto max-w-4xl text-center text-xs text-neutral-600">
          <p>&copy; {new Date().getFullYear()} Tristan Grech. All rights reserved.</p>
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
