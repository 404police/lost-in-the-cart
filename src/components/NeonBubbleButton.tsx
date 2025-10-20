import { Home } from "lucide-react";

const NeonBubbleButton = () => {
  return (
    <div className="relative inline-block">
      <button className="group relative px-10 py-5 text-xl font-bold text-white rounded-full bg-gradient-to-r from-primary to-accent overflow-hidden shadow-2xl hover:scale-110 transition-all duration-500 animate-neon-pulse">
        {/* Button Content */}
        <span className="relative z-10 flex items-center gap-3">
          <Home className="w-7 h-7" />
          Go Back Home
        </span>

        {/* Floating Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Shine Effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

        {/* Inner Glow */}
        <div className="absolute inset-0 rounded-full border-4 border-white/20 group-hover:border-white/40 transition-all duration-500" />
      </button>

      {/* Orbiting Sparkles */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={`sparkle-${i}`}
            className="absolute animate-orbit"
            style={{
              animationDelay: `${i * 0.5}s`,
              animationDuration: "6s",
            }}
          >
            <div className="w-3 h-3 rounded-full bg-white shadow-lg" style={{
              boxShadow: "0 0 15px hsl(268 100% 50%), 0 0 25px hsl(316 100% 50%)",
            }} />
          </div>
        ))}
      </div>

      {/* Bottom Glow */}
      <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-[120%] h-8 bg-gradient-to-r from-primary via-accent to-primary blur-2xl opacity-60 animate-pulse-glow" />
    </div>
  );
};

export default NeonBubbleButton;
