import ImageComponent from "./image";

export default function Technologies() {
  return (
    <>
      <div className="mt-10 flex flex-col mx-auto">
        <h2 className="text-teal-50 uppercase text-center font-medium text-lg mb-10">
          Tools <span className="text-teal-400">&</span> Technologies
        </h2>
        <div className="flex space-x-3 md:space-x-5">
          <ImageComponent
            className={
              "hover:scale-110 transform transition duration-300 ease-in-out"
            }
            height={30}
            width={30}
            alt={"JavaScript Logo"}
            src={
              "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-plain.svg"
            }
          />
          <ImageComponent
            className={
              "hover:scale-110 transform transition duration-300 ease-in-out"
            }
            height={30}
            width={30}
            alt={"JavaScript Logo"}
            src={
              "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-plain.svg"
            }
          />
          <ImageComponent
            className={
              "hover:scale-110 transform transition duration-300 ease-in-out"
            }
            height={30}
            width={30}
            alt={"TypeScript Logo"}
            src={
              "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg"
            }
          />

          <ImageComponent
            className={
              "hover:scale-110 transform transition duration-300 ease-in-out"
            }
            height={30}
            width={30}
            alt={"Next.js Logo"}
            src={
              "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg"
            }
          />
          <ImageComponent
            className={
              "hover:scale-110 transform transition duration-300 ease-in-out"
            }
            height={30}
            width={30}
            alt={"Node.js Logo"}
            src={
              "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg"
            }
          />
          <ImageComponent
            className={
              "hover:scale-110 transform transition duration-300 ease-in-out"
            }
            height={30}
            width={30}
            alt={"Tailwind CSS Logo"}
            src={
              "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
            }
          />

          <ImageComponent
            className={
              "hover:scale-110 transform transition duration-300 ease-in-out"
            }
            height={30}
            width={30}
            alt={"Prisma Logo"}
            src={
              "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prisma/prisma-original.svg"
            }
          />
          <ImageComponent
            className={
              "hover:scale-110 transform transition duration-300 ease-in-out"
            }
            height={30}
            width={30}
            alt={"PostgreSQL Logo"}
            src={
              "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg"
            }
          />
        </div>
      </div>
    </>
  );
}
