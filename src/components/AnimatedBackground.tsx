const AnimatedBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Animated Wave Layers */}
      <div className="absolute inset-0">
        <svg className="absolute w-[200%] h-[200%] animate-wave-bg" viewBox="0 0 1200 600" preserveAspectRatio="none">
          <defs>
            <linearGradient id="wave-gradient-1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: "hsl(268, 100%, 50%)", stopOpacity: 0.1 }} />
              <stop offset="100%" style={{ stopColor: "hsl(316, 100%, 50%)", stopOpacity: 0.05 }} />
            </linearGradient>
            <linearGradient id="wave-gradient-2" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" style={{ stopColor: "hsl(270, 60%, 70%)", stopOpacity: 0.08 }} />
              <stop offset="100%" style={{ stopColor: "hsl(268, 100%, 50%)", stopOpacity: 0.03 }} />
            </linearGradient>
          </defs>
          <path
            d="M0,300 Q300,200 600,300 T1200,300 L1200,600 L0,600 Z"
            fill="url(#wave-gradient-1)"
          />
          <path
            d="M0,400 Q300,350 600,400 T1200,400 L1200,600 L0,600 Z"
            fill="url(#wave-gradient-2)"
            style={{ animation: "wave-bg 25s ease-in-out infinite reverse" }}
          />
        </svg>
      </div>

      {/* Floating Neon Shapes */}
      {[...Array(12)].map((_, i) => (
        <div
          key={`neon-shape-${i}`}
          className="absolute rounded-full animate-bubble-rise"
          style={{
            left: `${5 + i * 8}%`,
            width: `${40 + Math.random() * 60}px`,
            height: `${40 + Math.random() * 60}px`,
            background: `radial-gradient(circle, ${
              i % 3 === 0
                ? "hsl(268 100% 50% / 0.15)"
                : i % 3 === 1
                ? "hsl(316 100% 50% / 0.12)"
                : "hsl(270 70% 70% / 0.1)"
            }, transparent 70%)`,
            animationDelay: `${i * 1.5}s`,
            animationDuration: `${15 + i * 2}s`,
            filter: "blur(3px)",
            boxShadow:
              i % 2 === 0
                ? "0 0 30px hsl(268 100% 50% / 0.3)"
                : "0 0 30px hsl(316 100% 50% / 0.3)",
          }}
        />
      ))}

      {/* Glowing Particles */}
      {[...Array(30)].map((_, i) => (
        <div
          key={`particle-${i}`}
          className="absolute rounded-full animate-bubble-rise"
          style={{
            left: `${Math.random() * 100}%`,
            width: `${3 + Math.random() * 6}px`,
            height: `${3 + Math.random() * 6}px`,
            background: i % 2 === 0 ? "hsl(268 100% 50%)" : "hsl(316 100% 50%)",
            animationDelay: `${Math.random() * 20}s`,
            animationDuration: `${8 + Math.random() * 12}s`,
            filter: "blur(1px)",
            boxShadow: `0 0 10px ${
              i % 2 === 0 ? "hsl(268 100% 50%)" : "hsl(316 100% 50%)"
            }`,
          }}
        />
      ))}

      {/* Light Reflections */}
      <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/5 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-primary/10 to-transparent pointer-events-none blur-3xl" />
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-accent/10 to-transparent pointer-events-none blur-3xl" />
    </div>
  );
};

export default AnimatedBackground;
