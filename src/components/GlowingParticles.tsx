const GlowingParticles = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Floating Glowing Particles */}
      {[...Array(20)].map((_, i) => (
        <div
          key={`particle-${i}`}
          className="absolute rounded-full animate-bubble-rise"
          style={{
            left: `${Math.random() * 100}%`,
            width: `${4 + Math.random() * 8}px`,
            height: `${4 + Math.random() * 8}px`,
            background: `radial-gradient(circle, ${
              i % 2 === 0 ? 'hsl(268 100% 50% / 0.6)' : 'hsl(316 100% 50% / 0.6)'
            }, transparent)`,
            animationDelay: `${Math.random() * 15}s`,
            animationDuration: `${10 + Math.random() * 10}s`,
            filter: 'blur(2px)',
          }}
        />
      ))}

      {/* Larger Bubbles */}
      {[...Array(8)].map((_, i) => (
        <div
          key={`bubble-${i}`}
          className="absolute rounded-full animate-bubble-rise"
          style={{
            left: `${10 + i * 12}%`,
            width: `${60 + Math.random() * 40}px`,
            height: `${60 + Math.random() * 40}px`,
            background: `radial-gradient(circle at 30% 30%, hsl(270 60% 90% / 0.1), hsl(268 100% 50% / 0.05))`,
            animationDelay: `${i * 2}s`,
            animationDuration: `${15 + i * 2}s`,
            border: '1px solid hsl(268 100% 50% / 0.1)',
            backdropFilter: 'blur(2px)',
          }}
        />
      ))}

      {/* Shopping Icons Floating */}
      <div className="absolute top-[20%] left-[5%] animate-float" style={{ animationDelay: "0s" }}>
        <div className="text-4xl opacity-30">🛒</div>
      </div>
      <div className="absolute top-[60%] right-[10%] animate-float" style={{ animationDelay: "1s" }}>
        <div className="text-3xl opacity-20">🎁</div>
      </div>
      <div className="absolute top-[40%] left-[15%] animate-bounce-slow" style={{ animationDelay: "0.5s" }}>
        <div className="text-3xl opacity-25">📦</div>
      </div>
      <div className="absolute bottom-[30%] right-[20%] animate-float" style={{ animationDelay: "2s" }}>
        <div className="text-4xl opacity-20">🛍️</div>
      </div>
    </div>
  );
};

export default GlowingParticles;
