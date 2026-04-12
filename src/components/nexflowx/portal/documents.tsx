'use client';

import { useState } from 'react';
import { FileText, ExternalLink } from 'lucide-react';

type Category = 'all' | 'Legal' | 'Compliance' | 'Technical';

interface DocumentItem {
  title: string;
  description: string;
  status: string;
  statusClass: string;
  category: Category;
}

const documents: DocumentItem[] = [
  {
    title: 'Master Service Agreement (MSA)',
    description: 'Service agreement between NexFlowX and partner',
    status: 'Active',
    statusClass: 'nx-badge-success',
    category: 'Legal',
  },
  {
    title: 'IP License Agreement',
    description: 'Intellectual property license for API usage',
    status: 'Active',
    statusClass: 'nx-badge-success',
    category: 'Legal',
  },
  {
    title: 'AML Policy',
    description: 'Anti-Money Laundering policy document',
    status: 'Active',
    statusClass: 'nx-badge-success',
    category: 'Compliance',
  },
  {
    title: 'GDPR Policy',
    description: 'Data protection and privacy policy',
    status: 'Active',
    statusClass: 'nx-badge-success',
    category: 'Compliance',
  },
  {
    title: 'SLA Agreement',
    description: 'Service Level Agreement with uptime guarantees',
    status: 'Active',
    statusClass: 'nx-badge-success',
    category: 'Legal',
  },
  {
    title: 'API Documentation',
    description: 'Technical API reference and integration guide',
    status: 'Active',
    statusClass: 'nx-badge-success',
    category: 'Technical',
  },
];

const categories: { label: string; value: Category }[] = [
  { label: 'All', value: 'all' },
  { label: 'Legal', value: 'Legal' },
  { label: 'Compliance', value: 'Compliance' },
  { label: 'Technical', value: 'Technical' },
];

export function PortalDocuments() {
  const [activeCategory, setActiveCategory] = useState<Category>('all');

  const filtered =
    activeCategory === 'all'
      ? documents
      : documents.filter((d) => d.category === activeCategory);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-semibold text-[var(--foreground)]">
          Documents Vault
        </h1>
        <p className="text-[var(--muted-foreground)] mt-1">
          Access all your legal, compliance, and technical documents in one place.
        </p>
      </div>

      {/* Category Tabs */}
      <div className="flex flex-wrap gap-2">
        {categories.map((cat) => (
          <button
            key={cat.value}
            onClick={() => setActiveCategory(cat.value)}
            className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
              activeCategory === cat.value
                ? 'bg-[#2F6BFF] text-white'
                : 'bg-[var(--card)] text-[var(--muted-foreground)] border border-[var(--border)] hover:bg-[rgba(47,107,255,0.04)] hover:border-[rgba(47,107,255,0.18)]'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Documents Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map((doc) => (
          <div key={doc.title} className="nx-card p-5 flex flex-col">
            <div className="flex items-start gap-3 mb-3">
              <div className="p-2.5 rounded-lg bg-[rgba(47,107,255,0.08)] shrink-0">
                <FileText className="w-5 h-5 text-[#2F6BFF]" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-sm font-semibold text-[var(--foreground)] leading-snug">
                  {doc.title}
                </h3>
                <p className="text-xs text-[var(--muted-foreground)] mt-1 line-clamp-2">
                  {doc.description}
                </p>
              </div>
            </div>

            <div className="mt-auto flex items-center justify-between pt-3 border-t border-[var(--border)]">
              <span className={`nx-badge ${doc.statusClass}`}>{doc.status}</span>
              <button className="inline-flex items-center gap-1 text-xs font-medium text-[#2F6BFF] hover:underline">
                View
                <ExternalLink className="w-3 h-3" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
