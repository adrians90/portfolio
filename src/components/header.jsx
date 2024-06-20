import Link from "next/link";
import H1 from "./h1";

export default function Header() {
  return (
    <nav className="h-16 justify-between flex items-center mx-3 my-3 md:mx-6 md:my-4 border-b border-teal-100/20 hover:border-teal-400 transition duration-300 ease-in-out">
      <Link
        href="https://github.com/adrians90"
        target="_blank"
        className="opacity-90 hover:opacity-100 transition duration-300 ease-in-out"
      >
        <H1>Adrian Sandu</H1>
        <p className="text-medium text-teal-50 font-medium">
          <span className="text-teal-400">Frontend</span> Developer
        </p>
      </Link>
      <Link
        href="/cv"
        className="relative text-teal-400 font-medium text-xl opacity-90 hover:opacity-1000"
      >
        CV
      </Link>
    </nav>
  );
}
