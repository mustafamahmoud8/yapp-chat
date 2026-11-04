interface AvatarProps {
  name: string;
  size?: number;
  online?: boolean;
}

export default function Avatar({ name, size = 40, online }: AvatarProps) {
  const safeName = name.trim() || "User";
  const initials =
    safeName
      .split(" ")
      .map((w) => w[0])
      .join("")
      .slice(0, 2)
      .toUpperCase() || "U";

  const colors = [
    "#00a884",
    "#1f6fad",
    "#9c27b0",
    "#e91e63",
    "#ff5722",
    "#607d8b",
  ];
  const color = colors[safeName.charCodeAt(0) % colors.length];

  return (
    <div className="relative shrink-0" style={{ width: size, height: size }}>
      <div
        className="rounded-full flex items-center justify-center text-white font-bold select-none"
        style={{
          width: size,
          height: size,
          background: color,
          fontSize: size * 0.36,
          letterSpacing: "0.02em",
        }}
      >
        {initials}
      </div>
      {online !== undefined && (
        <span
          className="absolute bottom-0 right-0 rounded-full border-2"
          style={{
            width: size * 0.28,
            height: size * 0.28,
            background: online ? "#00a884" : "transparent",
            borderColor: online ? "var(--bg-sidebar)" : "transparent",
            transition: "background 0.3s ease",
          }}
        />
      )}
    </div>
  );
}
