import { useState, useRef, useEffect } from "react";
import confusedRobot from "@/assets/confused-robot.jpg";

const VideoSection = () => {
  const [isHovered, setIsHovered] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        // Autoplay might be blocked, that's okay
      });
    }
  }, []);

  return (
    <div
      className="relative w-full max-w-4xl mx-auto group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className="relative rounded-3xl overflow-hidden transition-all duration-500"
        style={{
          boxShadow: isHovered
            ? "0 0 60px hsl(268 100% 50% / 0.6), 0 0 100px hsl(316 100% 50% / 0.4)"
            : "0 0 40px hsl(268 100% 50% / 0.3), 0 10px 40px hsl(268 100% 50% / 0.2)",
        }}
      >
        {/* Video Container with Glowing Border */}
        <div className="aspect-video relative border-4 border-primary/50 rounded-3xl overflow-hidden">
          {/* Using Image as Video Placeholder (animated with CSS) */}
          <div className="w-full h-full relative">
            <img
              src={confusedRobot}
              alt="Confused delivery robot lost in space with floating packages"
              className="w-full h-full object-cover animate-pulse-glow"
            />
            
            {/* Animated Overlay Effects */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            
            {/* Scanning Line Effect */}
            <div className="absolute inset-0 overflow-hidden">
              <div 
                className="absolute w-full h-[2px] bg-gradient-to-r from-transparent via-accent to-transparent"
                style={{
                  animation: "scanning 3s linear infinite",
                }}
              />
            </div>
          </div>

          {/* Glowing Reactive Border */}
          <div
            className="absolute inset-0 rounded-3xl border-4 transition-all duration-500 pointer-events-none"
            style={{
              borderColor: isHovered ? "hsl(316 100% 50%)" : "hsl(268 100% 50% / 0.5)",
              boxShadow: isHovered 
                ? "inset 0 0 60px hsl(316 100% 50% / 0.3)" 
                : "inset 0 0 30px hsl(268 100% 50% / 0.2)",
            }}
          />
        </div>

        {/* Video Caption with Playful Text */}
        <div className="absolute bottom-6 left-6 right-6 bg-black/60 backdrop-blur-lg rounded-2xl px-6 py-3 text-white shadow-2xl border border-white/10">
          <p className="font-bold text-base">🤖 "Where did my delivery go?!"</p>
          <p className="text-sm text-white/90 mt-1">Our robot is having an existential crisis somewhere between Mars and the shopping cart...</p>
        </div>
      </div>

      {/* Reactive Lighting Halo */}
      <div
        className="absolute -inset-6 rounded-3xl blur-3xl -z-10 transition-opacity duration-500"
        style={{
          background: isHovered
            ? "linear-gradient(135deg, hsl(268 100% 50% / 0.3), hsl(316 100% 50% / 0.3))"
            : "linear-gradient(135deg, hsl(268 100% 50% / 0.2), hsl(316 100% 50% / 0.1))",
          opacity: isHovered ? 1 : 0.7,
        }}
      />
    </div>
  );
};

export default VideoSection;

// Add this to index.css for the scanning animation
/* 
@keyframes scanning {
  0% { top: 0%; }
  100% { top: 100%; }
}
*/
