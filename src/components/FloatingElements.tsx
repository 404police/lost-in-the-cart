import { Package, ShoppingCart, Percent } from "lucide-react";

const FloatingElements = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Floating Package 1 */}
      <div className="absolute top-20 left-[10%] animate-float" style={{ animationDelay: "0s" }}>
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-secondary to-card flex items-center justify-center shadow-xl">
          <Package className="w-8 h-8 text-primary" />
        </div>
      </div>

      {/* Floating Cart */}
      <div className="absolute top-32 right-[15%] animate-bounce-slow" style={{ animationDelay: "0.5s" }}>
        <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-accent/20 to-card flex items-center justify-center shadow-xl">
          <ShoppingCart className="w-10 h-10 text-accent" />
        </div>
      </div>

      {/* Discount Sticker */}
      <div className="absolute bottom-32 left-[20%] animate-spin-slow">
        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-accent to-primary flex items-center justify-center shadow-lg text-white font-bold">
          <Percent className="w-8 h-8" />
        </div>
      </div>

      {/* Floating Package 2 */}
      <div className="absolute bottom-40 right-[25%] animate-float" style={{ animationDelay: "1s" }}>
        <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-card flex items-center justify-center shadow-lg">
          <Package className="w-7 h-7 text-primary" />
        </div>
      </div>

      {/* Small Cart */}
      <div className="absolute top-[60%] left-[8%] animate-bounce-slow" style={{ animationDelay: "1.5s" }}>
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-secondary to-card flex items-center justify-center shadow-md">
          <ShoppingCart className="w-6 h-6 text-primary" />
        </div>
      </div>

      {/* Rising Bubbles */}
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className="absolute bottom-0 animate-bubble-rise"
          style={{
            left: `${15 + i * 15}%`,
            animationDelay: `${i * 2}s`,
            animationDuration: `${12 + i * 2}s`,
          }}
        >
          <div
            className="w-24 h-24 rounded-full bg-gradient-to-br from-primary/10 to-accent/10 backdrop-blur-sm"
            style={{ filter: "blur(1px)" }}
          />
        </div>
      ))}
    </div>
  );
};

export default FloatingElements;
