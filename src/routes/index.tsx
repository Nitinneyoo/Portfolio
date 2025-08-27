import { createFileRoute } from "@tanstack/react-router";
import HomePageScreen from "@/components/HomePage/HomePAge";

export const Route = createFileRoute("/")({
  component: HomePageScreen,
});
