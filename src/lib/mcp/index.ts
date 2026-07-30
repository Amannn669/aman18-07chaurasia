import { auth, defineMcp } from "@lovable.dev/mcp-js";
import getProfileTool from "./tools/get-profile";
import listTechStackTool from "./tools/list-tech-stack";
import listExperienceTool from "./tools/list-experience";

const projectRef = import.meta.env.VITE_SUPABASE_PROJECT_ID ?? "project-ref-unset";

export default defineMcp({
  name: "aman18-07chaurasia",
  title: "aman18-07chaurasia",
  version: "0.1.0",
  instructions:
    "Tools for Aman Chaurasia's portfolio. Use `get_profile` for an overview, `list_tech_stack` for skills, and `list_experience` for work history.",
  auth: auth.oauth.issuer({
    issuer: `https://${projectRef}.supabase.co/auth/v1`,
    acceptedAudiences: "authenticated",
  }),
  tools: [getProfileTool, listTechStackTool, listExperienceTool],
});
