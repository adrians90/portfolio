import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-auto flex items-center justify-between flex-row h-16 border-t border-teal-100/20 hover:border-teal-400 transition duration-300 ease-in-out mx-3 md:mx-6">
      <Link
        href="https://www.linkedin.com/in/adrian-sandu-as90"
        target="_blank"
        className="opacity-90 hover:opacity-100 transition duration-300 ease-in-out"
      >
        <Image src="/linkedin.png" alt="linkedin logo" width={42} height={42} />
      </Link>
      <Link
        href="https://github.com/adrians90"
        target="_blank"
        className="opacity-90 hover:opacity-100 transition duration-300 ease-in-out"
      >
        <Image
          src="/github.png"
          alt="github logo"
          width={42}
          height={42}
          className="rounded-md bg-teal-100"
        />
      </Link>
      <a
        href="mailto:adriansandu9090@gmail.com"
        className="opacity-90 hover:opacity-100 transition duration-300 ease-in-out"
      >
        <Image src="/email.png" alt="email logo" width={42} height={42} />
      </a>
    </footer>
  );
}
