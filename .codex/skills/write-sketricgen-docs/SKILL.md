---
name: write-sketricgen-docs
description: Create or update SketricGen Mintlify product documentation, developer guides, navigation, visuals, and customer-facing product updates in this repository.
---

# Write SketricGen Documentation

Create documentation that is useful to a first-time human and precise enough for an AI agent to understand SketricGen's capabilities, boundaries, and workflows.

## Establish the facts

- Treat the current product, implementation, approved specification, or supplied release notes as the source of truth. Inspect the relevant source when it is available; do not infer a capability from an old page or screenshot.
- Search related pages and `docs.json` before editing. Update every affected explanation and link, and remove obsolete concepts rather than preserving contradictory history.
- Describe only released, externally observable behavior. Keep internal implementation details, credentials, and unconfirmed roadmap claims out of public docs.

## Use current product language

- **Brand Agents:** public, customer-facing agents for websites and supported channels.
- **AI Workforce:** private, permissioned agents for substantial internal work inside a Teamspace and Project.
- **Agent Space:** the shared Project-level operational view of agents, statuses, and teammate activity.
- **Agent Build:** the internal configuration of one agent—main agent, optional sub-agents, tools, skills, knowledge, and connections.
- **Playground:** the place to run, test, inspect, and collaborate with an agent.
- Keep Knowledge Bases, connectors, tools, skills, runs, artifacts, traces, and schedules distinct. Explain an unfamiliar term the first time it appears.
- **Structured Output** is the tool for schema-validated data and application UI events. Do not present Output Schema or a User Preferences Form as separate platform features.
- A schedule is configured from the Agent Build **Input** node and sends its trigger message on the chosen cadence. Shared Project conversations are public to authorized members by default and can be made private.
- In developer docs, distinguish MCP management, Admin APIs, the Runtime API, and the Python and Node.js SDKs instead of grouping them as one generic API.

## Write for people and AI systems

- Lead with what the feature does, who it is for, and why it matters. Then give prerequisites, steps, expected results, limits, permissions, and troubleshooting where relevant.
- Use exact interface labels and direct headings. Prefer concrete capability statements over broad marketing claims.
- Make access and state explicit: public versus private, Draft versus Published, Project versus personal, synchronous versus scheduled, and what an action changes.
- Add a compact **Capability Facts** section when it materially clarifies a complex feature for AI retrieval. Do not force every page into the same template.
- Cross-link the next task and the concepts a reader must distinguish.

## Design pages and navigation

- Use concise frontmatter: descriptive `title`, compact `sidebarTitle`, outcome-focused `description`, a relevant `icon`, and useful search `keywords`.
- Keep navigation compact. Place product education under **Product**, deployment instructions under **Deployment**, APIs and SDKs under **Developers**, and releases under **Product Updates**.
- Use Lucide icons by default, matching `docs.json`. Give every tab, group, and user-facing page a meaningful icon. If an icon does not render locally, use an explicit supported icon object such as the existing Font Awesome Developers configuration and verify it visually.
- Use Mintlify components only when they improve scanning. Tables are best for exact comparisons; notes and warnings are for consequential context, not ordinary prose.

## Use visuals deliberately

- Use a GIF for a short interaction or state transition and a screenshot for a stable interface state. One strong visual is better than a GIF followed by screenshots of the same steps.
- Put the visual immediately after the paragraph that explains what to notice. Write alt text that names the product surface and demonstrated result.
- Use current UI, crop distractions, and exclude secrets or personal data. Store new product media under a descriptive, dated folder such as `images/product-ui-2026/` with kebab-case filenames.
- Before adding an asset, search for a reusable current one. Before finishing, find exact path references and remove superseded or orphaned assets.

## Write product updates

- Translate engineering notes into customer outcomes. Explain what changed, why it matters, who benefits, and how to use it; omit commit-level detail and internal bug language.
- Use `YYYY-MM-DD-descriptive-slug.mdx` and include a specific title, compact date sidebar title, description, icon, tags, version when known, and `releaseDate`.
- Prefer a short TL;DR followed by grouped changes, benefits, quick steps, and only the FAQs or links that add practical value.
- Add the page to the correct dated group in the **Product Updates** tab in `docs.json`.

## Verify and export

Run checks proportional to the change, normally:

```bash
npx mint validate
npx mint broken-links
npx mint a11y
git diff --check
```

Preview navigation, icons, and responsive visuals with `npx mint dev` when presentation changed. Confirm added media is referenced and deleted media is not.

When the user needs training material, locate and run `export_training_docs.py` from the surrounding Knowledge Content Engine checkout. Verify the resulting `sketricgen_training_docs.zip` contains the current MDX pages converted to `.md`. Treat the zip as a generated handoff artifact and do not commit it unless explicitly requested.
