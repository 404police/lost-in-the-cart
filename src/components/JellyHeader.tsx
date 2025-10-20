import { ShoppingBag } from "lucide-react";

const JellyHeader = () => {
  return (
    <header className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-5xl">
      <div className="group bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl px-6 py-4 shadow-2xl hover:animate-jelly-wave transition-all duration-300">
        <div className="flex items-center justify-between">
          {/* Logo Section */}
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg animate-pulse-glow">
              <ShoppingBag className="w-7 h-7 text-white" />
            </div>
            <span className="text-2xl font-bold text-white drop-shadow-lg">
              Uzum Market
            </span>
          </div>

          {/* Playful Icons */}
          <div className="hidden md:flex items-center gap-4">
            <div className="text-2xl animate-spin-slow">🍎</div>
            <div className="text-2xl animate-bounce-slow" style={{ animationDelay: "0.2s" }}>
              👀
            </div>
            <div className="text-2xl animate-float" style={{ animationDelay: "0.4s" }}>
              🛒
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default JellyHeader;
