'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  ChevronRight,
  ShieldCheck,
  Server,
  Network,
  Ban,
  Building2,
  Landmark,
  CreditCard,
  Wallet,
  Scale,
  Mail,
} from 'lucide-react';
import { useAppStore } from '@/lib/store';

/* ─── animation helpers ─── */
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  }),
};

/* ═══════════════════════════════════════
   ComplianceStatementPage
   ═══════════════════════════════════════ */
export function ComplianceStatementPage() {
  const navigate = useAppStore((s) => s.navigate);

  const headerRef = useRef<HTMLDivElement>(null);
  const statementRef = useRef<HTMLDivElement>(null);
  const corporateRef = useRef<HTMLDivElement>(null);
  const positionRef = useRef<HTMLDivElement>(null);
  const partnersRef = useRef<HTMLDivElement>(null);
  const frameworkRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const statementInView = useInView(statementRef, { once: true, margin: '-60px' });
  const corporateInView = useInView(corporateRef, { once: true, margin: '-60px' });
  const positionInView = useInView(positionRef, { once: true, margin: '-60px' });
  const partnersInView = useInView(partnersRef, { once: true, margin: '-60px' });
  const frameworkInView = useInView(frameworkRef, { once: true, margin: '-60px' });
  const contactInView = useInView(contactRef, { once: true, margin: '-40px' });

  return (
    <div className="min-h-screen" style={{ background: 'var(--background)' }}>
      <div className="max-w-4xl mx-auto px-6">
        {/* ─── Page Header ─── */}
        <header ref={headerRef} className="pt-24 pb-8">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="nx-breadcrumb mb-6">
            <ol className="inline-flex items-center gap-1.5 list-none">
              <li>
                <button
                  onClick={() => navigate('home')}
                  className="hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2F6BFF] rounded-sm"
                >
                  Home
                </button>
              </li>
              <li>
                <ChevronRight
                  className="w-3.5 h-3.5 inline-block"
                  style={{ color: 'var(--muted-foreground)' }}
                />
              </li>
              <li>
                <span className="font-medium" style={{ color: 'var(--foreground)' }}>
                  Compliance Statement
                </span>
              </li>
            </ol>
          </nav>

          <motion.h1
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4"
            style={{ color: 'var(--foreground)' }}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            Compliance Statement
          </motion.h1>

          <motion.p
            className="text-base leading-relaxed max-w-2xl"
            style={{ color: 'var(--muted-foreground)' }}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            A clear and transparent declaration of NeXFlowX&rsquo;s regulatory position,
            operational scope, corporate structure, and the role of licensed partners in all
            financial activities. NeXFlowX™ is owned and operated by IAHUB360 LTD.
          </motion.p>
        </header>

        {/* ─── Divider ─── */}
        <div className="nx-divider mb-12" />

        {/* ─── 1. Main Compliance Statement ─── */}
        <section ref={statementRef} className="mb-16">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={statementInView ? 'visible' : 'hidden'}
            custom={0}
          >
            {/* Prominent statement card */}
            <div
              className="rounded-2xl p-8 sm:p-10 border relative overflow-hidden"
              style={{
                background: 'var(--card)',
                borderColor: 'rgba(47, 107, 255, 0.18)',
                boxShadow: '0 10px 15px -3px rgba(0,0,0,0.08)',
              }}
            >
              {/* Blue gradient accent at top */}
              <div
                className="absolute top-0 left-0 right-0 h-1"
                style={{
                  background:
                    'linear-gradient(90deg, #0A1F44, #2F6BFF)',
                }}
              />

              {/* Shield icon */}
              <div className="flex items-center gap-4 mb-8">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                  style={{
                    background: 'rgba(47, 107, 255, 0.08)',
                    border: '1px solid rgba(47, 107, 255, 0.18)',
                  }}
                >
                  <ShieldCheck
                    className="w-6 h-6"
                    style={{ color: '#2F6BFF' }}
                    strokeWidth={1.8}
                  />
                </div>
                <h2
                  className="text-lg sm:text-xl font-bold"
                  style={{
                    color: 'var(--foreground)',
                  }}
                >
                  Official Compliance Declaration
                </h2>
              </div>

              {/* Main statement text - large and prominent */}
              <div className="space-y-6">
                <p
                  className="text-lg sm:text-xl font-semibold leading-relaxed"
                  style={{ color: 'var(--foreground)' }}
                >
                  NexFlowX operates strictly as a Technology Service Provider and does not
                  engage in regulated financial activities.
                </p>

                <p
                  className="text-base sm:text-lg leading-relaxed"
                  style={{ color: 'var(--muted-foreground)' }}
                >
                  The platform does not hold client funds, execute transactions, or provide
                  payment services.
                </p>

                <p
                  className="text-base sm:text-lg leading-relaxed"
                  style={{ color: 'var(--muted-foreground)' }}
                >
                  All financial operations are performed by licensed third-party
                  institutions.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Critical disclaimers below the statement */}
          <motion.div
            className="mt-6 space-y-3"
            variants={fadeUp}
            initial="hidden"
            animate={statementInView ? 'visible' : 'hidden'}
            custom={1}
          >
            {[
              'NexFlowX is NOT a bank, Payment Service Provider (PSP), or Electronic Money Institution (EMI).',
              'NexFlowX does NOT hold, custody, or manage client funds.',
              'NexFlowX does NOT process, execute, or settle financial transactions.',
            ].map((text, idx) => (
              <div key={idx} className="nx-compliance-banner flex items-start gap-3">
                <div
                  className="w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                  style={{ background: 'rgba(220, 38, 38, 0.12)' }}
                >
                  <span
                    className="text-xs font-bold leading-none"
                    style={{ color: '#EF4444' }}
                  >
                    !
                  </span>
                </div>
                <p
                  className="text-sm font-semibold leading-relaxed"
                  style={{ color: '#EF4444' }}
                >
                  {text}
                </p>
              </div>
            ))}
          </motion.div>
        </section>

        {/* ─── Divider ─── */}
        <div className="nx-divider mb-12" />

        {/* ─── Corporate Entity Framework ─── */}
        <section ref={corporateRef} className="mb-16" aria-labelledby="corporate-heading">
          <motion.h2
            id="corporate-heading"
            className="text-2xl sm:text-3xl font-bold mb-4"
            style={{ color: 'var(--foreground)' }}
            variants={fadeUp}
            initial="hidden"
            animate={corporateInView ? 'visible' : 'hidden'}
            custom={0}
          >
            Corporate Entity Framework
          </motion.h2>

          <motion.p
            className="text-base leading-relaxed mb-8 max-w-2xl"
            style={{ color: 'var(--muted-foreground)' }}
            variants={fadeUp}
            initial="hidden"
            animate={corporateInView ? 'visible' : 'hidden'}
            custom={1}
          >
            NeXFlowX&trade; is a financial technology brand owned and operated by IAHUB360 LTD.
            Global operations are executed through interconnected entities operating under
            Master Licensing Agreements, ensuring technology remains global while compliance
            remains local.
          </motion.p>

          <div className="grid gap-4 sm:grid-cols-2 mb-8">
            {/* IP Holding Core */}
            <motion.div
              className="rounded-xl p-6 border relative overflow-hidden"
              style={{ background: 'var(--card)', borderColor: 'rgba(47, 107, 255, 0.18)', boxShadow: '0 1px 2px rgba(0,0,0,0.04)' }}
              variants={fadeUp}
              initial="hidden"
              animate={corporateInView ? 'visible' : 'hidden'}
              custom={2}
            >
              <div className="absolute top-0 left-0 right-0 h-1" style={{ background: 'linear-gradient(90deg, #0A1F44, #2F6BFF)' }} />
              <span className="nx-badge nx-badge-info text-xs mb-3 inline-flex">Global IP Holder</span>
              <h3 className="text-base font-bold mb-1" style={{ color: 'var(--foreground)' }}>IAHUB360 LTD</h3>
              <p className="text-xs mb-2" style={{ color: '#2F6BFF' }}>Company No. 16626733</p>
              <p className="text-xs" style={{ color: 'var(--muted-foreground)' }}>124-128 City Road, London, EC1V 2NX, UK</p>
              <p className="text-xs mt-3 leading-relaxed" style={{ color: 'var(--muted-foreground)' }}>
                Master IP Holder, Global Steering Committee base, and ultimate beneficiary of licensing royalties.
              </p>
            </motion.div>

            {/* LATAM Node */}
            <motion.div
              className="rounded-xl p-6 border"
              style={{ background: 'var(--card)', borderColor: 'var(--border)', boxShadow: '0 1px 2px rgba(0,0,0,0.04)' }}
              variants={fadeUp}
              initial="hidden"
              animate={corporateInView ? 'visible' : 'hidden'}
              custom={3}
            >
              <span className="nx-badge nx-badge-info text-xs mb-3 inline-flex">LATAM Node</span>
              <h3 className="text-base font-bold mb-1" style={{ color: 'var(--foreground)' }}>NexTrustX Brasil</h3>
              <p className="text-xs mb-2" style={{ color: '#2F6BFF' }}>CNPJ 65.764.339/0001-00</p>
              <p className="text-xs mt-3 leading-relaxed" style={{ color: 'var(--muted-foreground)' }}>
                Latin American bridge, facilitating technical translation between PIX protocols and the NexFlowX ISO standards.
              </p>
            </motion.div>
          </div>

          {/* EU Nodes */}
          <motion.div
            className="rounded-xl p-6 border mb-8"
            style={{ background: 'var(--card)', borderColor: 'var(--border)', boxShadow: '0 1px 2px rgba(0,0,0,0.04)' }}
            variants={fadeUp}
            initial="hidden"
            animate={corporateInView ? 'visible' : 'hidden'}
            custom={4}
          >
            <span className="nx-badge nx-badge-info text-xs mb-4 inline-flex">European Operations (EU Nodes)</span>
            <div className="grid gap-4 sm:grid-cols-3">
              <div>
                <p className="text-sm font-semibold" style={{ color: 'var(--foreground)' }}>NeXTech France</p>
                <p className="text-xs" style={{ color: '#2F6BFF' }}>SIRET 79015500600014</p>
                <p className="text-xs mt-1 leading-relaxed" style={{ color: 'var(--muted-foreground)' }}>
                  Francophone market expansion and EU compliance representation.
                </p>
              </div>
              <div>
                <p className="text-sm font-semibold" style={{ color: 'var(--foreground)' }}>NeXTech Portugal</p>
                <p className="text-xs" style={{ color: '#2F6BFF' }}>NIF 219458090</p>
                <p className="text-xs mt-1 leading-relaxed" style={{ color: 'var(--muted-foreground)' }}>
                  Iberian technical onboarding, merchant support, and API Sandbox testing.
                </p>
              </div>
              <div>
                <p className="text-sm font-semibold" style={{ color: 'var(--foreground)' }}>NeX-Systems Portugal</p>
                <p className="text-xs" style={{ color: '#2F6BFF' }}>NIF 312668201</p>
                <p className="text-xs mt-1 leading-relaxed" style={{ color: 'var(--muted-foreground)' }}>
                  Technical infrastructure and systems operations.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Manifesto */}
          <motion.div
            className="rounded-xl p-6 sm:p-8 border-l-[3px]"
            style={{ borderColor: 'var(--border)', borderLeftColor: '#2F6BFF', background: 'var(--muted)' }}
            variants={fadeUp}
            initial="hidden"
            animate={corporateInView ? 'visible' : 'hidden'}
            custom={5}
          >
            <p className="text-xs font-semibold uppercase tracking-wider mb-3" style={{ color: 'var(--muted-foreground)' }}>
              NexFlowX Global Vision — Operational Manifesto
            </p>
            <blockquote className="text-sm sm:text-base leading-relaxed italic" style={{ color: 'var(--foreground)' }}>
              &ldquo;IAHUB360 LTD aims to build and maintain the world&rsquo;s most robust and agnostic
              Financial Logistics API (NexFlowX). The organization is committed to a 100% Non-Custodial
              Technology Service Provider (TSP) model. We orchestrate data and routing logic; we do not
              intermediate or hold third-party capital. Our ultimate asset is our Intellectual Property.&rdquo;
            </blockquote>
          </motion.div>
        </section>

        {/* ─── Divider ─── */}
        <div className="nx-divider mb-12" />

        {/* ─── 2. Our Position ─── */}
        <section ref={positionRef} className="mb-16" aria-labelledby="position-heading">
          <motion.h2
            id="position-heading"
            className="text-2xl sm:text-3xl font-bold mb-8"
            style={{ color: 'var(--foreground)' }}
            variants={fadeUp}
            initial="hidden"
            animate={positionInView ? 'visible' : 'hidden'}
            custom={0}
          >
            Our Position
          </motion.h2>

          <div className="space-y-5">
            {[
              {
                Icon: Server,
                title: 'Technology Service Provider',
                desc: 'NexFlowX provides software infrastructure and API services that enable merchants to integrate with multiple payment providers through a unified interface. Our platform delivers routing logic, request normalisation, real-time monitoring, and data aggregation tools. We are a technology company, not a financial institution.',
              },
              {
                Icon: Network,
                title: 'Infrastructure Layer',
                desc: 'NexFlowX operates as an infrastructure layer that connects merchants to regulated financial institutions. We facilitate the secure and reliable transmission of data and instructions between parties. Our role is limited to providing the technology that enables this communication — we do not participate in the underlying financial activities.',
              },
              {
                Icon: Ban,
                title: 'No Financial Services',
                desc: 'NexFlowX does not provide banking, payment processing, money transmission, lending, or any form of custodial services. We do not accept deposits, hold funds, issue electronic money, or provide any product or service that would constitute a regulated financial activity under applicable law.',
              },
            ].map((item, idx) => (
              <motion.div
                key={item.title}
                className="nx-card p-6 flex flex-col sm:flex-row items-start gap-5"
                variants={fadeUp}
                initial="hidden"
                animate={positionInView ? 'visible' : 'hidden'}
                custom={idx + 1}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                  style={{
                    background: 'rgba(47, 107, 255, 0.08)',
                    border: '1px solid rgba(47, 107, 255, 0.18)',
                  }}
                >
                  <item.Icon
                    className="w-6 h-6"
                    style={{ color: '#2F6BFF' }}
                    strokeWidth={1.8}
                  />
                </div>
                <div>
                  <h3
                    className="text-base sm:text-lg font-bold mb-2"
                    style={{
                      color: 'var(--foreground)',
                    }}
                  >
                    {item.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: 'var(--muted-foreground)' }}
                  >
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ─── Divider ─── */}
        <div className="nx-divider mb-12" />

        {/* ─── 3. Partner-Based Execution ─── */}
        <section ref={partnersRef} className="mb-16" aria-labelledby="partners-heading">
          <motion.h2
            id="partners-heading"
            className="text-2xl sm:text-3xl font-bold mb-4"
            style={{ color: 'var(--foreground)' }}
            variants={fadeUp}
            initial="hidden"
            animate={partnersInView ? 'visible' : 'hidden'}
            custom={0}
          >
            Partner-Based Execution
          </motion.h2>

          <motion.p
            className="text-base leading-relaxed mb-8 max-w-2xl"
            style={{ color: 'var(--muted-foreground)' }}
            variants={fadeUp}
            initial="hidden"
            animate={partnersInView ? 'visible' : 'hidden'}
            custom={1}
          >
            All payment processing, fund holding, and financial services are provided by our
            regulated partners:
          </motion.p>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              {
                Icon: CreditCard,
                title: 'Licensed Payment Service Providers (PSPs)',
                desc: 'Authorised and regulated PSPs that execute payment transactions, manage payment flows, and ensure compliance with payment services regulations in their respective jurisdictions.',
              },
              {
                Icon: Wallet,
                title: 'Authorized Electronic Money Institutions (EMIs)',
                desc: 'Regulated EMIs that may issue electronic money, provide e-wallet services, and facilitate the movement of funds in compliance with applicable electronic money regulations.',
              },
              {
                Icon: Landmark,
                title: 'Regulated Banking Institutions',
                desc: 'Licensed banks and financial institutions that provide banking services, hold client funds, and facilitate settlement and clearing in accordance with prudential regulations.',
              },
              {
                Icon: Building2,
                title: 'Authorized Payment Processors',
                desc: 'Duly authorised payment processors and acquirers that handle card transactions, direct debit processing, and other payment methods in compliance with card scheme rules and regulatory requirements.',
              },
            ].map((item, idx) => (
              <motion.div
                key={item.title}
                className="rounded-xl p-6 border"
                style={{
                  background: 'var(--card)',
                  borderColor: 'var(--border)',
                  boxShadow: '0 1px 2px rgba(0,0,0,0.04)',
                }}
                variants={fadeUp}
                initial="hidden"
                animate={partnersInView ? 'visible' : 'hidden'}
                custom={idx + 2}
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center mb-4"
                  style={{
                    background: 'rgba(47, 107, 255, 0.08)',
                    border: '1px solid rgba(47, 107, 255, 0.18)',
                  }}
                >
                  <item.Icon
                    className="w-5 h-5"
                    style={{ color: '#2F6BFF' }}
                    strokeWidth={1.8}
                  />
                </div>
                <h3
                  className="text-sm sm:text-base font-bold mb-2"
                  style={{
                    color: 'var(--foreground)',
                  }}
                >
                  {item.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: 'var(--muted-foreground)' }}
                >
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ─── Divider ─── */}
        <div className="nx-divider mb-12" />

        {/* ─── 4. Regulatory Framework ─── */}
        <section ref={frameworkRef} className="mb-16" aria-labelledby="framework-heading">
          <motion.h2
            id="framework-heading"
            className="text-2xl sm:text-3xl font-bold mb-8"
            style={{ color: 'var(--foreground)' }}
            variants={fadeUp}
            initial="hidden"
            animate={frameworkInView ? 'visible' : 'hidden'}
            custom={0}
          >
            Regulatory Framework
          </motion.h2>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={frameworkInView ? 'visible' : 'hidden'}
            custom={1}
          >
            <div
              className="rounded-xl p-6 sm:p-8 border"
              style={{
                background: 'var(--card)',
                borderColor: 'var(--border)',
                boxShadow: '0 1px 2px rgba(0,0,0,0.04)',
              }}
            >
              <div className="flex items-start gap-4 mb-6">
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                  style={{
                    background: 'rgba(47, 107, 255, 0.08)',
                    border: '1px solid rgba(47, 107, 255, 0.18)',
                  }}
                >
                  <Scale
                    className="w-5 h-5"
                    style={{ color: '#2F6BFF' }}
                    strokeWidth={1.8}
                  />
                </div>
                <div>
                  <h3
                    className="text-base sm:text-lg font-bold mb-1"
                    style={{
                      color: 'var(--foreground)',
                    }}
                  >
                    Compliance Through Licensed Partners
                  </h3>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: 'var(--muted-foreground)' }}
                  >
                    NexFlowX ensures regulatory compliance through the rigorous vetting and
                    ongoing monitoring of all partner institutions.
                  </p>
                </div>
              </div>

              <div className="space-y-4 pl-0 sm:pl-14">
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: 'var(--muted-foreground)' }}
                >
                  All financial partners connected to the NexFlowX platform are required to
                  hold valid licences and authorisations from the relevant regulatory
                  authorities in their operating jurisdictions. This includes authorisations
                  from the Financial Conduct Authority (FCA) in the United Kingdom, the
                  European Central Bank (ECB) and respective national competent authorities
                  within the European Economic Area, and equivalent regulatory bodies in
                  other jurisdictions.
                </p>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: 'var(--muted-foreground)' }}
                >
                  NexFlowX conducts comprehensive due diligence on all partner institutions
                  prior to onboarding, including verification of licences, review of
                  regulatory standing, assessment of compliance frameworks, and ongoing
                  monitoring of regulatory status. Partners are required to maintain
                  compliance with all applicable anti-money laundering (AML), know your
                  customer (KYC), and data protection regulations.
                </p>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: 'var(--muted-foreground)' }}
                >
                  While NexFlowX facilitates the integration between merchants and
                  regulated financial institutions, the responsibility for ensuring
                  compliance with financial regulations, payment services directives, and
                  prudential requirements rests exclusively with the licensed partners that
                  perform the regulated activities.
                </p>
              </div>
            </div>
          </motion.div>
        </section>

        {/* ─── Divider ─── */}
        <div className="nx-divider mb-12" />

        {/* ─── 5. Contact for Compliance Inquiries ─── */}
        <section ref={contactRef} className="pb-24" aria-labelledby="compliance-contact-heading">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={contactInView ? 'visible' : 'hidden'}
            custom={0}
          >
            <div
              className="rounded-2xl p-8 sm:p-10 border relative overflow-hidden"
              style={{
                background: 'var(--card)',
                borderColor: 'rgba(47, 107, 255, 0.18)',
                boxShadow: '0 4px 6px -1px rgba(0,0,0,0.07)',
              }}
            >
              {/* Gradient accent at bottom */}
              <div
                className="absolute bottom-0 left-0 right-0 h-1"
                style={{
                  background:
                    'linear-gradient(90deg, #0A1F44, #2F6BFF)',
                }}
              />

              <div className="flex items-center gap-4 mb-6">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                  style={{
                    background: 'rgba(47, 107, 255, 0.08)',
                    border: '1px solid rgba(47, 107, 255, 0.18)',
                  }}
                >
                  <Mail
                    className="w-6 h-6"
                    style={{ color: '#2F6BFF' }}
                    strokeWidth={1.8}
                  />
                </div>
                <div>
                  <h2
                    id="compliance-contact-heading"
                    className="text-xl sm:text-2xl font-bold"
                    style={{
                      color: 'var(--foreground)',
                    }}
                  >
                    Compliance Inquiries
                  </h2>
                  <p
                    className="text-sm mt-0.5"
                    style={{ color: 'var(--muted-foreground)' }}
                  >
                    For regulatory, compliance, or partnership queries
                  </p>
                </div>
              </div>

              <p
                className="text-sm sm:text-base leading-relaxed mb-6"
                style={{ color: 'var(--muted-foreground)' }}
              >
                If you have any questions regarding NexFlowX&apos;s compliance position,
                regulatory framework, partner due diligence processes, or require
                documentation for your own compliance records, please contact our compliance
                team directly.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <div
                  className="inline-flex items-center gap-3 px-5 py-3 rounded-lg"
                  style={{
                    background: 'rgba(47, 107, 255, 0.08)',
                    border: '1px solid rgba(47, 107, 255, 0.18)',
                  }}
                >
                  <Mail
                    className="w-4 h-4 shrink-0"
                    style={{ color: '#2F6BFF' }}
                    strokeWidth={1.8}
                  />
                  <div>
                    <span
                      className="text-xs block mb-0.5"
                      style={{ color: 'var(--muted-foreground)' }}
                    >
                      Compliance Team
                    </span>
                    <span
                      className="text-sm font-semibold"
                      style={{ color: '#2F6BFF' }}
                    >
                      compliance@nexflowx.tech
                    </span>
                  </div>
                </div>

                <div
                  className="inline-flex items-center gap-3 px-5 py-3 rounded-lg"
                  style={{
                    background: 'var(--muted)',
                    border: '1px solid var(--border)',
                  }}
                >
                  <Mail
                    className="w-4 h-4 shrink-0"
                    style={{ color: 'var(--muted-foreground)' }}
                    strokeWidth={1.8}
                  />
                  <div>
                    <span
                      className="text-xs block mb-0.5"
                      style={{ color: 'var(--muted-foreground)' }}
                    >
                      General Support
                    </span>
                    <span
                      className="text-sm font-semibold"
                      style={{ color: 'var(--foreground)' }}
                    >
                      support@nexflowx.tech
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </section>
      </div>
    </div>
  );
}
