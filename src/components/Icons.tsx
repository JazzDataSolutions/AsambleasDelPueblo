interface IconProps {
  className?: string;
}

type IconComponent = (props: IconProps) => React.JSX.Element;

const defaultClass = "h-6 w-6";

function svgProps(className?: string) {
  return {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.5,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    className: className ?? defaultClass,
    "aria-hidden": true as const,
  };
}

// --- Navigation ---

export const ChevronDown: IconComponent = ({ className }) => (
  <svg {...svgProps(className)}>
    <path d="M6 9l6 6 6-6" />
  </svg>
);

export const Menu: IconComponent = ({ className }) => (
  <svg {...svgProps(className)}>
    <path d="M4 6h16M4 12h16M4 18h16" />
  </svg>
);

export const Close: IconComponent = ({ className }) => (
  <svg {...svgProps(className)}>
    <path d="M18 6L6 18M6 6l12 12" />
  </svg>
);

// --- Social ---

export const YouTube: IconComponent = ({ className }) => (
  <svg {...svgProps(className)}>
    <path d="M22.54 6.42a2.78 2.78 0 00-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 00-1.94 2A29 29 0 001 12a29 29 0 00.46 5.58 2.78 2.78 0 001.94 2C5.12 20 12 20 12 20s6.88 0 8.6-.46a2.78 2.78 0 001.94-2A29 29 0 0023 12a29 29 0 00-.46-5.58z" />
    <path d="M9.75 15.02l5.75-3.27-5.75-3.27v6.54z" fill="currentColor" stroke="none" />
  </svg>
);

export const Facebook: IconComponent = ({ className }) => (
  <svg {...svgProps(className)}>
    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
  </svg>
);

export const Instagram: IconComponent = ({ className }) => (
  <svg {...svgProps(className)}>
    <rect x="2" y="2" width="20" height="20" rx="5" />
    <circle cx="12" cy="12" r="5" />
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
  </svg>
);

export const TikTok: IconComponent = ({ className }) => (
  <svg {...svgProps(className)}>
    <path d="M9 12a4 4 0 104 4V4a5 5 0 005 5" />
  </svg>
);

export const WhatsApp: IconComponent = ({ className }) => (
  <svg {...svgProps(className)}>
    <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
  </svg>
);

// --- Documents ---

export const Document: IconComponent = ({ className }) => (
  <svg {...svgProps(className)}>
    <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
    <path d="M14 2v6h6" />
    <path d="M16 13H8M16 17H8M10 9H8" />
  </svg>
);

export const Scale: IconComponent = ({ className }) => (
  <svg {...svgProps(className)}>
    <path d="M12 3v18" />
    <path d="M5 6l7-3 7 3" />
    <path d="M2 14l3-8 3 8a5.24 5.24 0 01-6 0z" />
    <path d="M16 14l3-8 3 8a5.24 5.24 0 01-6 0z" />
  </svg>
);

export const Map: IconComponent = ({ className }) => (
  <svg {...svgProps(className)}>
    <path d="M1 6v16l7-4 8 4 7-4V2l-7 4-8-4-7 4z" />
    <path d="M8 2v16M16 6v16" />
  </svg>
);

export const Monitor: IconComponent = ({ className }) => (
  <svg {...svgProps(className)}>
    <rect x="2" y="3" width="20" height="14" rx="2" />
    <path d="M8 21h8M12 17v4" />
  </svg>
);

export const Package: IconComponent = ({ className }) => (
  <svg {...svgProps(className)}>
    <path d="M16.5 9.4l-9-5.19M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" />
    <path d="M3.27 6.96L12 12.01l8.73-5.05M12 22.08V12" />
  </svg>
);

export const Film: IconComponent = ({ className }) => (
  <svg {...svgProps(className)}>
    <rect x="2" y="2" width="20" height="20" rx="2.18" />
    <path d="M7 2v20M17 2v20M2 12h20M2 7h5M2 17h5M17 17h5M17 7h5" />
  </svg>
);

// --- Herramientas Digitales ---

export const Vote: IconComponent = ({ className }) => (
  <svg {...svgProps(className)}>
    <path d="M2 20h20v-4H2v4z" />
    <path d="M9 16V8l3-3 3 3v8" />
    <path d="M12 5v3" />
    <path d="M5 16v-2a2 2 0 012-2h10a2 2 0 012 2v2" />
  </svg>
);

export const BarChart: IconComponent = ({ className }) => (
  <svg {...svgProps(className)}>
    <path d="M12 20V10M18 20V4M6 20v-4" />
  </svg>
);

export const Lightbulb: IconComponent = ({ className }) => (
  <svg {...svgProps(className)}>
    <path d="M9 18h6M10 22h4" />
    <path d="M12 2a7 7 0 00-3 13.33V17h6v-1.67A7 7 0 0012 2z" />
  </svg>
);

export const Globe: IconComponent = ({ className }) => (
  <svg {...svgProps(className)}>
    <circle cx="12" cy="12" r="10" />
    <path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
  </svg>
);

export const Handshake: IconComponent = ({ className }) => (
  <svg {...svgProps(className)}>
    <path d="M7 11l-4 4 4 4" />
    <path d="M17 11l4 4-4 4" />
    <path d="M3 15h6l3-3 3 3h6" />
  </svg>
);

// --- Equipos ---

export const Smartphone: IconComponent = ({ className }) => (
  <svg {...svgProps(className)}>
    <rect x="5" y="2" width="14" height="20" rx="2" />
    <path d="M12 18h.01" />
  </svg>
);

export const Mic: IconComponent = ({ className }) => (
  <svg {...svgProps(className)}>
    <path d="M12 1a3 3 0 00-3 3v8a3 3 0 006 0V4a3 3 0 00-3-3z" />
    <path d="M19 10v2a7 7 0 01-14 0v-2M12 19v4M8 23h8" />
  </svg>
);

export const Laptop: IconComponent = ({ className }) => (
  <svg {...svgProps(className)}>
    <path d="M20 16V7a2 2 0 00-2-2H6a2 2 0 00-2 2v9m16 0H4m16 0l1.28 2.55a1 1 0 01-.9 1.45H3.62a1 1 0 01-.9-1.45L4 16" />
  </svg>
);

export const Projector: IconComponent = ({ className }) => (
  <svg {...svgProps(className)}>
    <rect x="2" y="6" width="20" height="12" rx="2" />
    <circle cx="12" cy="12" r="3" />
    <path d="M6 18v2M18 18v2" />
  </svg>
);

// --- Contenidos ---

export const MicPodcast: IconComponent = ({ className }) => (
  <svg {...svgProps(className)}>
    <path d="M12 1a3 3 0 00-3 3v8a3 3 0 006 0V4a3 3 0 00-3-3z" />
    <path d="M19 10v2a7 7 0 01-14 0v-2" />
    <circle cx="12" cy="12" r="1" fill="currentColor" stroke="none" />
  </svg>
);

export const Trophy: IconComponent = ({ className }) => (
  <svg {...svgProps(className)}>
    <path d="M6 9H4a2 2 0 01-2-2V5h4M18 9h2a2 2 0 002-2V5h-4" />
    <path d="M6 2h12v7a6 6 0 01-12 0V2zM12 15v3M8 21h8M12 18h0" />
  </svg>
);

export const Refresh: IconComponent = ({ className }) => (
  <svg {...svgProps(className)}>
    <path d="M23 4v6h-6M1 20v-6h6" />
    <path d="M3.51 9a9 9 0 0114.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0020.49 15" />
  </svg>
);

export const GlobeAlt: IconComponent = ({ className }) => (
  <svg {...svgProps(className)}>
    <circle cx="12" cy="12" r="10" />
    <path d="M2 12h20" />
    <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
  </svg>
);

export const Book: IconComponent = ({ className }) => (
  <svg {...svgProps(className)}>
    <path d="M4 19.5A2.5 2.5 0 016.5 17H20" />
    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z" />
  </svg>
);

export const Fist: IconComponent = ({ className }) => (
  <svg {...svgProps(className)}>
    <path d="M7 13v-2a2 2 0 014 0v1M11 12V9a2 2 0 014 0v1M15 10v-1a2 2 0 014 0v5a8 8 0 01-8 8h-1a8 8 0 01-8-8v-1a2 2 0 014 0v3" />
  </svg>
);

export const Megaphone: IconComponent = ({ className }) => (
  <svg {...svgProps(className)}>
    <path d="M3 11v2a1 1 0 001 1h1l3 6h2l-3-6h2l7 4V3l-7 4H4a1 1 0 00-1 1z" />
    <path d="M21 10a2 2 0 010 4" />
  </svg>
);

export const Clipboard: IconComponent = ({ className }) => (
  <svg {...svgProps(className)}>
    <path d="M16 4h2a2 2 0 012 2v14a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2h2" />
    <rect x="8" y="2" width="8" height="4" rx="1" />
    <path d="M9 14l2 2 4-4" />
  </svg>
);

export const Building: IconComponent = ({ className }) => (
  <svg {...svgProps(className)}>
    <path d="M3 21h18M5 21V7l8-4v18M19 21V11l-6-4" />
    <path d="M9 9v.01M9 13v.01M9 17v.01M13 13v.01M13 17v.01" />
  </svg>
);

export const Flag: IconComponent = ({ className }) => (
  <svg {...svgProps(className)}>
    <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
    <path d="M4 22v-7" />
  </svg>
);

// --- Contact ---

export const Mail: IconComponent = ({ className }) => (
  <svg {...svgProps(className)}>
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="M22 7l-10 7L2 7" />
  </svg>
);

export const MessageCircle: IconComponent = ({ className }) => (
  <svg {...svgProps(className)}>
    <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
  </svg>
);

export const ArrowRight: IconComponent = ({ className }) => (
  <svg {...svgProps(className)}>
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);
