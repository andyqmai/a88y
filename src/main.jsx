import React from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowRight, BadgeCheck, Check, Clapperboard, CloudUpload, FileText, Lock, Mail, Play, Scissors, ShieldCheck, Sparkles, UserCheck, Wand2, Zap } from 'lucide-react';
import './styles.css';

const supportEmail = 'support@a88y.com';
const brand = 'A88Y';

const features = [
  { icon: CloudUpload, title: 'Upload creator-owned footage', description: 'Creators upload their own long-form videos, podcasts, interviews, webinars, and screen recordings into the clipping workflow.' },
  { icon: Wand2, title: 'Find strong short-form moments', description: 'AI-assisted detection helps identify hooks, reactions, useful insights, emotional peaks, and story moments worth reviewing.' },
  { icon: UserCheck, title: 'Review before publishing', description: 'Creators review each clip and caption before any publishing action. A88Y does not post without user approval.' },
];

const safeguards = [
  'Creator-owned or creator-authorized uploads only',
  'Manual review and final approval before publishing',
  'Editable captions and post text before submission',
  'No scraping, no engagement automation, no follower collection',
  'Users can disconnect TikTok and request data deletion',
  'TikTok access is used only for authenticated, user-approved posting',
];

const faqs = [
  { question: 'Does A88Y automatically post to TikTok?', answer: 'No. The intended TikTok integration requires a creator to connect their account, review the selected clip, review or edit the caption, and explicitly confirm publishing.' },
  { question: 'What content can users upload?', answer: 'Users may upload videos they own or have permission to use, including podcasts, interviews, webinars, livestreams, educational videos, and original creator footage.' },
  { question: 'What TikTok data does the app need?', answer: 'The planned integration uses TikTok authentication and content posting permissions only to publish videos that the user has selected and approved.' },
];

function BrandLink({ href = '/' }) {
  return <a className="brand" href={href} aria-label="A88Y home"><span className="brand-mark"><Scissors size={18} /></span><span>{brand}</span></a>;
}

function Nav() {
  return (
    <nav className="nav">
      <BrandLink />
      <div className="nav-links">
        <a href="/#how-it-works">How it works</a>
        <a href="/#trust">Trust</a>
        <a href="/#faq">FAQ</a>
        <a href="/privacy">Privacy</a>
      </div>
      <a className="nav-cta" href={`mailto:${supportEmail}`}>Contact</a>
    </nav>
  );
}

function Footer() {
  return (
    <footer>
      <BrandLink />
      <div className="footer-links">
        <a href="/privacy">Privacy</a>
        <a href="/terms">Terms</a>
        <a href="/data-deletion">Data deletion</a>
        <a href="/contact">Contact</a>
      </div>
      <p>© 2026 A88Y. Creator-reviewed short-form workflow.</p>
    </footer>
  );
}

function HomePage() {
  return (
    <main>
      <Nav />
      <section id="top" className="hero section">
        <div className="hero-copy">
          <div className="eyebrow"><Sparkles size={16} /> AI-assisted clip creation for creators</div>
          <h1>Turn long-form videos into reviewed short-form clips.</h1>
          <p>A88Y helps creators transform their own footage into short-form clips, draft captions, and prepare selected videos for creator-approved publishing workflows.</p>
          <div className="hero-actions">
            <a className="button primary" href={`mailto:${supportEmail}`}>Request access <ArrowRight size={18} /></a>
            <a className="button secondary" href="#how-it-works"><Play size={18} /> See workflow</a>
          </div>
          <div className="trust-row">
            <span><BadgeCheck size={16} /> User-approved publishing</span>
            <span><ShieldCheck size={16} /> No engagement automation</span>
            <span><Zap size={16} /> Faster review workflow</span>
          </div>
        </div>
        <div className="hero-card" aria-label="Product preview">
          <div className="upload-panel">
            <div className="upload-icon"><CloudUpload size={30} /></div>
            <h3>Creator_Video_Interview.mp4</h3>
            <p>Uploaded for clip review</p>
            <div className="progress"><span /></div>
          </div>
          <div className="clip-list">
            <div className="clip-item"><span>01</span><div><strong>Strong opening hook</strong><small>Review clip - edit caption - approve</small></div></div>
            <div className="clip-item"><span>02</span><div><strong>Useful creator insight</strong><small>Review clip - edit caption - approve</small></div></div>
            <div className="clip-item"><span>03</span><div><strong>Memorable reaction moment</strong><small>Review clip - edit caption - approve</small></div></div>
          </div>
        </div>
      </section>
      <section className="logos section compact"><p>Designed for creator publishing workflows</p><div><span>TikTok</span><span>YouTube Shorts</span><span>Instagram Reels</span><span>LinkedIn</span></div></section>
      <section id="how-it-works" className="section split"><div><div className="eyebrow"><Scissors size={16} /> How it works</div><h2>From upload to reviewed clips in a clear workflow.</h2></div><div className="feature-grid">{features.map((feature) => { const Icon = feature.icon; return <article className="feature-card" key={feature.title}><Icon size={26} /><h3>{feature.title}</h3><p>{feature.description}</p></article>; })}</div></section>
      <section id="trust" className="section benefits"><div className="benefit-copy"><div className="eyebrow"><ShieldCheck size={16} /> Built for responsible publishing</div><h2>Creators stay in control of what gets posted.</h2><p>A88Y is positioned as a creator productivity tool, not a bot. The TikTok publishing flow is designed around authentication, review, caption editing, and explicit user confirmation.</p></div><div className="benefit-list">{safeguards.map((item) => <div className="benefit-item" key={item}><Check size={18} /> {item}</div>)}</div></section>
      <section id="faq" className="section faq"><div><div className="eyebrow"><Sparkles size={16} /> FAQ</div><h2>Review-friendly product details.</h2></div><div className="faq-list">{faqs.map((faq) => <article key={faq.question}><h3>{faq.question}</h3><p>{faq.answer}</p></article>)}</div></section>
      <section className="section cta"><h2>Creator-approved short-form workflow by A88Y.</h2><p>For support, review questions, or data requests, contact the A88Y team.</p><a className="button primary" href={`mailto:${supportEmail}`}>Contact A88Y <ArrowRight size={18} /></a></section>
      <Footer />
    </main>
  );
}

const privacySections = [
  ['Information we collect', 'A88Y may process account contact details, uploaded video files, generated clips, transcript text, draft captions, project names, and connected TikTok authorization data when a user chooses to connect TikTok.'],
  ['How information is used', 'We use information to provide clip generation, caption drafting, review workflow, support, account security, and user-approved publishing functionality. We do not sell user data.'],
  ['TikTok data', 'TikTok access is used only to authenticate a user and publish videos that the user explicitly selects and approves. A88Y does not scrape TikTok, automate engagement, collect follower lists, or post without user confirmation.'],
  ['Video and caption data', 'Uploaded videos and generated clips are processed to provide the service. Users are responsible for ensuring they own or have permission to use uploaded content.'],
  ['Data retention and deletion', 'Users may request deletion of their data by contacting support@a88y.com. If TikTok is connected, users may also revoke access from their TikTok account settings.'],
  ['Contact', 'For privacy questions, contact support@a88y.com.'],
];

const termsSections = [
  ['Use of the service', 'A88Y is provided to help creators prepare short-form clips from videos they own or are authorized to use. Users must not upload content that infringes third-party rights or violates applicable platform rules.'],
  ['Publishing responsibility', 'Users are responsible for reviewing clips, captions, and publishing choices before posting to any third-party platform. A88Y is designed so publishing requires user approval.'],
  ['No prohibited automation', 'Users may not use A88Y for spam, deceptive activity, scraping, fake engagement, or unauthorized mass posting.'],
  ['Third-party platforms', 'TikTok and other platforms are separate services with their own terms. Users are responsible for complying with those terms when publishing content.'],
  ['Service changes', 'A88Y may update, suspend, or modify features as the product evolves.'],
  ['Contact', 'For terms questions, contact support@a88y.com.'],
];

function LegalPage({ title, intro, sections, icon: Icon }) {
  return <main><Nav /><section className="section legal-page"><div className="eyebrow"><Icon size={16} /> A88Y</div><h1>{title}</h1><p className="legal-intro">{intro}</p><div className="legal-card">{sections.map(([heading, body]) => <section key={heading}><h2>{heading}</h2><p>{body}</p></section>)}</div></section><Footer /></main>;
}

function DataDeletionPage() {
  return <LegalPage title="Data deletion instructions" icon={ShieldCheck} intro="A88Y users can request deletion of account, video, clip, caption, and connected publishing data." sections={[
    ['Request deletion', `Email ${supportEmail} with the subject "Data deletion request" and include the email address associated with your A88Y account.`],
    ['Disconnect TikTok', 'If you connected TikTok, you can revoke app access from your TikTok account settings. This prevents future access using that authorization.'],
    ['What we delete', 'On verified request, we delete or de-identify account data, uploaded video files, generated clips, transcripts, captions, and stored publishing authorization data where applicable.'],
    ['Timing', 'We aim to process verified deletion requests within 30 days unless a longer retention period is required by law, security, fraud prevention, or dispute resolution.'],
  ]} />;
}

function ContactPage() {
  return <main><Nav /><section className="section legal-page"><div className="eyebrow"><Mail size={16} /> Contact A88Y</div><h1>Contact</h1><p className="legal-intro">For support, privacy questions, TikTok review questions, or data requests, contact the A88Y team.</p><div className="legal-card contact-card"><Mail size={32} /><h2>{supportEmail}</h2><p>We use this contact address for product support, privacy requests, terms questions, and data deletion requests.</p><a className="button primary" href={`mailto:${supportEmail}`}>Email support</a></div></section><Footer /></main>;
}

function TikTokCallbackPage() {
  return <main><Nav /><section className="section legal-page"><div className="eyebrow"><Clapperboard size={16} /> TikTok OAuth</div><h1>TikTok authorization callback</h1><div className="legal-card"><h2>Callback endpoint placeholder</h2><p>This URL is reserved for the A88Y TikTok OAuth authorization callback. The production integration will exchange authorization codes server-side and use TikTok access only for user-approved publishing actions.</p><p>No publishing occurs from this static placeholder page.</p></div></section><Footer /></main>;
}

function AppRouter() {
  const path = window.location.pathname.replace(/\/$/, '') || '/';
  if (path === '/privacy') return <LegalPage title="Privacy Policy" icon={Lock} intro="This Privacy Policy explains how A88Y handles creator content, account information, and connected publishing data." sections={privacySections} />;
  if (path === '/terms') return <LegalPage title="Terms of Service" icon={FileText} intro="These Terms describe responsible use of A88Y and creator obligations when preparing or publishing content." sections={termsSections} />;
  if (path === '/data-deletion') return <DataDeletionPage />;
  if (path === '/contact') return <ContactPage />;
  if (path === '/auth/tiktok/callback') return <TikTokCallbackPage />;
  return <HomePage />;
}

createRoot(document.getElementById('root')).render(<AppRouter />);
