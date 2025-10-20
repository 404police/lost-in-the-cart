import { ShoppingCart, AlertCircle, Package } from "lucide-react";

const Futuristic404 = () => {
  return (
    <div className="relative flex items-center justify-center gap-6 md:gap-10 perspective-1000">
      {/* Orbiting Mini Elements */}
      <div className="absolute inset-0 flex items-center justify-center">
        {[...Array(8)].map((_, i) => (
          <div
            key={`orbit-${i}`}
            className="absolute animate-orbit"
            style={{
              animationDelay: `${i * 1.25}s`,
              animationDuration: `${8 + i}s`,
            }}
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary/30 to-accent/30 backdrop-blur-sm border border-white/20 flex items-center justify-center">
              {i % 3 === 0 ? (
                <Package className="w-4 h-4 text-white" />
              ) : i % 3 === 1 ? (
                <span className="text-sm">🚁</span>
              ) : (
                <span className="text-sm">📦</span>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* First "4" - Falling Apart Cart */}
      <div className="relative z-10">
        <div className="text-[120px] md:text-[180px] font-black text-white leading-none select-none drop-shadow-2xl animate-cart-fall">
          4
        </div>
        <div className="absolute inset-0 text-[120px] md:text-[180px] font-black leading-none select-none blur-sm opacity-50 bg-gradient-to-br from-primary to-accent bg-clip-text text-transparent">
          4
        </div>
        <ShoppingCart className="absolute -bottom-4 -right-4 w-12 h-12 md:w-16 md:h-16 text-accent animate-spin-slow drop-shadow-lg" />
      </div>

      {/* "0" - Morphing Robot Face */}
      <div className="relative z-10">
        <div className="w-[120px] h-[120px] md:w-[180px] md:h-[180px] rounded-full bg-gradient-to-br from-primary/20 to-accent/20 backdrop-blur-md border-8 border-white/40 flex items-center justify-center animate-morph-bot shadow-2xl">
          <div className="text-6xl md:text-8xl animate-pulse-intense">🤖</div>
        </div>
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary to-accent opacity-20 blur-2xl animate-pulse-glow" />
        
        {/* Blinking Eyes Effect */}
        <div className="absolute top-[35%] left-[30%] w-3 h-3 bg-white rounded-full animate-pulse" />
        <div className="absolute top-[35%] right-[30%] w-3 h-3 bg-white rounded-full animate-pulse" style={{ animationDelay: "0.1s" }} />
      </div>

      {/* Second "4" - Holding Sign */}
      <div className="relative z-10">
        <div className="text-[120px] md:text-[180px] font-black text-white leading-none select-none drop-shadow-2xl animate-dance">
          4
        </div>
        <div className="absolute inset-0 text-[120px] md:text-[180px] font-black leading-none select-none blur-sm opacity-50 bg-gradient-to-br from-accent to-primary bg-clip-text text-transparent">
          4
        </div>
        <div className="absolute -top-8 -right-8 bg-accent text-white px-4 py-2 rounded-2xl text-sm md:text-base font-bold animate-sign-wave shadow-2xl border-2 border-white/30">
          Lost Discount! 🎫
        </div>
        <AlertCircle className="absolute -bottom-2 -left-2 w-8 h-8 md:w-10 md:h-10 text-primary animate-bounce-slow drop-shadow-lg" />
      </div>

      {/* Massive Glow Effect */}
      <div className="absolute -inset-16 bg-gradient-to-r from-primary/30 via-accent/30 to-primary/30 blur-3xl -z-10 animate-pulse-glow" />
    </div>
  );
};

export default Futuristic404;
