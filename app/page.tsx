'use client';

import { useState } from 'react';
import {
  ArrowDownRight, ArrowRight, BadgeCheck, Check, ChevronDown, Clock3, Fan,
  Facebook, Instagram, Menu, Phone, ShieldCheck, Snowflake, Sparkles,
  Sun, Wrench, X, Zap, MessageCircle, CircleDollarSign, Wind, Droplets
} from 'lucide-react';

const phone = '03004120601';
const whatsapp = 'https://wa.me/923004120601';
const services = [
  { icon: Snowflake, number: '01', title: 'AC Installation', text: 'Neat, reliable installation for new units, with the right setup for your space.' },
  { icon: Wrench, number: '02', title: 'Repair & Troubleshooting', text: 'From cooling issues and unusual noises to leaks and electrical faults.' },
  { icon: Fan, number: '03', title: 'AC Service & Maintenance', text: 'Deep cleaning and routine care to help your AC run smoothly and efficiently.' },
  { icon: CircleDollarSign, number: '04', title: 'Buy & Sell ACs', text: 'Looking for a new unit or a quality used AC? Get help finding the right fit.' },
  { icon: Sun, number: '05', title: 'Solar Panel Washing', text: 'Careful panel cleaning to remove dust and buildup from your solar investment.' },
  { icon: ShieldCheck, number: '06', title: 'Seasonal Check-ups', text: 'Get your cooling system ready before peak summer and help avoid surprise breakdowns.' },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [service, setService] = useState('AC repair');
  const [name, setName] = useState('');
  const [details, setDetails] = useState('');
  const [submitted, setSubmitted] = useState(false);

  function sendRequest(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const message = `Assalam-o-Alaikum Habib Hot & Cool!%0AName: ${encodeURIComponent(name)}%0AService: ${encodeURIComponent(service)}%0ADetails: ${encodeURIComponent(details || 'Please contact me with details.')}`;
    window.open(`https://wa.me/923004120601?text=${message}`, '_blank', 'noopener,noreferrer');
    setSubmitted(true);
  }

  const closeMenu = () => setMenuOpen(false);

  return (
    <main>
      <div className="topbar"><div className="container topbar-inner"><span><span className="status-dot" /> Trusted cooling care for over 20 years</span><a href={`tel:${phone}`}><Phone size={14} /> {phone}</a></div></div>
      <header className="header">
        <div className="container nav-wrap">
          <a className="brand" href="#home" aria-label="Habib Hot and Cool home"><span className="brand-mark"><Snowflake size={25} strokeWidth={2.2} /></span><span className="brand-copy"><strong>HABIB <b>HOT & COOL</b></strong><small>COOLING • COMFORT • CARE</small></span></a>
          <button className="mobile-toggle" aria-label="Toggle navigation" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
          <nav className={menuOpen ? 'nav-links open' : 'nav-links'}><a onClick={closeMenu} href="#services">Services</a><a onClick={closeMenu} href="#about">About us</a><a onClick={closeMenu} href="#solar">Solar care</a><a onClick={closeMenu} href="#contact">Contact</a><a onClick={closeMenu} href={whatsapp} target="_blank" rel="noreferrer" className="nav-cta">Get a quote <ArrowRight size={16} /></a></nav>
        </div>
      </header>

      <section className="hero" id="home">
        <div className="hero-photo" />
        <div className="hero-shade" />
        <div className="container hero-content">
          <div className="eyebrow light"><span className="eyebrow-line" /> YOUR COMFORT, OUR PRIORITY</div>
          <h1>Cool air.<br /><em>Peace of mind.</em></h1>
          <p className="hero-lede">Expert AC repair, maintenance, installation and buying or selling — plus solar panel washing to keep your energy working smarter.</p>
          <div className="hero-actions"><a className="btn btn-lime" href={whatsapp} target="_blank" rel="noreferrer">Book a service <ArrowRight size={18} /></a><a className="btn btn-glass" href="#services">Explore services <ArrowDownRight size={17} /></a></div>
          <div className="hero-proof"><div className="proof-avatars"><span>H</span><span>+</span><span><Check size={14} /></span></div><div><strong>20+ years of hands-on experience</strong><small>Qualified professionals. Service you can trust.</small></div></div>
        </div>
        <div className="hero-side-note"><span className="side-line" /> BUILT ON EXPERIENCE</div>
        <a href="#services" className="scroll-cue"><span>SCROLL TO EXPLORE</span><ChevronDown size={15} /></a>
      </section>

      <section className="trust-strip"><div className="container trust-grid"><div><BadgeCheck /><span><strong>Qualified professionals</strong><small>Careful, skilled workmanship</small></span></div><div><Clock3 /><span><strong>20+ years in business</strong><small>Experience you can count on</small></span></div><div><Sparkles /><span><strong>All-in-one service</strong><small>Cooling and solar panel care</small></span></div><div><ShieldCheck /><span><strong>Practical advice</strong><small>Options for your needs and budget</small></span></div></div></section>

      <section className="section services-section" id="services"><div className="container"><div className="section-heading"><div><div className="eyebrow"><span className="eyebrow-line" /> WHAT WE DO</div><h2>One call for all<br /><em>your cooling needs.</em></h2></div><div className="heading-aside"><p>From a quick fix to a full installation, Habib Hot & Cool helps keep homes and businesses comfortable in every season.</p><a href="#contact" className="text-link">Talk to our team <ArrowRight size={16} /></a></div></div>
        <div className="services-grid">{services.map((item) => { const Icon = item.icon; return <article className="service-card" key={item.number}><div className="service-top"><span className="service-icon"><Icon size={23} strokeWidth={1.7} /></span><span className="service-number">{item.number}</span></div><h3>{item.title}</h3><p>{item.text}</p><a href="#contact" aria-label={`Ask about ${item.title}`} className="card-arrow"><ArrowRight size={18} /></a></article>; })}</div>
      </div></section>

      <section className="about-section" id="about"><div className="container about-grid"><div className="about-visual"><div className="about-photo"/><div className="experience-stamp"><strong>20<span>+</span></strong><small>YEARS OF<br />EXPERIENCE</small></div><div className="photo-caption"><span className="caption-dot"/> PROFESSIONAL CARE, PERSONAL SERVICE</div></div><div className="about-copy"><div className="eyebrow"><span className="eyebrow-line"/> WHY HABIB HOT & COOL</div><h2>Good service<br />is <em>built on trust.</em></h2><p className="about-intro">With more than two decades in the business, owner Habib Ullah believes good work starts with listening, honest advice and doing the job properly.</p><div className="benefit-list"><div><span><Check size={16}/></span><p><strong>Experienced hands</strong><small>20+ years of practical AC experience.</small></p></div><div><span><Check size={16}/></span><p><strong>Qualified professionals</strong><small>Careful work with attention to detail.</small></p></div><div><span><Check size={16}/></span><p><strong>Options that fit your needs</strong><small>Service, repair, new units and used ACs.</small></p></div></div><a className="btn btn-dark" href={`tel:${phone}`}><Phone size={17}/> Call Habib Ullah</a></div></div></section>

      <section className="solar-section" id="solar"><div className="solar-image"/><div className="solar-overlay"/><div className="container solar-content"><div className="solar-copy"><div className="eyebrow light"><span className="eyebrow-line"/> MORE SUN. LESS DUST.</div><h2>Let your solar<br /><em>panels shine.</em></h2><p>Dust and grime can build up on solar panels over time. Our solar panel washing service helps keep your panels clean, with careful handling and attention to your system.</p><a className="btn btn-lime" href={`${whatsapp}?text=${encodeURIComponent('Assalam-o-Alaikum! I would like to ask about solar panel washing.')}`} target="_blank" rel="noreferrer">Book panel washing <ArrowRight size={18}/></a></div><div className="solar-feature"><div><Droplets size={21}/><span><strong>Careful cleaning</strong><small>Gentle, considered panel care</small></span></div><div><Sun size={21}/><span><strong>Cleaner surfaces</strong><small>Help remove dust and buildup</small></span></div><div><Zap size={21}/><span><strong>Solar system care</strong><small>Support your regular maintenance</small></span></div></div></div></section>

      <section className="buy-sell-section"><div className="container buy-sell-grid"><div className="buy-sell-copy"><div className="eyebrow"><span className="eyebrow-line"/> BUY SMART. SELL WITH EASE.</div><h2>New or pre-loved.<br /><em>We've got you.</em></h2><p>Need a new AC for summer, or looking to sell your existing unit? Tell us what you need and we'll help you explore suitable options.</p><div className="buy-sell-actions"><a className="btn btn-dark" href={`${whatsapp}?text=${encodeURIComponent('Assalam-o-Alaikum! I am interested in buying an AC.')}`} target="_blank" rel="noreferrer">I want to buy <ArrowRight size={17}/></a><a className="btn btn-outline" href={`${whatsapp}?text=${encodeURIComponent('Assalam-o-Alaikum! I would like to sell my AC.')}`} target="_blank" rel="noreferrer">I want to sell <ArrowRight size={17}/></a></div><small className="fine-print">Availability, condition and pricing are confirmed directly with our team.</small></div><div className="buy-sell-visual"><div className="buy-image"/><div className="buy-badge"><Snowflake size={19}/><span>Find the right<br/><strong>cooling solution</strong></span></div><div className="buy-mini-card"><span className="mini-icon"><Check size={15}/></span><span><strong>New & used ACs</strong><small>Options for different budgets</small></span></div></div></div></section>

      <section className="contact-section" id="contact"><div className="container contact-grid"><div className="contact-copy"><div className="eyebrow light"><span className="eyebrow-line"/> LET'S GET YOU COMFORTABLE</div><h2>Need a hand<br />with your <em>AC?</em></h2><p>Tell us what you need. We'll connect on WhatsApp to discuss the service and next steps.</p><div className="contact-direct"><a href={`tel:${phone}`} className="direct-line"><span><Phone size={19}/></span><div><small>CALL US DIRECTLY</small><strong>{phone}</strong></div></a><a href={whatsapp} target="_blank" rel="noreferrer" className="direct-line"><span><MessageCircle size={20}/></span><div><small>CHAT ON WHATSAPP</small><strong>Message Habib Hot & Cool</strong></div></a></div><div className="social-links"><span>FOLLOW ALONG</span><a href="https://www.facebook.com/habib.hotandcools" target="_blank" rel="noreferrer" aria-label="Facebook"><Facebook size={17}/></a><a href="https://www.instagram.com/habib.hotandcool" target="_blank" rel="noreferrer" aria-label="Instagram"><Instagram size={17}/></a></div></div><form className="contact-form" onSubmit={sendRequest}><div className="form-heading"><span>QUICK SERVICE REQUEST</span><span className="form-spark"><Sparkles size={18}/></span></div><h3>How can we help?</h3><p>Fill this in and we'll open a WhatsApp message for you.</p><label htmlFor="name">Your name</label><input id="name" required value={name} onChange={e => setName(e.target.value)} placeholder="e.g. Ahmed"/><label htmlFor="service">What do you need?</label><div className="select-wrap"><select id="service" value={service} onChange={e => setService(e.target.value)}><option>AC repair</option><option>AC service & maintenance</option><option>New AC installation</option><option>Buy a new AC</option><option>Buy a used AC</option><option>Sell my AC</option><option>Solar panel washing</option><option>Other enquiry</option></select><ChevronDown size={17}/></div><label htmlFor="details">A few details <span>(optional)</span></label><textarea id="details" value={details} onChange={e => setDetails(e.target.value)} placeholder="Tell us a little about what you need…" rows={3}/><button className="btn btn-lime form-submit" type="submit">{submitted ? 'Send another request' : 'Continue on WhatsApp'} <ArrowRight size={18}/></button><small className="privacy-note"><ShieldCheck size={13}/> Your request is sent directly to our WhatsApp chat.</small></form></div></section>

      <footer className="footer"><div className="container footer-main"><a className="brand footer-brand" href="#home"><span className="brand-mark"><Snowflake size={24}/></span><span className="brand-copy"><strong>HABIB <b>HOT & COOL</b></strong><small>COOLING • COMFORT • CARE</small></span></a><p>Keeping your spaces comfortable, one service at a time.</p><a className="back-top" href="#home">BACK TO TOP <ArrowDownRight size={15}/></a></div><div className="container footer-bottom"><span>© {new Date().getFullYear()} Habib Hot & Cool. All rights reserved.</span><span>Owner: Habib Ullah</span><div><a href="https://www.facebook.com/habib.hotandcools" target="_blank" rel="noreferrer">Facebook</a><a href="https://www.instagram.com/habib.hotandcool" target="_blank" rel="noreferrer">Instagram</a></div></div></footer>
      <a className="floating-whatsapp" href={whatsapp} target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp"><MessageCircle size={22}/><span>Chat with us</span></a>
    </main>
  );
}
