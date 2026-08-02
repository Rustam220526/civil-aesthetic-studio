import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { projects } from "../portfolio";

export default defineTool({
  name: "list_projects",
  title: "List academic projects",
  description:
    "List the civil engineering academic projects, optionally filtered by a search term matching title, category, or tools.",
  inputSchema: {
    query: z
      .string()
      .optional()
      .describe("Optional case-insensitive filter on title, category, or tools."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ query }) => {
    const q = query?.trim().toLowerCase();
    const items = q
      ? projects.filter((p) =>
          [p.title, p.category, p.summary, ...p.tools]
            .join(" ")
            .toLowerCase()
            .includes(q),
        )
      : projects;
    const rows = items.map((p) => ({
      title: p.title,
      category: p.category,
      year: p.year,
      summary: p.summary,
      tools: p.tools,
    }));
    return {
      content: [{ type: "text", text: JSON.stringify(rows, null, 2) }],
      structuredContent: { projects: rows, count: rows.length },
    };
  },
});