import { ArrowRightIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import Link from "next/link";

export default function Projects() {
  return (
    <section className="mx-3 mt-10 max-w-md md:max-w-7xl">
      <Link href="https://github.com/adrians90" target="_blank">
        <h2 className="text-lg uppercase mb-10 text-center text-teal-50 font-medium">
          Projects
        </h2>
      </Link>
      <ul className="flex flex-col gap-7 justify-center md:grid grid-cols-2">
        <Link href="https://pawsome-pro.vercel.app/" target="_blank">
          <li className="md:max-w-md">
            <h2 className="mb-3">Pet Daycare Management Application</h2>
            <Image
              className="rounded mb-3 hover:scale-110 transform transition duration-300 ease-in-out"
              src="/Pawsome.png"
              alt="Project image"
              width={430}
              height={200}
            />
            <p className="text-slate-400 hover:text-white">
              Pawsome Pro is a modern, full-stack web application for managing
              pet care, built with Next.js and Prisma for the backend.
              Implemented secure payment processing with Stripe and user
              authentication with Next Auth and bcrypt.
            </p>
            <div>
              <ul className="flex flex-wrap mt-3 mb-3 space-x-2">
                <li className="hover:scale-110 transform transition duration-300 ease-in-out">
                  <div className="rounded-full bg-teal-400/10 flex items-center text-teal-300 px-3 py-1 text-xs font-medium leading-5">
                    Next.js
                  </div>
                </li>
                <li className="hover:scale-110 transform transition duration-300 ease-in-out">
                  <div className="rounded-full bg-teal-400/10 flex items-center text-teal-300 px-3 py-1 text-xs font-medium leading-5">
                    TypeScript
                  </div>
                </li>
                <li className="hover:scale-110 transform transition duration-300 ease-in-out">
                  <div className="rounded-full bg-teal-400/10 flex items-center text-teal-300 px-3 py-1 text-xs font-medium leading-5">
                    Zod
                  </div>
                </li>
                <li className="hover:scale-110 transform transition duration-300 ease-in-out">
                  <div className="rounded-full bg-teal-400/10 flex items-center text-teal-300 px-3 py-1 text-xs font-medium leading-5">
                    Prisma
                  </div>
                </li>
                <li className="hover:scale-110 transform transition duration-300 ease-in-out">
                  <div className="rounded-full bg-teal-400/10 flex items-center text-teal-300 px-3 py-1 text-xs font-medium leading-5">
                    Next Auth
                  </div>
                </li>
              </ul>
            </div>
          </li>
        </Link>

        <Link href="https://evento-as90.vercel.app/" target="_blank">
          <li className="md:max-w-md">
            <h2 className="mb-3">Event Finding Web App</h2>
            <Image
              className="rounded mb-3 hover:scale-110 transform transition duration-300 ease-in-out"
              src="/Evento.png"
              alt="Project image"
              width={430}
              height={200}
            />
            <p className="text-slate-400 hover:text-white">
              Created a responsive platform for finding local events using
              TypeScript, Next.js, Prisma, and Tailwind CSS. Optimised loading
              time with Next.js server side rendering and caching features.
            </p>
            <div>
              <ul className="flex flex-wrap mt-3 mb-3 space-x-2">
                <li className="hover:scale-110 transform transition duration-300 ease-in-out">
                  <div className="rounded-full bg-teal-400/10 flex items-center text-teal-300 px-3 py-1 text-xs font-medium leading-5">
                    TypeScript
                  </div>
                </li>
                <li className="hover:scale-110 transform transition duration-300 ease-in-out">
                  <div className="rounded-full bg-teal-400/10 flex items-center text-teal-300 px-3 py-1 text-xs font-medium leading-5">
                    Next.js
                  </div>
                </li>
                <li className="hover:scale-110 transform transition duration-300 ease-in-out">
                  <div className="rounded-full bg-teal-400/10 flex items-center text-teal-300 px-3 py-1 text-xs font-medium leading-5">
                    JavaScript
                  </div>
                </li>
                <li className="hover:scale-110 transform transition duration-300 ease-in-out">
                  <div className="rounded-full bg-teal-400/10 flex items-center text-teal-300 px-3 py-1 text-xs font-medium leading-5">
                    Prisma
                  </div>
                </li>
                <li className="hover:scale-110 transform transition duration-300 ease-in-out">
                  <div className="rounded-full bg-teal-400/10 flex items-center text-teal-300 px-3 py-1 text-xs font-medium leading-5">
                    Tailwind CSS
                  </div>
                </li>
              </ul>
            </div>
          </li>
        </Link>
        <Link href="https://the-wild-oasis-as90.netlify.app/" target="_blank">
          <li className="md:max-w-md">
            <h2 className="mb-3">Cabin Management Portal</h2>
            <Image
              className="rounded mb-3 hover:scale-110 transform transition duration-300 ease-in-out"
              src="/Wild.png"
              alt="Project image"
              width={430}
              height={200}
            />
            <p className="text-slate-400 hover:text-white">
              Developed a full-stack cabin management application with user
              authentication, data visualization, and dark mode features.
              Utilised React, styled-components, React Query, and Supabase for
              creating and integrating necessary functionalities.
            </p>
            <div>
              <ul className="flex flex-wrap mt-3 mb-3 space-x-2">
                <li className="hover:scale-110 transform transition duration-300 ease-in-out">
                  <div className="rounded-full bg-teal-400/10 flex items-center text-teal-300 px-3 py-1 text-xs font-medium leading-5">
                    React
                  </div>
                </li>
                <li className="hover:scale-110 transform transition duration-300 ease-in-out">
                  <div className="rounded-full bg-teal-400/10 flex items-center text-teal-300 px-3 py-1 text-xs font-medium leading-5">
                    Styled Components
                  </div>
                </li>
                <li className="hover:scale-110 transform transition duration-300 ease-in-out">
                  <div className="rounded-full bg-teal-400/10 flex items-center text-teal-300 px-3 py-1 text-xs font-medium leading-5">
                    React Query
                  </div>
                </li>
                <li className="hover:scale-110 transform transition duration-300 ease-in-out">
                  <div className="rounded-full bg-teal-400/10 flex items-center text-teal-300 px-3 py-1 text-xs font-medium leading-5">
                    Supabase
                  </div>
                </li>
              </ul>
            </div>
          </li>
        </Link>
        <Link href="https://rmt-dev-as90.vercel.app/" target="_blank">
          <li className="md:max-w-md">
            <h2 className="mb-3">Remote Job Board</h2>
            <Image
              className="rounded mb-3 hover:scale-110 transform transition duration-300 ease-in-out"
              src="/rmtdev.png"
              alt="Project image"
              width={430}
              height={200}
            />
            <p className="text-slate-400 hover:text-white">
              Designed an application for developers to search, sort, and
              bookmark job listings with TypeScript, React, and the Context API.
              Efficiently managed state and data, ensuring cached and persistent
              information between renders. Implemented a user-friendly
              bookmarking system, enhancing job management features.
            </p>
            <div>
              <ul className="flex flex-wrap mt-3 mb-3 space-x-2">
                <li className="hover:scale-110 transform transition duration-300 ease-in-out">
                  <div className="rounded-full bg-teal-400/10 flex items-center text-teal-300 px-3 py-1 text-xs font-medium leading-5">
                    TypeScript
                  </div>
                </li>
                <li className="hover:scale-110 transform transition duration-300 ease-in-out">
                  <div className="rounded-full bg-teal-400/10 flex items-center text-teal-300 px-3 py-1 text-xs font-medium leading-5">
                    JavaScript
                  </div>
                </li>
                <li className="hover:scale-110 transform transition duration-300 ease-in-out">
                  <div className="rounded-full bg-teal-400/10 flex items-center text-teal-300 px-3 py-1 text-xs font-medium leading-5">
                    React
                  </div>
                </li>
                <li className="hover:scale-110 transform transition duration-300 ease-in-out">
                  <div className="rounded-full bg-teal-400/10 flex items-center text-teal-300 px-3 py-1 text-xs font-medium leading-5">
                    CSS
                  </div>
                </li>
                <li className="hover:scale-110 transform transition duration-300 ease-in-out">
                  <div className="rounded-full bg-teal-400/10 flex items-center text-teal-300 px-3 py-1 text-xs font-medium leading-5">
                    Context API
                  </div>
                </li>
              </ul>
            </div>
          </li>
        </Link>
        <Link href="https://corpo-pulse.vercel.app/" target="_blank">
          <li className="md:max-w-md">
            <h2 className="mb-3">Company Feedback Application</h2>
            <Image
              className="rounded mb-3 hover:scale-110 transform transition duration-300 ease-in-out"
              src="/Corpo.png"
              alt="Project image"
              width={430}
              height={200}
            />
            <p className="text-slate-400 hover:text-white">
              Corpo Pulse is built with TypeScript and React, providing a
              responsive and dynamic user interface. It utilises Zustand for
              efficient state management, ensuring smooth and predictable
              application behavior. The styling is enhanced with CSS, delivering
              a pixel-perfect and visually appealing design.
            </p>
            <div>
              <ul className="flex flex-wrap mt-3 mb-3 space-x-2">
                <li className="hover:scale-110 transform transition duration-300 ease-in-out">
                  <div className="rounded-full bg-teal-400/10 flex items-center text-teal-300 px-3 py-1 text-xs font-medium leading-5">
                    Next.js
                  </div>
                </li>
                <li className="hover:scale-110 transform transition duration-300 ease-in-out">
                  <div className="rounded-full bg-teal-400/10 flex items-center text-teal-300 px-3 py-1 text-xs font-medium leading-5">
                    TypeScript
                  </div>
                </li>
                <li className="hover:scale-110 transform transition duration-300 ease-in-out">
                  <div className="rounded-full bg-teal-400/10 flex items-center text-teal-300 px-3 py-1 text-xs font-medium leading-5">
                    Zod
                  </div>
                </li>
                <li className="hover:scale-110 transform transition duration-300 ease-in-out">
                  <div className="rounded-full bg-teal-400/10 flex items-center text-teal-300 px-3 py-1 text-xs font-medium leading-5">
                    Prisma
                  </div>
                </li>
                <li className="hover:scale-110 transform transition duration-300 ease-in-out">
                  <div className="rounded-full bg-teal-400/10 flex items-center text-teal-300 px-3 py-1 text-xs font-medium leading-5">
                    Next Auth
                  </div>
                </li>
              </ul>
            </div>
          </li>
        </Link>
        <Link href="https://fast-react-pizza-as90.vercel.app/" target="_blank">
          <li className="md:max-w-md">
            <h2 className="mb-3">Restaurant Ordering Application</h2>
            <Image
              className="rounded mb-3 hover:scale-110 transform transition duration-300 ease-in-out"
              src="/Pizza.png"
              alt="Project image"
              width={430}
              height={200}
            />
            <p className="text-slate-400 hover:text-white">
              The application is built with React and uses React Router for
              efficient and dynamic page navigation.It utilises Redux for
              reliable state management, ensuring smooth and predictable data
              flow. The design is created with Tailwind CSS, delivering a
              responsive and visually appealing interface.
            </p>
            <div>
              <ul className="flex flex-wrap mt-3 mb-3 space-x-2">
                <li className="hover:scale-110 transform transition duration-300 ease-in-out">
                  <div className="rounded-full bg-teal-400/10 flex items-center text-teal-300 px-3 py-1 text-xs font-medium leading-5">
                    React
                  </div>
                </li>
                <li className="hover:scale-110 transform transition duration-300 ease-in-out">
                  <div className="rounded-full bg-teal-400/10 flex items-center text-teal-300 px-3 py-1 text-xs font-medium leading-5">
                    React Router
                  </div>
                </li>
                <li className="hover:scale-110 transform transition duration-300 ease-in-out">
                  <div className="rounded-full bg-teal-400/10 flex items-center text-teal-300 px-3 py-1 text-xs font-medium leading-5">
                    Redux
                  </div>
                </li>
                <li className="hover:scale-110 transform transition duration-300 ease-in-out">
                  <div className="rounded-full bg-teal-400/10 flex items-center text-teal-300 px-3 py-1 text-xs font-medium leading-5">
                    Tailwind CSS
                  </div>
                </li>
              </ul>
            </div>
          </li>
        </Link>
      </ul>
      <Link
        href="https://github.com/adrians90?tab=repositories"
        target="_blank"
      >
        <button className="hover:bg-teal-800 py-2 px-5 uppercase rounded-full bg-teal-400/10 text-teal-300 font-medium flex justify-center items-center mb-4 mt-4 w-full">
          See All
          <ArrowRightIcon className="inline-block w-4 h-4 ml-2" />
        </button>
      </Link>
    </section>
  );
}
