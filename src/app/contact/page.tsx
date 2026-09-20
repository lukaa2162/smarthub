'use client';

import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

type FormType = 'inquiry' | 'feedback' | 'partnership';

interface FormData {
  name: string;
  email: string;
  type: FormType;
  subject: string;
  message: string;
}

const formTypeLabels: Record<FormType, string> = {
  inquiry: 'General Inquiry',
  feedback: 'Feedback',
  partnership: 'Partnership Request',
};

export default function ContactPage() {
  const [form, setForm] = useState<FormData>({
    name: '',
    email: '',
    type: 'inquiry',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const typeLabel = formTypeLabels[form.type];
    const mailtoSubject = encodeURIComponent(
      `[SmartHub ${typeLabel}] ${form.subject}`
    );
    const mailtoBody = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nType: ${typeLabel}\n\n${form.message}`
    );

    window.location.href = `mailto:cliping1690@gmail.com?subject=${mailtoSubject}&body=${mailtoBody}`;
    setSubmitted(true);
  };

  return (
    <main className="bg-background text-foreground overflow-x-hidden min-h-screen">
      <Header />

      <section className="relative pt-36 pb-24 px-6">
        {/* Background glow */}
        <div
          className="pointer-events-none absolute inset-0 overflow-hidden"
          aria-hidden="true"
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full opacity-10 blur-3xl bg-primary" />
        </div>

        <div className="relative max-w-2xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <p className="tag-chip mx-auto mb-5 w-fit">Get in Touch</p>
            <h1
              className="font-mono font-bold text-foreground mb-4"
              style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', lineHeight: 1.1 }}
            >
              We&apos;d love to{' '}
              <span className="text-gradient-cyan">hear from you.</span>
            </h1>
            <p className="text-muted-foreground text-base max-w-md mx-auto leading-relaxed">
              Have a question, feedback, or want to explore a partnership?
              Fill out the form and we&apos;ll get back to you.
            </p>
          </div>

          {/* Card */}
          <div className="rounded-2xl border border-border bg-card p-8 md:p-10 shadow-lg">
            {submitted ? (
              <div className="text-center py-10">
                <div className="w-14 h-14 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center mx-auto mb-5">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-primary"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <h2 className="font-mono font-bold text-xl text-foreground mb-2">
                  Your email client is ready!
                </h2>
                <p className="text-muted-foreground text-sm leading-relaxed max-w-sm mx-auto">
                  Your default email app should have opened with your message
                  pre-filled. Just hit send and we&apos;ll get back to you shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 text-sm text-primary hover:underline transition-colors"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                {/* Name + Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="name"
                      className="text-xs font-semibold text-muted-foreground uppercase tracking-widest"
                    >
                      Your Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder="Jane Smith"
                      value={form.name}
                      onChange={handleChange}
                      className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="email"
                      className="text-xs font-semibold text-muted-foreground uppercase tracking-widest"
                    >
                      Your Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="jane@example.com"
                      value={form.email}
                      onChange={handleChange}
                      className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                    />
                  </div>
                </div>

                {/* Type */}
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="type"
                    className="text-xs font-semibold text-muted-foreground uppercase tracking-widest"
                  >
                    Message Type
                  </label>
                  <select
                    id="type"
                    name="type"
                    value={form.type}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all appearance-none cursor-pointer"
                  >
                    <option value="inquiry">General Inquiry</option>
                    <option value="feedback">Feedback</option>
                    <option value="partnership">Partnership Request</option>
                  </select>
                </div>

                {/* Subject */}
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="subject"
                    className="text-xs font-semibold text-muted-foreground uppercase tracking-widest"
                  >
                    Subject
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    placeholder="What's this about?"
                    value={form.subject}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                  />
                </div>

                {/* Message */}
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="message"
                    className="text-xs font-semibold text-muted-foreground uppercase tracking-widest"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    placeholder="Tell us more..."
                    value={form.message}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="relative w-full px-6 py-3.5 rounded-lg text-sm font-semibold text-primary-foreground bg-primary hover:opacity-90 transition-all duration-300 glow-cyan flex items-center justify-center gap-2"
                >
                  Send Message
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 2L11 13" />
                    <path d="M22 2L15 22l-4-9-9-4 20-7z" />
                  </svg>
                </button>

                <p className="text-center text-xs text-muted-foreground">
                  Clicking &quot;Send Message&quot; will open your email client with the
                  form pre-filled.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
