import { defineTool, ToolError } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { projects } from "../portfolio";

export default defineTool({
  name: "get_project",
  title: "Get project details",
  description:
    "Return the full detail of one academic project: overview, approach, outcomes, and tools.",
  inputSchema: {
    title: z
      .string()
      .min(1)
      .describe("Full or partial project title, e.g. 'Seismic'."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ title }) => {
    const q = title.trim().toLowerCase();
    const project = projects.find((p) => p.title.toLowerCase().includes(q));
    if (!project) {
      throw new ToolError(
        `No project matching "${title}". Known titles: ${projects
          .map((p) => p.title)
          .join("; ")}`,
      );
    }
    return {
      content: [{ type: "text", text: JSON.stringify(project, null, 2) }],
      structuredContent: { project },
    };
  },
});