import React from "react";

interface LinkedInIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export default function LinkedInIcon({
  size = 18,
  ...props
}: LinkedInIconProps) {
  return (
    <svg
      height={size}
      width={size}
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g fill="none" fillRule="evenodd">
        <path d="M0 0h20v20H0z" />
        <path
          d="M14.026 7.05C17.382 7.05 18 9.26 18 12.13V18h-3.314v-5.2c0-1.24-.025-2.83-1.725-2.83-1.724 0-1.988 1.347-1.988 2.74V18H7.659V7.316h3.182v1.457h.047c.442-.84 1.525-1.725 3.138-1.725zm-8.445.268V18H2.264V7.318h3.317zM3.921 2c1.06 0 1.921.86 1.922 1.921 0 1.061-.861 1.94-1.922 1.94C2.861 5.86 2 4.982 2 3.92 2 2.861 2.86 2 3.921 2z"
          fill="currentColor"
          fillRule="nonzero"
        />
      </g>
    </svg>
  );
}
