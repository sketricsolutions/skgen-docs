**Public URL:** https://docs.sketricgen.ai/user-guides/structured-inputs-and-outputs

## Why Structure?

Structured data makes multi-agent workflows predictable, renderable, and testable.

In SketricGen, you can define schemas directly in a **form-based UI**—no coding required.

Each agent’s Structured Input and Structured Output are automatically converted into a **backend schema** (Pydantic/JSON Schema style).

These schemas are used during **handoffs**, **agent calls**, and **validations**, ensuring that every agent in your workflow exchanges data in a consistent, typed format.

![Screenshot showing structured input/output interface](https://docs.sketricgen.ai/images/user-guides/structured-input-output/io_structured_io.png)

## Structured Input

A **Structured Input** defines what data an agent expects before it starts reasoning.

It acts as a contract for parent agents, ensuring they supply all required fields when handing off or invoking this agent.

### Creating a Structured Input

1. Open the agent node in the AgentSpace.
2. Navigate to the **Structured Input** tab.
3. (Optional) Add a **Schema Name** to help identify this structure.
4. Click **Add New Field** and configure the following:
   - **Field Name** — e.g., `customer_name`, `intent`, `priority`.
   - **Type** — choose from _String_, _Integer_, _Float_, or _Boolean_.
   - **Description** — acts as both a UI tooltip and a guidance note for the agent (e.g., “The name of the customer requesting support”).
   - **Default Value** — optional, used if no value is supplied by the parent.
5. Click **Save Changes** to confirm.

**Guideline:**

Structured Inputs are most useful on _child agents_, where they communicate clearly what information the parent agent or trigger node must provide before a handoff occurs.

## Structured Output

A **Structured Output** defines the exact JSON format an agent produces once its reasoning is complete.

This ensures predictable data handling between connected agents and external integrations, especially when publishing results to APIs or widgets.

### Creating a Structured Output

1. Open the same agent node.
2. Select the **Structured Output** tab.
3. Add fields exactly as you would for Structured Inputs:
   - Name
   - Type (String, Integer, Float, Boolean)
   - Description (e.g., “Summarized report text returned by this agent.”)
   - Default Value (optional)
4. Save the schema.

**What happens behind the scenes**

- SketricGen generates a **typed schema** for the agent in JSON Schema format.
- On **handoff**, the parent agent must provide all Structured Input fields required by the child.
- If any fields are missing or invalid, they are flagged inside **Trace Explorer** for quick debugging.
- Descriptions are surfaced both in the UI and model prompt context, improving model interpretability.

## Best Practices

- Use defined **Structured Inputs** for downstream agents—this prevents data mismatch during orchestration.
- Use **Structured Outputs** primarily on **final responder** agents that return data to users or APIs.
- **Be careful when using Structured outputs** in intermediate agents as the model will always respond in JSON, so its not very human/customer facing friendly. Use this for final agents or agents-as-tools.
- Keep field names simple and lowercase, separated by underscores.
- Use short, human-readable descriptions; they also serve as hints for model behavior.
- When modifying a schema, re-test the workflow to ensure all upstream connections still match.
- Avoid unnecessary fields; smaller, well-defined schemas improve agent performance and clarity.

## Example

**Structured Output (Lina Triage Agent):**

```json
{
	"topic": "Pricing",
	"question": "What are the pricing options for Resumes Ranker?"
}
```

**Structured Output (Alex Agent):**

```json
{
	"query": "What are the pricing options for Resumes Ranker?",
	"resolved": true
}
```

![Animated GIF showing structured data flow in workflows](https://docs.sketricgen.ai/images/user-guides/structured-input-output/io_structured.gif)
