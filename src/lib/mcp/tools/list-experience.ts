import { defineTool } from "@lovable.dev/mcp-js";
import { experience } from "../content";

export default defineTool({
  name: "list_experience",
  title: "List work experience",
  description: "List Aman's work experience with roles, dates and key achievements.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [{ type: "text" as const, text: JSON.stringify(experience, null, 2) }],
    structuredContent: { experience },
  }),
});
