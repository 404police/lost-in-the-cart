import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import AnimatedBackground from "@/components/AnimatedBackground";
import JellyHeader from "@/components/JellyHeader";
import Futuristic404 from "@/components/Futuristic404";
import ReactiveVideoPlayer from "@/components/ReactiveVideoPlayer";
import NeonBubbleButton from "@/components/NeonBubbleButton";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-gradient-to-br from-[#1a0033] via-[#2d0066] to-[#1a0033]">
      {/* Animated Living Background */}
      <AnimatedBackground />

      {/* Jelly Wave Header */}
      <JellyHeader />

      {/* Main Content - Perfectly Centered */}
      <main className="relative z-10 w-full h-full flex flex-col items-center justify-center px-6 gap-8 md:gap-12">
        {/* Futuristic 404 Characters */}
        <div className="animate-in fade-in duration-1000">
          <Futuristic404 />
        </div>

        {/* Comedy Text with Hover Effect */}
        <div className="text-center space-y-3 max-w-3xl animate-in fade-in duration-1000 delay-200">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white drop-shadow-2xl leading-tight">
            Oops! Looks like your deal took a detour 🚚💨
          </h2>
          <p className="text-lg md:text-xl text-white/80 drop-shadow-lg">
            While our couriers chase it down, enjoy this laugh!
          </p>
        </div>

        {/* Reactive Video Player - Center Focus */}
        <div className="w-full max-w-3xl animate-in fade-in duration-1000 delay-400">
          <ReactiveVideoPlayer />
        </div>

        {/* Neon Bubble Button */}
        <div className="animate-in fade-in duration-1000 delay-600">
          <NeonBubbleButton />
        </div>

        {/* Mini Footer Note */}
        <div className="text-center text-sm text-white/50 mt-4 animate-in fade-in duration-1000 delay-800">
          <p>✨ Error pages have never been this fun</p>
        </div>
      </main>

      {/* Corner Light Effects */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-primary/20 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-accent/20 to-transparent rounded-full blur-3xl pointer-events-none" />
    </div>
  );
};

export default NotFound;

