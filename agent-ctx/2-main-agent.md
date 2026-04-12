# Task ID: 2 — Main Agent Work Record

## Task
Update NexFlowX Regulatory Positioning page to integrate complete corporate structure, Node Framework, and Global Vision manifesto.

## File Edited
- `src/components/nexflowx/pages/compliance-regulatory.tsx`

## Changes Made

### 1. Import Addition
- Added `Network` icon from `lucide-react` (for Node Framework section header)

### 2. New Refs & InView Hooks
- Added `frameworkRef = useRef<HTMLDivElement>(null)`
- Added `frameworkInView = useInView(frameworkRef, { once: true, margin: '-60px' })`

### 3. Enhanced Corporate Structure Section
Replaced the previous lightweight corporate structure (3 simple node cards) with a comprehensive version:

- **Ownership Statement Banner**: Prominent `nx-compliance-banner` with `Building2` icon stating NeXFlowX™ is owned by IAHUB360 LTD (Company No. 16626733), registered at 124-128 City Road, London, EC1V 2NX.
- **Global IP Holder Card** (enhanced): Kept existing IAHUB360 LTD card with blue left-border accent, added description: "Master IP Holder, Global Steering Committee base, and ultimate beneficiary of licensing royalties."
- **European Operations (EU Nodes)** sub-section with 4 individual cards:
  - NeXTech France — Vigneux Sur Seine, SIRET 79015500600014, role: francophone market expansion and EU compliance
  - NeXTech Portugal — NIF 219458090, role: Iberian technical onboarding, merchant support, API Sandbox testing
  - NeX-Systems Portugal — NIF 312668201, role: technical infrastructure and systems operations
  - GreenPocket Unipessoal Ltd — Portugal (In Acquisition), `nx-badge-warning` badge, reduced opacity (0.8), role: consolidated corporate vehicle for European operations
- **LATAM Operations** card:
  - NexTrustX Brasil — CNPJ 65.764.339/0001-00, role: Latin American bridge, PIX-to-ISO translation

### 4. New "The Node Framework" Section
Added a complete new section between Corporate Structure and Regulatory Statement:

- **Section Header**: Network icon in blue circular container + "The Node Framework" heading
- **Global Vision Manifesto**: Prominent `nx-card` with 3px solid blue left border, Globe icon header, "Global Vision Manifesto" label, full manifesto text in italic about 100% Non-Custodial TSP model, IP as ultimate asset
- **Framework Explanation**: Paragraph about Master Licensing Agreements and IP risk isolation
- **Framework Breakdown**: 3 numbered cards (A, B, C) with `nx-badge-info`:
  - A. The IP Holding Core (UK) — IAHUB360 LTD
  - B. The European Operations (EU Nodes) — all 4 EU entities listed
  - C. The LATAM Expansion (South American Node) — NexTrustX Brasil

## Preserved
- All existing content: IS/NOT sections, sidebar, intro statement, regulatory responsibility, breadcrumbs, header
- Existing animation patterns (fadeUp variants, useInView refs)
- Existing design system classes (nx-card, nx-badge, nx-compliance-banner, nx-icon-box, nx-divider, nx-badge-warning, nx-badge-info)

## Verification
- `bun run lint` — zero errors
- Dev server compiling successfully
