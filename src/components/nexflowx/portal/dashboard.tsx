'use client';

import {
  CreditCard,
  Wifi,
  CheckCircle2,
  Activity,
  Key,
  Upload,
  BarChart3,
  TrendingUp,
  AlertCircle,
  Clock,
} from 'lucide-react';
import { useAppStore } from '@/lib/store';

const stats = [
  {
    label: 'Total Transactions',
    value: '1,284',
    change: '+12.5% from last month',
    icon: CreditCard,
    color: 'text-[#2F6BFF]',
    bg: 'bg-[rgba(47,107,255,0.08)]',
  },
  {
    label: 'Active Connections',
    value: '3 PSPs',
    change: 'All systems operational',
    icon: Wifi,
    color: 'text-[#22C55E]',
    bg: 'bg-[rgba(34,197,94,0.1)]',
  },
  {
    label: 'Success Rate',
    value: '99.2%',
    change: '+0.3% improvement',
    icon: CheckCircle2,
    color: 'text-[#22C55E]',
    bg: 'bg-[rgba(34,197,94,0.1)]',
  },
  {
    label: 'API Calls',
    value: '45,821',
    change: 'This month',
    icon: Activity,
    color: 'text-[#2F6BFF]',
    bg: 'bg-[rgba(47,107,255,0.08)]',
  },
];

const recentActivity = [
  { date: 'Jan 15', type: 'Payment', status: 'Completed', amount: '€125.00', statusColor: 'nx-badge-success' },
  { date: 'Jan 15', type: 'Payment', status: 'Completed', amount: '€89.50', statusColor: 'nx-badge-success' },
  { date: 'Jan 14', type: 'Refund', status: 'Processed', amount: '€45.00', statusColor: 'nx-badge-info' },
  { date: 'Jan 14', type: 'Payment', status: 'Failed', amount: '€230.00', statusColor: 'nx-badge-error' },
];

const connections = [
  { name: 'PSP Alpha', status: 'Connected', sync: '2 min ago', badgeClass: 'nx-badge-success' },
  { name: 'PSP Beta', status: 'Connected', sync: '5 min ago', badgeClass: 'nx-badge-success' },
  { name: 'PSP Gamma', status: 'Pending', sync: '1 hour ago', badgeClass: 'nx-badge-warning' },
];

export function PortalDashboard() {
  const { navigate } = useAppStore();

  return (
    <div className="space-y-8">
      {/* Welcome Header */}
      <div>
        <h1 className="text-2xl font-semibold text-[var(--foreground)]">
          Welcome back, Demo Company
        </h1>
        <p className="text-[var(--muted-foreground)] mt-1">
          Here&apos;s an overview of your integration.
        </p>
      </div>

      {/* Stats Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat) => (
          <div key={stat.label} className="nx-card p-5">
            <div className="flex items-start justify-between">
              <div className="space-y-2">
                <p className="text-sm font-medium text-[var(--muted-foreground)]">{stat.label}</p>
                <p className="text-2xl font-semibold text-[var(--foreground)]">
                  {stat.value}
                </p>
                <p className="text-xs text-[var(--muted-foreground)] flex items-center gap-1">
                  <TrendingUp className="w-3 h-3 text-[#22C55E]" />
                  {stat.change}
                </p>
              </div>
              <div className={`p-2.5 rounded-lg ${stat.bg}`}>
                <stat.icon className={`w-5 h-5 ${stat.color}`} />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Recent Activity + Connection Status */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Activity Table */}
        <div className="lg:col-span-2 nx-card p-6">
          <h2 className="text-base font-semibold text-[var(--foreground)] mb-4">
            Recent Activity
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[var(--border)]">
                  <th className="text-left py-3 px-2 font-medium text-[var(--muted-foreground)] text-xs uppercase tracking-wider">
                    Date
                  </th>
                  <th className="text-left py-3 px-2 font-medium text-[var(--muted-foreground)] text-xs uppercase tracking-wider">
                    Type
                  </th>
                  <th className="text-left py-3 px-2 font-medium text-[var(--muted-foreground)] text-xs uppercase tracking-wider">
                    Status
                  </th>
                  <th className="text-right py-3 px-2 font-medium text-[var(--muted-foreground)] text-xs uppercase tracking-wider">
                    Amount
                  </th>
                </tr>
              </thead>
              <tbody>
                {recentActivity.map((row, idx) => (
                  <tr
                    key={idx}
                    className="border-b border-[var(--border)] last:border-0 hover:bg-[rgba(47,107,255,0.04)] transition-colors"
                  >
                    <td className="py-3 px-2 text-[var(--muted-foreground)]">{row.date}</td>
                    <td className="py-3 px-2 font-medium text-[var(--foreground)]">{row.type}</td>
                    <td className="py-3 px-2">
                      <span className={`nx-badge ${row.statusColor}`}>{row.status}</span>
                    </td>
                    <td className="py-3 px-2 text-right font-medium text-[var(--foreground)]">
                      {row.amount}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Connection Status */}
        <div className="nx-card p-6">
          <h2 className="text-base font-semibold text-[var(--foreground)] mb-4">
            Connection Status
          </h2>
          <div className="space-y-3">
            {connections.map((conn) => (
              <div
                key={conn.name}
                className="flex items-center justify-between p-3 rounded-lg border border-[var(--border)] hover:border-[rgba(47,107,255,0.18)] transition-colors"
              >
                <div>
                  <p className="text-sm font-medium text-[var(--foreground)]">{conn.name}</p>
                  <p className="text-xs text-[var(--muted-foreground)] flex items-center gap-1 mt-0.5">
                    <Clock className="w-3 h-3" />
                    Last sync: {conn.sync}
                  </p>
                </div>
                <span className={`nx-badge ${conn.badgeClass}`}>{conn.status}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div>
        <h2 className="text-base font-semibold text-[var(--foreground)] mb-4">Quick Actions</h2>
        <div className="flex flex-wrap gap-3">
          <button
            onClick={() => navigate('portal-api-access')}
            className="nx-btn-primary"
          >
            <Key className="w-4 h-4" />
            Generate API Key
          </button>
          <button
            onClick={() => navigate('portal-onboarding')}
            className="nx-btn-secondary"
          >
            <Upload className="w-4 h-4" />
            Upload Documents
          </button>
          <button
            onClick={() => navigate('portal-documents')}
            className="nx-btn-secondary"
          >
            <BarChart3 className="w-4 h-4" />
            View Reports
          </button>
        </div>
      </div>
    </div>
  );
}
