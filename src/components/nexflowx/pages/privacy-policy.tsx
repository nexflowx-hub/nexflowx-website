'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  ChevronRight,
  ShieldCheck,
  Database,
  Users,
  Target,
  Share2,
  Lock,
  Clock,
  UserCheck,
  Cookie,
  RefreshCw,
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
   PrivacyPolicyPage
   ═══════════════════════════════════════ */
export function PrivacyPolicyPage() {
  const navigate = useAppStore((s) => s.navigate);

  const headerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const contentInView = useInView(contentRef, { once: true, margin: '-60px' });

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
                  Privacy Policy
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
            Privacy Policy
          </motion.h1>

          <motion.p
            className="text-sm font-medium mb-1"
            style={{ color: 'var(--muted-foreground)', fontFamily: 'var(--font-space-mono)' }}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            Last updated: January 2026
          </motion.p>

          <motion.p
            className="text-base leading-relaxed max-w-2xl"
            style={{ color: 'var(--muted-foreground)' }}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            NexFlowX is committed to protecting your privacy and ensuring the responsible
            handling of all personal data in accordance with applicable data protection
            legislation, including the UK General Data Protection Regulation (UK GDPR) and
            the EU General Data Protection Regulation (EU GDPR).
          </motion.p>
          <motion.p
            className="text-base leading-relaxed max-w-2xl"
            style={{ color: 'var(--muted-foreground)' }}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            NeXFlowX™ is a financial technology brand owned and operated by IAHUB360 LTD (Company No. 16626733), registered at 124-128 City Road, London, EC1V 2NX, United Kingdom. Regional data processing may involve: NeXTech France (SIRET 79015500600014), NeXTech Portugal (NIF 219458090), NeX-Systems Portugal (NIF 312668201), and NexTrustX Brasil (CNPJ 65.764.339/0001-00).
          </motion.p>
        </header>

        {/* ─── Divider ─── */}
        <div className="nx-divider mb-12" />

        {/* ─── Legal Content ─── */}
        <div ref={contentRef} className="pb-24">
          {/* ── Section 1: Introduction ── */}
          <motion.section
            className="mb-12"
            variants={fadeUp}
            initial="hidden"
            animate={contentInView ? 'visible' : 'hidden'}
            custom={0}
          >
            <div className="flex items-center gap-3 mb-4">
              <ShieldCheck
                className="w-5 h-5 shrink-0"
                style={{ color: '#2F6BFF' }}
                strokeWidth={1.8}
              />
              <h2
                className="text-xl sm:text-2xl font-bold"
                style={{
                  color: 'var(--foreground)',
                }}
              >
                1. Introduction
              </h2>
            </div>
            <div className="space-y-4 pl-0 sm:pl-8">
              <p
                className="text-sm sm:text-base leading-relaxed"
                style={{ color: 'var(--muted-foreground)' }}
              >
                IAHUB360 LTD, on behalf of the NeXFlowX™ brand ("NexFlowX", "we", "us", or "our") is committed
                to protecting the privacy and personal data of all individuals and entities
                that interact with our platform and services. This Privacy Policy ("Policy")
                describes how we collect, use, store, share, and protect personal data when
                you access or use the NexFlowX platform, APIs, documentation, and related
                services.
              </p>
              <p
                className="text-sm sm:text-base leading-relaxed"
                style={{ color: 'var(--muted-foreground)' }}
              >
                This Policy applies to all operators, merchants, partners, employees, and
                any individuals whose personal data is processed by NexFlowX in connection
                with the provision of our technology services. We encourage you to read this
                Policy carefully and to contact us if you have any questions.
              </p>
            </div>
          </motion.section>

          <div className="nx-divider mb-12" />

          {/* ── Section 2: Data Controller vs Processor ── */}
          <motion.section
            className="mb-12"
            variants={fadeUp}
            initial="hidden"
            animate={contentInView ? 'visible' : 'hidden'}
            custom={1}
          >
            <div className="flex items-center gap-3 mb-4">
              <Users
                className="w-5 h-5 shrink-0"
                style={{ color: '#2F6BFF' }}
                strokeWidth={1.8}
              />
              <h2
                className="text-xl sm:text-2xl font-bold"
                style={{
                  color: 'var(--foreground)',
                }}
              >
                2. Data Controller vs Data Processor
              </h2>
            </div>
            <div className="space-y-4 pl-0 sm:pl-8">
              <p
                className="text-sm sm:text-base leading-relaxed"
                style={{ color: 'var(--muted-foreground)' }}
              >
                Under applicable data protection legislation, NexFlowX acts as a Data
                Processor on behalf of its clients and operators. The clients and operators
                who use the NexFlowX platform to manage their payment integration activities
                are the Data Controllers of the personal data relating to their end users
                and customers.
              </p>

              <div className="grid gap-4 sm:grid-cols-2">
                <div
                  className="rounded-lg p-5 border"
                  style={{
                    background: 'var(--card)',
                    borderColor: 'var(--border)',
                  }}
                >
                  <h3
                    className="text-sm font-semibold mb-2"
                    style={{ color: '#2F6BFF' }}
                  >
                    Data Controllers
                  </h3>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: 'var(--muted-foreground)' }}
                  >
                    Operators and clients using the NexFlowX platform are Data Controllers.
                    They determine the purposes and means of processing personal data
                    relating to their end users, customers, and business operations.
                  </p>
                </div>
                <div
                  className="rounded-lg p-5 border"
                  style={{
                    background: 'rgba(47, 107, 255, 0.08)',
                    borderColor: 'rgba(47, 107, 255, 0.18)',
                  }}
                >
                  <h3
                    className="text-sm font-semibold mb-2"
                    style={{ color: '#2F6BFF' }}
                  >
                    NexFlowX (Data Processor)
                  </h3>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: 'var(--muted-foreground)' }}
                  >
                    NexFlowX processes personal data exclusively on behalf of and under the
                    instructions of its Data Controllers. We do not process personal data
                    for our own purposes beyond what is necessary to provide our technology
                    services.
                  </p>
                  <p className="text-sm leading-relaxed mt-3" style={{ color: 'var(--muted-foreground)' }}>
                    As part of the NexFlowX operational framework, regional entities including NeXTech France,
                    NeXTech Portugal, NeX-Systems Portugal, and NexTrustX Brasil may process data under the
                    instructions of IAHUB360 LTD in accordance with Master Licensing Agreements. Each entity
                    complies with applicable local data protection regulations in their respective jurisdictions.
                  </p>
                </div>
              </div>

              <p
                className="text-sm sm:text-base leading-relaxed"
                style={{ color: 'var(--muted-foreground)' }}
              >
                A separate Data Processing Agreement (DPA) is available upon request and
                forms part of the contractual relationship between NexFlowX and its clients.
                Please contact{' '}
                <span className="font-medium" style={{ color: '#2F6BFF' }}>
                  support@nexflowx.tech
                </span>{' '}
                to request a copy of our standard DPA.
              </p>
            </div>
          </motion.section>

          <div className="nx-divider mb-12" />

          {/* ── Section 3: Data Collected ── */}
          <motion.section
            className="mb-12"
            variants={fadeUp}
            initial="hidden"
            animate={contentInView ? 'visible' : 'hidden'}
            custom={2}
          >
            <div className="flex items-center gap-3 mb-4">
              <Database
                className="w-5 h-5 shrink-0"
                style={{ color: '#2F6BFF' }}
                strokeWidth={1.8}
              />
              <h2
                className="text-xl sm:text-2xl font-bold"
                style={{
                  color: 'var(--foreground)',
                }}
              >
                3. Data Collected
              </h2>
            </div>
            <div className="space-y-4 pl-0 sm:pl-8">
              <p
                className="text-sm sm:text-base leading-relaxed"
                style={{ color: 'var(--muted-foreground)' }}
              >
                NexFlowX collects and processes the following categories of data as
                necessary for the provision of our technology services:
              </p>

              <div className="space-y-3">
                {[
                  {
                    title: 'Technical Data',
                    desc: 'We automatically collect certain technical information when you access our platform, including Internet Protocol (IP) addresses, browser type and version, operating system, device identifiers, screen resolution, language preferences, referring URLs, and interaction data such as pages visited, click patterns, and session durations.',
                  },
                  {
                    title: 'Contact Information',
                    desc: 'When you register an account, request a demo, or contact our support team, we collect your name, email address, company name, job title, phone number, and any other information you voluntarily provide in communication with us.',
                  },
                  {
                    title: 'API Usage Data',
                    desc: 'We collect data relating to your use of our API services, including request and response payloads, endpoint usage patterns, authentication events, error logs, latency metrics, and throughput statistics. This data is used for service delivery, monitoring, and optimisation purposes.',
                  },
                  {
                    title: 'Transaction Metadata (Non-Financial)',
                    desc: 'NexFlowX collects and processes metadata associated with API transactions for operational purposes. This metadata may include transaction identifiers, timestamps, status codes, routing information, and merchant identifiers. NexFlowX does not collect, store, or have access to financial data such as card numbers, bank account details, or payment credentials.',
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="rounded-lg p-4 border"
                    style={{
                      background: 'var(--muted)',
                      borderColor: 'var(--border)',
                    }}
                  >
                    <h3
                      className="text-sm font-semibold mb-1.5"
                      style={{ color: 'var(--foreground)' }}
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
                ))}
              </div>
            </div>
          </motion.section>

          <div className="nx-divider mb-12" />

          {/* ── Section 4: Purpose of Processing ── */}
          <motion.section
            className="mb-12"
            variants={fadeUp}
            initial="hidden"
            animate={contentInView ? 'visible' : 'hidden'}
            custom={3}
          >
            <div className="flex items-center gap-3 mb-4">
              <Target
                className="w-5 h-5 shrink-0"
                style={{ color: '#2F6BFF' }}
                strokeWidth={1.8}
              />
              <h2
                className="text-xl sm:text-2xl font-bold"
                style={{
                  color: 'var(--foreground)',
                }}
              >
                4. Purpose of Processing
              </h2>
            </div>
            <div className="space-y-4 pl-0 sm:pl-8">
              <p
                className="text-sm sm:text-base leading-relaxed"
                style={{ color: 'var(--muted-foreground)' }}
              >
                NexFlowX processes personal data for the following legitimate purposes:
              </p>
              <ul className="space-y-3 pl-0 sm:pl-4">
                {[
                  {
                    title: 'Service Delivery and Maintenance',
                    desc: 'To provide, operate, maintain, and improve our API infrastructure, platform, and related services. This includes processing API requests, managing user accounts, and ensuring system availability.',
                  },
                  {
                    title: 'Communication with Users',
                    desc: 'To respond to your enquiries, provide technical support, send service notifications, deliver important updates about our platform, and communicate information that you have requested or that we reasonably believe may be relevant to your use of our services.',
                  },
                  {
                    title: 'Security and Fraud Prevention',
                    desc: 'To monitor for and prevent unauthorised access, fraudulent activity, security breaches, and abuse of our platform. This includes analysing usage patterns, implementing access controls, and conducting security assessments.',
                  },
                  {
                    title: 'Service Improvement',
                    desc: 'To analyse usage data, identify trends, and gather insights that help us improve our services, develop new features, enhance user experience, and optimise platform performance and reliability.',
                  },
                ].map((item) => (
                  <li key={item.title}>
                    <div
                      className="rounded-lg p-4 border"
                      style={{
                        background: 'var(--muted)',
                        borderColor: 'var(--border)',
                      }}
                    >
                      <h3
                        className="text-sm font-semibold mb-1.5"
                        style={{ color: 'var(--foreground)' }}
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
                  </li>
                ))}
              </ul>
              <p
                className="text-sm sm:text-base leading-relaxed"
                style={{ color: 'var(--muted-foreground)' }}
              >
                The legal bases for our processing activities include: (a) performance of a
                contract; (b) legitimate interests of NexFlowX or third parties; (c)
                compliance with a legal obligation; and (d) consent where explicitly
                provided.
              </p>
            </div>
          </motion.section>

          <div className="nx-divider mb-12" />

          {/* ── Section 5: Data Sharing ── */}
          <motion.section
            className="mb-12"
            variants={fadeUp}
            initial="hidden"
            animate={contentInView ? 'visible' : 'hidden'}
            custom={4}
          >
            <div className="flex items-center gap-3 mb-4">
              <Share2
                className="w-5 h-5 shrink-0"
                style={{ color: '#2F6BFF' }}
                strokeWidth={1.8}
              />
              <h2
                className="text-xl sm:text-2xl font-bold"
                style={{
                  color: 'var(--foreground)',
                }}
              >
                5. Data Sharing
              </h2>
            </div>
            <div className="space-y-4 pl-0 sm:pl-8">
              <div className="nx-compliance-banner flex items-start gap-3">
                <ShieldCheck
                  className="w-5 h-5 shrink-0 mt-0.5"
                  style={{ color: '#22C55E' }}
                  strokeWidth={1.8}
                />
                <p className="text-sm leading-relaxed font-medium" style={{ color: '#22C55E' }}>
                  NexFlowX does NOT sell, rent, or trade personal data to any third party.
                </p>
              </div>

              <p
                className="text-sm sm:text-base leading-relaxed"
                style={{ color: 'var(--muted-foreground)' }}
              >
                Data is shared only in the following limited circumstances and with the
                following categories of recipients:
              </p>
              <ul className="space-y-3 pl-0 sm:pl-4">
                {[
                  {
                    title: 'Regulated Payment Service Providers (PSPs)',
                    desc: 'Data necessary for the facilitation of API-based communication between merchants and PSPs may be shared with our regulated PSP partners to enable the delivery of payment orchestration services. All PSP partners are subject to their own regulatory obligations and data protection compliance requirements.',
                  },
                  {
                    title: 'Service Providers and Infrastructure Partners',
                    desc: 'We may share data with trusted third-party service providers who assist us in operating our platform, including cloud hosting providers (AWS, Google Cloud), analytics providers, monitoring tools, and customer support platforms. These providers are contractually bound to process data only as instructed by NexFlowX and to maintain appropriate security measures.',
                  },
                  {
                    title: 'Legal and Regulatory Requirements',
                    desc: 'We may disclose personal data if required to do so by law, regulation, court order, or governmental authority. In such cases, we will take reasonable steps to notify the affected Data Controller unless prohibited by law.',
                  },
                ].map((item) => (
                  <li key={item.title}>
                    <div
                      className="rounded-lg p-4 border"
                      style={{
                        background: 'var(--muted)',
                        borderColor: 'var(--border)',
                      }}
                    >
                      <h3
                        className="text-sm font-semibold mb-1.5"
                        style={{ color: 'var(--foreground)' }}
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
                  </li>
                ))}
              </ul>
            </div>
          </motion.section>

          <div className="nx-divider mb-12" />

          {/* ── Section 6: Security Measures ── */}
          <motion.section
            className="mb-12"
            variants={fadeUp}
            initial="hidden"
            animate={contentInView ? 'visible' : 'hidden'}
            custom={5}
          >
            <div className="flex items-center gap-3 mb-4">
              <Lock
                className="w-5 h-5 shrink-0"
                style={{ color: '#2F6BFF' }}
                strokeWidth={1.8}
              />
              <h2
                className="text-xl sm:text-2xl font-bold"
                style={{
                  color: 'var(--foreground)',
                }}
              >
                6. Security Measures
              </h2>
            </div>
            <div className="space-y-4 pl-0 sm:pl-8">
              <p
                className="text-sm sm:text-base leading-relaxed"
                style={{ color: 'var(--muted-foreground)' }}
              >
                NexFlowX implements robust technical and organisational measures to protect
                personal data against unauthorised access, alteration, disclosure, or
                destruction. We utilize end-to-end encryption for all data packets routed
                through our API. Our security measures include:
              </p>
              <div className="grid gap-3 sm:grid-cols-3">
                {[
                  {
                    title: 'Encryption in Transit',
                    desc: 'All data transmitted between clients and the NexFlowX platform is encrypted using TLS 1.3 (Transport Layer Security) with strong cipher suites.',
                  },
                  {
                    title: 'Encryption at Rest',
                    desc: 'Data stored within our systems is encrypted using AES-256 (Advanced Encryption Standard with 256-bit keys) for databases, file storage, and backups.',
                  },
                  {
                    title: 'Access Controls',
                    desc: 'Role-based access control (RBAC), multi-factor authentication (MFA), and the principle of least privilege are enforced across all systems and personnel.',
                  },
                  {
                    title: 'Network Security',
                    desc: 'Our infrastructure is protected by firewalls, intrusion detection and prevention systems (IDS/IPS), and regular vulnerability scanning.',
                  },
                  {
                    title: 'Regular Assessments',
                    desc: 'We conduct periodic penetration testing, security audits, and code reviews by qualified third-party security firms to identify and remediate vulnerabilities.',
                  },
                  {
                    title: 'Incident Response',
                    desc: 'A comprehensive incident response plan is maintained, and personnel are trained to detect, contain, and respond to security incidents promptly.',
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="rounded-lg p-4 border"
                    style={{
                      background: 'var(--muted)',
                      borderColor: 'var(--border)',
                    }}
                  >
                    <h3
                      className="text-sm font-semibold mb-1.5"
                      style={{ color: 'var(--foreground)' }}
                    >
                      {item.title}
                    </h3>
                    <p
                      className="text-xs leading-relaxed"
                      style={{ color: 'var(--muted-foreground)' }}
                    >
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.section>

          <div className="nx-divider mb-12" />

          {/* ── Section 7: Data Retention ── */}
          <motion.section
            className="mb-12"
            variants={fadeUp}
            initial="hidden"
            animate={contentInView ? 'visible' : 'hidden'}
            custom={6}
          >
            <div className="flex items-center gap-3 mb-4">
              <Clock
                className="w-5 h-5 shrink-0"
                style={{ color: '#2F6BFF' }}
                strokeWidth={1.8}
              />
              <h2
                className="text-xl sm:text-2xl font-bold"
                style={{
                  color: 'var(--foreground)',
                }}
              >
                7. Data Retention
              </h2>
            </div>
            <div className="space-y-4 pl-0 sm:pl-8">
              <p
                className="text-sm sm:text-base leading-relaxed"
                style={{ color: 'var(--muted-foreground)' }}
              >
                NexFlowX retains personal data only for as long as necessary to fulfil the
                purposes for which it was collected, including satisfying any legal,
                accounting, or reporting requirements. Our retention practices are as
                follows:
              </p>
              <div className="space-y-3 pl-0 sm:pl-4">
                {[
                  {
                    title: 'Account Data',
                    desc: 'Retained for the duration of the contractual relationship and for a period of five (5) years following termination or closure of the account, after which it is securely deleted or anonymised.',
                  },
                  {
                    title: 'API Usage Logs',
                    desc: 'Transaction metadata and API usage logs are retained for a period of twelve (12) months from the date of generation, unless a longer retention period is required for security investigation or regulatory compliance.',
                  },
                  {
                    title: 'Technical Data',
                    desc: 'Automatically collected technical data, including IP addresses and browser information, is retained for a maximum of ninety (90) days unless required for security or fraud prevention purposes.',
                  },
                  {
                    title: 'Support Communications',
                    desc: 'Records of support tickets and correspondence are retained for three (3) years following the resolution of the matter.',
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="rounded-lg p-4 border"
                    style={{
                      background: 'var(--muted)',
                      borderColor: 'var(--border)',
                    }}
                  >
                    <h3
                      className="text-sm font-semibold mb-1.5"
                      style={{ color: 'var(--foreground)' }}
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
                ))}
              </div>
            </div>
          </motion.section>

          <div className="nx-divider mb-12" />

          {/* ── Section 8: User Rights (GDPR) ── */}
          <motion.section
            className="mb-12"
            variants={fadeUp}
            initial="hidden"
            animate={contentInView ? 'visible' : 'hidden'}
            custom={7}
          >
            <div className="flex items-center gap-3 mb-4">
              <UserCheck
                className="w-5 h-5 shrink-0"
                style={{ color: '#2F6BFF' }}
                strokeWidth={1.8}
              />
              <h2
                className="text-xl sm:text-2xl font-bold"
                style={{
                  color: 'var(--foreground)',
                }}
              >
                8. Your Rights
              </h2>
            </div>
            <div className="space-y-4 pl-0 sm:pl-8">
              <p
                className="text-sm sm:text-base leading-relaxed"
                style={{ color: 'var(--muted-foreground)' }}
              >
                Under the UK GDPR and EU GDPR, data subjects have the following rights
                regarding their personal data:
              </p>

              <div className="grid gap-3 sm:grid-cols-2">
                {[
                  { right: 'Right of Access', desc: 'You have the right to obtain confirmation as to whether your personal data is being processed, and if so, to access a copy of that data along with information about the processing activities.' },
                  { right: 'Right of Rectification', desc: 'You have the right to request the correction of any inaccurate or incomplete personal data that we hold about you.' },
                  { right: 'Right of Erasure', desc: 'You have the right to request the deletion of your personal data in certain circumstances, including where the data is no longer necessary for its intended purpose.' },
                  { right: 'Right of Data Portability', desc: 'You have the right to receive your personal data in a structured, commonly used, and machine-readable format, and to transmit it to another data controller.' },
                  { right: 'Right to Object', desc: 'You have the right to object to the processing of your personal data based on legitimate interests or for direct marketing purposes.' },
                  { right: 'Right to Restrict Processing', desc: 'You have the right to request the restriction of processing of your personal data in certain circumstances, such as while the accuracy of the data is being contested.' },
                ].map((item) => (
                  <div
                    key={item.right}
                    className="rounded-lg p-4 border"
                    style={{
                      background: 'var(--card)',
                      borderColor: 'var(--border)',
                    }}
                  >
                    <h3
                      className="text-sm font-semibold mb-1.5"
                      style={{ color: '#2F6BFF' }}
                    >
                      {item.right}
                    </h3>
                    <p
                      className="text-sm leading-relaxed"
                      style={{ color: 'var(--muted-foreground)' }}
                    >
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>

              <p
                className="text-sm sm:text-base leading-relaxed"
                style={{ color: 'var(--muted-foreground)' }}
              >
                To exercise any of these rights, please contact us at{' '}
                <span className="font-medium" style={{ color: '#2F6BFF' }}>
                  support@nexflowx.tech
                </span>
                . We will respond to all legitimate requests within thirty (30) days. In
                some cases, we may need to verify your identity before processing your
                request.
              </p>
            </div>
          </motion.section>

          <div className="nx-divider mb-12" />

          {/* ── Section 9: Cookies ── */}
          <motion.section
            className="mb-12"
            variants={fadeUp}
            initial="hidden"
            animate={contentInView ? 'visible' : 'hidden'}
            custom={8}
          >
            <div className="flex items-center gap-3 mb-4">
              <Cookie
                className="w-5 h-5 shrink-0"
                style={{ color: '#2F6BFF' }}
                strokeWidth={1.8}
              />
              <h2
                className="text-xl sm:text-2xl font-bold"
                style={{
                  color: 'var(--foreground)',
                }}
              >
                9. Cookies
              </h2>
            </div>
            <div className="space-y-4 pl-0 sm:pl-8">
              <p
                className="text-sm sm:text-base leading-relaxed"
                style={{ color: 'var(--muted-foreground)' }}
              >
                NexFlowX uses cookies and similar tracking technologies to provide and
                improve our services. Cookies are small text files placed on your device
                that help us recognise your browser and capture certain information.
              </p>
              <div className="space-y-3 pl-0 sm:pl-4">
                {[
                  {
                    title: 'Strictly Necessary Cookies',
                    desc: 'These cookies are essential for the operation of our platform and cannot be disabled. They include session cookies, authentication tokens, and CSRF protection cookies.',
                  },
                  {
                    title: 'Functional Cookies',
                    desc: 'These cookies enable enhanced functionality and personalisation, such as remembering your preferences, language settings, and dashboard layout configurations.',
                  },
                  {
                    title: 'Analytics Cookies',
                    desc: 'These cookies help us understand how visitors interact with our platform by collecting and reporting information anonymously. We use this data to improve our services and user experience.',
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="rounded-lg p-4 border"
                    style={{
                      background: 'var(--muted)',
                      borderColor: 'var(--border)',
                    }}
                  >
                    <h3
                      className="text-sm font-semibold mb-1.5"
                      style={{ color: 'var(--foreground)' }}
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
                ))}
              </div>
              <p
                className="text-sm sm:text-base leading-relaxed"
                style={{ color: 'var(--muted-foreground)' }}
              >
                You can manage your cookie preferences through your browser settings. Please
                note that disabling certain cookies may affect the functionality of our
                platform.
              </p>
            </div>
          </motion.section>

          <div className="nx-divider mb-12" />

          {/* ── Section 10: Changes to Policy ── */}
          <motion.section
            className="mb-12"
            variants={fadeUp}
            initial="hidden"
            animate={contentInView ? 'visible' : 'hidden'}
            custom={9}
          >
            <div className="flex items-center gap-3 mb-4">
              <RefreshCw
                className="w-5 h-5 shrink-0"
                style={{ color: '#2F6BFF' }}
                strokeWidth={1.8}
              />
              <h2
                className="text-xl sm:text-2xl font-bold"
                style={{
                  color: 'var(--foreground)',
                }}
              >
                10. Changes to This Policy
              </h2>
            </div>
            <div className="space-y-4 pl-0 sm:pl-8">
              <p
                className="text-sm sm:text-base leading-relaxed"
                style={{ color: 'var(--muted-foreground)' }}
              >
                NexFlowX reserves the right to update or modify this Privacy Policy at any
                time to reflect changes in our practices, technologies, legal requirements,
                or other factors. We will notify you of any material changes by posting the
                updated Policy on our platform and, where appropriate, by sending a
                notification to the email address associated with your account.
              </p>
              <p
                className="text-sm sm:text-base leading-relaxed"
                style={{ color: 'var(--muted-foreground)' }}
              >
                The "Last updated" date at the top of this page indicates when the most
                recent revision was made. We encourage you to review this Policy periodically
                to stay informed about how we protect your data. Your continued use of the
                Services following any changes constitutes your acceptance of the updated
                Policy.
              </p>
            </div>
          </motion.section>

          <div className="nx-divider mb-12" />

          {/* ── Section 11: Contact ── */}
          <motion.section
            variants={fadeUp}
            initial="hidden"
            animate={contentInView ? 'visible' : 'hidden'}
            custom={10}
          >
            <div className="flex items-center gap-3 mb-4">
              <Mail
                className="w-5 h-5 shrink-0"
                style={{ color: '#2F6BFF' }}
                strokeWidth={1.8}
              />
              <h2
                className="text-xl sm:text-2xl font-bold"
                style={{
                  color: 'var(--foreground)',
                }}
              >
                11. Contact
              </h2>
            </div>
            <div className="pl-0 sm:pl-8">
              <div
                className="rounded-xl p-6 border"
                style={{
                  background: 'var(--card)',
                  borderColor: 'var(--border)',
                  boxShadow: '0 4px 6px -1px rgba(0,0,0,0.07)',
                }}
              >
                <p className="text-sm sm:text-base leading-relaxed mb-4" style={{ color: 'var(--muted-foreground)' }}>
                  If you have any questions, concerns, or requests regarding this Privacy Policy, or if you
                  wish to exercise any of your data subject rights, please contact the relevant entity
                  based on your jurisdiction:
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 px-4 py-3 rounded-lg" style={{ background: 'rgba(47, 107, 255, 0.08)', border: '1px solid rgba(47, 107, 255, 0.18)' }}>
                    <Mail className="w-4 h-4 shrink-0" style={{ color: '#2F6BFF' }} strokeWidth={1.8} />
                    <div>
                      <span className="text-xs block mb-0.5" style={{ color: 'var(--muted-foreground)' }}>Data Protection Officer</span>
                      <span className="text-sm font-semibold" style={{ color: '#2F6BFF' }}>compliance@nexflowx.tech</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 px-4 py-3 rounded-lg" style={{ background: 'var(--muted)', border: '1px solid var(--border)' }}>
                    <Mail className="w-4 h-4 shrink-0" style={{ color: 'var(--muted-foreground)' }} strokeWidth={1.8} />
                    <div>
                      <span className="text-xs block mb-0.5" style={{ color: 'var(--muted-foreground)' }}>General Support</span>
                      <span className="text-sm font-semibold" style={{ color: 'var(--foreground)' }}>support@nexflowx.tech</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>
        </div>
      </div>
    </div>
  );
}
