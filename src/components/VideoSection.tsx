import { useState } from "react";
import confusedRobot from "@/assets/confused-robot.jpg";

const VideoSection = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative w-full max-w-4xl mx-auto group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`relative rounded-3xl overflow-hidden transition-all duration-500 ${
          isHovered ? "shadow-2xl" : "shadow-xl"
        }`}
        style={{
          boxShadow: isHovered
            ? "0 0 60px hsl(var(--primary) / 0.5), 0 0 100px hsl(var(--accent) / 0.3)"
            : "0 10px 40px hsl(var(--primary) / 0.2)",
        }}
      >
        {/* Video/Image Container */}
        <div className="aspect-video bg-gradient-to-br from-primary/10 to-accent/10 relative">
          <img
            src={confusedRobot}
            alt="Confused delivery robot in space with floating packages"
            className="w-full h-full object-cover"
          />
          
          {/* Video Play Overlay */}
          <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="w-20 h-20 rounded-full bg-white/30 backdrop-blur-sm flex items-center justify-center">
              <div className="w-0 h-0 border-l-[20px] border-l-white border-t-[12px] border-t-transparent border-b-[12px] border-b-transparent ml-1" />
            </div>
          </div>

          {/* Glowing Border Effect */}
          <div
            className={`absolute inset-0 rounded-3xl border-2 transition-all duration-500 pointer-events-none ${
              isHovered ? "border-accent opacity-100" : "border-primary/50 opacity-0"
            }`}
            style={{
              boxShadow: isHovered ? "inset 0 0 40px hsl(var(--accent) / 0.4)" : "none",
            }}
          />
        </div>

        {/* Video Caption */}
        <div className="absolute bottom-4 left-4 right-4 bg-black/50 backdrop-blur-md rounded-xl px-4 py-2 text-white text-sm">
          <p className="font-medium">🤖 Lost in Transit: The Package Mystery</p>
          <p className="text-xs text-white/80 mt-1">Our delivery bot is having an existential crisis in space...</p>
        </div>
      </div>

      {/* Reactive Lighting Effect */}
      <div
        className={`absolute -inset-4 bg-gradient-to-r from-primary/20 to-accent/20 rounded-3xl blur-2xl -z-10 transition-opacity duration-500 ${
          isHovered ? "opacity-100" : "opacity-0"
        }`}
      />
    </div>
  );
};

export default VideoSection;
