import { Package, ShoppingCart } from "lucide-react";

const Animated404 = () => {
  return (
    <div className="relative flex items-center justify-center gap-4 md:gap-8">
      {/* First "4" - Dancing Mascot */}
      <div className="relative animate-dance">
        <div className="text-[100px] md:text-[180px] font-black text-primary leading-none select-none">
          4
        </div>
        <div className="absolute -top-4 -right-4 bg-accent text-white px-3 py-1 rounded-full text-xs md:text-sm font-bold animate-bounce-slow shadow-lg">
          Lost Package! 📦
        </div>
      </div>

      {/* "0" - Spinning Cart Wheel */}
      <div className="relative">
        <div className="text-[100px] md:text-[180px] font-black text-primary/20 leading-none select-none">
          0
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-16 h-16 md:w-28 md:h-28 rounded-full border-8 border-primary border-t-transparent animate-spin-cart shadow-2xl" />
          <ShoppingCart className="absolute w-8 h-8 md:w-12 md:h-12 text-primary animate-pulse-glow" />
        </div>
      </div>

      {/* Second "4" - Another Dancing Character */}
      <div className="relative animate-dance" style={{ animationDelay: "0.3s" }}>
        <div className="text-[100px] md:text-[180px] font-black text-primary leading-none select-none">
          4
        </div>
        <div className="absolute -bottom-4 -left-4 animate-spin-slow">
          <Package className="w-8 h-8 md:w-12 md:h-12 text-accent drop-shadow-lg" />
        </div>
      </div>

      {/* Floating Boxes Around */}
      <div className="absolute top-0 left-[10%] animate-float-box" style={{ animationDelay: "0s" }}>
        <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-secondary to-primary/20 rounded-lg shadow-xl backdrop-blur-sm border border-primary/20 flex items-center justify-center">
          <Package className="w-6 h-6 md:w-8 md:h-8 text-primary" />
        </div>
      </div>

      <div className="absolute top-20 right-[15%] animate-float-box" style={{ animationDelay: "1s" }}>
        <div className="w-10 h-10 md:w-14 md:h-14 bg-gradient-to-br from-accent/20 to-primary/20 rounded-lg shadow-lg backdrop-blur-sm border border-accent/30 flex items-center justify-center">
          <Package className="w-5 h-5 md:w-7 md:h-7 text-accent" />
        </div>
      </div>

      <div className="absolute bottom-10 left-[20%] animate-float-box" style={{ animationDelay: "2s" }}>
        <div className="w-8 h-8 md:w-12 md:h-12 bg-gradient-to-br from-primary/30 to-secondary rounded-lg shadow-md backdrop-blur-sm border border-primary/20 flex items-center justify-center">
          <Package className="w-4 h-4 md:w-6 md:h-6 text-primary" />
        </div>
      </div>

      <div className="absolute bottom-16 right-[25%] animate-float-box" style={{ animationDelay: "0.5s" }}>
        <div className="w-14 h-14 md:w-18 md:h-18 bg-gradient-to-br from-secondary to-accent/20 rounded-lg shadow-xl backdrop-blur-sm border border-accent/20 flex items-center justify-center">
          <Package className="w-7 h-7 md:w-9 md:h-9 text-accent" />
        </div>
      </div>

      {/* Glow Effect */}
      <div className="absolute -inset-8 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 blur-3xl -z-10 animate-pulse-glow" />
    </div>
  );
};

export default Animated404;
