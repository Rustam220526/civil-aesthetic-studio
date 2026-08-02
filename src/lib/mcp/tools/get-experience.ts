import { defineTool } from "@lovable.dev/mcp-js";
import { internships, publications, skills } from "../portfolio";

export default defineTool({
  name: "get_experience",
  title: "Get skills, internships and publications",
  description:
    "Return the technical skill set, internship experience, and published research from the portfolio.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => {
    const payload = { skills, internships, publications };
    return {
      content: [{ type: "text", text: JSON.stringify(payload, null, 2) }],
      structuredContent: payload,
    };
  },
});