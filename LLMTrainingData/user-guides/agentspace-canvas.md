**Public URL:** https://docs.sketricgen.ai/user-guides/agentspace-canvas

![AgentSpace canvas hero image showing the visual workspace for designing multi-agent workflows](https://docs.sketricgen.ai/images/user-guides/agent-space/canvas_hero.png)

## Overview

The AgentSpace is the central workspace of SketricGen — a visual canvas where you design, test, and optimize multi-agent workflows.

Each workflow is made up of agents, tools, and handoffs, connected through an intuitive drag-and-drop interface.

Users can build from scratch, import existing configurations, or export their work as portable JSON files. The AgentSpace is where ideas become executable, traceable workflows.

## Adding Nodes

On the top-left corner of the canvas is the Add Node menu, where you can choose what to add to your workflow.

| Node Type         | Description                                                                                                                    |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| **Trigger**       | The starting point for the workflow. Triggers can be text inputs, API events, or other signals that start a conversation.      |
| **Tool**          | Represents an external capability or connector (such as File Search, Web Search, API Request, or Marketplace apps).            |
| **Handoff Agent** | A standard agent node that performs reasoning or communication, and can hand off control to other agents.                      |
| **Tool Agent**    | A specialized agent that behaves as a callable tool. It performs a subtask and returns structured results to its parent agent. |

**Tip:** Tool Agents are ideal for modular, reusable subtasks like summarization or validation.

![Screenshot showing how to add nodes to the AgentSpace canvas](https://docs.sketricgen.ai/images/user-guides/agent-space/canvas_add_node.png)

## Agents and Tools on the Canvas

Each agent you place on the canvas represents a distinct role in your workflow.

Agents can have tools attached to them, which appear directly under the node and indicate available capabilities.

**Common actions**

- Click “+ Add Agent” to create a new node.
- Configure its instructions, model, and attached tools.
- Rename, duplicate, or delete nodes using the node toolbar.

Example:

Lina (Triage Agent) handles basic queries and meeting scheduling. and hands off technical qeuestions to Alex (Product Specialist) for product specific questions who uses File Search for accurate responses.

![Screenshot showing agent node configuration in AgentSpace](https://docs.sketricgen.ai/images/user-guides/agent-space/canvas_agent.png)

## Handoffs and Workflow Flow

Handoffs connect agents and define how information moves between them.

- **Designer-Routed Handoffs:** You define explicit paths and conditions. Specify clealy in the Instructions of Router Agent that it must never respond to the questions and only hand-off as per your conditions.
- **AI-Routed Handoffs:** The system decides which agent should act next, based on context. More dynamic and scenario based handoffs.
- Edges can be labeled for clarity, such as “handoff if user_intent = product_question.”. Use this feature for accurate handoffs.

Handoffs are the foundation of orchestration — they make workflows modular, traceable, and easy to expand.

![Animated GIF showing handoff creation between agents in AgentSpace](https://docs.sketricgen.ai/images/user-guides/agent-space/canvas_handoff.gif)

## Importing and Exporting Configurations

Workflows in SketricGen can be saved and shared using JSON configuration files.

- **Import Config:** Upload a JSON file exported from another AgentSpace to instantly recreate the workflow.
- **Download Config:** Export your current AgentSpace as a JSON file for versioning, backups, or reuse.

This functionality makes it easy to share setups across environments or collaborate between teams.

**Note:** Downloaded config strips off Knowledge base, Sensitive Info and API Headers.

![Screenshot showing AgentSpace configuration options](https://docs.sketricgen.ai/images/user-guides/agent-space/canvas_config.png)

## Canvas Controls and Layout Tools

The left-side toolbar contains UI controls for managing your view and workflow layout.

| Control            | Function                                             |
| ------------------ | ---------------------------------------------------- |
| Save Workflow      | Saves the current state manually.                    |
| Undo / Redo        | Step backward or forward through recent actions.     |
| Zoom In / Zoom Out | Adjusts the canvas scale.                            |
| Fit View           | Centers all nodes on screen.                         |
| Auto Layout        | Automatically organizes nodes for clearer structure. |

These features enhance usability for larger, more complex workflows but don’t affect workflow logic.

![Animated GIF showing layout and auto-arrangement features in AgentSpace](https://docs.sketricgen.ai/images/user-guides/agent-space/canvas_layout.gif)

## Running and Testing a Workflow

Once your AgentSpace is set up, use the **Test Workflow** button in the top-right corner to simulate and validate its behavior.

When clicked, the workflow is executed from the Trigger node and transitions into the Playground for testing.

Here, you can interact with the agents, observe their tool calls, and review handoffs in real time.

**Checklist before testing**

- Agents have clear instructions and required tools attached and working.
- Handoffs are connected correctly with descriptions.
- Structured Inputs and Outputs are defined for agents that require a specific structure.

**Tip:** The Playground lets you review conversations and traces for debugging before deploying.

![Screenshot showing AgentSpace playground for testing workflows](https://docs.sketricgen.ai/images/user-guides/agent-space/canvas_playground.png)


### Credit Tracking

Every tool call within a workflow consumes credits.

The Trace Explorer shows credit usage per conversation and per tool, helping you optimize efficiency before scaling.

![Screenshot showing traces view in AgentSpace for debugging workflows](https://docs.sketricgen.ai/images/user-guides/agent-space/canvas_traces.png)

## Best Practices

- Start simple: one trigger, two agents, and a single handoff.
- Label edges clearly for agent to perform accurate handoffs.
- Use Tool Agents for specialized subtasks that can be reused.
- Test configurations regularly to catch schema or routing errors.
- Export stable configurations as JSON for backup.
- Keep tool usage minimal per agent to simplify tracing.

## Related Links

- [Agents Guide →](https://docs.sketricgen.ai/user-guides/agents)
- [Orchestration & Handoffs Guide →](https://docs.sketricgen.ai/user-guides/orchestration-and-handoffs)
- [Tracing & Optimization →](https://docs.sketricgen.ai/user-guides/traces-and-optimizations)
