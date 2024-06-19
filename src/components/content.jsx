import Projects from "./projects";
import Technologies from "./technologies";

export default function Content() {
  return (
    <section className="flex max-w-7xl min-h-screen md:mx-3 flex-col">
      <Technologies />
      <Projects />
    </section>
  );
}
