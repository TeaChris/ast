'use client';

import ScrollReveal from '../ScrollReveal';

const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

type AppointmentChip = {
  row: number;
  col: number;
  label: string;
  color: string;
  span: number;
};

const appointments: AppointmentChip[] = [
  { row: 2, col: 1, label: 'Emma — Consultation', color: '#D4AF37', span: 2 },
  { row: 4, col: 2, label: 'James — Cut & Style', color: '#5B8FB9', span: 3 },
  { row: 1, col: 3, label: 'Sofia — Therapy', color: '#7E5CAD', span: 2 },
  { row: 5, col: 4, label: 'Chen — Training', color: '#3DAA74', span: 2 },
  { row: 3, col: 5, label: 'Layla — Facial', color: '#C96B3A', span: 3 },
  { row: 6, col: 1, label: 'Mark — Review', color: '#D4AF37', span: 2 },
  { row: 2, col: 6, label: 'Nia — Massage', color: '#5B8FB9', span: 3 },
];

const hours = ['9 AM', '10 AM', '11 AM', '12 PM', '1 PM', '2 PM', '3 PM', '4 PM'];

export default function CalendarPreview() {
  return (
    <section
      id="how-it-works"
      className="relative py-24 overflow-hidden"
      style={{ background: 'var(--obsidian)' }}
    >
      {/* Break out of container — full bleed top border */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            'linear-gradient(90deg, transparent, var(--gold), transparent)',
        }}
      />

      {/* Section header — inside container */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-12">
        <ScrollReveal>
          <p
            className="text-xs tracking-[0.3em] uppercase mb-3 text-center"
            style={{ color: 'var(--gold)', fontFamily: 'var(--font-comfortaa)' }}
          >
            Calendar Intelligence
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <h2
            className="text-4xl md:text-5xl font-bold text-center leading-tight"
            style={{ color: 'var(--cream)', fontFamily: 'var(--font-comfortaa)' }}
          >
            Your week,{' '}
            <span style={{ color: 'var(--gold)' }}>at a glance.</span>
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={0.2}>
          <p
            className="text-base text-center mt-4 max-w-xl mx-auto"
            style={{
              color: 'var(--text-secondary)',
              fontFamily: 'var(--font-comfortaa)',
            }}
          >
            Every booking, staff member, and service visible in one live dashboard.
            No more spreadsheets. No more calls.
          </p>
        </ScrollReveal>
      </div>

      {/* Full-bleed Calendar — breaks container with negative margin */}
      <ScrollReveal direction="scale" delay={0.15}>
        <div
          className="mx-4 md:mx-8 lg:mx-16 rounded-3xl overflow-hidden"
          style={{
            background: 'var(--obsidian-card)',
            border: '1px solid rgba(212,175,55,0.15)',
            boxShadow: '0 40px 120px rgba(0,0,0,0.5), 0 0 0 1px rgba(212,175,55,0.07)',
          }}
        >
          {/* Calendar header — day names */}
          <div
            className="grid border-b"
            style={{
              gridTemplateColumns: '60px repeat(7, 1fr)',
              borderColor: 'rgba(212,175,55,0.1)',
            }}
          >
            <div
              className="py-4 border-r"
              style={{ borderColor: 'rgba(212,175,55,0.1)' }}
            />
            {days.map((d, i) => (
              <div
                key={d}
                className="py-4 text-center text-sm font-semibold tracking-wider"
                style={{
                  color: i === 1 ? 'var(--gold)' : 'var(--text-secondary)',
                  fontFamily: 'var(--font-comfortaa)',
                  borderRight:
                    i < days.length - 1 ? '1px solid rgba(212,175,55,0.06)' : 'none',
                }}
              >
                {d}
                <span
                  className="block text-xs mt-0.5"
                  style={{
                    color: i === 1 ? 'var(--gold)' : 'var(--text-muted)',
                  }}
                >
                  {22 + i}
                </span>
              </div>
            ))}
          </div>

          {/* Time grid */}
          <div className="relative overflow-y-auto" style={{ maxHeight: '400px' }}>
            {hours.map((hour, rowIdx) => (
              <div
                key={hour}
                className="grid"
                style={{
                  gridTemplateColumns: '60px repeat(7, 1fr)',
                  borderBottom: '1px solid rgba(212,175,55,0.04)',
                }}
              >
                {/* Hour label */}
                <div
                  className="py-8 px-2 text-xs text-right border-r flex items-start justify-end pt-2"
                  style={{
                    color: 'var(--text-muted)',
                    borderColor: 'rgba(212,175,55,0.1)',
                    fontFamily: 'var(--font-comfortaa)',
                  }}
                >
                  {hour}
                </div>

                {/* Day columns */}
                {days.map((d, colIdx) => {
                  const chip = appointments.find(
                    (a) => a.row === rowIdx && a.col === colIdx
                  );
                  return (
                    <div
                      key={d}
                      className="relative py-1 px-1 min-h-16"
                      style={{
                        borderRight:
                          colIdx < days.length - 1
                            ? '1px solid rgba(212,175,55,0.04)'
                            : 'none',
                      }}
                    >
                      {chip && (
                        <div
                          className="rounded-lg px-2 py-1.5 text-xs font-medium cursor-pointer transition-opacity duration-200 hover:opacity-80"
                          style={{
                            background: `${chip.color}22`,
                            border: `1px solid ${chip.color}55`,
                            color: chip.color,
                            fontFamily: 'var(--font-comfortaa)',
                            lineHeight: 1.3,
                          }}
                        >
                          {chip.label}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
