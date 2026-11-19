import { useState, type FormEvent, type ReactNode } from "react";
import { CONTACT, FEATURES, TEAM } from "@/data/site";

export function Hero() {
  return (
    <section className="hero" id="home">
      <div className="wrap">
        <div>
          <span className="badge">HealthTech · Currently under development</span>
          <h1>Smarter Care. Safer Living.</h1>
          <p>
            E-Guard is a proposed smart monitoring system that combines a wearable bracelet, AI-assisted camera
            monitoring and a mobile app. It is designed to help elderly people live more independently while their
            families stay informed.
          </p>
          <div className="cta">
            <a className="btn" href="#solution">
              Explore Our Solution
            </a>
            <a className="btn ghost" href="#contact">
              Get in touch
            </a>
          </div>
        </div>
        <svg
          className="art"
          viewBox="0 0 480 420"
          role="img"
          aria-label="Illustration: a wearable bracelet and a camera connected to a family phone app"
        >
          <defs>
            <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
              <stop stopColor="#14b8a6" />
              <stop offset="1" stopColor="#1d4f91" />
            </linearGradient>
          </defs>
          <circle cx="240" cy="210" r="170" fill="none" stroke="#5eead4" strokeOpacity=".25" strokeDasharray="4 8" />
          <g stroke="#5eead4" strokeWidth="2" strokeDasharray="6 6" fill="none" className="pulse">
            <path d="M110 115 205 175" />
            <path d="M370 115 275 175" />
            <path d="M240 300V260" />
          </g>
          <rect x="185" y="150" width="110" height="190" rx="20" fill="#0d2a4f" stroke="#5eead4" strokeWidth="2.5" />
          <rect x="196" y="170" width="88" height="40" rx="9" fill="url(#g)" />
          <text x="240" y="195" fill="#fff" fontSize="13" textAnchor="middle" fontFamily="Sora,sans-serif">
            All normal
          </text>
          <rect x="196" y="220" width="88" height="26" rx="8" fill="#ffffff" fillOpacity=".1" />
          <rect x="196" y="254" width="88" height="26" rx="8" fill="#ffffff" fillOpacity=".1" />
          <rect x="196" y="288" width="88" height="26" rx="8" fill="#ffffff" fillOpacity=".1" />
          <rect x="55" y="60" width="110" height="80" rx="26" fill="#13376a" stroke="#5eead4" strokeWidth="2.5" />
          <rect x="72" y="76" width="76" height="48" rx="14" fill="#0b2545" />
          <path
            d="M80 102h14l6-14 10 28 7-14h12"
            stroke="#5eead4"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <rect x="315" y="65" width="110" height="68" rx="16" fill="#13376a" stroke="#5eead4" strokeWidth="2.5" />
          <circle cx="370" cy="99" r="20" fill="#0b2545" stroke="#5eead4" strokeWidth="3" />
          <circle cx="370" cy="99" r="7" fill="#5eead4" />
          <circle cx="90" cy="320" r="22" fill="#5eead4" fillOpacity=".85" />
          <path d="M52 385c0-26 17-42 38-42s38 16 38 42z" fill="#5eead4" fillOpacity=".85" />
          <circle cx="390" cy="330" r="16" fill="#fff" fillOpacity=".8" />
          <path d="M362 385c0-20 13-32 28-32s28 12 28 32z" fill="#fff" fillOpacity=".8" />
        </svg>
      </div>
    </section>
  );
}

function Card({ title, children, className }: { title?: string; children: ReactNode; className?: string }) {
  return (
    <div className={className ? `card ${className}` : "card"}>
      {title && <h3>{title}</h3>}
      <p>{children}</p>
    </div>
  );
}

export function About() {
  return (
    <section id="about">
      <div className="wrap">
        <h2>About E-Guard</h2>
        <p className="lead">
          E-Guard is an early-stage project in the fields of HealthTech, elderly care, AI and IoT. It is designed to
          help older adults live more safely and independently, while keeping their families informed about their
          well-being.
        </p>
        <div className="grid g2">
          <Card title="Our vision">
            To create a safer environment for elderly individuals by combining smart technology, health monitoring and
            family connectivity.
          </Card>
          <Card title="Our mission">
            To reduce the risks of elderly people living alone by giving families timely information, health
            monitoring and emergency notifications.
          </Card>
        </div>
      </div>
    </section>
  );
}

export function Problem() {
  return (
    <section id="problem" className="alt">
      <div className="wrap">
        <h2>The problem</h2>
        <p className="lead">Many elderly people spend long hours alone while relatives work or live elsewhere.</p>
        <div className="grid g3">
          <Card title="Unnoticed emergencies">Sudden falls or medical events may go unseen for a long time.</Card>
          <Card title="No constant oversight">Families cannot watch over a loved one around the clock.</Card>
          <Card title="Manual checking">Traditional methods rely on frequent phone calls and visits.</Card>
          <Card title="Delayed response">The later an emergency is detected, the greater the risk may be.</Card>
          <Card title="Constant worry">Without reliable information, families often feel anxious.</Card>
        </div>
      </div>
    </section>
  );
}

function IconCard({ icon, title, text, tag }: { icon: ReactNode; title: string; text: string; tag: string }) {
  return (
    <div className="card">
      <div className="ico">
        <svg viewBox="0 0 24 24">{icon}</svg>
      </div>
      <h3>{title}</h3>
      <p>{text}</p>
      <span className="tag">{tag}</span>
    </div>
  );
}

export function Solution() {
  return (
    <section id="solution">
      <div className="wrap">
        <h2>Our solution</h2>
        <p className="lead">Our proposed solution brings three components together in one connected system.</p>
        <div className="grid g3">
          <IconCard
            icon={
              <>
                <rect x="7" y="3" width="10" height="18" rx="4" />
                <path d="M9 12h2l1-2 1 4 1-2h1" />
              </>
            }
            title="Smart wearable bracelet"
            text="Designed to collect health readings such as blood oxygen saturation (SpO2) and, depending on the selected sensor, blood pressure and other vital signs. Readings are sent to the app."
            tag="In development"
          />
          <IconCard
            icon={
              <>
                <rect x="3" y="7" width="13" height="10" rx="2" />
                <path d="m16 11 5-3v8l-5-3" />
              </>
            }
            title="AI-powered camera monitoring"
            text="Aims to help detect falls, unusual movement or inactivity, and potential emergencies. Camera access follows defined permissions and privacy rules."
            tag="Planned"
          />
          <IconCard
            icon={
              <>
                <rect x="6" y="2" width="12" height="20" rx="3" />
                <path d="M11 18h2" />
              </>
            }
            title="Flutter mobile app"
            text="The central interface connecting elderly users, families and doctors, with a different experience for each role."
            tag="In development"
          />
        </div>

        <h3 className="sub-title">Three roles, one app</h3>
        <div className="grid g3">
          <Card title="Elderly user">
            View personal health readings, receive notifications, reach emergency help options and manage approved
            family connections.
          </Card>
          <Card title="Family and guardians">
            Follow health readings, receive warning and emergency notifications, and view the camera according to
            permissions.
          </Card>
          <Card title="Doctors">
            Review relevant medical information for linked patients and add recommendations and notes. Doctors do not
            access the live camera or receive fall alerts, and are not responsible for real-time emergency response.
          </Card>
        </div>
      </div>
    </section>
  );
}

const STEPS: [string, string][] = [
  ["Collect", "The bracelet gathers health measurements."],
  ["Observe", "The camera component analyzes visual information for potential safety concerns."],
  ["Identify", "The system flags abnormal readings or potentially dangerous situations."],
  ["Notify", "Relevant alerts reach the elderly user and authorized guardians."],
  ["Respond", "Family members check the situation and take appropriate action."],
  ["Follow up", "Doctors review relevant medical information and provide recommendations."],
];

export function HowItWorks() {
  return (
    <section id="how" className="alt">
      <div className="wrap">
        <h2>How it works</h2>
        <div className="steps">
          {STEPS.map(([b, p]) => (
            <div className="step" key={b}>
              <div>
                <b>{b}</b>
                <p>{p}</p>
              </div>
            </div>
          ))}
        </div>

        <h3 className="sub-title">Alert levels</h3>
        <div className="grid g3">
          <Card title="Normal" className="lv n">
            The system is operating normally and no concerns are detected.
          </Card>
          <Card title="Warning" className="lv w">
            Readings or behavior suggest a potential concern. The elderly user and guardians are notified.
          </Card>
          <Card title="Emergency" className="lv e">
            A potentially serious situation is detected. The user may be asked to confirm they are okay. If they ask
            for help or do not respond within a defined period, the alert escalates to family members.
          </Card>
        </div>
        <p className="note note-gap">
          E-Guard is designed to support early awareness and human intervention. It does not diagnose conditions and
          does not replace medical professionals or emergency services.
        </p>
      </div>
    </section>
  );
}

export function Features() {
  return (
    <section id="features">
      <div className="wrap">
        <h2>Key features</h2>
        <p className="lead">Planned capabilities of the E-Guard system. Features are being developed in stages.</p>
        <div className="grid g3">
          {FEATURES.map((f) => (
            <IconCard key={f.title} icon={<path d={f.icon} />} title={f.title} text={f.text} tag={f.status} />
          ))}
        </div>
      </div>
    </section>
  );
}

export function Tech() {
  return (
    <section id="tech" className="band">
      <div className="wrap">
        <h2>Technology stack</h2>
        <p className="lead">Final hardware, algorithms and infrastructure choices are still being evaluated.</p>
        <div className="grid g2">
          <Card title="Flutter & Dart">Cross-platform mobile application.</Card>
          <Card title="AI & computer vision">Intelligent monitoring for safety awareness.</Card>
          <Card title="IoT & embedded systems">Wearable and sensor integration.</Card>
          <Card title="Backend & cloud infrastructure">Data communication and system integration.</Card>
        </div>
        <h2 className="mt-64">Why E-Guard</h2>
        <p className="lead">
          Many solutions focus on a single aspect of elderly care. E-Guard aims to bring these together:
        </p>
        <div className="grid g3">
          <Card>Health monitoring through wearable technology</Card>
          <Card>Camera-based safety monitoring</Card>
          <Card>AI-assisted detection of potential emergencies</Card>
          <Card>Family-focused notifications and communication</Card>
          <Card>Doctor-supported medical follow-up</Card>
        </div>
      </div>
    </section>
  );
}

export function Vision() {
  return (
    <section id="vision">
      <div className="wrap">
        <h2>Our vision</h2>
        <p className="lead">
          We see a future where growing older at home feels safer for the person and calmer for the family. E-Guard is
          our first step toward that: a connected, privacy-aware system that supports people instead of replacing
          them.
        </p>
        <div className="grid g3">
          <Card title="Who we serve">
            Elderly people living independently, their families and guardians, healthcare professionals, and elderly
            care organizations.
          </Card>
          <Card title="Privacy first">
            Access to health data and cameras is designed around permissions each family controls.
          </Card>
          <Card title="Open to partners">
            We welcome conversations with competitions, mentors, healthcare providers and potential partners.
          </Card>
        </div>
      </div>
    </section>
  );
}

export function Team() {
  return (
    <section id="team" className="alt">
      <div className="wrap">
        <h2>Team</h2>
        <p className="lead">The people behind E-Guard.</p>
        <div className="grid g3">
          {TEAM.map((t) => (
            <div className="card" key={t.name}>
              <div className="avatar">
                {t.photo ? <img src={t.photo} alt={t.name} /> : (t.name.trim()[0] ?? "E")}
              </div>
              <h3>{t.name}</h3>
              <p>
                <strong>{t.role}</strong>
              </p>
              <p className="gap-6">{t.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const body = `Name: ${name}\nEmail: ${email}\n\n${message}`;
    window.location.href = `mailto:${CONTACT.email}?subject=${encodeURIComponent(
      `E-Guard inquiry from ${name}`,
    )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section id="contact">
      <div className="wrap">
        <h2>Contact us</h2>
        <p className="lead">
          Interested in E-Guard as a judge, mentor, partner or investor? Send us a message.
        </p>
        <div className="grid g2">
          <form onSubmit={onSubmit}>
            <div>
              <label htmlFor="n">Name</label>
              <input id="n" required autoComplete="name" value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div>
              <label htmlFor="e">Email</label>
              <input
                id="e"
                type="email"
                required
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="m">Message</label>
              <textarea id="m" rows={5} required value={message} onChange={(e) => setMessage(e.target.value)} />
            </div>
            <button className="btn" type="submit">
              Send message
            </button>
          </form>
          <div className="card">
            <h3>Details</h3>
            <p>
              Email: <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
            </p>
            <p className="gap-10">University / Faculty: {CONTACT.university}</p>
            <p className="gap-10">Sending opens your email app with the message ready to send.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
