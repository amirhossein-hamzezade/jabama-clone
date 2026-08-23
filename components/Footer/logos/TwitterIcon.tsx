import React from "react";

interface TwitterIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export default function TwitterIcon({ size = 18, ...props }: TwitterIconProps) {
  return (
    <svg
      height={size}
      width={size}
      viewBox="0 0 20 16"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M17.945 3.99A8.121 8.121 0 0020 1.895v-.001a8.681 8.681 0 01-2.363.637c.85-.5 1.5-1.285 1.805-2.23a8.302 8.302 0 01-2.6.977A4.136 4.136 0 0013.847 0c-2.27 0-4.098 1.814-4.098 4.038 0 .32.028.627.095.92A11.67 11.67 0 011.392.735a4.028 4.028 0 00-.561 2.04c0 1.399.73 2.638 1.822 3.356A4.098 4.098 0 01.8 5.634v.044c0 1.962 1.42 3.591 3.285 3.967a4.15 4.15 0 01-1.075.133c-.262 0-.527-.015-.776-.069a4.135 4.135 0 003.831 2.813 8.325 8.325 0 01-5.084 1.721A7.72 7.72 0 010 14.188 11.677 11.677 0 006.29 16c7.236 0 11.952-5.944 11.655-12.01z"
        fill="currentColor"
        fillRule="nonzero"
      />
    </svg>
  );
}
