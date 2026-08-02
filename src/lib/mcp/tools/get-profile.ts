import { defineTool } from "@lovable.dev/mcp-js";
import { profile } from "../portfolio";

export default defineTool({
  name: "get_profile",
  title: "Get profile overview",
  description:
    "Return the portfolio owner's headline, engineering focus areas, and summary statistics.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [{ type: "text", text: JSON.stringify(profile, null, 2) }],
    structuredContent: { profile },
  }),
});