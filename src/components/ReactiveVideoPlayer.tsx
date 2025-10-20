import { useState } from "react";
import confusedRobot from "@/assets/confused-robot.jpg";

const ReactiveVideoPlayer = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative w-full max-w-3xl mx-auto"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Reactive Particle Trails */}
      <div className="absolute -inset-12 overflow-visible">
        {[...Array(16)].map((_, i) => (
          <div
            key={`trail-${i}`}
            className={`absolute w-2 h-2 rounded-full transition-all duration-500 ${
              isHovered ? "opacity-100 scale-100" : "opacity-0 scale-0"
            }`}
            style={{
              left: `${(i % 4) * 33}%`,
              top: `${Math.floor(i / 4) * 33}%`,
              background:
                i % 2 === 0 ? "hsl(268 100% 50%)" : "hsl(316 100% 50%)",
              boxShadow: `0 0 20px ${
                i % 2 === 0 ? "hsl(268 100% 50%)" : "hsl(316 100% 50%)"
              }`,
              transitionDelay: `${i * 0.03}s`,
              filter: "blur(1px)",
            }}
          />
        ))}
      </div>

      {/* Video Container */}
      <div
        className="relative rounded-3xl overflow-hidden transition-all duration-700"
        style={{
          boxShadow: isHovered
            ? "0 0 80px hsl(268 100% 50% / 0.8), 0 0 120px hsl(316 100% 50% / 0.6), inset 0 0 60px hsl(268 100% 50% / 0.2)"
            : "0 0 50px hsl(268 100% 50% / 0.4), 0 0 80px hsl(316 100% 50% / 0.3)",
          transform: isHovered ? "scale(1.02)" : "scale(1)",
        }}
      >
        {/* Border Glow */}
        <div
          className="absolute inset-0 rounded-3xl border-4 transition-all duration-700 pointer-events-none z-10"
          style={{
            borderColor: isHovered
              ? "hsl(316 100% 50%)"
              : "hsl(268 100% 50% / 0.6)",
            boxShadow: isHovered
              ? "inset 0 0 80px hsl(316 100% 50% / 0.4), 0 0 40px hsl(316 100% 50%)"
              : "inset 0 0 40px hsl(268 100% 50% / 0.2)",
          }}
        />

        {/* Video Content */}
        <div className="aspect-video relative bg-gradient-to-br from-primary/20 to-accent/20">
          <img
            src={confusedRobot}
            alt="Comedy scene: confused delivery robot searching everywhere"
            className="w-full h-full object-cover"
          />

          {/* Scanning Lines */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div
              className="absolute w-full h-[3px] bg-gradient-to-r from-transparent via-accent to-transparent opacity-70"
              style={{
                animation: "scanning 4s linear infinite",
              }}
            />
            <div
              className="absolute w-full h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent opacity-50"
              style={{
                animation: "scanning 5s linear infinite reverse",
                animationDelay: "1s",
              }}
            />
          </div>

          {/* Light Overlay */}
          <div
            className={`absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-accent/20 transition-opacity duration-700 ${
              isHovered ? "opacity-60" : "opacity-30"
            }`}
          />

          {/* Corner Lights */}
          {["top-left", "top-right", "bottom-left", "bottom-right"].map(
            (corner, i) => (
              <div
                key={corner}
                className={`absolute w-4 h-4 ${
                  corner.includes("top") ? "top-4" : "bottom-4"
                } ${
                  corner.includes("left") ? "left-4" : "right-4"
                } rounded-full transition-all duration-500`}
                style={{
                  background:
                    i % 2 === 0 ? "hsl(268 100% 50%)" : "hsl(316 100% 50%)",
                  boxShadow: isHovered
                    ? `0 0 20px ${
                        i % 2 === 0
                          ? "hsl(268 100% 50%)"
                          : "hsl(316 100% 50%)"
                      }`
                    : `0 0 10px ${
                        i % 2 === 0
                          ? "hsl(268 100% 50%)"
                          : "hsl(316 100% 50%)"
                      }`,
                  animation: "pulse-intense 2s ease-in-out infinite",
                  animationDelay: `${i * 0.25}s`,
                }}
              />
            )
          )}
        </div>

        {/* Caption */}
        <div className="absolute bottom-6 left-6 right-6 bg-black/70 backdrop-blur-xl rounded-2xl px-6 py-3 border border-white/20 shadow-2xl">
          <p className="font-bold text-white text-base">
            🤖 "Has anyone seen page 404?"
          </p>
          <p className="text-sm text-white/90 mt-1">
            Our delivery bot is searching under every box... still no luck! 📦✨
          </p>
        </div>
      </div>

      {/* Reactive Halo */}
      <div
        className="absolute -inset-8 rounded-3xl blur-3xl -z-10 transition-all duration-700"
        style={{
          background: isHovered
            ? "radial-gradient(circle, hsl(268 100% 50% / 0.4), hsl(316 100% 50% / 0.3), transparent)"
            : "radial-gradient(circle, hsl(268 100% 50% / 0.2), hsl(316 100% 50% / 0.15), transparent)",
          transform: isHovered ? "scale(1.1)" : "scale(1)",
        }}
      />
    </div>
  );
};

export default ReactiveVideoPlayer;
