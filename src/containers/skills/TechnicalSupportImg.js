import React from "react";

export default function TechnicalSupportImg(props) {
  const theme = props.theme;

  return (
    <svg
      id="technical-support-illustration"
      data-name="Technical Support"
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      viewBox="0 0 920 640"
    >
      <ellipse cx="460" cy="586" rx="350" ry="28" fill={theme.imageDark} />

      <rect
        x="138"
        y="80"
        width="520"
        height="340"
        rx="22"
        fill={theme.imageDark}
      />
      <rect
        x="160"
        y="104"
        width="476"
        height="270"
        rx="14"
        fill={theme.body}
        stroke={theme.accentColor}
        strokeWidth="3"
      />
      <rect
        x="160"
        y="104"
        width="476"
        height="48"
        rx="14"
        fill={theme.accentColor}
      />
      <circle cx="190" cy="128" r="7" fill={theme.body} opacity="0.95" />
      <circle cx="214" cy="128" r="7" fill={theme.body} opacity="0.7" />
      <circle cx="238" cy="128" r="7" fill={theme.body} opacity="0.45" />

      <rect x="198" y="188" width="168" height="26" rx="6" fill={theme.text} />
      <rect
        x="198"
        y="228"
        width="352"
        height="16"
        rx="8"
        fill={theme.secondaryText}
        opacity="0.45"
      />
      <rect
        x="198"
        y="260"
        width="300"
        height="16"
        rx="8"
        fill={theme.secondaryText}
        opacity="0.32"
      />
      <rect
        x="198"
        y="292"
        width="240"
        height="16"
        rx="8"
        fill={theme.secondaryText}
        opacity="0.25"
      />

      <rect
        x="496"
        y="184"
        width="96"
        height="96"
        rx="16"
        fill={theme.imageDark}
        stroke={theme.accentColor}
        strokeWidth="3"
      />
      <path
        d="M520 232l16 16 34-38"
        fill="none"
        stroke={theme.accentColor}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="9"
      />

      <rect x="352" y="420" width="92" height="118" rx="8" fill={theme.dark} />
      <rect x="288" y="532" width="220" height="24" rx="12" fill={theme.dark} />

      <g transform="translate(606 302)">
        <rect
          x="0"
          y="0"
          width="190"
          height="122"
          rx="18"
          fill={theme.body}
          stroke={theme.accentColor}
          strokeWidth="3"
        />
        <path
          d="M34 122l-16 38 54-38"
          fill={theme.body}
          stroke={theme.accentColor}
          strokeLinejoin="round"
          strokeWidth="3"
        />
        <rect x="28" y="28" width="104" height="14" rx="7" fill={theme.text} />
        <rect
          x="28"
          y="58"
          width="134"
          height="12"
          rx="6"
          fill={theme.secondaryText}
          opacity="0.45"
        />
        <rect
          x="28"
          y="84"
          width="94"
          height="12"
          rx="6"
          fill={theme.secondaryText}
          opacity="0.3"
        />
      </g>

      <g transform="translate(92 342)">
        <rect
          x="0"
          y="0"
          width="184"
          height="132"
          rx="18"
          fill={theme.body}
          stroke={theme.imageDark}
          strokeWidth="4"
        />
        <rect x="28" y="28" width="78" height="14" rx="7" fill={theme.text} />
        <rect
          x="28"
          y="58"
          width="126"
          height="12"
          rx="6"
          fill={theme.secondaryText}
          opacity="0.42"
        />
        <rect
          x="28"
          y="84"
          width="86"
          height="12"
          rx="6"
          fill={theme.secondaryText}
          opacity="0.28"
        />
        <circle cx="146" cy="34" r="14" fill={theme.accentColor} />
      </g>

      <g transform="translate(642 92)">
        <circle cx="82" cy="90" r="64" fill={theme.skinColor} />
        <path
          d="M28 92c0-46 25-78 66-78 38 0 62 30 62 76"
          fill="none"
          stroke={theme.dark}
          strokeLinecap="round"
          strokeWidth="18"
        />
        <path
          d="M18 92h24v52H18c-10 0-18-8-18-18v-16c0-10 8-18 18-18Z"
          fill={theme.accentColor}
        />
        <path
          d="M146 92h24c10 0 18 8 18 18v16c0 10-8 18-18 18h-24V92Z"
          fill={theme.accentColor}
        />
        <path
          d="M146 142c0 26-18 44-46 44H82"
          fill="none"
          stroke={theme.dark}
          strokeLinecap="round"
          strokeWidth="9"
        />
        <circle cx="76" cy="186" r="10" fill={theme.accentColor} />
        <path d="M50 82c18-22 58-24 82 0v20H50V82Z" fill={theme.dark} />
        <path
          d="M62 112c13 22 44 24 60 0"
          fill="none"
          stroke={theme.dark}
          strokeLinecap="round"
          strokeWidth="7"
          opacity="0.35"
        />
      </g>

      <g transform="translate(680 450)">
        <circle cx="26" cy="26" r="26" fill={theme.accentColor} />
        <path
          d="M15 27l8 8 16-20"
          fill="none"
          stroke={theme.body}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="6"
        />
      </g>
    </svg>
  );
}
