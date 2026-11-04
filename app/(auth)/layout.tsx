export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <main
      className="min-h-dvh w-full flex items-center justify-center px-4 py-8"
      style={{ background: "var(--bg-app)" }}
    >
      {/* Subtle radial glow */}
      <div
        className="pointer-events-none fixed inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% -10%, rgba(0,168,132,0.08) 0%, transparent 70%)",
        }}
      />
      <div className="auth-card w-full max-w-sm relative">{children}</div>
    </main>
  );
}
