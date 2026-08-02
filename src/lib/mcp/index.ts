import { defineMcp } from "@lovable.dev/mcp-js";
import getExperienceTool from "./tools/get-experience";
import getProfileTool from "./tools/get-profile";
import getProjectTool from "./tools/get-project";
import listProjectsTool from "./tools/list-projects";

export default defineMcp({
  name: "structurally-aesthetic",
  title: "Structurally Aesthetic",
  version: "0.1.0",
  instructions:
    "Read-only tools for a Civil Engineering graduate portfolio. Use `get_profile` for an overview, `list_projects` and `get_project` for academic project detail, and `get_experience` for skills, internships, and publications.",
  tools: [getProfileTool, listProjectsTool, getProjectTool, getExperienceTool],
});