**Public URL:** https://docs.sketricgen.ai/user-guides/best-practices

Build your AgentSpace like a team: a **Manager/Triage** agent receives the message first, decides what's needed, and **passes control** to the right specialist. Your job is to make control flow **predictable** with clear instructions and tool usage notes.

## Control flow: who’s in charge?

- **Handoffs transfer control**: when Agent A hands off to Agent B, **B owns the run** until it’s done (or hands off again). The final answer normally comes from the **last agent** that handled the message.
- **Agent as Tool returns control**: use this for bounded sub-tasks; the callee runs, returns a result, and control goes **back to the caller**. Great for reusable utilities (classify, extract, redact).
- **Routing is AI-decided**: agents choose when to hand off based on **instructions + input** (not hard-coded paths). Keep your instructions explicit about _when_ to call which tool/agent.

## Write crisp instructions

- Give **role**, **goal**, **success criteria**, and **when to hand off**.
- Break work into **clear steps**; call out **required fields** before tools/hand-offs.
- Borrow existing SOPs/policies to reduce ambiguity.

## Structure where it matters

- Prefer **Structured Inputs** for child agents (so the parent knows exactly what fields to supply before a handoff).
- Use **Structured Outputs** primarily on **ending agents** (so user-facing or API consumers get consistent JSON).
- Avoid forcing intermediate agents to emit final JSON unless they’re the responder. They will always return JSON output and this is not very human/customer friendly. 
- **Tip:** Structured Outputs is powerful for Agents as Tools!

## Tooling principles

- Map only the fields you need; set retries/fallbacks for flaky endpoints; redact sensitive params in traces.
- Use **File Search** with curated sources or the crawler; add **Web Search** when freshness matters.
- Keep repeatable logic in **Agent as Tool** to shorten paths and improve latency.

## Orchestration patterns to start with

- **Manager → Specialist**: triage decides, then hands off to a single expert agent.
- **Manager → (Agent-as-Tool utilities) → Specialist**: small helpers (classify/extract) as tools, then a full handoff.
- **Manager → Researcher → Writer**: research pulls context; writer composes the final answer.
  Begin simple (one or two specialists), then scale the team as the workload grows.

## Iterate fast (the core loop)

**Edit → Test → Observe → Improve** in one UI: update instructions/tool notes, run a test, open **Trace Explorer** (steps, tool I/O, durations, credits), then refine. Save **snapshots** and compare **diffs** to prevent regressions.

## Protocols you benefit from

- **MCP (Model Context Protocol)**: a standard “USB-C for AI” to connect models to tools and data safely and consistently. Use MCP servers for clean, reusable capabilities.
- **A2A (Agent-to-Agent)**: emerging standard for interop between agents across systems—useful when your flows span other vendors or services.

## Common mistakes (and fixes)

1. **Misunderstanding control flow**
   - _Mistake_: Parent calls multiple children assuming they all reply; or expecting a child to “call back” without an explicit handoff.
   - _Fix_: Remember: **handoff transfers control**; add an explicit **handoff back** if needed. Otherwise use **Agent as Tool** to keep control with the parent.
2. **Structured output in the wrong place**
   - _Mistake_: Forcing JSON at intermediate layers then accidentally replying to the user with that JSON.
   - _Fix_: Put **Structured Inputs** on children; keep **Structured Outputs** for **final responders**.
3. **Vague instructions = noisy routing**
   - _Mistake_: Not telling agents when/why to use a tool or hand off.
   - _Fix_: Add crisp decision rules and success criteria in instructions; include prerequisites for tools.
4. **Over-engineering too early**
   - _Mistake_: Starting with many agents before you have a baseline.
   - _Fix_: Start with a single manager + one specialist; expand only when a boundary is clear.
