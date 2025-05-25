import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "OLA Parish Bolga" },
    {
      name: "description",
      content: "Welcome to Our Lady Queen of Africa Parish (OLA)",
    },
  ];
}

export default function Home() {
  return <Welcome />;
}
