---
title: IPU Hub Knowledge Base Audit: Missing Fields, Outdated Records & Scaling Recommendations
lastUpdated: 2026-07-08T20:10:01.177Z
---

# IPU Hub Knowledge Base Audit & Scaling Recommendations

This document outlines gaps identified during the conversion of existing web application data into the structured RAG knowledge base, along with technical recommendations for continuous updates.

## 1. Missing Information & Data Gaps

### A. Spot Round & Stray Vacancy Cutoffs
- **Current Status**: Regular Round 1, 2, and 3 cutoffs are comprehensively tracked across all major quotas.
- **Gap**: Official Spot Round / Stray Vacancy closing ranks are not currently present in the local database.
- **Recommendation**: Ingest historical Spot Round PDF allotment lists to help students with ranks > 2,000,000 assess backup options.

### B. Granular Fee Breakdowns
- **Current Status**: Annual tuition and 4-year totals are recorded accurately.
- **Gap**: University examination fees, one-time security deposits, and specific hostel room/mess fee structures are not broken out separately.
- **Recommendation**: Extend `fees/college-fee-structures.json` with optional fields: `examFeeAnnual`, `securityDepositRefundable`, `hostelFeeAnnual`, and `messFeeAnnual`.

### C. Complete 21-College Seat Intake Matrix
- **Current Status**: Sample seat matrix contains 5 representative rows.
- **Gap**: Exact seat intake numbers per branch across all 21 colleges (including Shift I vs Shift II distribution) need complete tabulation.
- **Recommendation**: Populate `seat-matrix/btech-seat-matrix-sample.json` with the official seat distribution table from Appendix 1 of the GGSIPU B.Tech Admission Brochure.

## 2. Outdated Records & Temporal Normalization
- **Dates**: Ensure all reference dates in `counselling-timeline-and-process.md` are updated each May/June when the university releases its official admission notification.
- **Placements**: Ensure annual placement figures are updated each October/November following campus recruitment drives.

## 3. Best Practices for RAG Integration
- **Hybrid Retrieval**: Use **Semantic Vector Search** for natural language queries ("How does sliding round work?", "Which documents do I need for OBC verification?"). Use **Structured JSON/SQL Querying** for exact numerical constraints ("Find private colleges in Delhi with CSE cutoffs above 1,20,000 rank").
- **Chunk Size & Overlap**: Markdown guidance chunks are intentionally designed around **300–800 words** with rich YAML frontmatter (`id`, `title`, `topic`, `tags`) to allow metadata pre-filtering before vector similarity scoring.
