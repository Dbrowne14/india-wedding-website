// Line icons for the India Guide cards, ported 1:1 from the Claude Design
// component's `icon()` path data.

export type IconName =
  | "drop"
  | "cross"
  | "pill"
  | "shield"
  | "tissue"
  | "chat"
  | "hanger"
  | "sun"
  | "case"
  | "note"
  | "card"
  | "car"
  | "bowl"
  | "sim"
  | "coin"
  | "eye"
  | "pass";

type IconProps = {
  className?: string;
};

function Svg({ className, children }: IconProps & { children: React.ReactNode }) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      {children}
    </svg>
  );
}

const ICONS: Record<IconName, (props: IconProps) => React.ReactElement> = {
  drop: (props) => (
    <Svg {...props}>
      <path d="M12 3.5C12 3.5 6 10.5 6 14.5a6 6 0 0 0 12 0C18 10.5 12 3.5 12 3.5Z" />
    </Svg>
  ),
  cross: (props) => (
    <Svg {...props}>
      <path d="M12 5v14M5 12h14" />
    </Svg>
  ),
  pill: (props) => (
    <Svg {...props}>
      <rect x="4" y="9" width="16" height="7" rx="3.5" />
      <path d="M12 9v7" />
    </Svg>
  ),
  shield: (props) => (
    <Svg {...props}>
      <path d="M12 4l7 2.5v5c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9v-5L12 4Z" />
    </Svg>
  ),
  tissue: (props) => (
    <Svg {...props}>
      <rect x="5" y="8" width="14" height="11" rx="2" />
      <path d="M9 8c1-2.5 5-2.5 6 0" />
    </Svg>
  ),
  chat: (props) => (
    <Svg {...props}>
      <rect x="4" y="5" width="16" height="11" rx="3" />
      <path d="M9 16l-2 4 5-4" />
    </Svg>
  ),
  hanger: (props) => (
    <Svg {...props}>
      <path d="M4 17h16l-8-6-8 6Z" />
      <path d="M12 11V8.5a2 2 0 1 1 2-2" />
    </Svg>
  ),
  sun: (props) => (
    <Svg {...props}>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 3v2M12 19v2M3 12h2M19 12h2M5.6 5.6l1.4 1.4M17 17l1.4 1.4M18.4 5.6L17 7M7 17l-1.4 1.4" />
    </Svg>
  ),
  case: (props) => (
    <Svg {...props}>
      <rect x="4" y="8" width="16" height="11" rx="2" />
      <path d="M9 8V6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2" />
    </Svg>
  ),
  note: (props) => (
    <Svg {...props}>
      <rect x="3" y="7" width="18" height="10" rx="2" />
      <circle cx="12" cy="12" r="2.5" />
    </Svg>
  ),
  card: (props) => (
    <Svg {...props}>
      <rect x="3" y="6" width="18" height="12" rx="2" />
      <path d="M3 10h18" />
    </Svg>
  ),
  car: (props) => (
    <Svg {...props}>
      <path d="M5 15l1.5-5A2 2 0 0 1 8.5 8.5h7A2 2 0 0 1 17.5 10L19 15" />
      <rect x="4" y="15" width="16" height="3.5" rx="1.5" />
      <circle cx="8" cy="18.5" r="1.4" />
      <circle cx="16" cy="18.5" r="1.4" />
    </Svg>
  ),
  bowl: (props) => (
    <Svg {...props}>
      <path d="M4 11a8 8 0 0 0 16 0H4Z" />
      <path d="M9 7c0-1.5 1.5-1.5 1.5-3M14 7c0-1.5 1.5-1.5 1.5-3" />
    </Svg>
  ),
  sim: (props) => (
    <Svg {...props}>
      <path d="M7 3h7l4 4v14H7V3Z" />
      <rect x="10" y="12" width="5" height="5" rx="1" />
    </Svg>
  ),
  coin: (props) => (
    <Svg {...props}>
      <circle cx="12" cy="12" r="7.5" />
      <path d="M12 8.5v7M9.5 10.5h5" />
    </Svg>
  ),
  eye: (props) => (
    <Svg {...props}>
      <path d="M3 12s3.5-6 9-6 9 6 9 6-3.5 6-9 6-9-6-9-6Z" />
      <circle cx="12" cy="12" r="2.5" />
    </Svg>
  ),
  pass: (props) => (
    <Svg {...props}>
      <rect x="5" y="3.5" width="14" height="17" rx="2" />
      <circle cx="12" cy="10" r="3" />
      <path d="M9 16.5h6" />
    </Svg>
  ),
};

export function Icon({ name, className }: { name: IconName; className?: string }) {
  const Component = ICONS[name];
  return <Component className={className} />;
}
