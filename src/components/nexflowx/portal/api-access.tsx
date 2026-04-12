'use client';

import { useState, useEffect } from 'react';
import {
  Eye,
  EyeOff,
  ClipboardCheck,
  RefreshCw,
  AlertTriangle,
  Activity,
  Gauge,
  Server,
  Globe,
  Save,
} from 'lucide-react';

const FULL_KEY = 'nx_live_k3y_a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6';
const MASKED_KEY = 'nx_live_k3y_a1b2c3d4e5f6g7h8i9j0...';

const endpoints = [
  { method: 'POST', path: '/v1/payment/session', description: 'Create payment session' },
  { method: 'GET', path: '/v1/payment/session/:id', description: 'Get session status' },
  { method: 'POST', path: '/v1/settlement/route', description: 'Route settlement' },
  { method: 'GET', path: '/v1/settlements', description: 'List settlements' },
  { method: 'GET', path: '/v1/balance', description: 'Check balance' },
  { method: 'POST', path: '/v1/webhook/configure', description: 'Configure webhooks' },
];

const webhookEvents = [
  { id: 'payment.completed', label: 'payment.completed', defaultChecked: true },
  { id: 'payment.failed', label: 'payment.failed', defaultChecked: true },
  { id: 'settlement.completed', label: 'settlement.completed', defaultChecked: false },
];

function getMethodColor(method: string) {
  switch (method) {
    case 'GET':
      return 'text-[#22C55E] bg-[rgba(34,197,94,0.1)]';
    case 'POST':
      return 'text-[#2F6BFF] bg-[rgba(47,107,255,0.08)]';
    case 'PUT':
      return 'text-[#F59E0B] bg-[rgba(245,158,11,0.1)]';
    case 'DELETE':
      return 'text-[#EF4444] bg-[rgba(239,68,68,0.1)]';
    default:
      return 'text-[var(--muted-foreground)] bg-[var(--muted)]';
  }
}

export function PortalApiAccess() {
  const [keyVisible, setKeyVisible] = useState(false);
  const [copied, setCopied] = useState(false);
  const [environment, setEnvironment] = useState<'sandbox' | 'production'>('sandbox');
  const [webhookUrl, setWebhookUrl] = useState('https://api.demo.com/webhooks/nexflowx');
  const [selectedEvents, setSelectedEvents] = useState<string[]>(
    webhookEvents.filter((e) => e.defaultChecked).map((e) => e.id)
  );

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(FULL_KEY);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback: noop
    }
  };

  const toggleEvent = (id: string) => {
    setSelectedEvents((prev) =>
      prev.includes(id) ? prev.filter((e) => e !== id) : [...prev, id]
    );
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-semibold text-[var(--foreground)]">API Access</h1>
        <p className="text-[var(--muted-foreground)] mt-1">
          Manage your API keys, monitor usage, and configure webhooks.
        </p>
      </div>

      {/* API Key Section */}
      <div className="nx-card p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <h2 className="text-base font-semibold text-[var(--foreground)]">Live API Key</h2>
            <span className="nx-badge nx-badge-success">Live</span>
          </div>
        </div>

        {/* Key display */}
        <div className="flex items-center gap-2">
          <div className="nx-code-block flex-1 px-4 py-3 text-sm">
            {keyVisible ? FULL_KEY : MASKED_KEY}
          </div>
          <button
            onClick={() => setKeyVisible(!keyVisible)}
            className="p-2.5 rounded-lg border border-[var(--border)] bg-[var(--card)] text-[var(--muted-foreground)] hover:text-[var(--foreground)] hover:border-[rgba(47,107,255,0.18)] transition-colors"
            aria-label={keyVisible ? 'Hide key' : 'Show key'}
          >
            {keyVisible ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
          </button>
          <button
            onClick={handleCopy}
            className="p-2.5 rounded-lg border border-[var(--border)] bg-[var(--card)] text-[var(--muted-foreground)] hover:text-[var(--foreground)] hover:border-[rgba(47,107,255,0.18)] transition-colors"
            aria-label="Copy key"
          >
            {copied ? (
              <span className="text-xs font-medium text-[#22C55E]">Copied!</span>
            ) : (
              <ClipboardCheck className="w-4 h-4" />
            )}
          </button>
        </div>

        {/* Warning + Regenerate */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mt-4 pt-4 border-t border-[var(--border)]">
          <div className="flex items-start gap-2 text-xs text-[#F59E0B]">
            <AlertTriangle className="w-4 h-4 shrink-0 mt-0.5" />
            <span>Keep your API key secure. Do not share it publicly.</span>
          </div>
          <button className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-[#EF4444] bg-[rgba(239,68,68,0.06)] border border-[rgba(239,68,68,0.2)] rounded-lg hover:bg-[rgba(239,68,68,0.1)] transition-colors shrink-0">
            <RefreshCw className="w-3.5 h-3.5" />
            Regenerate Key
          </button>
        </div>
      </div>

      {/* Environment Toggle */}
      <div className="nx-card p-6">
        <h2 className="text-base font-semibold text-[var(--foreground)] mb-4">Environment</h2>
        <div className="flex items-center gap-3">
          <button
            onClick={() => setEnvironment('sandbox')}
            className={`inline-flex items-center gap-2 px-4 py-2.5 text-sm font-medium rounded-lg transition-colors ${
              environment === 'sandbox'
                ? 'bg-[#2F6BFF] text-white'
                : 'bg-[var(--card)] text-[var(--muted-foreground)] border border-[var(--border)] hover:bg-[rgba(47,107,255,0.04)]'
            }`}
          >
            <Server className="w-4 h-4" />
            Sandbox
            {environment === 'sandbox' && (
              <span className="nx-badge nx-badge-info text-[10px] py-0 px-1.5">Active</span>
            )}
          </button>
          <button
            onClick={() => setEnvironment('production')}
            className={`inline-flex items-center gap-2 px-4 py-2.5 text-sm font-medium rounded-lg transition-colors ${
              environment === 'production'
                ? 'bg-[#2F6BFF] text-white'
                : 'bg-[var(--card)] text-[var(--muted-foreground)] border border-[var(--border)] hover:bg-[rgba(47,107,255,0.04)]'
            }`}
          >
            <Globe className="w-4 h-4" />
            Production
            {environment === 'production' && (
              <span className="nx-badge nx-badge-info text-[10px] py-0 px-1.5">Active</span>
            )}
          </button>
        </div>
        {environment === 'sandbox' && (
          <p className="text-xs text-[var(--muted-foreground)] mt-3 flex items-center gap-1.5">
            <AlertTriangle className="w-3.5 h-3.5 text-[#F59E0B]" />
            Ensure KYC is complete before switching to Production.
          </p>
        )}
      </div>

      {/* API Usage */}
      <div className="nx-card p-6">
        <h2 className="text-base font-semibold text-[var(--foreground)] mb-4">API Usage</h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-4 rounded-lg bg-[var(--muted)]">
            <p className="text-xs font-medium text-[var(--muted-foreground)] uppercase tracking-wider">
              Requests Today
            </p>
            <p className="text-xl font-semibold text-[var(--foreground)] mt-1">
              1,247
            </p>
          </div>
          <div className="p-4 rounded-lg bg-[var(--muted)]">
            <p className="text-xs font-medium text-[var(--muted-foreground)] uppercase tracking-wider">
              Requests This Month
            </p>
            <p className="text-xl font-semibold text-[var(--foreground)] mt-1">
              45,821
            </p>
          </div>
          <div className="p-4 rounded-lg bg-[var(--muted)]">
            <p className="text-xs font-medium text-[var(--muted-foreground)] uppercase tracking-wider">
              Rate Limit
            </p>
            <p className="text-xl font-semibold text-[var(--foreground)] mt-1">
              1,000/min
            </p>
          </div>
          <div className="p-4 rounded-lg bg-[var(--muted)]">
            <p className="text-xs font-medium text-[var(--muted-foreground)] uppercase tracking-wider">
              Current Usage
            </p>
            <p className="text-xl font-semibold text-[#22C55E] mt-1">
              ~3%
            </p>
            <div className="mt-2 w-full h-1.5 rounded-full bg-[var(--border)]">
              <div className="h-1.5 rounded-full bg-[#22C55E]" style={{ width: '3%' }} />
            </div>
          </div>
        </div>
      </div>

      {/* API Endpoints Reference */}
      <div className="nx-card p-6">
        <h2 className="text-base font-semibold text-[var(--foreground)] mb-4">
          API Endpoints Reference
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-[var(--border)]">
                <th className="text-left py-3 px-2 font-medium text-[var(--muted-foreground)] text-xs uppercase tracking-wider">
                  Method
                </th>
                <th className="text-left py-3 px-2 font-medium text-[var(--muted-foreground)] text-xs uppercase tracking-wider">
                  Endpoint
                </th>
                <th className="text-left py-3 px-2 font-medium text-[var(--muted-foreground)] text-xs uppercase tracking-wider hidden sm:table-cell">
                  Description
                </th>
              </tr>
            </thead>
            <tbody>
              {endpoints.map((ep) => (
                <tr
                  key={ep.path}
                  className="border-b border-[var(--border)] last:border-0 hover:bg-[rgba(47,107,255,0.04)] transition-colors"
                >
                  <td className="py-3 px-2">
                    <span
                      className={`inline-flex px-2 py-0.5 rounded text-xs font-semibold ${getMethodColor(
                        ep.method
                      )}`}
                    >
                      {ep.method}
                    </span>
                  </td>
                  <td className="py-3 px-2">
                    <code className="nx-code-block px-2 py-1 text-xs">
                      {ep.path}
                    </code>
                  </td>
                  <td className="py-3 px-2 text-[var(--muted-foreground)] hidden sm:table-cell">
                    {ep.description}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Webhook Configuration */}
      <div className="nx-card p-6">
        <h2 className="text-base font-semibold text-[var(--foreground)] mb-4">
          Webhook Configuration
        </h2>

        {/* Endpoint URL */}
        <div className="mb-5">
          <label className="block text-xs font-medium text-[var(--muted-foreground)] mb-1.5 uppercase tracking-wider">
            Endpoint URL
          </label>
          <input
            type="url"
            value={webhookUrl}
            onChange={(e) => setWebhookUrl(e.target.value)}
            className="w-full rounded-lg border bg-transparent px-3 py-2.5 text-sm text-[var(--foreground)] font-[family-name:var(--font-space-mono)] focus:outline-none focus:ring-2 focus:ring-[#2F6BFF] focus:border-transparent transition-shadow"
            style={{ borderColor: 'var(--input)' }}
            placeholder="https://api.example.com/webhooks"
          />
        </div>

        {/* Events */}
        <div className="mb-5">
          <label className="block text-xs font-medium text-[var(--muted-foreground)] mb-3 uppercase tracking-wider">
            Events
          </label>
          <div className="space-y-2">
            {webhookEvents.map((event) => (
              <label
                key={event.id}
                className="flex items-center gap-3 cursor-pointer group p-2 rounded-lg hover:bg-[rgba(47,107,255,0.04)] transition-colors"
              >
                <div
                  onClick={() => toggleEvent(event.id)}
                  className={`w-5 h-5 rounded flex items-center justify-center border-2 transition-colors cursor-pointer shrink-0 ${
                    selectedEvents.includes(event.id)
                      ? 'bg-[#2F6BFF] border-[#2F6BFF]'
                      : 'border-[var(--border)] bg-[var(--card)]'
                  }`}
                >
                  {selectedEvents.includes(event.id) && (
                    <svg
                      className="w-3 h-3 text-white"
                      viewBox="0 0 12 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10 3L4.5 8.5L2 6"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  )}
                </div>
                <code className="text-sm text-[var(--foreground)] font-[family-name:var(--font-space-mono)]">
                  {event.label}
                </code>
              </label>
            ))}
          </div>
        </div>

        {/* Save */}
        <button className="nx-btn-primary">
          <Save className="w-4 h-4" />
          Save Configuration
        </button>
      </div>
    </div>
  );
}
