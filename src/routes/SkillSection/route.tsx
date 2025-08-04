import { createFileRoute } from "@tanstack/react-router";
import SkillPageScreen from "@/components/SkillPage/SkillPage";

export const Route = createFileRoute("/SkillSection")({
  component: SkillPageScreen,
});
