import ImageComponent from "./image";

export default function Technologies() {
  return (
    <>
      <div className="mt-10 mx-3">
        <h2 className="text-cyan-50 uppercase mb-5 text-lg mb-10">
          Tools & Technologies
        </h2>
        <div className="flex gap-5">
          <ImageComponent
            height={30}
            width={30}
            alt={"JavaScript Logo"}
            src={
              "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-plain.svg"
            }
          />
          <ImageComponent
            height={30}
            width={30}
            alt={"JavaScript Logo"}
            src={
              "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-plain.svg"
            }
          />
          <ImageComponent
            height={30}
            width={30}
            alt={"JavaScript Logo"}
            src={
              "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg"
            }
          />

          <ImageComponent
            height={30}
            width={30}
            alt={"JavaScript Logo"}
            src={
              "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg"
            }
          />
          <ImageComponent
            height={30}
            width={30}
            alt={"JavaScript Logo"}
            src={
              "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg"
            }
          />
          <ImageComponent
            height={30}
            width={30}
            alt={"JavaScript Logo"}
            src={
              "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
            }
          />

          <ImageComponent
            height={30}
            width={30}
            alt={"JavaScript Logo"}
            src={
              "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prisma/prisma-original.svg"
            }
          />
          <ImageComponent
            height={30}
            width={30}
            alt={"JavaScript Logo"}
            src={
              "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg"
            }
          />
        </div>
      </div>
    </>
  );
}
