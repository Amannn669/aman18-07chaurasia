import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { techStack } from "../content";

export default defineTool({
  name: "list_tech_stack",
  title: "List tech stack",
  description: "List Aman's technical skills, optionally filtered by a category name or keyword.",
  inputSchema: {
    query: z.string().optional().describe("Optional keyword to filter categories or skills."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ query }) => {
    const q = query?.trim().toLowerCase();
    const results = !q
      ? techStack
      : techStack
          .map((c) => ({
            category: c.category,
            items: c.category.toLowerCase().includes(q)
              ? c.items
              : c.items.filter((i) => i.toLowerCase().includes(q)),
          }))
          .filter((c) => c.items.length > 0);

    return {
      content: [{ type: "text" as const, text: JSON.stringify(results, null, 2) }],
      structuredContent: { categories: results },
    };
  },
});
