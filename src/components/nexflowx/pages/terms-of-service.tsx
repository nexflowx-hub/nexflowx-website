'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  ChevronRight,
  FileText,
  Shield,
  Server,
  Ban,
  Scale,
  Lock,
  Eye,
  XCircle,
  Landmark,
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

/* ─── section icons ─── */
const sectionMeta: { icon: React.ElementType; id: string; title: string }[] = [
  { icon: FileText, id: 'acceptance', title: '1. Acceptance of Terms' },
  { icon: Server, id: 'services', title: '2. Description of Services' },
  { icon: Shield, id: 'status', title: '3. Technology Service Provider Status' },
  { icon: Ban, id: 'use', title: '4. Use of Services' },
  { icon: Scale, id: 'liability', title: '5. Limitation of Liability' },
  { icon: Lock, id: 'ip', title: '6. Intellectual Property' },
  { icon: Eye, id: 'confidentiality', title: '7. Confidentiality' },
  { icon: XCircle, id: 'termination', title: '8. Termination' },
  { icon: Landmark, id: 'governing-law', title: '9. Governing Law' },
  { icon: Mail, id: 'contact', title: '10. Contact' },
];

/* ═══════════════════════════════════════
   TermsOfServicePage
   ═══════════════════════════════════════ */
export function TermsOfServicePage() {
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
                  Terms of Service
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
            Terms of Service
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
            NeXFlowX™ is a financial technology brand owned and operated by IAHUB360 LTD
            (Company No. 16626733), registered at 124-128 City Road, London, EC1V 2NX,
            United Kingdom. Global operations are executed through regional nodes: NeXTech
            France (SIRET 79015500600014), NeXTech Portugal (NIF 219458090), NeX-Systems
            Portugal (NIF 312668201), and NexTrustX Brasil (CNPJ 65.764.339/0001-00).
          </motion.p>
          <motion.p
            className="text-base leading-relaxed max-w-2xl"
            style={{ color: 'var(--muted-foreground)' }}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            Please read these Terms of Service carefully before accessing or using any
            NexFlowX services. By using our services, you agree to be bound by these terms.
          </motion.p>
        </header>

        {/* ─── Divider ─── */}
        <div className="nx-divider mb-12" />

        {/* ─── Legal Content ─── */}
        <div ref={contentRef} className="pb-24">
          {/* ── Section 1: Acceptance of Terms ── */}
          <motion.section
            id="acceptance"
            className="mb-12"
            variants={fadeUp}
            initial="hidden"
            animate={contentInView ? 'visible' : 'hidden'}
            custom={0}
          >
            <div className="flex items-center gap-3 mb-4">
              <FileText
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
                1. Acceptance of Terms
              </h2>
            </div>
            <div className="space-y-4 pl-0 sm:pl-8">
              <p
                className="text-sm sm:text-base leading-relaxed"
                style={{ color: 'var(--muted-foreground)' }}
              >
                These Terms of Service ("Terms") constitute a legally binding agreement
                between you ("Client", "Operator", "you", or "your") and IAHUB360
                LTD, on behalf of the NeXFlowX™ brand ("NexFlowX", "we", "us", or "our"), governing your
                access to and use of the NexFlowX platform, API services, documentation,
                software, and any related services (collectively, the "Services").
              </p>
              <p
                className="text-sm sm:text-base leading-relaxed"
                style={{ color: 'var(--muted-foreground)' }}
              >
                By accessing, registering for, or using the Services, you acknowledge that
                you have read, understood, and agree to be bound by these Terms in their
                entirety. If you do not agree with any part of these Terms, you must
                discontinue use of the Services immediately.
              </p>
              <p
                className="text-sm sm:text-base leading-relaxed"
                style={{ color: 'var(--muted-foreground)' }}
              >
                These Terms apply to all users, including but not limited to merchants,
                enterprise operators, technology partners, and any authorised
                representatives acting on behalf of an entity. You represent and warrant
                that you have the authority to bind such entity to these Terms.
              </p>
              <p
                className="text-sm sm:text-base leading-relaxed"
                style={{ color: 'var(--muted-foreground)' }}
              >
                Where references are made to "NexFlowX" in these Terms, this refers to the
                NeXFlowX™ technology platform operated by IAHUB360 LTD and its
                interconnected operational entities under Master Licensing Agreements,
                including NeXTech France, NeXTech Portugal, NeX-Systems Portugal, and
                NexTrustX Brasil. All entities operate under the governance of the Global
                Steering Committee of IAHUB360 LTD.
              </p>
            </div>
          </motion.section>

          <div className="nx-divider mb-12" />

          {/* ── Section 2: Description of Services ── */}
          <motion.section
            id="services"
            className="mb-12"
            variants={fadeUp}
            initial="hidden"
            animate={contentInView ? 'visible' : 'hidden'}
            custom={1}
          >
            <div className="flex items-center gap-3 mb-4">
              <Server
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
                2. Description of Services
              </h2>
            </div>
            <div className="space-y-4 pl-0 sm:pl-8">
              <p
                className="text-sm sm:text-base leading-relaxed"
                style={{ color: 'var(--muted-foreground)' }}
              >
                NexFlowX provides software access only. Users must maintain their own
                relationship with regulated payment providers. Our technology and software
                infrastructure services are designed to facilitate communication between
                merchants and licensed third-party financial institutions. Our Services are
                limited to the following:
              </p>

              {/* Service list */}
              <ul className="space-y-3 pl-0 sm:pl-4">
                {[
                  {
                    title: 'API Infrastructure for Payment Orchestration',
                    desc: 'NexFlowX provides RESTful API endpoints and software development kits (SDKs) that enable merchants to integrate with multiple payment service providers through a single unified interface. This includes request routing, response normalisation, and data transformation services.',
                  },
                  {
                    title: 'Communication Facilitation',
                    desc: 'The platform facilitates the transmission of data and instructions between merchants and regulated Payment Service Providers (PSPs), Electronic Money Institutions (EMIs), and banking institutions. NexFlowX acts solely as a conduit for such communications.',
                  },
                  {
                    title: 'Data Management and Reporting Tools',
                    desc: 'NexFlowX offers dashboard interfaces, analytics, and reporting tools that aggregate and present operational data, transaction metadata, and performance metrics. These tools are provided for informational purposes and do not constitute financial advice.',
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

              {/* Critical clarification */}
              <div className="nx-compliance-banner flex items-start gap-3">
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
                  NexFlowX does NOT provide financial services, banking services, payment
                  processing, money transmission, or any form of custodial services. All
                  financial operations are performed exclusively by licensed and regulated
                  third-party institutions.
                </p>
              </div>
            </div>
          </motion.section>

          <div className="nx-divider mb-12" />

          {/* ── Section 3: Technology Service Provider Status ── */}
          <motion.section
            id="status"
            className="mb-12"
            variants={fadeUp}
            initial="hidden"
            animate={contentInView ? 'visible' : 'hidden'}
            custom={2}
          >
            <div className="flex items-center gap-3 mb-4">
              <Shield
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
                3. Technology Service Provider Status
              </h2>
            </div>
            <div className="space-y-4 pl-0 sm:pl-8">
              <p
                className="text-sm sm:text-base leading-relaxed"
                style={{ color: 'var(--muted-foreground)' }}
              >
                NexFlowX operates exclusively as a technology service provider. It is
                essential that all users of the Services understand and acknowledge the
                following:
              </p>

              <div className="grid gap-3 sm:grid-cols-2">
                {[
                  {
                    text: 'NexFlowX is NOT a bank, Payment Service Provider (PSP), Electronic Money Institution (EMI), or financial custodian.',
                  },
                  {
                    text: 'NexFlowX does NOT hold, custody, manage, or have any control over client funds at any time.',
                  },
                  {
                    text: 'NexFlowX does NOT engage in financial intermediation, lending, or any regulated financial activity.',
                  },
                  {
                    text: 'All financial operations, including payment processing and fund settlement, are conducted solely by regulated third-party institutions.',
                  },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="rounded-lg p-4 border"
                    style={{
                      background: 'rgba(47, 107, 255, 0.08)',
                      borderColor: 'rgba(47, 107, 255, 0.18)',
                    }}
                  >
                    <p
                      className="text-sm leading-relaxed font-medium"
                      style={{ color: '#2F6BFF' }}
                    >
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>

              <p
                className="text-sm sm:text-base leading-relaxed"
                style={{ color: 'var(--muted-foreground)' }}
              >
                The relationship between NexFlowX and its clients is strictly that of a
                technology vendor providing software and infrastructure services. NexFlowX
                does not accept deposits, process payments, issue electronic money, or
                provide any financial product or service. All regulated financial activities
                are the sole responsibility of the licensed third-party partners that
                clients engage with through the platform.
              </p>
            </div>
          </motion.section>

          <div className="nx-divider mb-12" />

          {/* ── Section 4: Use of Services ── */}
          <motion.section
            id="use"
            className="mb-12"
            variants={fadeUp}
            initial="hidden"
            animate={contentInView ? 'visible' : 'hidden'}
            custom={3}
          >
            <div className="flex items-center gap-3 mb-4">
              <Ban
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
                4. Use of Services
              </h2>
            </div>
            <div className="space-y-4 pl-0 sm:pl-8">
              <h3
                className="text-base font-semibold"
                style={{ color: 'var(--foreground)' }}
              >
                4.1 Permitted Uses
              </h3>
              <p
                className="text-sm sm:text-base leading-relaxed"
                style={{ color: 'var(--muted-foreground)' }}
              >
                You may use the Services solely for legitimate business purposes in
                accordance with these Terms and applicable laws. Permitted uses include
                integrating the NexFlowX API into your commercial applications, accessing
                the dashboard for operational monitoring, and utilising reporting tools for
                business intelligence. You must ensure that your use of the Services
                complies with all applicable laws, regulations, and industry standards in
                your jurisdiction.
              </p>

              <h3
                className="text-base font-semibold"
                style={{ color: 'var(--foreground)' }}
              >
                4.2 Prohibited Uses
              </h3>
              <p
                className="text-sm sm:text-base leading-relaxed"
                style={{ color: 'var(--muted-foreground)' }}
              >
                Without limitation, you shall not: (a) use the Services for any unlawful
                purpose or in any way that could damage, disable, or impair the platform;
                (b) attempt to gain unauthorised access to any part of the Services or
                related systems; (c) reverse engineer, decompile, or disassemble any
                software provided as part of the Services; (d) use the Services to
                transmit any malware, harmful code, or unauthorised data; (e) misrepresent
                your identity or affiliation with any person or entity; (f) resell,
                sublicense, or redistribute the Services without prior written consent; or
                (g) use the Services in any manner that violates the rights of any third
                party.
              </p>
            </div>
          </motion.section>

          <div className="nx-divider mb-12" />

          {/* ── Section 5: Limitation of Liability ── */}
          <motion.section
            id="liability"
            className="mb-12"
            variants={fadeUp}
            initial="hidden"
            animate={contentInView ? 'visible' : 'hidden'}
            custom={4}
          >
            <div className="flex items-center gap-3 mb-4">
              <Scale
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
                5. Limitation of Liability
              </h2>
            </div>
            <div className="space-y-4 pl-0 sm:pl-8">
              <p
                className="text-sm sm:text-base leading-relaxed font-medium"
                style={{ color: 'var(--muted-foreground)' }}
              >
                TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, NEXFLOWX, ITS
                DIRECTORS, EMPLOYEES, PARTNERS, AGENTS, AND AFFILIATES SHALL NOT BE LIABLE
                FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES,
                INCLUDING BUT NOT LIMITED TO LOSS OF PROFITS, DATA, BUSINESS
                OPPORTUNITIES, OR GOODWILL, ARISING OUT OF OR IN CONNECTION WITH YOUR USE
                OF THE SERVICES.
              </p>
              <p
                className="text-sm sm:text-base leading-relaxed"
                style={{ color: 'var(--muted-foreground)' }}
              >
                NexFlowX does not guarantee any specific financial outcomes, transaction
                success rates, or revenue generation as a result of using the Services. The
                platform is provided on an "as is" and "as available" basis without
                warranties of any kind, either express or implied, including but not
                limited to implied warranties of merchantability, fitness for a particular
                purpose, and non-infringement.
              </p>
              <p
                className="text-sm sm:text-base leading-relaxed"
                style={{ color: 'var(--muted-foreground)' }}
              >
                NexFlowX shall not be liable for any losses, damages, or disruptions
                caused by the failure, negligence, misconduct, or insolvency of any
                third-party payment service provider, financial institution, or partner
                connected through the platform. As a TSP, IAHUB360 LTD is not liable for
                financial losses arising from the actions of third-party settlement
                institutions. You acknowledge and accept that all financial operations are
                conducted at your own risk and that you are solely responsible for your
                selection of and dealings with any third-party providers.
              </p>
              <p
                className="text-sm sm:text-base leading-relaxed"
                style={{ color: 'var(--muted-foreground)' }}
              >
                In no event shall NexFlowX&apos;s total aggregate liability exceed the fees
                paid by you to NexFlowX during the twelve (12) months immediately preceding
                the event giving rise to the claim.
              </p>
            </div>
          </motion.section>

          <div className="nx-divider mb-12" />

          {/* ── Section 6: Intellectual Property ── */}
          <motion.section
            id="ip"
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
                6. Intellectual Property
              </h2>
            </div>
            <div className="space-y-4 pl-0 sm:pl-8">
              <p
                className="text-sm sm:text-base leading-relaxed"
                style={{ color: 'var(--muted-foreground)' }}
              >
                All intellectual property rights in the Services, including but not limited
                to the platform, software, API interfaces, documentation, logos, trademarks,
                trade names, designs, graphics, and other content, are and shall remain the
                exclusive property of NexFlowX or its licensors. Nothing in these Terms
                grants you any right, title, or interest in or to any intellectual property
                of NexFlowX.
              </p>
              <p
                className="text-sm sm:text-base leading-relaxed"
                style={{ color: 'var(--muted-foreground)' }}
              >
                The NeXFlowX™ brand, platform, and all related intellectual property are
                owned by IAHUB360 LTD as the Master IP Holder. Regional operational entities
                (NeXTech France, NeXTech Portugal, NeX-Systems Portugal, and NexTrustX
                Brasil) operate under Master Licensing Agreements and do not hold independent
                ownership of the core intellectual property. IAHUB360 LTD&apos;s ultimate asset
                is its Intellectual Property.
              </p>
              <p
                className="text-sm sm:text-base leading-relaxed"
                style={{ color: 'var(--muted-foreground)' }}
              >
                You are granted a limited, non-exclusive, non-transferable, revocable
                licence to access and use the Services solely for their intended purpose in
                accordance with these Terms. You may not copy, modify, distribute, sell, or
                lease any part of the Services, nor may you reverse engineer or attempt to
                extract the source code unless applicable law expressly permits it.
              </p>
              <p
                className="text-sm sm:text-base leading-relaxed"
                style={{ color: 'var(--muted-foreground)' }}
              >
                Any feedback, suggestions, or improvements you provide to NexFlowX regarding
                the Services may be used by NexFlowX without any obligation of
                compensation, and you hereby grant NexFlowX a perpetual, irrevocable,
                royalty-free licence to use, modify, and incorporate such feedback into the
                Services.
              </p>
            </div>
          </motion.section>

          <div className="nx-divider mb-12" />

          {/* ── Section 7: Confidentiality ── */}
          <motion.section
            id="confidentiality"
            className="mb-12"
            variants={fadeUp}
            initial="hidden"
            animate={contentInView ? 'visible' : 'hidden'}
            custom={6}
          >
            <div className="flex items-center gap-3 mb-4">
              <Eye
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
                7. Confidentiality
              </h2>
            </div>
            <div className="space-y-4 pl-0 sm:pl-8">
              <p
                className="text-sm sm:text-base leading-relaxed"
                style={{ color: 'var(--muted-foreground)' }}
              >
                Both parties agree to maintain the confidentiality of all proprietary and
                sensitive information exchanged during the course of the relationship
                ("Confidential Information"). Confidential Information includes, but is not
                limited to, API keys, access credentials, business plans, technical data,
                transaction patterns, and any non-public information disclosed by either
                party.
              </p>
              <p
                className="text-sm sm:text-base leading-relaxed"
                style={{ color: 'var(--muted-foreground)' }}
              >
                Neither party shall disclose, publish, or disseminate Confidential
                Information to any third party without the prior written consent of the
                disclosing party, except as required by law, regulation, or court order. In
                such cases, the receiving party shall provide prompt written notice to the
                disclosing party and cooperate in seeking protective measures.
              </p>
              <p
                className="text-sm sm:text-base leading-relaxed"
                style={{ color: 'var(--muted-foreground)' }}
              >
                These confidentiality obligations shall survive the termination of these
                Terms for a period of five (5) years, unless a longer period is required by
                applicable law.
              </p>
            </div>
          </motion.section>

          <div className="nx-divider mb-12" />

          {/* ── Section 8: Termination ── */}
          <motion.section
            id="termination"
            className="mb-12"
            variants={fadeUp}
            initial="hidden"
            animate={contentInView ? 'visible' : 'hidden'}
            custom={7}
          >
            <div className="flex items-center gap-3 mb-4">
              <XCircle
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
                8. Termination
              </h2>
            </div>
            <div className="space-y-4 pl-0 sm:pl-8">
              <p
                className="text-sm sm:text-base leading-relaxed"
                style={{ color: 'var(--muted-foreground)' }}
              >
                Either party may terminate this agreement by providing thirty (30) days&apos;
                written notice to the other party. Upon termination, you shall immediately
                cease all use of the Services and return or destroy all Confidential
                Information and materials provided by NexFlowX.
              </p>
              <p
                className="text-sm sm:text-base leading-relaxed"
                style={{ color: 'var(--muted-foreground)' }}
              >
                NexFlowX reserves the right to terminate or suspend access to the Services
                immediately, without prior notice, in the event of: (a) a breach of these
                Terms; (b) suspected fraudulent, abusive, or unlawful activity; (c) a
                requirement by law or regulatory authority; or (d) circumstances that, in
                NexFlowX&apos;s reasonable judgement, pose a risk to the platform, other
                users, or any third party.
              </p>
              <p
                className="text-sm sm:text-base leading-relaxed"
                style={{ color: 'var(--muted-foreground)' }}
              >
                Sections 5 (Limitation of Liability), 6 (Intellectual Property), 7
                (Confidentiality), and 9 (Governing Law) shall survive any termination of
                these Terms.
              </p>
            </div>
          </motion.section>

          <div className="nx-divider mb-12" />

          {/* ── Section 9: Governing Law ── */}
          <motion.section
            id="governing-law"
            className="mb-12"
            variants={fadeUp}
            initial="hidden"
            animate={contentInView ? 'visible' : 'hidden'}
            custom={8}
          >
            <div className="flex items-center gap-3 mb-4">
              <Landmark
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
                9. Governing Law
              </h2>
            </div>
            <div className="space-y-4 pl-0 sm:pl-8">
              <p
                className="text-sm sm:text-base leading-relaxed"
                style={{ color: 'var(--muted-foreground)' }}
              >
                This agreement is governed by the laws of England and Wales. IAHUB360 LTD
                is registered in England and Wales under company number 16626733. Any
                disputes arising out of or in connection with these Terms shall be subject
                to the exclusive jurisdiction of the courts of England and Wales. Each party
                irrevocably submits to the jurisdiction of these courts and waives any
                objection to proceedings in these courts on the grounds of venue or
                inconvenient forum.
              </p>
              <p
                className="text-sm sm:text-base leading-relaxed"
                style={{ color: 'var(--muted-foreground)' }}
              >
                Notwithstanding the foregoing, NexFlowX may seek injunctive or equitable
                relief in any court of competent jurisdiction to protect its intellectual
                property or confidential information without the requirement to post a bond
                or other security.
              </p>
              <p
                className="text-sm sm:text-base leading-relaxed"
                style={{ color: 'var(--muted-foreground)' }}
              >
                For matters relating to operations conducted by regional nodes, the applicable
                law may include the laws of France (for NeXTech France operations), Portugal
                (for NeXTech Portugal and NeX-Systems Portugal operations), and Brazil (for
                NexTrustX Brasil operations), in addition to the governing law of England and
                Wales applicable to IAHUB360 LTD.
              </p>
            </div>
          </motion.section>

          <div className="nx-divider mb-12" />

          {/* ── Section 10: Contact ── */}
          <motion.section
            id="contact"
            variants={fadeUp}
            initial="hidden"
            animate={contentInView ? 'visible' : 'hidden'}
            custom={9}
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
                10. Contact
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
                <p
                  className="text-sm sm:text-base leading-relaxed mb-4"
                  style={{ color: 'var(--muted-foreground)' }}
                >
                  If you have any questions, concerns, or requests regarding these Terms of
                  Service, please contact us at:
                </p>
                <div className="flex items-center gap-3">
                  <Mail
                    className="w-4 h-4 shrink-0"
                    style={{ color: '#2F6BFF' }}
                    strokeWidth={1.8}
                  />
                  <span
                    className="text-sm font-semibold"
                    style={{ color: '#2F6BFF' }}
                  >
                    support@nexflowx.tech
                  </span>
                </div>
              </div>
            </div>
          </motion.section>
        </div>
      </div>
    </div>
  );
}
