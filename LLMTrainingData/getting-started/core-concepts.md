**Public URL:** https://docs.sketricgen.ai/getting-started/core-concepts

Every workflow in SketricGen starts inside an AgentSpace — a visual environment where you connect agents, tools, and logic to build intelligent, multi-agent systems.

The following concepts form the foundation of how SketricGen works.

## AgentSpace (Canvas)

Your AgentSpace is the visual canvas where you design and test multi-agent workflows.

Each workflow is composed of nodes and edges that define the logic of collaboration.

- **Nodes = Agents or tools.** Each node represents a role or capability.
- **Edges = Handoffs, connections.** Define how one agent passes control or data to another and connects to tools.
- You can version, duplicate, and promote flows as they evolve.

**Guideline:**

Start small. Build two or three connected agents, validate each handoff, and observe the trace before scaling to complex workflows.

![AgentSpace Canvas showing connected nodes representing agents and tools with edges showing handoffs between them](https://docs.sketricgen.ai/images/core-concepts/core_agent_space.png)

## Agents

Agents are the individual roles in your workflow. Each has its own:

- **Instructions** (the prompt or system message defining purpose & tone)
- **Model & parameters** (OpenAI supported models)
- **Access to tools** (data retrieval or action execution)
- **Guardrails & limits** (optional constraints)

Agents can:

- **Call tools** to fetch data or perform actions
- **Handoff** to other agents to delegate tasks
- **Produce structured outputs** such as JSON

**Guideline:**

Define each agent like a job description - what they _know_, _do_, and _when to delegate_.

Over-specifying beats ambiguity.

![Agent configuration interface showing instructions, model settings, tools access, and guardrails](https://docs.sketricgen.ai/images/core-concepts/core_agent.png)

## Tools (Capabilities)

Tools give agents the power to act, compute, or retrieve knowledge.

You can attach one or many tools to an agent.

| Tool                        | Purpose                                                                    | Typical Use Case                                       |
| --------------------------- | -------------------------------------------------------------------------- | ------------------------------------------------------ |
| **Sketric App Marketplace** | Connect to 2000+ apps via prebuilt connectors and actions.                 | CRM updates, sending emails, project management tasks. |
| **File Search**             | Create a private knowledge base from uploaded files or crawled websites.   | Product manuals, FAQs, policy docs.                    |
| **Web Search**              | Retrieve fresh, web-based context.                                         | Market research, news summaries, dynamic data.         |
| **Code Interpreter**        | Execute Python code securely in a sandbox.                                 | Data transformation, quick computation, CSV analysis.  |
| **API Request**             | Call external REST APIs with headers, auth, and schema mapping. | Integrate internal systems or external SaaS APIs.      |
| **Custom MCP**              | Add standardized MCP servers for cross-app interoperability.               | Advanced enterprise integrations.                      |

**Guideline:**

Attach only the tools that each agent truly needs — fewer tools make reasoning more focused and traces easier to interpret.

![Tools marketplace interface showing available tools including Sketric App Marketplace, File Search, Web Search, Code Interpreter, API Request, and Custom MCP](https://docs.sketricgen.ai/images/core-concepts/core_tools.png)

## Handoffs (Orchestration)

A handoff defines when and how one agent transfers the task to another.

They are the connective logic of your workflow.

- **Designer-routed:** Explicitly define paths and conditions.
- **AI-routed:** Let the system decide the next best agent dynamically.
- Include **fallbacks** or **retries** for reliability.

**Guideline:**

For production workflows, prefer _designer-routed_ handoffs at first - this ensures predictable behavior and easier debugging.

![Handoff configuration interface showing designer-routed and AI-routed options with conditions and fallbacks](https://docs.sketricgen.ai/images/core-concepts/core_handoff.png)

## Structured Inputs & Outputs (JSON)

Use **structured JSON schemas** to keep workflows reliable, traceable, and composable.

- Define required and optional fields for each agent.
- Keep schemas consistent across agents for smoother data flow.
- Structured outputs enable deterministic downstream actions (widgets, APIs, databases).

**Guideline:**

Always validate schema changes in the Trace Explorer before publishing—small mismatches can break downstream logic.

![Structured output configuration showing JSON schema definition with required and optional fields](https://docs.sketricgen.ai/images/core-concepts/core_structured_output.png)

![Structured input interface showing how to define input schemas for agents](https://docs.sketricgen.ai/images/core-concepts/core_structured_input.png)

## Conversations, Tool Calls & Traces

Every interaction generates data you can inspect and learn from.

- A **Conversation** is a complete user interaction flow.
- **Tool Calls** show when and how a tool was used.
- **Traces** record the sequence of agents, tool inputs/outputs, reasoning artifacts, duration, and credit consumption.

The **Trace Explorer** helps you visualize each step and pinpoint inefficiencies.

**Guideline:**

Review traces often - optimize agents that over-call tools or generate unnecessary handoffs.

![Trace Explorer interface showing conversation flow, agent interactions, tool calls, durations, and credit consumption](https://docs.sketricgen.ai/images/core-concepts/core_trace.png)

## Deployment (At a Glance)

Once your workflow is ready, deploy it through one of two paths:

- **Widget:** Configure your branding (logo, colors, greeting message) and embed the snippet into your site or CMS.
- **Public API:** Trigger workflows programmatically and receive **structured JSON** responses.

(See the [Deploy](https://docs.sketricgen.ai/deploy/whatsapp) section for integration-specific steps.)

## Philosophy: Agentic, Not Hard-Coded

SketricGen empowers you to design agentic systems, not brittle automations.

You define roles, tools, and logic - SketricGen handles the orchestration, scaling, and traceability.

Every workflow you ship becomes a living, improvable system.
