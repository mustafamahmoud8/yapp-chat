export default function EmptyChatState() {
  return (
    <div
      className="flex-1 flex flex-col items-center justify-center gap-4 animate-fade-in"
      style={{ background: "var(--bg-chat)" }}
    >
      {/* Icon */}
      <div
        className="w-24 h-24 rounded-full flex items-center justify-center"
        style={{
          background: "var(--bg-sidebar)",
          boxShadow: "0 0 0 8px rgba(0,168,132,0.07)",
        }}
      >
        <svg
          width="44"
          height="44"
          viewBox="0 0 44 44"
          fill="none"
          style={{ color: "var(--accent)" }}
        >
          <path
            d="M22 5C13.163 5 6 12.163 6 21c0 3.422 1.015 6.61 2.76 9.272L6 38l8.09-2.682A15.9 15.9 0 0022 37c8.837 0 16-7.163 16-16S30.837 5 22 5z"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
          <circle cx="15" cy="21" r="1.5" fill="currentColor" />
          <circle cx="22" cy="21" r="1.5" fill="currentColor" />
          <circle cx="29" cy="21" r="1.5" fill="currentColor" />
        </svg>
      </div>

      {/* Text */}
      <div className="text-center px-6">
        <p
          className="font-bold text-xl mb-2"
          style={{ color: "var(--text-primary)" }}
        >
          Welcome to Yapp
        </p>
        <p
          className="text-sm leading-relaxed max-w-xs"
          style={{ color: "var(--text-secondary)" }}
        >
          Select a conversation from the sidebar, or search for a user to start
          a new encrypted chat.
        </p>
      </div>

      {/* E2EE badge */}
      <div
        className="flex items-center gap-2 rounded-full px-4 py-2 text-xs font-medium mt-1"
        style={{
          background: "rgba(0,168,132,0.08)",
          color: "var(--accent)",
          border: "1px solid rgba(0,168,132,0.15)",
        }}
      >
        <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
          <rect
            x="1.5"
            y="5.5"
            width="10"
            height="6"
            rx="1.2"
            stroke="currentColor"
            strokeWidth="1.2"
          />
          <path
            d="M4 5.5V4a2.5 2.5 0 015 0v1.5"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeLinecap="round"
          />
        </svg>
        End-to-end encrypted
      </div>
    </div>
  );
}
