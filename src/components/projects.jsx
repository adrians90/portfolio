import Image from "next/image";

export default function Projects() {
  return (
    <section className="mx-3 mt-10 max-w-md md:max-w-7xl">
      <h2 className="text-lg uppercase mb-10 text-center text-teal-50 font-medium">
        Projects
      </h2>
      <ul className="flex flex-col gap-7 justify-center md:grid grid-cols-2">
        <li className="md:max-w-md relative">
          <h2 className="mb-3">Pet Daycare Management Application</h2>
          <Image
            className="rounded mb-3"
            src="/Pawsome.png"
            alt="Project image"
            width={430}
            height={200}
          />
          <p className="text-slate-400">
            Pawsome Pro is a modern, full-stack web application for managing pet
            care, built with Next.js and Prisma for the backend. Implemented
            secure payment processing with Stripe and user authentication with
            Next Auth and bcrypt.
          </p>
          <div>
            <ul className="flex flex-wrap mt-3 mb-3 space-x-2">
              <li>
                <div className="rounded-full bg-teal-400/10 flex items-center text-teal-300 px-3 py-1 text-xs font-medium leading-5">
                  Next.js
                </div>
              </li>
              <li>
                <div className="rounded-full bg-teal-400/10 flex items-center text-teal-300 px-3 py-1 text-xs font-medium leading-5">
                  TypeScript
                </div>
              </li>
              <li>
                <div className="rounded-full bg-teal-400/10 flex items-center text-teal-300 px-3 py-1 text-xs font-medium leading-5">
                  Zod
                </div>
              </li>
              <li>
                <div className="rounded-full bg-teal-400/10 flex items-center text-teal-300 px-3 py-1 text-xs font-medium leading-5">
                  Prisma
                </div>
              </li>
              <li>
                <div className="rounded-full bg-teal-400/10 flex items-center text-teal-300 px-3 py-1 text-xs font-medium leading-5">
                  Next Auth
                </div>
              </li>
            </ul>
          </div>
        </li>
        <li className="md:max-w-md">
          <h2 className="mb-3">Cabin Management Portal</h2>
          <Image
            className="rounded mb-3"
            src="/Wild.png"
            alt="Project image"
            width={430}
            height={200}
          />
          <p className="text-slate-400">
            Developed a full-stack cabin management application with user
            authentication, data visualization, and dark mode features. Utilised
            React, styled-components, React Query, and Supabase for creating and
            integrating necessary functionalities.
          </p>
          <div>
            <ul className="flex flex-wrap mt-3 mb-3 space-x-2">
              <li>
                <div className="rounded-full bg-teal-400/10 flex items-center text-teal-300 px-3 py-1 text-xs font-medium leading-5">
                  React
                </div>
              </li>
              <li>
                <div className="rounded-full bg-teal-400/10 flex items-center text-teal-300 px-3 py-1 text-xs font-medium leading-5">
                  Styled Components
                </div>
              </li>
              <li>
                <div className="rounded-full bg-teal-400/10 flex items-center text-teal-300 px-3 py-1 text-xs font-medium leading-5">
                  React Query
                </div>
              </li>
              <li>
                <div className="rounded-full bg-teal-400/10 flex items-center text-teal-300 px-3 py-1 text-xs font-medium leading-5">
                  Supabase
                </div>
              </li>
            </ul>
          </div>
        </li>
        <li className="md:max-w-md">
          <h2 className="mb-3">Event Finding Web App</h2>
          <Image
            className="rounded mb-3"
            src="/Evento.png"
            alt="Project image"
            width={430}
            height={200}
          />
          <p className="text-slate-400">
            Created a responsive platform for finding local events using
            TypeScript, Next.js, Prisma, and Tailwind CSS. Ensured a modern,
            efficient user experience with visually appealing interfaces across
            all devices. Optimised loading time with Next.js server side
            rendering and caching features.
          </p>
          <div>
            <ul className="flex flex-wrap mt-3 mb-3 space-x-2">
              <li>
                <div className="rounded-full bg-teal-400/10 flex items-center text-teal-300 px-3 py-1 text-xs font-medium leading-5">
                  TypeScript
                </div>
              </li>
              <li>
                <div className="rounded-full bg-teal-400/10 flex items-center text-teal-300 px-3 py-1 text-xs font-medium leading-5">
                  Next.js
                </div>
              </li>
              <li>
                <div className="rounded-full bg-teal-400/10 flex items-center text-teal-300 px-3 py-1 text-xs font-medium leading-5">
                  JavaScript
                </div>
              </li>
              <li>
                <div className="rounded-full bg-teal-400/10 flex items-center text-teal-300 px-3 py-1 text-xs font-medium leading-5">
                  Prisma
                </div>
              </li>
              <li>
                <div className="rounded-full bg-teal-400/10 flex items-center text-teal-300 px-3 py-1 text-xs font-medium leading-5">
                  Tailwind CSS
                </div>
              </li>
            </ul>
          </div>
        </li>
        <li className="md:max-w-md">
          <h2 className="mb-3">Remote Job Board</h2>
          <Image
            className="rounded mb-3"
            src="/rmtDev.png"
            alt="Project image"
            width={430}
            height={200}
          />
          <p className="text-slate-400">
            Designed an application for developers to search, sort, and bookmark
            job listings with TypeScript, React, and the Context API.
            Efficiently managed state and data, ensuring cached and persistent
            information between renders. Implemented a user-friendly bookmarking
            system, enhancing job management features.
          </p>
          <div>
            <ul className="flex flex-wrap mt-3 mb-3 space-x-2">
              <li>
                <div className="rounded-full bg-teal-400/10 flex items-center text-teal-300 px-3 py-1 text-xs font-medium leading-5">
                  TypeScript
                </div>
              </li>
              <li>
                <div className="rounded-full bg-teal-400/10 flex items-center text-teal-300 px-3 py-1 text-xs font-medium leading-5">
                  JavaScript
                </div>
              </li>
              <li>
                <div className="rounded-full bg-teal-400/10 flex items-center text-teal-300 px-3 py-1 text-xs font-medium leading-5">
                  React
                </div>
              </li>
              <li>
                <div className="rounded-full bg-teal-400/10 flex items-center text-teal-300 px-3 py-1 text-xs font-medium leading-5">
                  CSS
                </div>
              </li>
              <li>
                <div className="rounded-full bg-teal-400/10 flex items-center text-teal-300 px-3 py-1 text-xs font-medium leading-5">
                  Context API
                </div>
              </li>
            </ul>
          </div>
        </li>
        <li className="md:max-w-md">
          <h2 className="mb-3">Company Feedback Application</h2>
          <Image
            className="rounded mb-3"
            src="/Corpo.png"
            alt="Project image"
            width={430}
            height={200}
          />
          <p className="text-slate-400">
            Corpo Pulse is built with TypeScript and React, providing a
            responsive and dynamic user interface. It utilises Zustand for
            efficient state management, ensuring smooth and predictable
            application behavior. The styling is enhanced with CSS, delivering a
            pixel-perfect and visually appealing design.
          </p>
          <div>
            <ul className="flex flex-wrap mt-3 mb-3 space-x-2">
              <li>
                <div className="rounded-full bg-teal-400/10 flex items-center text-teal-300 px-3 py-1 text-xs font-medium leading-5">
                  Next.js
                </div>
              </li>
              <li>
                <div className="rounded-full bg-teal-400/10 flex items-center text-teal-300 px-3 py-1 text-xs font-medium leading-5">
                  TypeScript
                </div>
              </li>
              <li>
                <div className="rounded-full bg-teal-400/10 flex items-center text-teal-300 px-3 py-1 text-xs font-medium leading-5">
                  Zod
                </div>
              </li>
              <li>
                <div className="rounded-full bg-teal-400/10 flex items-center text-teal-300 px-3 py-1 text-xs font-medium leading-5">
                  Prisma
                </div>
              </li>
              <li>
                <div className="rounded-full bg-teal-400/10 flex items-center text-teal-300 px-3 py-1 text-xs font-medium leading-5">
                  Next Auth
                </div>
              </li>
            </ul>
          </div>
        </li>
        <li className="md:max-w-md">
          <h2 className="mb-3">Restaurant Ordering Application</h2>
          <Image
            className="rounded mb-3"
            src="/Pizza.png"
            alt="Project image"
            width={430}
            height={200}
          />
          <p className="text-slate-400">
            The application is built with React and uses React Router for
            efficient and dynamic page navigation.It utilises Redux for reliable
            state management, ensuring smooth and predictable data flow. The
            design is created with Tailwind CSS, delivering a responsive and
            visually appealing interface.
          </p>
          <div>
            <ul className="flex flex-wrap mt-3 mb-3 space-x-2">
              <li>
                <div className="rounded-full bg-teal-400/10 flex items-center text-teal-300 px-3 py-1 text-xs font-medium leading-5">
                  React
                </div>
              </li>
              <li>
                <div className="rounded-full bg-teal-400/10 flex items-center text-teal-300 px-3 py-1 text-xs font-medium leading-5">
                  React Router
                </div>
              </li>
              <li>
                <div className="rounded-full bg-teal-400/10 flex items-center text-teal-300 px-3 py-1 text-xs font-medium leading-5">
                  Redux
                </div>
              </li>
              <li>
                <div className="rounded-full bg-teal-400/10 flex items-center text-teal-300 px-3 py-1 text-xs font-medium leading-5">
                  Tailwind CSS
                </div>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </section>
  );
}
