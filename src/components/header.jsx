import H1 from "./h1";

export default function Header() {
  return (
    <nav className="h-16 flex items-center mx-3 my-3 md:mx-6 md:my-6">
      <div>
        <H1>Adrian Sandu</H1>
        <p className="text-medium">
          <span className="text-teal-400">Frontend</span> Developer
        </p>
      </div>
    </nav>
  );
}
