import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "REST Explorer" },
    { name: "Check out country data!", content: "Welcome to REST Explore!" },
  ];
}

export default function Home() {
  return <div>Home page</div>;
} 
