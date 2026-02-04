export default function IntroVideo({ onFinish }) {
  return (
    <div
      className="fixed inset-0 z-[9999] bg-black overflow-hidden"
      style={{ width: "100vw", height: "100vh" }}
    >
      <video
        src="/videos/lens-intro.mp4"
        autoPlay
        muted
        playsInline
        onEnded={onFinish}
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          width: "100vw",
          height: "100vh",
          transform: "translate(-50%, -50%)",
          objectFit: "cover",
        }}
      />

      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(circle, rgba(212,175,55,0.18), rgba(0,0,0,0.85))",
        }}
      />
    </div>
  );
}
