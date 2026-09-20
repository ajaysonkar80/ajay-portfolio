'use client';

import Link from 'next/link';
import { useEffect, useMemo, useState } from 'react';
import type { FormEvent } from 'react';

const MONTH_NAMES = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const DAY_NAMES = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
const STORAGE_KEY = 'ajaysonkar-booking-draft';

type ContactForm = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

type BookingDraft = {
  viewYear: number;
  viewMonth: number;
  selectedDate: number | null;
  selectedTime: number | null;
  use24Hour: boolean;
  contactForm: ContactForm;
};

function formatTime(totalMinutes: number, use24Hour = false) {
  const hour = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;

  if (use24Hour) {
    return `${String(hour).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`;
  }

  const suffix = hour >= 12 ? 'pm' : 'am';
  const hour12 = hour % 12 || 12;

  return `${hour12}:${String(minutes).padStart(2, '0')}${suffix}`;
}

function getOrdinal(day: number) {
  const mod100 = day % 100;

  if (mod100 >= 11 && mod100 <= 13) {
    return `${day}th`;
  }

  switch (day % 10) {
    case 1:
      return `${day}st`;
    case 2:
      return `${day}nd`;
    case 3:
      return `${day}rd`;
    default:
      return `${day}th`;
  }
}

function getMonthGrid(year: number, month: number) {
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const cells: Array<number | null> = [];

  for (let i = 0; i < firstDay; i += 1) {
    cells.push(null);
  }

  for (let day = 1; day <= daysInMonth; day += 1) {
    cells.push(day);
  }

  while (cells.length % 7 !== 0) {
    cells.push(null);
  }

  return cells;
}

const DEFAULT_DATE = new Date(2026, 8, 23);

const EMPTY_FORM: ContactForm = {
  name: '',
  email: '',
  phone: '',
  message: '',
};

export default function BookingScheduler() {
  const [viewDate, setViewDate] = useState(DEFAULT_DATE);
  const [selectedDate, setSelectedDate] = useState<number | null>(23);
  const [selectedTime, setSelectedTime] = useState<number | null>(null);
  const [use24Hour, setUse24Hour] = useState(false);
  const [step, setStep] = useState<'calendar' | 'form'>('calendar');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitState, setSubmitState] = useState<
    'idle' | 'success' | 'error'
  >('idle');

  const [contactForm, setContactForm] =
    useState<ContactForm>(EMPTY_FORM);

  const [hasLoadedDraft, setHasLoadedDraft] = useState(false);

  const year = viewDate.getFullYear();
  const month = viewDate.getMonth();

  const calendar = useMemo(
    () => getMonthGrid(year, month),
    [year, month],
  );

  const slots = useMemo(() => {
    const result: number[] = [];

    for (let hour = 0; hour < 24; hour += 1) {
      result.push(hour * 60, hour * 60 + 30);
    }

    return result;
  }, []);

  const selectedDateObject =
    selectedDate !== null
      ? new Date(year, month, selectedDate)
      : null;

  const selectedDayName = selectedDateObject
    ? DAY_NAMES[selectedDateObject.getDay()]
    : '';

  const selectedTimeLabel =
    selectedTime !== null
      ? formatTime(selectedTime, use24Hour)
      : '';

  /*
   * Restore an in-progress booking after a refresh.
   */
  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(STORAGE_KEY);

      if (saved) {
        const draft = JSON.parse(saved) as BookingDraft;

        setViewDate(
          new Date(draft.viewYear, draft.viewMonth, 1),
        );

        setSelectedDate(draft.selectedDate);
        setSelectedTime(draft.selectedTime);
        setUse24Hour(draft.use24Hour);
        setContactForm(draft.contactForm);
      }
    } catch {
      // Ignore malformed local draft.
    } finally {
      setHasLoadedDraft(true);
    }
  }, []);

  /*
   * Persist the current booking state locally.
   */
  useEffect(() => {
    if (!hasLoadedDraft) return;

    const draft: BookingDraft = {
      viewYear: year,
      viewMonth: month,
      selectedDate,
      selectedTime,
      use24Hour,
      contactForm,
    };

    window.localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(draft),
    );
  }, [
    hasLoadedDraft,
    year,
    month,
    selectedDate,
    selectedTime,
    use24Hour,
    contactForm,
  ]);

  const updateContactField = (
    field: keyof ContactForm,
    value: string,
  ) => {
    setContactForm((current) => ({
      ...current,
      [field]: value,
    }));

    setSubmitState('idle');
  };

  const changeMonth = (offset: number) => {
    const next = new Date(year, month + offset, 1);

    setViewDate(next);
    setSelectedDate(1);
    setSelectedTime(null);
    setStep('calendar');
    setSubmitState('idle');
  };

  const handleDateSelect = (date: number) => {
    setSelectedDate(date);
    setSelectedTime(null);
    setStep('calendar');
    setSubmitState('idle');
  };

  const handleTimeSelect = (time: number) => {
    if (selectedDate === null) return;

    setSelectedTime(time);

    /*
     * Form opens immediately after selecting a time.
     */
    setStep('form');
    setSubmitState('idle');
  };

  const handleBack = () => {
    setStep('calendar');
    setSubmitState('idle');
  };

  const handleSubmit = async (
    event: FormEvent<HTMLFormElement>,
  ) => {
    event.preventDefault();

    if (
      selectedDate === null ||
      selectedTime === null ||
      isSubmitting
    ) {
      return;
    }

    /*
     * Capture the current state before sending.
     */
    const payload = {
      name: contactForm.name,
      email: contactForm.email,
      phone: contactForm.phone,
      message: contactForm.message,

      meeting: {
        date: `${year}-${String(month + 1).padStart(
          2,
          '0',
        )}-${String(selectedDate).padStart(2, '0')}`,

        time: formatTime(selectedTime, true),

        timezone: 'Asia/Kolkata',

        durationMinutes: 30,

        location: 'Google Meet',
      },
    };

    setIsSubmitting(true);
    setSubmitState('idle');

    try {
      const response = await fetch('/api/book-meeting', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error('Booking request failed');
      }

      /*
       * Do not clear the form after success.
       * The entered state remains visible and persisted.
       */
      setSubmitState('success');
    } catch {
      setSubmitState('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const eventDetails = (
    <>
      <Link
        href="/"
        className="inline-block font-heading text-lg font-bold text-white no-underline"
      >
        Ajay <span className="text-neon">Sonkar</span>
      </Link>

      <a
        href="https://www.ajaysonkar.com"
        target="_blank"
        rel="noreferrer"
        className="mt-2 block text-xs text-white/45 transition hover:text-white/75"
      >
        www.ajaysonkar.com
      </a>

      <h1 className="mt-5 text-lg font-semibold tracking-tight text-white">
        Introduction Meeting
      </h1>

      <div className="mt-5 space-y-3 text-sm text-white/65">
        <div className="flex items-center gap-3">
          <span className="text-base text-neon">◷</span>
          <span>30m</span>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-base text-neon">●</span>
          <span>Google Meet</span>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-base text-neon">◎</span>
          <span>Asia/Kolkata</span>
        </div>
      </div>
    </>
  );

  /*
   * FORM
   */
  if (step === 'form') {
    return (
      <section className="px-6 py-24 text-white">
        <div className="mx-auto max-w-3xl">
          <div className="glass overflow-hidden rounded-2xl border border-white/10 p-6 shadow-2xl shadow-black/20 md:p-8">

            <div className="mb-6 flex items-center justify-between border-b border-white/10 pb-5">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-neon/80">
                  Book a meeting
                </p>

                <h2 className="mt-1 text-lg font-semibold">
                  Your details
                </h2>
              </div>

              <button
                type="button"
                onClick={handleBack}
                className="btn-outline rounded-lg border border-white/15 px-3 py-2 text-xs font-medium text-white/75 transition hover:border-neon/40 hover:text-white"
              >
                ← Back
              </button>
            </div>

            <div className="mb-6 rounded-xl border border-white/10 bg-white/[0.03] p-4">
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-white/75">
                <span className="font-medium text-white">
                  {selectedDayName}{' '}
                  {getOrdinal(selectedDate ?? 0)}{' '}
                  {MONTH_NAMES[month]} {year}
                </span>

                <span className="text-white/25">
                  •
                </span>

                <span>
                  {selectedTimeLabel} IST
                </span>

                <span className="text-white/25">
                  •
                </span>

                <span>30m</span>
              </div>
            </div>

            <form
              className="space-y-4"
              onSubmit={handleSubmit}
            >
              <div className="grid gap-4 sm:grid-cols-2">

                <label className="block">
                  <span className="mb-2 block text-xs font-medium text-white/70">
                    Name *
                  </span>

                  <input
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    value={contactForm.name}
                    onChange={(event) =>
                      updateContactField(
                        'name',
                        event.target.value,
                      )
                    }
                    placeholder="Your name"
                    className="input-neon h-11 w-full rounded-lg border border-white/10 bg-black/20 px-3 text-sm text-white outline-none placeholder:text-white/25 focus:border-neon/50"
                  />
                </label>

                <label className="block">
                  <span className="mb-2 block text-xs font-medium text-white/70">
                    Email *
                  </span>

                  <input
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    value={contactForm.email}
                    onChange={(event) =>
                      updateContactField(
                        'email',
                        event.target.value,
                      )
                    }
                    placeholder="you@example.com"
                    className="input-neon h-11 w-full rounded-lg border border-white/10 bg-black/20 px-3 text-sm text-white outline-none placeholder:text-white/25 focus:border-neon/50"
                  />
                </label>

                <label className="block sm:col-span-2">
                  <span className="mb-2 block text-xs font-medium text-white/70">
                    Phone number *
                  </span>

                  <input
                    name="phone"
                    type="tel"
                    required
                    autoComplete="tel"
                    value={contactForm.phone}
                    onChange={(event) =>
                      updateContactField(
                        'phone',
                        event.target.value,
                      )
                    }
                    placeholder="+91 98765 43210"
                    className="input-neon h-11 w-full rounded-lg border border-white/10 bg-black/20 px-3 text-sm text-white outline-none placeholder:text-white/25 focus:border-neon/50"
                  />
                </label>
              </div>

              <label className="block">
                <span className="mb-2 block text-xs font-medium text-white/70">
                  Message *
                </span>

                <textarea
                  name="message"
                  required
                  rows={5}
                  value={contactForm.message}
                  onChange={(event) =>
                    updateContactField(
                      'message',
                      event.target.value,
                    )
                  }
                  placeholder="Tell me briefly what you'd like to discuss..."
                  className="input-neon w-full resize-none rounded-lg border border-white/10 bg-black/20 p-3 text-sm text-white outline-none placeholder:text-white/25 focus:border-neon/50"
                />
              </label>

              {submitState === 'success' && (
                <div className="rounded-lg border border-emerald-400/20 bg-emerald-400/5 px-3 py-2 text-xs text-emerald-300">
                  Your meeting request was submitted successfully.
                  Your entered details remain saved.
                </div>
              )}

              {submitState === 'error' && (
                <div className="rounded-lg border border-red-400/20 bg-red-400/5 px-3 py-2 text-xs text-red-300">
                  Submission failed. Your entered details remain
                  saved in the form.
                </div>
              )}

              <div className="flex flex-col gap-3 border-t border-white/10 pt-5 sm:flex-row sm:items-center sm:justify-between">
                <div className="text-xs text-white/40">
                  All fields marked with * are required.
                </div>

                <button
                  type="submit"
                  disabled={
                    isSubmitting ||
                    submitState === 'success'
                  }
                  className="btn-neon inline-flex h-11 items-center justify-center rounded-lg bg-neon px-5 text-sm font-semibold text-black transition hover:brightness-105 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {isSubmitting
                    ? 'Submitting...'
                    : submitState === 'success'
                      ? 'Submitted'
                      : 'Submit'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    );
  }

  /*
   * CALENDAR
   */
  return (
    <section className="px-6 py-24 text-white">
      <div className="mx-auto max-w-5xl">

        <div className="glass overflow-hidden rounded-2xl border border-white/10 shadow-2xl shadow-black/20">

          <div className="grid md:grid-cols-[180px_minmax(0,1fr)_220px]">

            {/* EVENT DETAILS */}
            <aside className="border-b border-white/10 p-6 md:border-b-0 md:border-r md:p-8">

              <div className="mb-7 h-24 overflow-hidden rounded-xl border border-white/10 bg-[#151515]">
                <div className="grid h-full grid-cols-6 grid-rows-2 gap-px p-px">

                  {Array.from({ length: 12 }).map(
                    (_, index) => (
                      <div
                        key={index}
                        className={
                          index % 6 === 0
                            ? 'bg-emerald-500/60'
                            : index % 6 === 1
                              ? 'bg-orange-500/80'
                              : index % 6 === 2
                                ? 'bg-indigo-500/60'
                                : index % 6 === 3
                                  ? 'bg-zinc-400/45'
                                  : index % 6 === 4
                                    ? 'bg-blue-400/50'
                                    : 'bg-amber-500/70'
                        }
                      />
                    ),
                  )}

                </div>
              </div>

              {eventDetails}

            </aside>

            {/* CALENDAR */}
            <section className="p-6 md:p-8">

              <div className="mb-6 flex items-center justify-between">

                <button
                  type="button"
                  onClick={() =>
                    changeMonth(-1)
                  }
                  aria-label="Previous month"
                  className="grid h-8 w-8 place-items-center rounded-lg text-lg text-white/40 transition hover:bg-white/5 hover:text-white"
                >
                  ‹
                </button>

                <h2 className="text-lg font-semibold">
                  {MONTH_NAMES[month]} {year}
                </h2>

                <button
                  type="button"
                  onClick={() =>
                    changeMonth(1)
                  }
                  aria-label="Next month"
                  className="grid h-8 w-8 place-items-center rounded-lg text-lg text-white/40 transition hover:bg-white/5 hover:text-white"
                >
                  ›
                </button>

              </div>

              <div className="grid grid-cols-7 gap-1 text-center">

                {DAY_NAMES.map((day) => (
                  <div
                    key={day}
                    className="pb-2 text-[10px] font-semibold tracking-[0.12em] text-white/60"
                  >
                    {day}
                  </div>
                ))}

                {calendar.map(
                  (date, index) => {
                    if (date === null) {
                      return (
                        <div
                          key={`empty-${index}`}
                          className="h-10"
                        />
                      );
                    }

                    const dateObject =
                      new Date(
                        year,
                        month,
                        date,
                      );

                    const isSunday =
                      dateObject.getDay() === 0;

                    const isSelected =
                      date === selectedDate;

                    const isPastInInitialMonth =
                      year === 2026 &&
                      month === 8 &&
                      date < 21;

                    const isDisabled =
                      isSunday ||
                      isPastInInitialMonth;

                    return (
                      <button
                        key={date}
                        type="button"
                        disabled={isDisabled}
                        onClick={() =>
                          handleDateSelect(date)
                        }
                        className={`h-10 rounded-lg text-sm font-medium transition ${
                          isSelected
                            ? 'bg-white text-black shadow-lg'
                            : isDisabled
                              ? 'cursor-not-allowed text-white/20'
                              : 'text-white/75 hover:bg-white/5 hover:text-white'
                        }`}
                      >
                        {date}
                      </button>
                    );
                  },
                )}

              </div>
            </section>

            {/* TIME */}
            <aside className="border-t border-white/10 p-6 md:border-l md:border-t-0 md:p-8">

              <div className="mb-4 flex items-center justify-between gap-3">

                <h3 className="text-lg font-semibold">
                  {selectedDayName}{' '}
                  {selectedDate !== null
                    ? getOrdinal(selectedDate)
                    : ''}
                </h3>

                <div className="flex rounded-lg border border-white/10 bg-white/5 p-0.5">

                  <button
                    type="button"
                    onClick={() =>
                      setUse24Hour(false)
                    }
                    className={`rounded-md px-2 py-1 text-[10px] font-semibold ${
                      !use24Hour
                        ? 'bg-black text-white'
                        : 'text-white/45'
                    }`}
                  >
                    12h
                  </button>

                  <button
                    type="button"
                    onClick={() =>
                      setUse24Hour(true)
                    }
                    className={`rounded-md px-2 py-1 text-[10px] font-semibold ${
                      use24Hour
                        ? 'bg-black text-white'
                        : 'text-white/45'
                    }`}
                  >
                    24h
                  </button>

                </div>
              </div>

              <div className="max-h-[360px] space-y-2 overflow-y-auto pr-1 [scrollbar-width:thin]">

                {slots.map((slot) => {
                  const isSelected =
                    selectedTime === slot;

                  return (
                    <button
                      key={slot}
                      type="button"
                      onClick={() =>
                        handleTimeSelect(slot)
                      }
                      className={`h-10 w-full rounded-lg border text-xs font-medium transition ${
                        isSelected
                          ? 'border-white bg-white text-black'
                          : 'border-white/10 bg-transparent text-white/65 hover:border-white/25 hover:bg-white/[0.03] hover:text-white'
                      }`}
                    >
                      {formatTime(
                        slot,
                        use24Hour,
                      )}
                    </button>
                  );
                })}

              </div>

              <p className="mt-4 text-[10px] leading-4 text-white/35">
                Select a date and time to continue
                to the booking form.
              </p>

            </aside>

          </div>
        </div>
      </div>
    </section>
  );
}