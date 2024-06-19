import Image from "next/image";

export default function Projects() {
  return (
    <section className="mx-3 mt-10">
      <h2 className="text-lg uppercase mb-10">Projects</h2>
      <ul className="flex flex-col gap-7">
        <li>
          <h2 className="mb-3">Pet Daycare Management Application</h2>
          <p className="text-slate-400">
            Pawsome Pro is a modern, full-stack web application for managing pet
            care, built with Next.js and Prisma for the backend. <br />{" "}
            Implemented secure payment processing with Stripe and user
            authentication with Next Auth and bcrypt.
          </p>
          <div>
            <ul className="flex flex-wrap mt-2 mb-3 space-x-2">
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
          <Image
            className="rounded"
            src="/Pawsome.png"
            alt="Project image"
            width={200}
            height={200}
          />
        </li>
        <li>
          <h2 className="mb-3">Cabin Management Portal</h2>
          <p className="text-slate-400">
            Developed a full-stack cabin management application with user
            authentication, data visualization, and dark mode features. <br />{" "}
            Utilised React, styled-components, React Query, and Supabase for
            creating and integrating necessary functionalities.
          </p>
          <div>
            <ul className="flex flex-wrap mt-2 mb-3 space-x-2">
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
          <Image
            className="rounded"
            src="/Wild.png"
            alt="Project image"
            width={200}
            height={200}
          />
        </li>
        <li>
          <h2 className="mb-3">Event Finding Web App</h2>
          <p className="text-slate-400">
            Created a responsive platform for finding local events using
            TypeScript, Next.js, Prisma, and Tailwind CSS. Ensured a modern,
            <br />
            efficient user experience with visually appealing interfaces across
            all devices. Optimised loading time with Next.js server side <br />
            rendering and caching features.
          </p>
          <div>
            <ul className="flex flex-wrap mt-2 mb-3 space-x-2">
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
          <Image
            className="rounded"
            src="/Evento.png"
            alt="Project image"
            width={200}
            height={200}
          />
        </li>
        <li>
          <h2 className="mb-3">Remote Job Board</h2>
          <p className="text-slate-400">
            Designed an application for developers to search, sort, and bookmark
            job listings with TypeScript, React, and Context API. <br />{" "}
            Efficiently managed state and data, ensuring cached and persistent
            information between renders. Implemented a user-friendly <br />{" "}
            bookmarking system, enhancing job management features.
          </p>
          <div>
            <ul className="flex flex-wrap mt-2 mb-3 space-x-2">
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
          <Image
            className="rounded"
            src="/rmtDev.png"
            alt="Project image"
            width={200}
            height={200}
          />
        </li>
        <li>
          <h2 className="mb-3">Company Feedback Application</h2>
          <p className="text-slate-400">
            Corpo Pulse is built with TypeScript and React, providing a
            responsive and dynamic user interface. It utilizes Zustand for
            efficient <br /> state management, ensuring smooth and predictable
            application behavior. The styling is enhanced with CSS, delivering a
            pixel-perfect <br /> and visually appealing design
          </p>
          <div>
            <ul className="flex flex-wrap mt-2 mb-3 space-x-2">
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
          <Image
            className="rounded"
            src="/Corpo.png"
            alt="Project image"
            width={200}
            height={200}
          />
        </li>
      </ul>
    </section>
  );
}
