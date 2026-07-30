import { defineTool } from "@lovable.dev/mcp-js";
import { profile } from "../content";

export default defineTool({
  name: "get_profile",
  title: "Get profile",
  description: "Get Aman Chaurasia's professional profile summary, headline and focus areas.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [{ type: "text" as const, text: JSON.stringify(profile, null, 2) }],
    structuredContent: { profile },
  }),
});
