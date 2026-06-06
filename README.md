# FallacyScope

A curated, fully-cited field guide to the **paradoxes and fallacies** that bend
**social-science & management** research — part of the Research Suite (reference tier,
sibling to TheoryScope / ScaleScope / ScholarScope).

Single-file app (`index.html` + `pitfalls.js`, **no build**). **Nothing is invented**:
every entry names a real, hand-verified canonical source with a DOI/link out, and every
worked example is drawn from the cited literature (suite-wide no-fabrication rule).

## What's in it
Each entry — a **paradox** (counter-intuitive but real) or a **fallacy** (an error of
inference) — carries:
- the **trap** in one plain line,
- a **worked example** from the cited literature,
- **why it happens** (the mechanism),
- **how to detect & avoid** it,
- the **research-lifecycle stages** where it bites, and
- **canonical sources** with `doi.org` links to verify.

## Two ways in
- **🗂 Browse** — filter by type (paradox / fallacy) and family (statistical, causal,
  selection, levels, reasoning, decision, measurement, integrity), or search.
- **🧭 By research stage** — see which traps bite at *design · sampling · measurement ·
  analysis · inference · interpretation*, so you can scan the ones relevant to where you are.

Each card opens a detail modal; `#/<id>` deep-links straight to a trap. Some entries
connect out to the rest of the suite (e.g. "check subgroups in ToolsScope",
"multilevel theory in TheoryScope", "pre-register the plan in ResearchFlow") via the
suite's `?param=` handoff contracts.

## Starter set (12 entries — all hand-cited)
Simpson's Paradox · Lord's Paradox · Berkson's Paradox · Easterlin Paradox ·
Ecological Fallacy · Atomistic Fallacy · Base-Rate Fallacy · Gambler's Fallacy ·
Regression to the Mean · Survivorship Bias · Sunk-Cost Fallacy ·
Texas Sharpshooter Fallacy (& HARKing).

**To add an entry:** append one object to `PITFALLS` in `pitfalls.js` (schema documented
at the top of that file). Keep the curation principle tight — *include it only if a
researcher could make a worse design or inference by not knowing it* — and never add an
entry you can't source to a real, verified citation.

## Run / deploy
Just open `index.html`, or serve the folder. Designed for **GitHub Pages** (static).
Shares the Research-Suite "Throughline" design tokens + `syed-theme`.

> Working name **FallacyScope** (the `*Scope` family) — rename in `<title>` + the
> `.bar-name` mark before first deploy if desired.
