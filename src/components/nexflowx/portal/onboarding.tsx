'use client';

import { useState } from 'react';
import {
  CheckCircle2,
  Circle,
  Upload,
  FileText,
  Clock,
  Plus,
  Check,
} from 'lucide-react';

const steps = [
  { label: 'Company Information' },
  { label: 'Beneficial Owners' },
  { label: 'Document Upload' },
];

const companyFields = [
  { label: 'Company Name', value: 'Demo Company Ltd.', type: 'text' },
  { label: 'Registration Number', value: '16626733', type: 'text' },
  { label: 'Country', value: 'United Kingdom', type: 'select' },
  { label: 'Business Type', value: 'Technology Company', type: 'select' },
  { label: 'Registered Address', value: '124-128 City Road, EC1V 2NX, London', type: 'text' },
  { label: 'Contact Email', value: 'demo@nexflowx.tech', type: 'text' },
  { label: 'Contact Phone', value: '', type: 'text', placeholder: '+44 XXX XXXX XXXX' },
];

const beneficialOwners = [
  { name: 'John Smith', nationality: 'British', ownership: '60%', idStatus: 'Verified' },
  { name: 'Jane Doe', nationality: 'British', ownership: '40%', idStatus: 'Verified' },
];

const documents = [
  { title: 'Certificate of Incorporation', status: 'uploaded', fileName: 'cert_incorp.pdf', date: 'Jan 10, 2026' },
  { title: 'Proof of Address', status: 'uploaded', fileName: 'proof_address.pdf', date: 'Jan 10, 2026' },
  { title: 'Director ID Documents', status: 'uploaded', fileName: 'director_ids.zip', date: 'Jan 11, 2026' },
  { title: 'AML Policy', status: 'pending', fileName: '', date: '' },
];

const timeline = [
  { label: 'Application Submitted', date: 'Jan 10, 2026', done: true },
  { label: 'Under Review', date: 'Jan 12, 2026', done: true },
  { label: 'Compliance Assessment', date: '', done: false, current: true },
  { label: 'Approved', date: '', done: false },
];

export function PortalOnboarding() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-semibold text-[var(--foreground)]">
          KYC/KYB Onboarding
        </h1>
        <p className="text-[var(--muted-foreground)] mt-1 max-w-3xl">
          To access NexFlowX infrastructure, all partners must complete onboarding procedures
          conducted in coordination with regulated financial institutions.
        </p>
      </div>

      {/* Progress Indicator */}
      <div className="nx-card p-6">
        <div className="flex items-center gap-0">
          {steps.map((step, idx) => (
            <div key={step.label} className="flex items-center flex-1 last:flex-initial">
              <button
                onClick={() => setActiveStep(idx)}
                className="flex items-center gap-2 cursor-pointer group"
              >
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold transition-colors ${
                    idx < activeStep
                      ? 'bg-[#22C55E] text-white'
                      : idx === activeStep
                      ? 'bg-[#2F6BFF] text-white'
                      : 'bg-[var(--muted)] text-[var(--muted-foreground)]'
                  }`}
                >
                  {idx < activeStep ? <Check className="w-4 h-4" /> : idx + 1}
                </div>
                <span
                  className={`hidden sm:inline text-sm font-medium transition-colors ${
                    idx === activeStep
                      ? 'text-[#2F6BFF]'
                      : idx < activeStep
                      ? 'text-[var(--foreground)]'
                      : 'text-[var(--muted-foreground)]'
                  }`}
                >
                  {step.label}
                </span>
              </button>
              {idx < steps.length - 1 && (
                <div
                  className={`flex-1 h-0.5 mx-3 rounded transition-colors ${
                    idx < activeStep
                      ? 'bg-[#22C55E]'
                      : 'bg-[var(--border)]'
                  }`}
                />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Content + Status Panel */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Step 1: Company Information */}
          <div className={`nx-card p-6 ${activeStep !== 0 ? 'opacity-50' : ''}`}>
            <h2 className="text-base font-semibold text-[var(--foreground)] mb-5">
              Company Information
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {companyFields.map((field) => (
                <div key={field.label} className={field.label === 'Registered Address' ? 'sm:col-span-2' : ''}>
                  <label className="block text-xs font-medium text-[var(--muted-foreground)] mb-1.5 uppercase tracking-wider">
                    {field.label}
                  </label>
                  {field.type === 'select' ? (
                    <select
                      defaultValue={field.value}
                      className="w-full rounded-lg border bg-transparent px-3 py-2.5 text-sm text-[var(--foreground)] focus:outline-none focus:ring-2 focus:ring-[#2F6BFF] focus:border-transparent transition-shadow"
                      style={{
                        borderColor: 'var(--input)',
                      }}
                    >
                      <option value={field.value}>{field.value}</option>
                    </select>
                  ) : (
                    <input
                      type="text"
                      defaultValue={field.value}
                      placeholder={field.placeholder}
                      className="w-full rounded-lg border bg-transparent px-3 py-2.5 text-sm text-[var(--foreground)] placeholder:text-[var(--muted-foreground)] focus:outline-none focus:ring-2 focus:ring-[#2F6BFF] focus:border-transparent transition-shadow"
                      style={{
                        borderColor: 'var(--input)',
                      }}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Step 2: Beneficial Owners */}
          <div className={`nx-card p-6 ${activeStep !== 1 ? 'opacity-50' : ''}`}>
            <div className="flex items-center justify-between mb-5">
              <h2 className="text-base font-semibold text-[var(--foreground)]">
                Beneficial Owners
              </h2>
              <button className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-[#2F6BFF] bg-[rgba(47,107,255,0.08)] border border-[rgba(47,107,255,0.18)] rounded-lg hover:bg-[#2F6BFF] hover:text-white transition-colors">
                <Plus className="w-3.5 h-3.5" />
                Add Owner
              </button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-[var(--border)]">
                    <th className="text-left py-3 px-2 font-medium text-[var(--muted-foreground)] text-xs uppercase tracking-wider">
                      Name
                    </th>
                    <th className="text-left py-3 px-2 font-medium text-[var(--muted-foreground)] text-xs uppercase tracking-wider">
                      Nationality
                    </th>
                    <th className="text-left py-3 px-2 font-medium text-[var(--muted-foreground)] text-xs uppercase tracking-wider">
                      Ownership %
                    </th>
                    <th className="text-left py-3 px-2 font-medium text-[var(--muted-foreground)] text-xs uppercase tracking-wider">
                      ID Status
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {beneficialOwners.map((owner) => (
                    <tr
                      key={owner.name}
                      className="border-b border-[var(--border)] last:border-0"
                    >
                      <td className="py-3 px-2 font-medium text-[var(--foreground)]">{owner.name}</td>
                      <td className="py-3 px-2 text-[var(--muted-foreground)]">{owner.nationality}</td>
                      <td className="py-3 px-2 text-[var(--muted-foreground)]">{owner.ownership}</td>
                      <td className="py-3 px-2">
                        <span className="inline-flex items-center gap-1 text-[#22C55E] text-xs font-medium">
                          <CheckCircle2 className="w-3.5 h-3.5" />
                          {owner.idStatus}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Step 3: Document Upload */}
          <div className={`nx-card p-6 ${activeStep !== 2 ? 'opacity-50' : ''}`}>
            <h2 className="text-base font-semibold text-[var(--foreground)] mb-5">
              Document Upload
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {documents.map((doc) => (
                <div
                  key={doc.title}
                  className="relative rounded-lg border-2 border-dashed p-4 transition-colors"
                  style={{
                    borderColor: doc.status === 'uploaded'
                      ? '#22C55E'
                      : 'var(--border)',
                    backgroundColor: doc.status === 'uploaded'
                      ? 'rgba(34, 197, 94, 0.04)'
                      : 'transparent',
                  }}
                >
                  <div className="flex items-start gap-3">
                    <div
                      className={`p-2 rounded-lg ${
                        doc.status === 'uploaded'
                          ? 'bg-[rgba(34,197,94,0.1)]'
                          : 'bg-[var(--muted)]'
                      }`}
                    >
                      <FileText
                        className={`w-4 h-4 ${
                          doc.status === 'uploaded'
                            ? 'text-[#22C55E]'
                            : 'text-[var(--muted-foreground)]'
                        }`}
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-[var(--foreground)]">{doc.title}</p>
                      {doc.status === 'uploaded' && (
                        <>
                          <p className="text-xs text-[var(--muted-foreground)] mt-0.5 truncate">
                            {doc.fileName}
                          </p>
                          <p className="text-xs text-[var(--muted-foreground)]">
                            Uploaded: {doc.date}
                          </p>
                        </>
                      )}
                      {doc.status === 'pending' && (
                        <p className="text-xs text-[#F59E0B] mt-0.5">Pending upload</p>
                      )}
                    </div>
                    {doc.status === 'uploaded' ? (
                      <CheckCircle2 className="w-5 h-5 text-[#22C55E] shrink-0" />
                    ) : (
                      <button className="p-1.5 rounded-md text-[var(--muted-foreground)] hover:text-[#2F6BFF] hover:bg-[rgba(47,107,255,0.08)] transition-colors">
                        <Upload className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Status Panel */}
        <div className="space-y-6">
          <div className="nx-card p-6">
            <h2 className="text-base font-semibold text-[var(--foreground)] mb-4">
              Status
            </h2>
            <div className="mb-5">
              <span className="nx-badge nx-badge-warning">
                <Clock className="w-3.5 h-3.5" />
                Under Compliance Assessment
              </span>
            </div>

            {/* Timeline */}
            <div className="space-y-0">
              {timeline.map((item, idx) => (
                <div key={item.label} className="flex gap-3">
                  {/* Connector */}
                  <div className="flex flex-col items-center">
                    <div
                      className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 ${
                        item.done
                          ? 'bg-[#22C55E] text-white'
                          : item.current
                          ? 'bg-[#2F6BFF] text-white'
                          : 'bg-[var(--muted)] text-[var(--muted-foreground)]'
                      }`}
                    >
                      {item.done ? (
                        <Check className="w-3.5 h-3.5" />
                      ) : item.current ? (
                        <Circle className="w-2.5 h-2.5 fill-current" />
                      ) : (
                        <Circle className="w-2.5 h-2.5" />
                      )}
                    </div>
                    {idx < timeline.length - 1 && (
                      <div
                        className={`w-0.5 h-8 ${
                          item.done ? 'bg-[#22C55E]' : 'bg-[var(--border)]'
                        }`}
                      />
                    )}
                  </div>
                  {/* Content */}
                  <div className="pb-6">
                    <p
                      className={`text-sm font-medium ${
                        item.done || item.current
                          ? 'text-[var(--foreground)]'
                          : 'text-[var(--muted-foreground)]'
                      }`}
                    >
                      {item.label}
                    </p>
                    {item.date && (
                      <p className="text-xs text-[var(--muted-foreground)] mt-0.5">{item.date}</p>
                    )}
                    {item.current && (
                      <p className="text-xs text-[#2F6BFF] mt-0.5 font-medium">In Progress</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
