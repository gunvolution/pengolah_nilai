---
name: E-Rapor Merdeka System
colors:
  surface: '#f8f9ff'
  surface-dim: '#cbdbf5'
  surface-bright: '#f8f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#eff4ff'
  surface-container: '#e5eeff'
  surface-container-high: '#dce9ff'
  surface-container-highest: '#d3e4fe'
  on-surface: '#0b1c30'
  on-surface-variant: '#464554'
  inverse-surface: '#213145'
  inverse-on-surface: '#eaf1ff'
  outline: '#777586'
  outline-variant: '#c7c4d7'
  surface-tint: '#5148d7'
  primary: '#2a14b4'
  on-primary: '#ffffff'
  primary-container: '#4338ca'
  on-primary-container: '#c1beff'
  inverse-primary: '#c3c0ff'
  secondary: '#565e74'
  on-secondary: '#ffffff'
  secondary-container: '#dae2fd'
  on-secondary-container: '#5c647a'
  tertiary: '#00442d'
  on-tertiary: '#ffffff'
  tertiary-container: '#005e40'
  on-tertiary-container: '#66daa8'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e3dfff'
  primary-fixed-dim: '#c3c0ff'
  on-primary-fixed: '#100069'
  on-primary-fixed-variant: '#372abf'
  secondary-fixed: '#dae2fd'
  secondary-fixed-dim: '#bec6e0'
  on-secondary-fixed: '#131b2e'
  on-secondary-fixed-variant: '#3f465c'
  tertiary-fixed: '#85f8c4'
  tertiary-fixed-dim: '#68dba9'
  on-tertiary-fixed: '#002114'
  on-tertiary-fixed-variant: '#005137'
  background: '#f8f9ff'
  on-background: '#0b1c30'
  surface-variant: '#d3e4fe'
typography:
  headline-xl:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-xl-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 32px
    letterSpacing: -0.01em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.015em
  headline-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 24px
    letterSpacing: -0.01em
  title-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '600'
    lineHeight: 22px
  body-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  body-sm:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 18px
  label-md:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.02em
  label-sm:
    fontFamily: Inter
    fontSize: 11px
    fontWeight: '500'
    lineHeight: 14px
    letterSpacing: 0.01em
  data-mono:
    fontFamily: JetBrains Mono
    fontSize: 13px
    fontWeight: '500'
    lineHeight: 18px
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  gutter: 1rem
  gutter-desktop: 1.5rem
  margin: 1rem
  margin-desktop: 2rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 0.75rem
  space-lg: 1.25rem
  space-xl: 2rem
---

## Brand & Style

The design system embodies a modern, authoritative, and frictionless institutional workspace tailored for Indonesian educational environments implementing Kurikulum Merdeka. It serves educators, homeroom mentors (Wali Kelas), school administrators, and principals who manage high volumes of qualitative and quantitative academic data.

The visual style is **Corporate / Modern** layered with **high-density data ergonomics**. The aesthetic balances administrative credibility with cognitive clarity:
- **Efficiency over decoration:** Visual elements support rapid data scanning, swift batch grading, and structured report synthesis.
- **Institutional trust:** Solid visual anchoring, controlled contrast, and disciplined alignment reflect national standard rigor.
- **Empathetic utility:** Micro-interactions and state transitions minimize administrative fatigue during high-stress end-of-semester reporting cycles.

## Colors

The system uses an intentional color hierarchy calibrated for data density, role distinction, and academic performance grading:

- **Primary (`#4338CA` / Indigo):** Applied to active navigation indicators, key system actions, focus rings, and primary interactive buttons.
- **Secondary (`#0F172A` / Slate 900):** Governs structural boundaries, navigation rails, high-contrast headings, and foundational enterprise containers.
- **Tertiary (`#059669` / Emerald):** Denotes curriculum mastery ("Mahir / Sangat Baik"), successful synchronization with Kemendikbudristek databases, and validated assessment criteria.
- **Neutral (`#64748B` / Slate 500):** Powers secondary labels, metadata tags, subtle borders (`#E2E8F0`), muted backgrounds (`#F8FAFC`), and read-only cell treatments.

### Status & Assessment Progression
- **Cakap / Baik (Amber - `#D97706`):** Indicates target competency attained with ongoing development.
- **Perlu Bimbingan / Alert (Rose - `#E11D48`):** Highlights critical formative deficit, incomplete assessments, missing student data, or validation errors.

## Typography

The type scale combines **Plus Jakarta Sans** for clear, open visual anchors in page titles and section headers, with **Inter** for reading comfort across data-heavy administrative tables and assessment narrative inputs. 

- **Numerical & Assessment Cells:** Implement tabular figures (`font-variant-numeric: tabular-nums`) across all score inputs, NISN columns, and percentage aggregates using `data-mono` or `body-sm`.
- **Descriptive Narratives (Capaian Pembelajaran):** Long-form qualitative feedback uses `body-md` with strict line-height spacing (1.42x) to ensure legibility when proofreading automatically generated Kemendikbudristek descriptors.

## Layout & Spacing

The layout model uses a responsive **Fluid Grid** engineered around fixed-width vertical navigation rails and fluid content areas:

- **Global Shell:** A 260px collapsible desktop navigation rail anchored to the left, paired with a full-width utility top-bar containing academic year status, semester switcher, and user role profiles.
- **Dashboard Grid:** 12-column layout on desktop (breakpoint: 1024px and up) with 24px gutters. Adapts to 8 columns on tablets (768px - 1023px) and single-column stacks on mobile devices.
- **Data Workspaces:** Assessment spreadsheets break out of standard container constraints, utilizing horizontal scrolling surfaces with sticky student identifier columns (NISN, Nama Siswa).
- **Official Print Media (Rapor Fisik A4):** Switches to an isolated 210mm x 297mm layout with zero outer grid margins, 15mm fixed boundary padding, and explicit page-break management for multi-page assessment summaries.

## Elevation & Depth

Visual hierarchy uses **low-contrast outlines** paired with **tonal elevation layers**, avoiding heavy shadows that compromise readability in high-density enterprise tables:

- **Level 0 (Canvas Base):** Plain `#F8FAFC` background acting as the neutral staging surface.
- **Level 1 (Cards & Data Panels):** Solid `#FFFFFF` surfaces defined by a 1px border of `#E2E8F0`. No shadow is applied in default states to maintain crisp scan lines.
- **Level 2 (Active Focus & Sticky Table Headers):** Subtle ambient diffusion: `0 2px 4px -1px rgba(15, 23, 42, 0.04), 0 4px 6px -2px rgba(15, 23, 42, 0.02)`. Sticky elements carry a solid `#E2E8F0` bottom divider.
- **Level 3 (Modals, Slide-overs, & Popovers):** Elevated overlays utilizing `0 10px 15px -3px rgba(15, 23, 42, 0.08), 0 4px 6px -4px rgba(15, 23, 42, 0.03)` with a neutral backdrop blur (`backdrop-filter: blur(4px); background: rgba(15, 23, 42, 0.4)`).

## Shapes

The design system maintains a **Soft** shape language (`roundedness: 1` / 4px base border radius). This compact curvature maximizes usable pixel area within dense assessment matrices:

- **Form Controls & Inputs:** 4px radius (`0.25rem`) provides clean corners and natural separation inside adjacent table cells.
- **Cards, Panels, & Data Containers:** 8px radius (`0.5rem`) for macro UI groups, preventing cards from visually clashing with nested grid cells.
- **Status Tags & Badges:** 4px radius with controlled vertical height (20px - 24px) for inline positioning beside student metrics.
- **Print Formats:** Border radii are completely zeroed (`0px`) for print sheets to align with official government typography and document frameworks.

## Components

### 1. Data Tables (Assessment Matrix)
- **Structure:** Rows alternate between `#FFFFFF` and `#F8FAFC` on hover. Table headers use `#F1F5F9` with uppercase `label-sm` text in `#475569`.
- **Active Editing Cells:** Input cells display a 1px border matching `#CBD5E1`. On focus, cells elevate with a 2px inset ring of `#4338CA` and auto-select values for rapid numeric keypad entry.
- **Sticky Column:** The first two columns (Student Number and Student Name) remain frozen horizontally during scroll, bounded by a vertical separator line.

### 2. Role Navigation Tabs
- Segmented pills embedded in the sub-header displaying role context: *Guru Mata Pelajaran*, *Wali Kelas*, and *Kepala Sekolah / Kurikulum*.
- Inactive items use transparent backgrounds with `#64748B` typography; active tabs utilize solid `#FFFFFF` with an indigo base border indicator and `title-md` styling.

### 3. Status Badges & Competency Chips
- **Mahir (Advanced):** `#ECFDF5` background, `#047857` text, `#A7F3D0` border.
- **Cakap (Proficient):** `#FFFBEB` background, `#B45309` text, `#FDE68A` border.
- **Perlu Bimbingan (Needs Intervention):** `#FFF1F2` background, `#BE123C` text, `#FECDD3` border.
- Badges strictly maintain a consistent height of 22px with inline text.

### 4. Form Controls & Mass Descriptors
- Inputs feature persistent, unambiguous validation states. Warning inputs use `#F43F5E` outlines with an inline warning icon and microcopy.
- Qualitative text areas for *Catatan Proses & Deskripsi Karakter* feature integrated word counters and auto-expand capabilities bounded by a maximum scroll threshold.

### 5. Official Kemendikbudristek Print Sheet (A4 Rapor View)
- A specialized viewing mode rendering strict monochromatic tables with 1px black/slate rules (`#1E293B`).
- Structured header block containing the school crest, NPSN, and identity details, concluding with formal triple signature blocks for homeroom teacher, parent/guardian, and principal.