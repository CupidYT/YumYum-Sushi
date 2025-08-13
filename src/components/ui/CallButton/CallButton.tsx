import Link from "next/link";
import React from "react";

type CallButtonProps = {
  className?: string;
  linkClassName?: string;
  phoneNumber?: string;
  children?: React.ReactNode;
  whiteIcon?: boolean;
};

export default function CallButton({
  linkClassName = "",
  phoneNumber = "022000809",
  children,
  whiteIcon = false,
}: CallButtonProps) {
  return (
    <Link
      href={`tel:${phoneNumber}`}
      className={
        "group flex items-center gap-2 text-main bg-hover no-underline h-11 px-5 rounded-full hover:text-white hover:bg-main transition-colors " +
        linkClassName
      }
    >
      <svg
        width={20}
        height={20}
        fill="currentColor"
        className={`group-hover:text-white transition-colors ${
          whiteIcon ? "text-white" : "text-main"
        }`}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
      >
        <path d="m6.476 2.034.898-.287c.84-.268 1.738.166 2.098 1.014l.716 1.69a1.93 1.93 0 0 1-.428 2.14L8.183 8.09c.097.897.398 1.78.903 2.648a7.25 7.25 0 0 0 1.893 2.162l1.896-.633c.719-.239 1.501.037 1.942.684l1.027 1.509c.513.753.42 1.791-.215 2.43l-.682.684a2.516 2.516 0 0 1-2.543.648c-2.116-.66-4.061-2.619-5.836-5.877C4.79 9.08 4.163 6.31 4.686 4.037c.22-.957.902-1.72 1.792-2.003" />
      </svg>
      <span>{children || "022 00 08 09"}</span>
    </Link>
  );
}