import { useRef } from "react";
import { useInView } from "framer-motion";
import { AiFillGithub, AiFillMail } from "react-icons/ai";
import { useCopyToClipboard } from "usehooks-ts";

const Contact = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const [value, copy] = useCopyToClipboard();

  return (
    <div className="flex flex-col justify-center items-center md:flex-row-reverse  h-[100vh] sm:h-[80vh]">
      <div
        className="flex flex-col text-6xl w-full text-right font-black italic mb-10"
        ref={ref}
        style={{
          transform: isInView ? "none" : "translatex(100px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.3s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s",
        }}
      >
        <h2 className="font-outline pr-1">CONTACT</h2>
        <h2 className="pr-1">CONTACT</h2>
        <h2 className="font-outline pr-1">CONTACT</h2>
      </div>
      <div className="flex flex-col w-full text-left text-6xl space-y-4">
        <h2 className="font-bold">Let's Talk!</h2>
        <a
          href="https://github.com/JustinLien0805"
          target="_blank"
          rel="noreferrer"
          className="flex items-center sm:text-2xl text-lg tracking-wider group"
        >
          <AiFillGithub className="w-8 h-8 mr-2" />
          <p className="group-hover:underline group-hover:decoration-purple-500 group-hover:underline-offset-4">
            https://github.com/JustinLien0805
          </p>
        </a>
        <div
          className="tooltip tooltip-bottom tooltip-primary"
          data-tip={value ? "Copied" : "Copy"}
        >
          <div className="flex items-center sm:text-2xl text-lg tracking-wider group">
            <AiFillMail className="w-8 h-8 mr-2" />
            <p
              className="group-hover:underline group-hover:decoration-purple-500 group-hover:underline-offset-4 cursor-pointer"
              onClick={() => {
                copy("justinlien0805@gmail.com");
              }}
            >
              justinlien0805@gmail.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
