import { ShoppingBag } from "lucide-react";

const NotFoundHeader = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-primary via-[hsl(270,70%,65%)] to-primary backdrop-blur-md border-b border-white/20 shadow-lg">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center shadow-xl">
            <ShoppingBag className="w-7 h-7 text-white" />
          </div>
          <span className="text-2xl font-bold text-white drop-shadow-lg">
            Uzum Market
          </span>
        </div>
        <nav className="hidden md:flex items-center gap-8">
          <a href="/" className="text-white/90 hover:text-white transition-colors font-medium">
            Home
          </a>
          <a href="/" className="text-white/90 hover:text-white transition-colors font-medium">
            Categories
          </a>
          <a href="/" className="text-white/90 hover:text-white transition-colors font-medium">
            Deals
          </a>
          <a href="/" className="text-white/90 hover:text-white transition-colors font-medium">
            Cart
          </a>
        </nav>
      </div>
    </header>
  );
};

export default NotFoundHeader;
